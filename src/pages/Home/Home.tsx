import React, { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from '../../assets/logos/react.svg';
import styles from './Home.module.css';
import FacebookProvider from '../../components/Facebook/FacebookProvider';
import FacebookLoginButton from '../../components/Facebook/FacebookLoginButton';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <FacebookProvider>
      <div className={styles.container}>
        <div className={styles.logos}>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className={styles.logo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className={styles.card}>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/pages/Home/Home.tsx</code> and save to test HMR
          </p>
        </div>
        <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
        <FacebookLoginButton />
      </div>
    </FacebookProvider>
  );
};

export default Home;
