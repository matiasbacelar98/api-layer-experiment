import React from 'react';

import useSWR from 'swr';
import { Table, Container, Flex, Heading, Spinner } from '@radix-ui/themes';

import UserAPI from '../api/user/user.api';
import { User } from '../api/user/user.interface';

export default function UsersTable() {
  const { data, isLoading, error } = useSWR('/users', UserAPI.getAllUsers);

  if (error) throw error;

  return isLoading ? (
    <Spinner />
  ) : (
    <Container size='4'>
      <Flex direction='column' mt='6'>
        <Heading>Users</Heading>

        <Table.Root>
          <Table.Header>
            <HeaderColumns />
          </Table.Header>

          <Table.Body>
            <UserList>
              {data?.map(user => <UserRow key={user.id} user={user} />) || []}
            </UserList>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Container>
  );
}

/*________ Components ________*/
function HeaderColumns() {
  return (
    <Table.Row>
      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
    </Table.Row>
  );
}

function UserList({ children }: { children: JSX.Element[] }) {
  return <React.Fragment>{children}</React.Fragment>;
}

function UserRow({ user: { name, email, username } }: { user: User }) {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{name}</Table.RowHeaderCell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{username}</Table.Cell>
    </Table.Row>
  );
}
