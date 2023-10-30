import { useState } from "react";
export default function ShoppingForm({addItems}) {
    const [formsData, setFormsData] = useState({ product: "", qty: 0 });
    const updateDetails = (event) => {
        const currentField = event.target.name;
        const currentValue = event.target.value;
        setFormsData((currdata) => {
            currdata[currentField] = currentValue;
            return { ...currdata };
        });
    };

    const sendData = (event) => {
        event.preventDefault();
        // console.log("HIIII");
        addItems(formsData);
    }
    return (
        <div>
            <form onSubmit={sendData} action="" htmlFor="product">
                <div>
                    <label htmlFor="product">Product: </label>
                    <input onChange={updateDetails} type="text" placeholder="Enter Product" id="product" name="product" />
                </div>
                <div>
                    <label htmlFor="qty">Quantity: </label>
                    <input onChange={updateDetails} type="text" placeholder="Enter Quantity" id="qty" name="qty" />
                </div>
                <button>Add Item</button>
            </form>
        </div>
    );
}