import React , { Component } from "react";
import Link from "./Link";

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [
                {
                    name: 'ABOUT',
                    id: 1,
                    url: '#',
                },
                {
                    name: 'FEATURED',
                    id: 2,
                    url: '#main'
                },
                {
                    name: 'MORE',
                    id: 3,
                    url: '#gallery'
                }
            ],
            isOverHero: false,
            isScrollUp: false,
            prevYOffest: window.pageYOffset,
            currentYOffset: window.pageYOffset
        }
    }

    forNavStatus = () => {
        let navStatus = "";
        if (this.state.isOverHero && this.state.isScrollUp) {
            navStatus = "nav_container isOverHero"
        } else if (this.state.isOverHero && !this.state.isScrollUp) {
            navStatus = "nav_container isOverHero nav_hidden"
        } else if (!this.state.isOverHero) {
            navStatus = "nav_container"
        }
        return navStatus;
    }

    

    componentDidMount() {
        setInterval(()=>{
            this.setState((prevState)=>{
                return {
                    prevYOffest: prevState.currentYOffset,
                    currentYOffset: window.pageYOffset
                }
            },() => {
                if(window.pageYOffset < this.state.prevYOffest) {
                    this.setState({
                        isScrollUp: true
                    })
                } else if(window.pageYOffset > this.state.prevYOffest) {
                    this.setState({
                        isScrollUp: false
                    })
                }
                if(this.state.currentYOffset >= window.innerHeight) {
                    this.setState({
                        isOverHero: true
                    })
                } else if (this.state.currentYOffset < window.innerHeight) {
                    this.setState({
                        isOverHero: false
                    })
                }
            })
        }, 250)

    }
    render() {
        return (
            <nav className={this.forNavStatus()}>
                <div className="nav_logo"><a className="nav_logo_link" href="#"></a></div>
                <ul>
                    {   
                        this.state.links.map( (link, index) => {
                            return (
                                <div key={index}>
                                    <Link name={link.name} id={link.id} url={link.url} />
                                    {index !== this.state.links.length - 1
                                        ? <div className="link_decoration"></div>
                                        : null}
                                </div>
                            )
                        })
                    }
                </ul>

            </nav>
        )
    }
}
export default Navbar;