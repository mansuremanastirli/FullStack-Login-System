import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { Routes, Route, Link, Navlink } from 'react-router-dom';
import axios from "axios"

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setsuccessMessage] = useState("")
  const [alertSuccess, setalertSuccess] = useState(false)
  const [alertDanger, setalertDanger] = useState(false)


  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const createAcc = () => {
    axios.post(`http://localhost:5000/users/signup`, formData).then(res => {
      console.log(res.data.message);
      setsuccessMessage(res.data.message)

      setalertSuccess(true)

      setTimeout(() => {
        setalertSuccess(false)
      }, 3000);

    }).catch(err => {

      setErrorMessage(err.response.data.message)

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
        <Form.Group>
          <Form.Control type='text' placeholder="First Name" onChange={e => setformData({ ...formData, firstname: e.target.value })} className="form-control" />
          <label className="form-label" htmlFor="form2Example2">First Name</label>
          </Form.Group>
        </div>


        <div className="form-outline mb-4">
        <Form.Group>
          <Form.Control type="text" placeholder="Last Name" onChange={e => setformData({ ...formData, lastname: e.target.value })} className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Last Name</label>
          </Form.Group>
        </div>

        <div className="form-outline mb-4">
          <Form.Group>
          <Form.Control type='email' placeholder="Email" onChange={e => setformData({ ...formData, email: e.target.value })} className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Email address</label>
          </Form.Group>
        </div>

        <div className="form-outline mb-4">
          <Form.Group>
          <Form.Control type='password' placeholder="Password" onChange={e => setformData({ ...formData, password: e.target.value })} className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Password</label>
          </Form.Group>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <Link to='/'>U Have Already Account?</Link>
          </div>
        </div>


        <Button className='btn btn-success w-50 mb-3' style={{ marginLeft: "180px" }} onClick={createAcc}>Register</Button>


        <div className="text-center">


          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>

      </form>


    </div>
  )
}

export default Register