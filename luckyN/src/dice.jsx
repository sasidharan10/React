import "./dice.css"
import Die from "./die"

export default function Dice({ dice }) {
    // console.log(dice);
    return (
        <div className="dice">
            {dice.map((dc, idx) => {
                return <Die key={idx} dieNumber={dc} />
            })}
        </div>
    );
}