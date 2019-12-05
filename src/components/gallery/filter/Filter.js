import React from "react";

const Fliter = (props) => {
    const { filters, currentFilter, changeCurrentFilter, resetIsIn } = props;
    return (
        <div className="filter_container">
            {
                filters.map((filter, index) => {
                    return(
                        <button key={index} className={`${currentFilter === filter? "filter_btn selected" : "filter_btn"}`}
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