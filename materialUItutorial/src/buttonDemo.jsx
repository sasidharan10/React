import Button from "@mui/material/Button"

export default function ButtonDemo() {

    return (
        <div>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined" onClick={() => {
                alert('clicked');
            }}>Outlined</Button>
            <Button size='small' variant="contained" color="success">
                Success
            </Button>
        </div>
    )
}