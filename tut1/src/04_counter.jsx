import { useState } from "react";

export default function Counter({ message, buttonText }) {
    const [num, setNum] = useState(0);
    function changeNum() {
        setNum(num + 1);
    }
    return (

        <div>
            <p>The Count is: {num}</p>
            <button onClick={changeNum}>Click</button>
        </div>
    );
}