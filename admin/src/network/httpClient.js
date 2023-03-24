const token = localStorage.getItem('token');
const headers = {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json',
    "Authorization": `Token ${token}`,
}
const baseUrl = `https://web-laptopp.herokuapp.com/`;

const httpClient = {
    get(path) {
        return fetch(baseUrl + path, { method: 'GET', headers });
    },
    put(path) {
        return fetch(baseUrl + path, { method: 'PUT', headers });
    },
}
export { httpClient };