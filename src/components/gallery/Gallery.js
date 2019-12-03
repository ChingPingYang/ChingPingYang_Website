import React ,{ Component }from "react";
import { data } from "./data";
import Filter from "./filter/Filter";
import Card from "./card/Card";
import Modal from "./modal/Modal";


class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            filters: data.filters,
            works: data.works,
            currentFilter: "All",
            isIn: false,
            selectedCard: null,
            modalOpen: false
        }
    }

    changeCurrentFilter = (filter) => {
        this.setState({
            currentFilter: filter
        })
    }

    resetIsIn = () => {
        this.setState({
            isIn: false
        })
        setTimeout(()=> {
            this.setState({
                isIn: true
            })
        }, 250)
    } 
   
    handleClickedCard = (card) => {
        this.setState({
            selectedCard: card
        },() => {
            this.setState({
                modalOpen: true
            })
            console.log(this.state.selectedCard)
        })
    }

    handleCloseModal = (e) => {
        if(e.target.className === "modal_container") {
            this.setState({
                modalOpen: false
            })
        }
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({
                isIn: true
            })
        }, 250)
    }
    
    render() {
        return(
            <div id="gallery" className="gallery_container">
                <Filter filters={this.state.filters} changeCurrentFilter={this.changeCurrentFilter} resetIsIn={this.resetIsIn} />
                <Card works={this.state.works} currentFilter={this.state.currentFilter} handleClickedCard={this.handleClickedCard} isIn={this.state.isIn}/>
                <Modal selectedCard={this.state.selectedCard} modalOpen={this.state.modalOpen} handleCloseModal={this.handleCloseModal} />
            </div>
        )
    }
}

export default Gallery;