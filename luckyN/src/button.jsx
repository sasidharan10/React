import "./dice.css"

export default function Button({buttonClick}) {
    return (
        <>
        <button onClick={buttonClick} className="btn">Re-Roll</button>
        </>
    );
}