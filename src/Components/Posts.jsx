import React from 'react'
import useData from '../Hooks/useData'

const Posts = () => {
    const {posts} = useData()
  return (
      <div>
          {posts.map((post) => (<h1>{post.date}</h1> ) )}


    </div>
  )
}

export default Posts