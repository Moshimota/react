import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AboutFunc } from './Companents/About/About';
function App() {
  const [user, setUser] = useState()
  const getUsers = () =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      setUser(res.data)
    })
  }


  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      {user?.map(item =>{
        return (
          <>
            <AboutFunc name={item?.name} />
          </>
        )
      })}
    </>
  );
}

export default App;
