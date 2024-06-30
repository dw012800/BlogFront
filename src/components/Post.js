import React from "react"
import {Link, useNavigate} from 'react-router-dom'

const titleStyle = {
  color: '#006643',
}

const Post = ({post, deleteBlog}) => {
  const navigate = useNavigate()

  const handleDelete = (event) => {
    event.preventDefault()
    deleteBlog(post.id)
    navigate('/')
  }
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h1 style={titleStyle}>{post.title}</h1>
      </Link>
     
      <h3>{post.body}</h3>
      <form onSubmit={handleDelete}>
        <input type='submit' value='Delete' />
      </form>
    </div>
  )
}

export default Post