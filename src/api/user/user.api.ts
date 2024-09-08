import UserService from '../../services/user/user.service';
import { UserResponse } from '../../services/user/user-response.interface';
import withAsync from '../../utils/with-async.util';
import { User } from './user.interface';

async function getAllUsers(): Promise<User[] | null> {
  const { response, error } = await withAsync(() => UserService.fetchUsers());

  if (error) throw error;
  if (response) return transformUsersResponse(response.data);
  return null;
}

function transformUsersResponse(users: UserResponse[]): User[] {
  return users.map(user => ({
    id: user.id.toString(),
    name: user.name,
    username: user.username,
    email: user.email,
  }));
}

const UserAPI = { getAllUsers };
export default UserAPI;
