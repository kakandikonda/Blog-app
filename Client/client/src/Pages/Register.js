import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import Layout from "./Components/Layout"
import "../css/form.css"


function SignUp() {

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [pass, setPass] = useState("")

  const [form, setForm] = useState({ username: '', email: '', password: '' });

  async function register(event){
    event.preventDefault()
    Axios({
      method: "POST",
      data: {
        username: form.username,
        email: form.email,
        password: form.password,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => {
      // const data = await response.json();

      if (res.data.status === "ok"){
        window.location.href = "/login"
      }
    })
  }

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

  return (
    <div className="app">
        <form onSubmit={register} className="form-container">
          <h1>Create Account</h1>
          <input type="text" placeholder="Username" name="username" className="input" onChange={handleChange} />
          <input type="email" placeholder="Email" name="email" className="input" onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" className="input" onChange={handleChange} />
          <br />
          <button type="submit" className="button">Submit</button>
          <br />
          <p>Already have an account? <a href="/login" className="a">Login</a></p>
          <a href="/" className="a">Back</a>
        </form>
      
    </div>
  );
}

export default SignUp;
