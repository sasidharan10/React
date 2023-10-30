import { useEffect, useState } from "react";


export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [txt, setTxt] = useState(0);
    useEffect(() => {
        console.log("I am Effect()");
    }, [])
    const handleClick = () => {
        setCounter((c) => c + 1);
    }

    const handleText = (e) => {
        setTxt((t) => e.target.value);
    }
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handleClick}>+</button>
            <div>
                <p>text: {txt}</p>
                <input onChange={handleText} type="text" placeholder="Enter Text" id="txt" />
            </div>
        </div>
    );
}

/*

- Syntax: useEffect(function(), [])

- If no second argument, the useEffect() will run for every render.
- If provided, with any state variable in that array, the useEffect() will
  get triggered if the state variable is changed
- Empty array means, the useEffect() will be run only the first time.
 */