import React, { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from '../../assets/logos/react.svg';
import styles from './Home.module.css';
import FacebookLogin, {FacebookLoginAuthResponse} from 'react-facebook-login-lite';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const onSuccess = (response: FacebookLoginAuthResponse) => {
    console.log(response);
  }

  const onFailure = (error: any) => {
    console.log(error);
  }

  return (
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
      ReactDOM.render(
      <FacebookLogin
        appId="979624796900913"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />,
      document.getElementById('root')
      );
    </div>
  );
};

export default Home;
