import React from 'react'
import { Button } from '@mui/material'

const typeFilter = [
    {
        name: "Rent",
        value: "RENT"
    }, 
    {
        name: "Sell",
        value: "SELL"
    }
]

const Filters = ({
    filters,
    setFilters,
}) => {
  return (
    <div className='filters'>
        <div className="filters-type-list">
            {   typeFilter.map((type, index) => {
                    return  (<Button 
                                key={index}
                                variant={type.value == filters.type ? 'contained' : 'outlined'}
                                className="filter-item" 
                                onClick={() => setFilters({...filters, type: type.value})}>
                                    {type.name}                        
                            </Button>)
                })
            }
        </div>
    </div>
  )
}

export default Filters
