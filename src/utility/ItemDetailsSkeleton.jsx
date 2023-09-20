import React from "react";
import { Skeleton } from "@mui/material";

const ItemDetailSkeleton = () => {
    return (
        <div className="item-detail-main">
            <div className="item-detail">
                <div className="item-detail-imgs">
                    <Skeleton variant="rectangular" animation='wave' width={600} height={500} />
                </div>
                <div className="item-detail-body">
                    <div className="item-detail-basic">
                        <div className="item-detail-price">
                            <Skeleton variant="text" animation='wave' width={150} height={40} />
                        </div>
                        <div className="item-detail-tittle">
                            <Skeleton variant="text" animation='wave' width={250} height={30} />
                        </div>
                        <div className="item-detail-row-space-between">
                            <Skeleton variant="text" animation='wave' width={100} height={25} />
                            <Skeleton variant="text" animation='wave' width={100} height={25} />
                        </div>
                    </div>
                    <div className="item-detail-author">
                        <div className="item-detail-author-name">
                            <Skeleton variant="text" animation='wave' width={150} height={40} />
                        </div>
                        <div className="item-detial-contact-button">
                            <Skeleton animation='wave' width={150} height={80} />
                        </div>
                    </div>
                    <div className="item-detail-description">
                        <Skeleton variant="text" width={270} height={20} />
                        <Skeleton variant="text" width={110} height={20} />
                        <Skeleton variant="text" width={240} height={20} />
                        <Skeleton variant="text" width={90} height={20} />
                        <Skeleton variant="text" width={190} height={20} />
                        <Skeleton variant="text" width={170} height={20} />
                        <Skeleton variant="text" width={180} height={20} />
                        <Skeleton variant="text" width={190} height={20} />
                        <Skeleton variant="text" width={160} height={20} />
                        <Skeleton variant="text" width={120} height={20} />
                        <Skeleton variant="text" width={90} height={20} />
                        <Skeleton variant="text" width={80} height={20} />
                        <Skeleton variant="text" width={160} height={20} />
                        <Skeleton variant="text" width={180} height={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailSkeleton;

