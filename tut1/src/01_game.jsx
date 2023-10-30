export default function Game({ val1, val2, val3 }) {
    const res = (val1 === val2 && val2 === val3);
    const text = res ? "You Win!" : "You Lose!";
    const c = res ? "green" : "red";
    return (
        <div>
            <h1>{val1}{val2}{val3}</h1>
            <h2 style={{ color: c }}>{text}</h2>
            {res && <h3>Congrats</h3>}
        </div>
    );
}