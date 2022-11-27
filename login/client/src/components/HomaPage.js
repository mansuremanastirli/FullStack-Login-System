import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const HomePage = ({ user, setUser }) => {

  const [alertMessage, setAlertMessage] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user])

  const logOut = () => {

    setAlertMessage(true)
    
    setTimeout(() => {
      setAlertMessage(false)
      localStorage.removeItem("user")
      setUser(null)
      navigate("/")
    }, 2000);

  }

  const deleteAcc = () => {
    axios.delete(`http://localhost:5000/users/delete/${user._id}`).then(res => {
      localStorage.removeItem("user")
      setUser(null)
      navigate("/")
    })
  }

  return (
    <div>
      <Alert className='alert-danger w-25 text-center mx-auto' show={alertMessage} style={{ position: "relative", top: "200px" }}>Logging Out Please Wait</Alert>
      <Card style={{ width: '23rem', marginTop: "280px" }} className="mx-auto">
        <Card.Body>
          <Card.Title className='text-center'>User</Card.Title>
          <hr />
          <Card.Text>
            Email: {user?.email}
            <br />
            Name: {user?.firstname}
            <br />
            Last Name: {user?.lastname}
            <br />
          </Card.Text>
          <Button className='btn btn-danger' onClick={() => logOut()}>Log Out</Button>
          <Button className='btn btn-danger' style={{ marginLeft: "20px" }} onClick={() => deleteAcc()}>Delete Account and Log Out</Button>
        </Card.Body>
      </Card>

    </div>
  )
}

export default HomePage