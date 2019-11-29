import React ,{ Component }from "react";
import { data } from "./data";
import Filter from "./filter/Filter";

class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            works: data.works
        }
    }
    componentDidMount() {
        console.log(this.state.works[0][0])
    }
    
    
    render() {
        return(
            <div className="gallery_container">
                <img src="https://i.imgur.com/vu3schT.jpg" width="800px"></img>
                <Filter />
            </div>
        )
    }
}

export default Gallery;