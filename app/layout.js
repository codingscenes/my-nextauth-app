import { Inter } from 'next/font/google';
import './globals.css';
import Provider from './providers';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Notes Taking App',
  description: 'A notes for future',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>

        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
