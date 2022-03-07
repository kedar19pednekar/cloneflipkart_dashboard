import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const productsUrl = 'http://localhost:8001/products'; //different server address than flipkart backend 

export const getProducts = async (id) => {
    id = id || '';   //http://localhost:8080/products/ or http://localhost:8080/products/id
    return await axios.get(`${productsUrl}/${id}`);
}

export const addProducts = async (products) => {
    return await axios.post(`${productsUrl}/add`, products);
}

export const deleteProducts = async (id) => {
    return await axios.delete(`${productsUrl}/${id}`);
}

export const editProducts = async (id, products) => {
    return await axios.put(`${productsUrl}/${id}`, products)
}

//id is here productnumber for eg product1, product2 etc