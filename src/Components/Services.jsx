import React from 'react'
import { useParams } from 'react-router-dom';
const Services = ({blog}) => {
  console.log(blog)
    const { id } = useParams();
    
    const selectedBlog = blog.data.find((blogs) => blogs.id === Number(id));

if (!selectedBlog) {
    return <div>{id}</div>;
    
}

  return (
    <div>
        <img src={`http://localhost:1337${selectedBlog.attributes.pic.data[0].attributes.url}`}/>
    <h1>{selectedBlog.attributes.servicename}</h1>
    <h3>{selectedBlog.attributes.content}</h3>

    </div>
  )
}

export default Services