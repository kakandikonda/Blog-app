import { useState, useEffect } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout"

function Blog(){

    const {cid, bid} = useParams();
    const [blog, setBlog] = useState({})
    console.log(bid, cid)

    useEffect(() =>{
        Axios.get(`http://localhost:5000/blog/${bid}`).then((response) => {
          // console.log(response.data.blogs)
          if (response.data.status === "ok"){
              setBlog(response.data.blog)
          }
          else{
              alert(response.data.err)
          }
        });
      }, []);
    return(
        <Layout Auth={false}>
            <h1>{blog.Title}</h1>
            <p>{blog.Description}</p>
        </Layout>
    )
  

}


export default Blog;