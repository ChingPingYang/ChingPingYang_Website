import React from "react";

const Fliter = (props) => {
    const { filters, changeCurrentFilter, resetIsIn } = props;
    return (
        <div className="filter_container">
            {
                filters.map((filter, index) => {
                    return(
                        <button key={index} className="filter_btn" 
                                onClick={() => {
                                        changeCurrentFilter(filter)
                                        resetIsIn()
                                        }
                                    }>
                            {filter}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Fliter;