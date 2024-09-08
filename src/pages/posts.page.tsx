import { ErrorBoundary } from 'react-error-boundary';
import PostsDashboard from '../components/posts-dashboard';
import Error from '../components/error';

export default function PostsPage() {
  return (
    <ErrorBoundary
      FallbackComponent={Error}
      onError={error => console.log(`Logging =>`, error)}
    >
      <PostsDashboard />
    </ErrorBoundary>
  );
}
