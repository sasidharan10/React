import "./die.css"

export default function Die({dieNumber}) {
    return (
        <div className="die">
            {dieNumber}
        </div>
    );
}