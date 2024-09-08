import UserService from '../../services/user/user.service';
import withAsync from '../../utils/with-async.util';

async function getAllUsers() {
  const { response, error } = await withAsync(() => UserService.fetchUsers());

  if (error) {
    console.log(error);
    return;
  }

  if (response) {
    console.log(response.data);
  }
}

const UserAPI = { getAllUsers };
export default UserAPI;
