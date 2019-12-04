import React from "react";

const Modal = (props) => {
    
    const { selectedCard, modalOpen, handleCloseModal } = props;

    return (
        
        <div className="modal_container" style={{display: `${modalOpen? "block" : "none"}`}} onClick={handleCloseModal}>
            { selectedCard &&
                <div className="modal_content">
                    <div className="modal_cross_container" onClick={handleCloseModal}>
                        <div className="modal_crossBody top"></div>
                        <div className="modal_crossBody bottom"></div>
                    </div>
                    <div className="modal_description_container">
                        {selectedCard.client ? <h3>Client: {selectedCard.client}</h3> : null }
                        {selectedCard.project_type ? <h3>Project Type: {selectedCard.project_type}</h3> : null }
                        {selectedCard.poster_name ? <h3>Title: {selectedCard.poster_name}</h3> : null }
                        {selectedCard.description ? <h3>Description: {selectedCard.description}</h3> : null }
                        {selectedCard.roles ? <h3>Roles: {selectedCard.roles}</h3> : null }
                        {selectedCard.skills ? <h3>Skills: {selectedCard.skills}</h3> : null }
                    </div>
                    {selectedCard.imageArray && selectedCard.imageArray.map((image, index) => {
                        return (
                            <img  key={index} src={image} className="modal_img" />
                        )
                    })}
                    {selectedCard.video_link && 
                        <iframe width="100%" height="700" 
                        src={selectedCard.video_link}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    }
                </div>
            }
        </div>
    )
}

export default Modal;