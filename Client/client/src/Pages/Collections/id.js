import { useState, useEffect } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout"

function Blog(){

    const {id} = useParams();
    const [collections, setCollections] = useState({});

    useEffect(() =>{
        Axios.get(`http://localhost:5000/collections/${id}`).then((response) => {
          // console.log(response.data.blogs)
          if (response.data.status === "ok"){
            setCollections(response.data.collection)
          }
          else{
              alert(response.data.err)
          }
        });
      }, []);
    return(
        <Layout Auth={false}>
            <h1>{collections.name}</h1>
            <p>{collections.description}</p>
        </Layout>
    )
  

}


export default Blog;