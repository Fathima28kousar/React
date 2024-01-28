import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import image1 from './images/image1.jpg';


const App = () => {
  const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };

  const handleTime = () => {
    alert(showDate(new Date()));
  };

  const  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
    }

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: 'Oct 7, 2020',
  };

  const techs = ['HTML', 'CSS', 'JavaScript'];
  const user = { ...data.author, image: image1 };

  return (
    <div className='app'>
      <Header data={data} />
      <Main user={user} techs={techs} handleTime={handleTime}  greetPeople={greetPeople} />
      <Footer date={new Date()} />
    </div>
  );
};

export default App;
