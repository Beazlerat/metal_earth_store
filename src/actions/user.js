import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT 
} from './types';

export function setPurchaseDetail(_id) {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'So in this video were going to set up another action creator to fetch some products and then were going to display them in our application. So lets start off by going up here and going into',
                    price: 1.99,
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'So in this video were going to set up another action creator to fetch some products and then were going to display them in our application. So lets start off by going up here and going into',
                    price: 1.99,
                    belongsTo: [0, 6],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 1.40,
                orderNumber: 'B00488343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'NOT Hudgens',
                    shippingAddress: 'nope East State Street'
                }
            },
            {
                _id: 2,
                total: 14.40,
                orderNumber: 'ASD56789343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'NIKI Hudgens',
                    shippingAddress: 'middle of no where'
                }
            },
            {
                _id: 3,
                total: 79.00,
                orderNumber: 'BBBBBB48343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Max Noone',
                    shippingAddress: 'space space space'
                }
            },
            {
                _id: 4,
                total: 9.40,
                orderNumber: 'ADDDD8343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Yes No',
                    shippingAddress: 'hot and cold 1234'
                }
            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 19.89,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'heyo yakko',
                    shippingAddress: 'warner lot and tower'
                }
            },
        ]
    })
}