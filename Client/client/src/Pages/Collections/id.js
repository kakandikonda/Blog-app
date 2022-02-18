import { useState, useEffect } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import Blog from "../Components/blog";

function CollectionID(){

    const {id} = useParams();
    const [collections, setCollections] = useState({});
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        Axios.get(`http://localhost:5000/collections/${id}`).then((response) => {
          // console.log(response.data.blogs);
          if (response.data.status === "ok"){
            setCollections(response.data.collection);
            setBlogs(response.data.blogs.Blogs);
          }
          else{
              alert(response.data.err)
          }
        });
      }, []);
    return(
        <Layout Auth={false}>
            <h1>Collection: {collections.name}</h1>
            <p>Description: {collections.description}</p>

            <h3>Blogs:</h3>
            <div>
              {blogs.map((item) => {
                return (
                  <Blog Title={item.Title} Description={item.Description} Author={item.Author} Collection={item.Collection._id}
                   Id={item._id} key={item._id} />
                );
              })}
            </div>
        </Layout>
    )
  

}


export default CollectionID;