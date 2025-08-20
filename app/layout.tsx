import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import Header from '../components/Header'; // Header component
import Footer from '../components/Footer'; // Footer component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GlamCS - Luxury Cosmetics',
  description: 'Elevate your beauty with GlamCS',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-orange-600">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;