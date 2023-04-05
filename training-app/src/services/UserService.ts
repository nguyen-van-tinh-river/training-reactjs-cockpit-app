import { http } from '../core/http';
import { PARAMS_SEARCH_MST_USERS, MST_USERS } from '../databases'

const API_URL = 'http://localhost:2001';

const findUserByCondition = (name?: string, email?: string, groupRole?: string, isActive?: boolean) => {
    let filter = {
        name: '',
        email: '',
        groupRole: '',
        isActive: '',
    };
    // filter={"_id":"642b90ce4f6e68a2cb018fe3"}&sort={"name":1}&fields={"name": 1}&limit=20&skip=

    return http.get(`${API_URL}/mst_users`)
}

export {
    findUserByCondition
};
