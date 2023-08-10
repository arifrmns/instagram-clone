import Post from './posts/Post';
import React, { useState } from 'react'
import "./Timeline.css";
import Sugesstion from './Sugesstions';


function Timeline() {
    const [posts, setPosts] = useState([
      {
        user: "digimap_id",
        postImage: "/post1.jpg",
        likes: 225,
        timestamp: "2d",
      },
      {
        user: "nvmforever",
        postImage: "/post2.jpg",
        likes: 8,
        timestamp: "1h",
      },
      {
        user: "kreatif_recap",
        postImage: "/post3.jpg",
        likes: 19,
        timestamp: "4h",
      },
      {
        user: "oppenheimer_memories",
        postImage: "/post4.jpg",
        likes: 50,
        timestamp: "1d",
      },
    ]);
  return (
    <div className='Timeline'>
      <div className="timeline__left">
        <div className='timeline_posts'>
          {posts.map(post =>(
            <Post 
            user={post.user} 
            postImage={post.postImage} 
            likes={post.likes}
            timestamp={post.timestamp} />
          ))}
        </div>
        </div>
      <div className="timeline__right">
        <Sugesstion />
      </div>
    </div>
  )
}

export default Timeline