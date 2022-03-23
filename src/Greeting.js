import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getAllGreetings, getRandomGreeting } from './redux/greetings';

const Greeting = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading, greetings } = useSelector((state) => state.greetingsReducer);

  useEffect(() => {
    if (location.pathname === '/') dispatch(getAllGreetings());
    else dispatch(getRandomGreeting());
  }, [location.pathname, dispatch]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Greetings</h1>
      {!loading && (
        greetings.map((greeting) => <p key={uuidv4()}>{greeting.greeting}</p>)
      )}
    </div>
  );
};

export default Greeting;
