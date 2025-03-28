import {useState, useEffect} from 'react'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

const url = 'http://localhost:3000/posts'

function App() {

  function  fetchData() {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
      
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App