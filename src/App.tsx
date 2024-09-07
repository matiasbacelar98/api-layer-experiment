import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import AppRouter from './router';

export default function App() {
  return (
    <Theme accentColor='crimson'>
      <AppRouter />
    </Theme>
  );
}
