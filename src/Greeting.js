import React from 'react';
import { useLocation } from 'react-router-dom';

const Greeting = () => {
  const location = useLocation();

  if (location.pathname === '/') return (<div>All Greetings</div>);

  return (
    <div>Greeting</div>
  );
};

export default Greeting;
