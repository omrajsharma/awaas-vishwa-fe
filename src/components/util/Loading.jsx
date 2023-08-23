import React from 'react'
import LoadingGif from '../../assets/loading.gif'

const Loading = () => {
  return (
    <div className='loading'>
        <div className="loading-container">
            <img src={LoadingGif}/>
        </div>
    </div>
  )
}

export default Loading
