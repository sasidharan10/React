import { useState } from "react"

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const getEmoji = () => {
        setIsHappy(!isHappy);
    }
    const getCount = () => {
        setCount(count + 2);
    }
    return (
        <div>
            <p className="togglerEmoji"> {isHappy ? "😊" : "😢"}</p>
            <button onClick={getEmoji}>Click</button>
            <p className="togglerEmoji"> {count}</p>
            <button onClick={getCount}>+</button>
        </div>
    );
}