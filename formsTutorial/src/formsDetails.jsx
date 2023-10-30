import { useState } from "react";
export default function FormsDetails() {
    const [formsData, setFormsData] = useState({ firstName: "", lastName: "", password: "" });
    const updateDetails = (event) => {
        const currentField = event.target.name;
        const currentValue = event.target.value;
        setFormsData((currdata) => {
            currdata[currentField] = currentValue;
            return { ...currdata };
        });
    };
    return (
        <div>
            <form action="" htmlFor="firstName">
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input onChange={updateDetails} type="text" placeholder="Enter FirstName" id="firstName" name="firstName" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input onChange={updateDetails} type="text" placeholder="Enter LastName" id="lastName" name="lastName" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input onChange={updateDetails} type="text" placeholder="Enter Password" id="password" name="password" />
                </div>
            </form>
        </div>
    );
}