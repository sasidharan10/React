import { useState } from "react";
import {v4 as uuid} from "uuid";
import ShoppingForm from "./shoppingForm"

export default function ShoppingList() {
    const [formsData, setFormsData] = useState([{ id: uuid(), product: "Laptop", qty: 2 },
    { id: uuid(), product: "Mouse", qty: 5 }, { id: uuid(), product: "Keyboard", qty: 3 }]);
    const addItems = (item) => {
        setFormsData((currData) => {
            return [...currData, { ...item, id: uuid() }]
        })
    }
    return (
        <div>
            <ul>
                {formsData.map((dt) => {
                    return <li key={dt.id}>{dt.product} - {dt.qty}</li>
                })}
            </ul>
            <div>
                <ShoppingForm addItems={addItems} />
            </div>
        </div>
    );
}