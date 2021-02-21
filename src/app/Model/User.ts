export interface User {
    email: String,
    password: String
}

export interface UserContact {
    name: String,
    birthDate: Date,
    gender: String,
}

export interface UserAddress {
    country: String,
    area: String,
    city: String,
    number: String
}