export interface CartItem {
    productId: number,
    title: string;
    price: number;
    qty: number;
    thumbnail: string;
    stock: number,
    category: string,
    discount: string | number
}