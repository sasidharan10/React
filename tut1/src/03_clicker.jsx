export default function Clicker({ message, buttonText }) {
    function handleClick(event) {
        alert(message);
    }
    return (

        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    );
}