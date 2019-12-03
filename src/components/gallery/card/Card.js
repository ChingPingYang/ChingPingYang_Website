import React from "react";

const Card = (props) => {
    const { works, currentFilter, handleClickedCard, isIn } = props;

    const url_filter=(card)=>{
        if (card.UI_Image_cover) {
            return card.UI_Image_cover
        } else if (card.CIS_Image_cover) {
            return card.CIS_Image_cover
        } else if (card.video_cover) {
            return card.video_cover
        } else {
            return card.poster_url
        }
    }


    const filterCards = () => {
        switch(currentFilter) {
            case "All":
                    return (
                        works.map(work => {
                            return (
                                work.map((card, index) => {
                                    return (
                                        <div key={index} className={`${isIn? "card_singalCard_container animateIn" : "card_singalCard_container"}`}>
                                            <div 
                                                className="card_singalCard_img"
                                                onClick={()=> handleClickedCard(card)}
                                                style={{backgroundImage: `url(${url_filter(card)})`}}>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        })    
                    )
            case "UI Design": 
                    return (
                        works[0].map((card, index) => {
                            return (
                                <div key={index} className={`${isIn? "card_singalCard_container animateIn" : "card_singalCard_container"}`}>
                                    <div 
                                        className="card_singalCard_img"
                                        onClick={()=> handleClickedCard(card)}
                                        style={{backgroundImage: `url(${card.UI_Image_cover})`}}>
                                    </div>
                                </div>
                            )
                        })
                    )
            case "CIS": 
                    return (
                        works[1].map((card, index) => {
                            return (
                                <div key={index} className={`${isIn? "card_singalCard_container animateIn" : "card_singalCard_container"}`}>
                                    <div 
                                        className="card_singalCard_img"
                                        onClick={()=> handleClickedCard(card)}
                                        style={{backgroundImage: `url(${card.CIS_Image_cover})`}}>
                                    </div>
                                </div>
                            )
                        })
                    )
            case "Animation": 
                    return (
                        works[2].map((card, index) => {
                            return (
                                <div key={index} className={`${isIn? "card_singalCard_container animateIn" : "card_singalCard_container"}`}>
                                    <div 
                                        className="card_singalCard_img"
                                        onClick={()=> handleClickedCard(card)}
                                        style={{backgroundImage: `url(${card.video_cover})`}}>
                                    </div>
                                </div>
                            )
                        })
                    )
            case "Poster": 
                    return (
                        works[3].map((card, index) => {
                            return (
                                <div key={index} className={`${isIn? "card_singalCard_container animateIn" : "card_singalCard_container"}`}>
                                    <div 
                                        className="card_singalCard_img"
                                        onClick={()=> handleClickedCard(card)}
                                        style={{backgroundImage: `url(${card.poster_url})`}}>
                                    </div>
                                </div>
                            )
                        })
                    )
        }
    }

    return (
        <div className="card_cards_container">
            {filterCards()}
        </div>
    )
}

export default Card;