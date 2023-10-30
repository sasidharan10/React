import { useState } from "react"

const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
];

function getRandom(arr) {
    let rn = Math.floor(Math.random() * 15);
    return arr[rn];
}
export default function ColorBox() {
    let [clr, setClr] = useState(getRandom(colors));
    const getColor = () => {
        setClr(getRandom(colors));
    }
    return (
        <div className="colorBox" onClick={getColor} style={{ backgroundColor: clr }}></div>
    );
}