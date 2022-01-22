import react, { useState } from "react"
import Layout from "../Components/Layout"
import Axios from "axios"


function NewCollection() {

    const [form, setForm] = useState({name: "", description: ""});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function submit(event){
        event.preventDefault()
        Axios({
          method: "POST",
          data: {
            name: form.name,
            description: form.description,
          },
          withCredentials: true,
          url: "http://localhost:5000/collections",
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
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <textarea cols="30" rows="10" name="description" placeholder="Description" onChange={handleChange} ></textarea>
            <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
    
  );
}

export default NewCollection;
