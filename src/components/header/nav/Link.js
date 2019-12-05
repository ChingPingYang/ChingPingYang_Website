import React ,{ useRef }from 'react';

const Link = (props) => {
    const { name, url} = props
    let aTag = useRef(null);
    const handleMouseEvent = () => {
        aTag.className === "link_li_a_hovered"
        ? aTag.className = ""
        : aTag.className = "link_li_a_hovered"
    }
    return (
        <li className="link_li">
            <a ref={(el)=> aTag = el}
               onMouseEnter={handleMouseEvent} 
               onMouseLeave={handleMouseEvent}
               href={url} >
                {name}
            </a>
        </li>
    )
}

export default Link;