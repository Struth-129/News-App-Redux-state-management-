import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInput, setBlogData } from '../../features/userSlice'
import './style.css';
const BlogPage = () => {
    const searchInput = useSelector(selectUserInput);
    const blogUrl = `https://gnews.io/api/v4/search?q=${searchInput}&token=23b5d286209ea9bcac5fa200652eeb9c`
    const dispatch = useDispatch();
    const [blogs,setBlogs] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios
        .get(blogUrl)
        .then((response)=>{
            dispatch(setBlogData(response.data))
            setBlogs(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[searchInput])

    return (
        <div className="blog__page">
        <h1 className="blog__page__header">News</h1>
        {loading ? <h1 className="loading">Loading...</h1> : ""}
        <div className="blogs">
          {blogs?.articles?.map((blog) => (
            <a className="blog" target="_blank" href={blog.url}>
              <img src={blog.image} />
              <div>
                <h3 className="sourceName">
                  <span>{blog.source.name}</span>
                  <p>{blog.publishedAt}</p>
                </h3>
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
              </div>
            </a>
          ))}
  
          {blogs?.totalArticles == 0 && (
            <h1 className="no__blogs">
              No News available 😞. Search something else to read blogs on the
              greatest platform.
            </h1>
          )}
        </div>
      </div>
    )
}

export default BlogPage
