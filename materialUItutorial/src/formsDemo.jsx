import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";

export default function FormsDemo() {
    const [text, setText] = useState("");
    const [slider, setSlider] = useState(50);
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSlider = (e) => {
        setSlider(e.target.value);
    }
    return (
        <Box sx={{border: "2px solid black", p: 2}}>
            <p>{text}</p>
            <TextField onChange={handleChange} value={text} id="outlined-basic" label="Outlined" variant="outlined" />
            <p>{slider}</p>
            <Slider value={slider} onChange={handleSlider} />
        </Box>
    )
}