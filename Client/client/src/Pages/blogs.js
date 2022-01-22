import react, { useState, useEffect } from "react"
import Axios from "axios"
import Blog from "./Components/blog"
import Layout from "./Components/Layout"


function Home() {

    const [blog, setBlog] = useState([]);

    useEffect(() =>{
      Axios.get("http://localhost:5000/blog").then((response) => {
        setBlog(response.data.blogs);
        // console.log(response.data.blogs)
      });
    }, []);

  return (
    <Layout Auth={false}>
      <div className="App">
        <div>
          {blog.map((item) => {
            return (
              <Blog Title={item.Title} Description={item.Description} Author={item.Author} Id={item._id} key={item._id} />
            );
          })}
        </div>
        
      </div>
    </Layout>
    
  );
}

export default Home;
