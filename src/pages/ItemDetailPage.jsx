import React, { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Loading from '../components/util/Loading';
import { UserContext } from '../context/UserContext';
import { itemDateFormatter } from '../utility/DateUtils';
import { Button } from '@mui/material';
import { numberToCommaString } from '../utility/numberUtils';
import alert from '../utility/alert';

const ItemDetailPage = () => {
    const {userInfo} = React.useContext(UserContext);
    const [redirectToLogin, setRedirectToLogin] = React.useState(false);
    const [disableInterestBtn, setDisableInterestBtn] = React.useState(false);
    const {itemId} = useParams();
    const [itemDetails, setItemDetails] = React.useState();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/items/${itemId}`, {
            credentials: 'include'
        })
        .then((response) => {
            if (response.status == 401) {
                setRedirectToLogin(true);
                return;
            }
            return response.json()
        })
        .then((data) => {
            if (data.data) {
                setItemDetails(data.data);
            }
        });
    }, [])

    const handleContact = () => {
        if(!userInfo) {
            setRedirectToLogin(true);
            alert('User not logged in. Please login to contact.', 'error')
            return;
        }

        // api request to send email to the author
        fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/items/lead`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemId: itemId
            }),
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.success) {
                alert(data.success, 'success')
                setDisableInterestBtn(true);
            }
            if (data.error) {
                alert(data.error, 'error')
                setDisableInterestBtn(true);
            }
        });
    }

    if (redirectToLogin) {
        return <Navigate to='/login' />
    }

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
                {   itemDetails?.edit ? 
                    (<>
                        <Link to={'/edit/' + itemId}>
                            <Button variant="contained">Edit</Button>
                        </Link>
                    </>)
                    : (<>
                        <div className="item-detail-author-name">{itemDetails.author.name}</div>
                        <div className="item-detail-author-contact">
                            <Button variant="contained" disabled={disableInterestBtn} onClick={handleContact}>{disableInterestBtn ? 'Interested' : 'Send Interest'}</Button>
                        </div>
                    </>)
                }
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
