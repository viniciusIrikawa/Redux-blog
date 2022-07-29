import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor'
import { selectAllPosts } from './postSlice'

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3> {post.title} </h3>
            <p> {post.content.substring(0, 100)} </p>
            <p className='postCredit'>
              <PostAuthor userId={post.userId}/>
            </p>
        </article>
    ))

  return (
    <section> 
        <h2> Posts </h2>
        {posts.length == 0 ?  "Nothing yet...🤷‍♂️" : renderedPosts}
    </section>
  )
}

export default PostList