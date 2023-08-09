import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {

const posts = [
{
  id: 1,
  title: "Grapes",
  desc: "Mediterenean",
  img: "../img/GrapeCluster.png"
},

{
  id: 2,
  title: "Summer tomatoes",
  desc: "The best of earth",
  img: "../img/GrapeGreen.png"
},

]


  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt="" />
            </div>
            <div className='content'>
              <Link to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
