import React from "react";
import Filters from "../components/pages/HomePage/Filters";
import { itemDateFormatter } from "../utility/DateUtils";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { numberToCommaString } from "../utility/numberUtils";

const HomePage = () => {
  const [filters, setFilters] = React.useState({});
  const [itemList, setItemList] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const [noMoreItems, setNoMoreItems] = React.useState(false);

  const getFiltersQuery = () => {
    return Object.keys(filters).length > 0 ? '&' + (Object.keys(filters).map(key => `${key}=${filters[key]}`).join('&')) : '';
  }

  React.useEffect(() => {
    setPageNo(1);
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/items?page=1${getFiltersQuery()}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length > 0) {
          setItemList(data.data);
        } else {
          setNoMoreItems(true);
        }
      });
  }, [filters]);

  const getNewPage = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/items?page=${pageNo+1}${getFiltersQuery()}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        setItemList([...itemList, ...data.data]);
      } else {
        setNoMoreItems(true);
      }
    });
    setPageNo(pageNo+1);
  }

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="item-list">
        {itemList.length > 0 &&
          itemList.map((item, key) => <ItemCard key={item.id} {...item} />)}
      </div>
      <div className="next-page">
        {noMoreItems ? (
          <Button variant="contained" disabled className="btn-disabled">
            No More Items
          </Button>
        ) : (
          <Button variant="contained" onClick={getNewPage}>
            Load More
          </Button>
        )}
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
      <Link to={`/item/${id}`}>
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
            <div className="img-card-price">₹ {numberToCommaString(price)}</div>
            <div className="img-card-title">{title}</div>
            <div className="img-card-location">{location}</div>
          </div>
          <div className="img-card-footer">
            <div>{listType}</div>
            <div>{itemDateFormatter(createdAt)}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
