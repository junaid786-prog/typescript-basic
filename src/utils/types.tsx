export type user = {
    name: string,
    gmail: string,
    cartproducts: number | null,
    password?: string
}

export type Product = {
    seller: User[],
    stock: number,
    name: string,
    description: string,
    images: string[]
}

export type Order = {
    products: Product[],
    customer: User,
    createdAt: Date,
    deliveryDate: Date,
    status: orderStatus
}

export type User = {
    name: string,
    gmail: string,
    country: string | null,
    userType: userTypes | null,
}


export enum userTypes {
    seller = "seller",
    buyer = "buyer",
    admin = "admin"
}

enum orderStatus {
    created = "created",
    processing = "processing",
    delivered =  "delivered",
    cancelled =  "cancelled"
}