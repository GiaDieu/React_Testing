import React from 'react';
import Header from './components/header';
import HeadLine from './components/headline';
import './app.scss';

const tempArray = [{
  fName: 'Ben',
  lName: 'Lee',
  email: 'giadieuly@gmail.com',
  age: 32,
  onlineStatus: true,
}]

const App = () => (
  <>
    <Header />
    <section className="main">
      <HeadLine header='Posts' desc='Click the button the render the posts' tempArr={tempArray}/>
    </section>
  </>
);

export default App;
