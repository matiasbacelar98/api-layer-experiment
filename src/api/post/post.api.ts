import PostService from '../../services/post/post.service';
import { PostResponse } from '../../services/post/post-response.interface';
import withAsync from '../../utils/with-async.util';
import { Post } from './post.interface';

async function getAllPosts() {
  const { response, error } = await withAsync(() => PostService.fetchPosts());

  if (error) throw error;

  if (response) {
    return transformPostsResponse(response.data);
  }
}

function transformPostsResponse(posts: PostResponse[]): Post[] {
  return posts.map(post => ({
    userId: post.userId,
    id: post.id.toString(),
    title: post.title,
    body: post.body,
  }));
}

const PostAPI = { getAllPosts };
export default PostAPI;
