import { useState, useEffect } from "react"
import Axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "./Components/Layout"
import { Container, Card } from "react-bootstrap"

// import logo from './logo.svg';

function Profile() {

    const {id} = useParams();
    const [user, setUser] = useState({})

    useEffect(() =>{
        Axios.get(`http://localhost:5000/profile/${id}`).then((response) => {
          console.log(response.data)
          // console.log(response.data.blogs)
          if (response.data.status === "ok"){
              setUser(response.data.user)
          }
          else{
              alert(response.data.message)
          }
        });
      }, []);
    return(
        <Layout Auth={false}>
            <Container>
                <br />

                <h1 className="text-center">{user.username}</h1>
            </Container>
            <h4>posts:</h4>
            
        </Layout>
    )
}

export default Profile;
