export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {
        name: "PlayStation",
        price: 30000
    },
    {
        name: "Laptop",
        price: 100000
    }
];

export const calcAverageProductPrice = (productsA: Product[]): number => {
    if(productsA.length == 0) {
        return 0;
    }

    let length: number = productsA.length;
    let sum: number = 0;

    for(let product of productsA) {
        sum += product.price;
    }

    return sum / length;
}

// const avgPrice = calcAverageProductPrice(products);
// console.log(avgPrice)

