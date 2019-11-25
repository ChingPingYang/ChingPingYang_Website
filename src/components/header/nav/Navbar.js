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
                    name: 'PORTFOLIO',
                    id: 2,
                    url: '#main'
                },
                {
                    name: 'MORE',
                    id: 3,
                    url: '#'
                }
            ]
        }
    }
    render() {
        return (
            <nav className="nav_container">
                <div className="nav_logo"></div>
                <ul>
                    {   
                        this.state.links.map( (link, index) => {
                            return (
                                <div key={index}>
                                    <Link name={link.name} id={link.id} url={link.url} />
                                    {index !== this.state.links.length - 1
                                        ? <div className="link_decoration"></div>
                                        : console.log('no')}
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