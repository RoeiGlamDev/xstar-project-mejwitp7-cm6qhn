import React from 'react';
import Head from 'next/head';
import styles from './page.module.css'; // Assuming you have a CSS module for styling

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>GlamCS - Luxury Cosmetics</title>
        <meta name="description" content="Experience luxury cosmetics with GlamCS." />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to GlamCS</h1>
          <p className={styles.subtitle}>Elevate your beauty with our exclusive products</p>
        </header>
        <main className={styles.main}>
          <section className={styles.products}>
            <h2 className={styles.sectionTitle}>Featured Products</h2>
            <div className={styles.productGrid}>
              {/* Map through products here */}
              <div className={styles.productCard}>
                <div className={styles.productImage}></div> {/* Add image here */}
                <h3 className={styles.productName}>Luxury Lipstick</h3>
                <p className={styles.productPrice}>$29.99</p>
              </div>
              <div className={styles.productCard}>
                <div className={styles.productImage}></div> {/* Add image here */}
                <h3 className={styles.productName}>Silk Foundation</h3>
                <p className={styles.productPrice}>$49.99</p>
              </div>
              {/* Add more products as needed */}
            </div>
          </section>
        </main>
        <footer className={styles.footer}>
          <p>© 2023 GlamCS. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;