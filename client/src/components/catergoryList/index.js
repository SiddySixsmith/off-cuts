import React from "react";
import "../../styles/pages.css";
const CatergoryList = ({ catergorys }) => {
    if (!catergorys.length) {
        return (
            <div className="noProducts">
                <h3>No catergorys at the moment</h3>
            </div>
        );
    }

    return (
        <div>
            <h3>Brands</h3>
            {catergorys &&
                catergorys.map((catergory) => (
                    <div key={catergory._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                            {catergory.name}
                        </h4>
                    </div>
                ))}
        </div>
    );
};

export default CatergoryList;
