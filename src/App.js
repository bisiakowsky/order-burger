import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBulder/BurgerBuilder';


function App() {
  return (
    <Layout>
      <BurgerBuilder/>
    </Layout>
  );
}

export default App;
