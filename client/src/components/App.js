import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';

function App() {
  const [id, setId] = useLocalStorage('id');
  return (
    <>
    {id}
    <Login onIdSubmit={setId}/>
    </>
  );
}

export default App;
