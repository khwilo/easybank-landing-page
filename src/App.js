import React from 'react';

import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Banner />
      </main>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
