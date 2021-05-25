//Declaring global variables (cannot be reinitialized or changed)
const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

function calculate_total(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) {
    if (items == null || items.length === 0) return 0  //check for invalid inputs

    const item_cost = items.reduce((total, item) => {
        return total + item.price * items.quantity
    }, 0)
    const discount_rate = 1 - discount
    return item_cost * discount_rate * TAX_RATE + shipping
}

const test_items = [
    { price: 15, quantity: 2 },
    { price: 20, quantity: 1 },
    { price: 5, quantity: 4 },
]

console.log(`Shipping Total: ${calculate_total(test_items, { shipping: 6, discount: .10 })}`)