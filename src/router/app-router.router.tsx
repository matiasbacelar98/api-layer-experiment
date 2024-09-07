import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { APP_ROUTES } from './routes';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.base} element={<Navigate to='/users' />} />
        <Route path={APP_ROUTES.users} element={<h1>Users Table</h1>} />
        <Route
          path={APP_ROUTES.comments}
          element={<h1>Comments Dashboard</h1>}
        />
        <Route path='*' element={<Navigate to='/users' />} />
      </Routes>
    </BrowserRouter>
  );
}
