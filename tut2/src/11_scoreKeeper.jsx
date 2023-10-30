import { useState } from "react";

export default function scoreKeeper2({ numPlayer, target }) {
    const [point, setPoint] = useState(new Array(numPlayer).fill(0));
    const incrementScore = (idx) => {
        setPoint((score) => {
            return score.map((newscore, i) => {
                if (i === idx)
                    return newscore + 1;
                else
                    return newscore
            })
        })
    }
    const resetCount = () => {
        setPoint((score) => {
            return new Array(numPlayer).fill(0);
        })
    }
    return (<div>
        <ul>
            {point.map((score, idx) => {
                return (
                    <li key={idx}>
                        <h4>Player{idx + 1}: {score} <button onClick={() => incrementScore(idx)}>+1</button> {score >= target ? "Winner!!!" : null}</h4>
                    </li>
                );
            })}
        </ul>
        <button onClick={resetCount}>Reset</button>
    </div>);
}