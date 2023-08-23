import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/util/Loading';
import { itemDateFormatter } from '../utility/DateUtils';
import { Button } from '@mui/material';
import { numberToCommaString } from '../utility/numberUtils';

const ItemDetailPage = () => {
    const {itemId} = useParams();
    const [itemDetails, setItemDetails] = React.useState();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/items/${itemId}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.data) {
                setItemDetails(data.data);
            } else {

            }
        });
    }, [])

    if (!itemDetails) {
        return <Loading />
    }

  return (
    <div className='item-detail'>
        <div className="item-detail-imgs">
            {   itemDetails?.imgList?.map(imgUrl => <img src={imgUrl} />) }
        </div>
        <div className="item-detail-body">
            <div className="item-detail-basic">
                <div className="item-detail-price">₹ {numberToCommaString(itemDetails.price)}</div>
                <div className="item-detail-title">{itemDetails.title}</div>
                <div className="item-detail-row-space-between">
                    <p>{itemDetails.location}</p>
                    <p>{itemDateFormatter(itemDetails.updatedAt)}</p>
                </div>
            </div>
            <div className="item-detail-author">
                <div className="item-detail-author-name">{itemDetails.author.name}</div>
                <div className="item-detail-author-contact">
                    <Button variant="contained">Contact</Button>
                </div>
            </div>
            <div className="item-detail-description">
                {itemDetails.description.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ItemDetailPage
