import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    function randomEmoji() {
        const emojiArray = ["😀", "🤣", "🤩", "😴", "🤑", "🤯", "😬", "🤪", "🥵", "🥶", "😡", "😱", "😰"];
        let rn = Math.floor(Math.random() * emojiArray.length);
        return emojiArray[rn];
    }
    const [emojis, setEmoji] = useState([{ id: uuid(), emoji: randomEmoji() }]);
    const addEmoji = () => {
        setEmoji((oldEmoji) => {
            return [...oldEmoji, { id: uuid(), emoji: randomEmoji() }];
        });
    };

    const deleteEmoji = (Id) => {
        setEmoji((oldEmoji) => {
            return oldEmoji.filter(e => e.id !== Id);
        });

    };
    
    return (
        <div>
            {emojis.map((e) => <span key={e.id} style={{ fontSize: "3rem", cursor: "pointer" }} onClick={() => deleteEmoji(e.id)}>{e.emoji}</span>)}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>

    )
}