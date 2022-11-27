import axios from 'axios';
import React, {useState } from 'react'
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {

  const navigate = useNavigate();


  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setsuccessMessage] = useState("")
  const [formData, setformData] = useState({
    email: "",
    password: "",
  })

  const [alertSuccess, setalertSuccess] = useState(false)
  const [alertDanger, setalertDanger] = useState(false)

  const loginAcc = () => {
    axios.post("http://localhost:5000/users/login", formData).then(res => {
      localStorage.setItem("user", JSON.stringify(res.data.user))
      setUser(res.data.user)
      setsuccessMessage(res.data)
      setalertSuccess(true)
      setTimeout(() => {
        setalertSuccess(false)
      }, 3000);
      navigate("/index");
    }).catch(err => {
      let error = err.response.data.message
      setErrorMessage(error)
      console.log(error)
      setalertDanger(true)

      setTimeout(() => {
        setalertDanger(false)
      }, 3000);
    })
  }



  return (
    <div>

      <form className='w-50 mx-auto' style={{ margin: "60px" }}>
        <Alert className='alert-danger w-50 mx-auto text-center' show={alertDanger}>{errorMessage}</Alert>
        <Alert className='alert-success w-50 mx-auto text-center' show={alertSuccess}>{successMessage}</Alert>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" placeholder='Email' onChange={e => setformData({ ...formData, email: e.target.value })} className="form-control" required />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>


        <div className="form-outline mb-4">
          <input type="password" placeholder="Password" onChange={e => setformData({ ...formData, password: e.target.value })} className="form-control" required />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>


        <div className="row mb-4">
          <div style={{marginLeft: "340px"}}>
            <Link to="/register">Register</Link>
          </div>
        </div>

        <Button className='btn btn-success w-50 mb-3' style={{ marginLeft: "180px" }} onClick={loginAcc}>Login</Button>

      </form>

    </div>
  )
}

export default Login