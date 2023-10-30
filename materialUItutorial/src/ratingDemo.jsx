import Rating from "@mui/material/Rating"
import { useState } from "react";

export default function RatingDemo() {
    const [score, setScore] = useState(1);
    return (
        <div>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                    setScore(newValue);
                }}
            />
        </div>
    )
}