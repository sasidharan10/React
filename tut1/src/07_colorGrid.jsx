import ColorBox from "./07_colorBox"
export default function ToggleCounter() {
    let boxes = [];
    for (let index = 0; index < 25; index++) {
        boxes.push(<ColorBox />);
    }
    return (
        <div className="parentBox">
            {boxes}
        </div>
    );
}