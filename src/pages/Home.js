import React from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Posthome from "./Posthome";
import Pagination from "./Pagination";

function Home() {
  const [posthome, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true)
    const res = await axios.get('https://web-laptopp.herokuapp.com/product/')
    setPosts(res.data)
    setLoading(false)
  }

  fetchPosts()
}, [])

console.log(posthome);

if (loading && posthome.length === 0) {
  return <h2>Loading...</h2>
}
//Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posthome.slice(indexOfFirstPost, indexOfLastPost)
const howManyPages = Math.ceil(posthome.length/postsPerPage)

return (
  <div>
    <Posthome posthome={currentPosts}/> 
    <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>
  </div>
);
}



export default Home;