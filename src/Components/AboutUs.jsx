import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ blogs }) => {
  return (
    <div className="container">
      <center>
        <h1 className='hn'>Our Services</h1>
      </center>
      <div className="box">
        {blogs && blogs.data ? (
          blogs.data.map((blog) => (
<Link to={`/blog/${blog.id}`} key={blog.id}>         
     <div className="bx">
                <img className='bo' src={`http://localhost:1337${blog.attributes.pic.data[0].attributes.url}`} alt="Cover" />
                <h1 className='ad'>{blog.attributes.servicename}</h1>
                <p className='as'>{blog.attributes.desc}</p>
              </div>
              </Link>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default About;
