import React from "react";
import { itemDateFormatter } from "../utility/DateUtils";
import { Button } from "@mui/material";
import alert from "../utility/alert";

const HomePage = () => {
  const [itemList, setItemList] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);

  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/items?page=${pageNo}`)
      .then((response) => response.json())
      .then((data) => {
        setItemList(data.data);
      });
  }, []);

  const getNewPage = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/items?page=${pageNo+1}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        setItemList([...itemList, ...data.data]);
      } else {
        alert('No More Items', 'error');
      }
    });
    setPageNo(pageNo+1);
  }

  return (
    <>
      <div className="item-list">
        {itemList.length > 0 &&
          itemList.map((item, key) => <ItemCard key={item.id} {...item} />)}
      </div>
      <div className="next-page">
        <Button variant="contained" onClick={getNewPage}>
          Load More
        </Button>
      </div>
    </>
  );
};

const ItemCard = ({
  id,
  title,
  imgList,
  listType,
  location,
  price,
  createdAt,
}) => {
  return (
    <div className="item-card-container">
      <div className="item-card">
        <div className="item-card-imgs">
          {
            // <img src={imgList[0]} alt="" />  // for single image
            imgList.length > 0 ? (
              imgList.map((img) => <img src={img} />)
            ) : (
              <div>NO Image</div>
            )
          }
        </div>
        <div className="img-card-body">
          <div className="img-card-price">₹ {price}</div>
          <div className="img-card-title">{title}</div>
          <div className="img-card-location">{location}</div>
        </div>
        <div className="img-card-footer">
          <div>{listType}</div>
          <div>{itemDateFormatter(createdAt)}</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
