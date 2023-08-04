import { useState } from "react"
import './TwitterButton.css'

export function TwitterButton (isFollow){
    const [isFollowing, setIsFollowing] = useState(isFollow);
    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-button-following" : "tw-button-follow";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <aside>
            <button className={` tw-button-account ${buttonClassName}`} onClick={handleClick}>{text}</button>
        </aside>
    )
}