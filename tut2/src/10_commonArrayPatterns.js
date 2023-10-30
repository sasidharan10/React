// Array

const shoppingCart =
    [{ id: 1, product: "HDMI Cable", price: 15 },
    { id: 2, product: "Microwave", price: 275 },
    { id: 3, product: "Laptop", price: 400 }];
console.log("Items: ");
console.log(shoppingCart);

// Adding an element in an array
const addNewItem = [...shoppingCart, { id: 4, product: "Iphone", price: 100 }];
console.log("Adding an element in an array: ");
console.log(addNewItem);

// Removing an element in an array
const deleteItem = addNewItem.filter((e) => e.id != 2);
console.log("Removing an element in an array: ");
console.log(deleteItem);

// Updating elements in an array
const updateItem = deleteItem.map((item) => {
    return {
        ...item, product: item.product.toLowerCase()
    }
});
console.log("Updating elements in an array: ");
console.log(updateItem);

// Modifying a particular element in an array
const modifyItem = updateItem.map((item) => {
    if (item.id === 4) {
        return { ...item, product: "Computer" };
    }
    else
        return item;
});
console.log("Modifying a particular element in an array: ");
console.log(modifyItem);