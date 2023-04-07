import axios from 'axios';

const API_URL = 'http://localhost:2001/api';
const API_KEY = 'USR-2c4367940c6330fbbdcf5a54122f6c6aab11a3dc';
const API_HEADERS = {
    headers: {
        'Content-Type': 'application/json',
        "api-key": `${API_KEY}`
    }
}

const findById = (_id?: string) => {
    return axios.get(`${API_URL}/content/item/mst_users/${_id}`, API_HEADERS)
}

const findUserByCondition = (filter: object, sort: object, fields: object) => {
    let params = `filter=${JSON.stringify(filter)}&sort=${JSON.stringify(sort)}&fields=${JSON.stringify(fields)}`;
    return axios.get(`${API_URL}/content/items/mst_users?${params}`, API_HEADERS)
}

const onDelete = (_id: string) => {
    return axios.delete(`${API_URL}/content/item/mst_users/${_id}`, API_HEADERS);
}

const onUpdate = (fields: object) => {
    return axios.post(`${API_URL}/content/item/mst_users`, fields, API_HEADERS);
}

const onInsert = (fields: object) => {
    return axios.post(`${API_URL}/content/item/mst_users`, fields, API_HEADERS);
}

export {
    findById,
    findUserByCondition,
    onDelete,
    onUpdate,
    onInsert,
};
