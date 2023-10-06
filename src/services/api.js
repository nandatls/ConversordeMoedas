//https://economia.awesomeapi.com.br/json/last/USD-BRL
// last/USD-BRL rota de dolar para real
// last/EUR-BRL
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json',
});
export default api;
