import React from 'react';

import useSWR from 'swr';

import {
  Container,
  RadioCards,
  Flex,
  Text,
  Heading,
  Spinner,
} from '@radix-ui/themes';

import PostAPI from '../api/post/post.api';
import { Post } from '../api/post/post.interface';

export default function PostsDashboard() {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR('posts', PostAPI.getAllPosts);

  if (error) throw error;

  return isLoading ? (
    <Spinner />
  ) : (
    <Container size='4'>
      <Flex direction='column' mt='6' gapY='2'>
        <Heading>Posts</Heading>

        <RadioCards.Root columns={{ initial: '1', sm: '3' }}>
          <PostList>
            {posts?.map(post => <PostCard key={post.id} post={post} />) || []}
          </PostList>
        </RadioCards.Root>
      </Flex>
    </Container>
  );
}

//_______ Components _______//
function PostList({ children }: { children: JSX.Element[] }) {
  return <React.Fragment>{children}</React.Fragment>;
}

function PostCard({ post: { title, body, id } }: { post: Post }) {
  return (
    <RadioCards.Item value={id}>
      <Flex direction='column' width='100%'>
        <Text weight='bold'>{title}</Text>
        <Text>{body}</Text>
      </Flex>
    </RadioCards.Item>
  );
}
