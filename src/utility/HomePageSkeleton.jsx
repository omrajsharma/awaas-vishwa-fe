import React from "react";
import { Skeleton } from "@mui/material";

const HomePageSkeleton = () => {

    return (

        <div className="item-card-container">
            <div className="item-card">
                <div className="item-card-imgs">
                    <Skeleton variant="rectangular" width={500} height={300} />
                </div>
                <div className="img-card-body">
                    <div className="img-card-price">
                        <Skeleton animation='wave' width={160} height={25} /></div>
                    <div className="img-card-title">
                        <Skeleton animation='wave' width={130} height={20} />
                    </div>
                    <div className="img-card-location">
                        <Skeleton animation='wave' width={100} height={15} />
                    </div>
                </div>
                <div className="img-card-footer">
                    <div><Skeleton animation='wave' width={70} height={10} /></div>
                    <div><Skeleton animation='wave' width={70} height={10} /></div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSkeleton;
