import UserAPI from '../api/user/user.api';

import React from 'react';

export default function UsersTable() {
  React.useEffect(() => {
    UserAPI.getAllUsers()
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, []);

  return <h1>Users Table</h1>;
}
