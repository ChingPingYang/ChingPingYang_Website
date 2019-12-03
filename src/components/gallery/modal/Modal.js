import React from "react";
import img1 from "../../header/images/parallax_me.png"


const Modal = (props) => {
    const { selectedCard, modalOpen, handleCloseModal } = props;
    return (
        <div className="modal_container" style={{display: `${modalOpen? "block" : "none"}`}} onClick={handleCloseModal}>
            <div className="modal_content">
                <div className="modal_img" style={{backgroundImage: `${selectedCard && `url(${selectedCard.UI_Image_url1})`}`}} ></div>
                <div className="modal_img" style={{backgroundImage: `${selectedCard && `url(${selectedCard.UI_Image_url2})`}`}} ></div>
                <div className="modal_img" style={{backgroundImage: `${selectedCard && `url(${selectedCard.UI_Image_url3})`}`}} ></div>
                <div className="modal_img" style={{backgroundImage: `${selectedCard && `url(${selectedCard.UI_Image_url4})`}`}} ></div>
            </div>
        </div>
    )
}

export default Modal;