import React from "react";
import "../../styles/pages.css";
const ColourList = ({ colours }) => {
    if (!colours.length) {
        return (
            <div className="noProducts">
                <h3>No colours at the moment</h3>
            </div>
        );
    }

    return (
        <div>
            <h3>colours</h3>
            {colours &&
                colours.map((colour) => (
                    <div key={colour._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                            {colour.name}
                        </h4>
                    </div>
                ))}
        </div>
    );
};

export default ColourList;
