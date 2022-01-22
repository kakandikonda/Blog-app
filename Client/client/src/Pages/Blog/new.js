import react, { useState } from "react"
import Layout from "../Components/Layout"
import Axios from "axios"
import {useParams} from "react-router-dom"


function NewBlog() {

    const [form, setForm] = useState({Title: "", Description: ""});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const {cid} = useParams();

    async function submit(event){
        event.preventDefault()
        Axios({
          method: "POST",
          data: {
            Title: form.Title,
            Description: form.Description,
            Collection: cid
          },
          withCredentials: true,
          url: `http://localhost:5000/blog`,
        }).then((res) => {
          if (res.data.status === "ok"){
            alert("Successfully created post");
            window.location.href = "/"
          }else{
            alert("There was an error");
          }

        })
    }

  return (
    <Layout Auth={true}>
      <div className="App">
        <h1>New Blog</h1>
        <form onSubmit={submit}>
            <input type="text" name="Title" placeholder="Title" onChange={handleChange} />
            <textarea cols="30" rows="10" name="Description" placeholder="Description" onChange={handleChange} ></textarea>
            <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
    
  );
}

export default NewBlog;
