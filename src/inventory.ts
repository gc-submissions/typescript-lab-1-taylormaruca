import { Product } from './products';

export interface InventoryItem {
    product: Product,
    quantity: number
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1
        },
        quantity: 20
    }
];

export const calcInventoryValue = (inventoryItems: InventoryItem[]): number => {
    if(inventoryItems == null) {
        return 0;
    }

    let total: number = 0;

    for(let i = 0; i < inventoryItems.length; i++) {
        total += inventoryItems[i].product.price * inventoryItems[i].quantity;
    }

    return total;
}

const total = calcInventoryValue(inventory);
console.log(total);