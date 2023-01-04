import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ isLogged, setIsLogged }) {
  const nav = useNavigate()
  const [isValid, setIsValid]= useState(true)
  const submit = (e) => {
    e.preventDefault()
    const data = {
      username: 'a@a',
      password: 123
    };
    axios.post('http://localhost:7777/user/login', data)
      .then((res => {
        if (res.status == 200) {
          localStorage.token = res.data
          setIsLogged(true)
          nav('/')
        }
      }))
      .catch(()=>setIsValid(false))
  }

  return (
    <form onSubmit={submit}>
      <div>
        <h1> Login</h1>
        userName
        <input type="text" name='userName' />
        <br />
        pasword
        <input type="text" name='pasword' />
        <br />
        <input type="submit" />
      </div>
     {!isValid ? <h2>Login failed</h2>: ""}
      {/* <img src="http://localhost:7777/uploads/Polo.jpg"/> */}
    </form>

  )
}

export default Login