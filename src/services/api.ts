import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.134:3000'
})

export default api;

// Instância centralizada do axios para comunicação com o backend.
// Centralizar aqui evita repetir configurações em cada chamada e
// permite alterar a URL base em um único lugar (ex: dev vs produção)