import PostService from '../../services/post/post.service';
import withAsync from '../../utils/with-async.util';

async function getAllPosts() {
  const { response, error } = await withAsync(() => PostService.fetchPosts());

  if (error) {
    console.log(error);
    return;
  }

  if (response) {
    console.log(response.data);
  }
}

const PostAPI = { getAllPosts };
export default PostAPI;
