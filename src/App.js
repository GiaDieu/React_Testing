import React from 'react';
import Header from './components/header';
import HeadLine from './components/headline';
import './app.scss';

const App = () => (
  <>
    <Header />
    <section className="main">
      <HeadLine header='Posts' desc='Click the button the render the posts'/>
    </section>
  </>
);

export default App;
