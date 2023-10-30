import Proptypes from "prop-types"

function RentalProperty({ data }) {
    const element = data.map((i) => <div key={i.id}>
        <h2>{i.name}</h2>
        <h3>${i.price} a night</h3>
        <h4>{i.rating}⭐</h4>
    </div>);
    return (
        <div className="rentalData">
            {element}
        </div>
    );
}

// prop types
RentalProperty.proptypes = {
    item: Proptypes.string,
    rating: Proptypes.number,
    price: Proptypes.number,
}

export default RentalProperty;
