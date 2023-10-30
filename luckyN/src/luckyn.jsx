import { useState } from "react";
import Dice from "./dice"
import Button from "./button"
import "./dice.css"
import { getRolls, sum } from "./utils"

export default function Luckyn({ diceCount, target, winCheck, title }) {
    const [diceNum, setDice] = useState(getRolls(diceCount));
    // console.log(diceNum);
    const rollDice = () => {
        setDice(getRolls(diceCount));
    }
    const isWinner = winCheck(diceNum);
    return (
        <div className="diceParent">
            <h1>{title}</h1>
            <h2>{isWinner && "You Won!!!"}</h2>
            <Dice dice={diceNum} />
            <Button buttonClick={rollDice} />
        </div>

    );
}