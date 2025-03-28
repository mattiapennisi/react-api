import {useState, useEffect} from 'react'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

const url = 'http://localhost:3000/posts'

function App() {

  const [posts, setPosts] = useState([])

  function  fetchData() {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
      
  useEffect(() => {
    fetchData()
  }, [])

  console.log(posts);

  return (
    <>
      <Header />
      <Main posts={posts} setPosts={setPosts} />
      <Footer />
    </>
  )
}

export default App