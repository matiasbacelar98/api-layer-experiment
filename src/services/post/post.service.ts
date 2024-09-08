import api from '../api';
import { API_PATHS } from '../api-paths';

import { PostResponse } from './post-response.interface';

const fetchPosts = () => api.get<PostResponse[]>(API_PATHS.posts);

// Export
const PostService = {
  fetchPosts,
  // fetchPost
  // createPost
  // deletePost
  // ...
  // ...
};

export default PostService;
