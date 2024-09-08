import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { APP_ROUTES } from './routes';

import UsersPage from '../pages/users.page';
import PostsPage from '../pages/posts.page';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.base} element={<Navigate to='/users' />} />
        <Route path={APP_ROUTES.users} element={<UsersPage />} />
        <Route path={APP_ROUTES.posts} element={<PostsPage />} />
        <Route path='*' element={<Navigate to='/users' />} />
      </Routes>
    </BrowserRouter>
  );
}
