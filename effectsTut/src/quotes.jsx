import { useEffect, useState } from "react";

export default function Quotes() {
    const [quote, setQuote] = useState({ text: "", author: "" });
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getQuote();
    }, [])

    async function getQuote() {
        const response = await fetch("https://type.fit/api/quotes");
        const jsonResponse = await response.json();
        const data = jsonResponse;
        const rn = Math.floor(15 * Math.random());
        setQuote(data[rn]);
        setLoader(false);
    }
    return (
        <div>
            {loader && <p>Loading...</p>}
            <h3>Quote: {quote.text}</h3>
            <p>Author: {quote.author}</p>
            <button onClick={getQuote}>New quote</button>
        </div>
    );
}
