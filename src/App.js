import React, { useEffect } from 'react';

import { Counter } from './Counter';
import Footer from './Footer'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from './country/countrySlice';

function App() {
  const dispatch = useDispatch()
  const country  = useSelector(state => state.country.country)

  console.log(country)


  useEffect(() => {
    dispatch(getCountry())
  }, [])

  return (
    <div className="App">
      <Counter />
      
      <Footer />
    </div>
  );
}

export default App;
