import { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "../Pages/Components/Layout"
import Ccard from "./Components/collection"

const Collection = () => {

    const [collections, setCollections] = useState([]);

    useEffect(() =>{
      Axios.get("http://localhost:5000/collections").then((response) => {
        //   console.log(response.data)
          if (response.data.status === "ok"){
            //   console.log(response.data.collections);
              setCollections(response.data.collections);
            //   console.log(collections)
          }
        else{
            alert("something went wrong");
        }
      });
    }, []);

    return (
        <Layout>
            <h1>Collections:</h1>
            {collections.map((a) => {
                return(
                    <Ccard name={a.name} description={a.description} Id={a._id} key={a._id} />
                )
                
            })}
        </Layout>
    )
}

export default Collection;