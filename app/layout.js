
import './globals.css';
import TopBar from './components/TopBar';
export const metadata = { title: 'Evaluator', description: 'Blue top bar, white sidebar' };
export default function RootLayout({ children }) {
  return (
    <html lang="th"><body>
      <TopBar/>
      {children}
    </body></html>
  );
}
