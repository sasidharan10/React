import { useState } from "react"

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const getEmoji = () => {
        setIsHappy(!isHappy);
    }
    return (
        <div>
            <p className="togglerEmoji"> {isHappy ? "😊" : "😢"}</p>
            <button onClick={getEmoji}>CLick</button>
        </div>
    );
}