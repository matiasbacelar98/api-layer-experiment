import PostAPI from '../api/post/post.api';
import React from 'react';

export default function PostsDashboard() {
  React.useEffect(() => {
    PostAPI.getAllPosts()
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, []);

  return <h1>Posts Dahsboard</h1>;
}
