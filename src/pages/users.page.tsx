import { ErrorBoundary } from 'react-error-boundary';
import UsersTable from '../components/users-table';
import Error from '../components/error';

export default function UsersPage() {
  return (
    <ErrorBoundary
      FallbackComponent={Error}
      onError={error => console.log(`Logging =>`, error)}
    >
      <UsersTable />
    </ErrorBoundary>
  );
}
