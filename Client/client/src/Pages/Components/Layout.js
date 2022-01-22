import React, { useState, useEffect } from "react";
import Header from "./Navbar/Header";
// import Navbar from "./Navbar 3/App";
import Axios from "axios"
import "../../css/body.css"

// import classes from "../../css/layout.module.scss";



const Layout = ({ children, Auth }) => {
    const [user, setUser] = useState({});
    useEffect(() =>{
        Axios.get('http://localhost:5000/current-user', {withCredentials: true}).then((response) => {
          if (response.data.status === "ok"){
              setUser(response.data.user);
          }
          if (response.data.status === "err" && Auth){
            alert(response.data.message);
            window.location.href = "/login"
          }
        });
      }, []);

      
    return (
        <>
            <Header user={user}/>
            {/* <Navbar /> */}
            <div>{children}</div>
        </>
    );
};

export default Layout;