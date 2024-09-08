import api from '../api';
import { API_PATHS } from '../api-paths';

import { UserResponse } from './user-response.interface';

const fetchUsers = () => api.get<UserResponse[]>(API_PATHS.users);

// Export
const UserService = {
  fetchUsers,
  // fetchUser
  // createUser
  // deleteUser
  // ...
  // ...
};

export default UserService;
