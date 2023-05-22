import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import {Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [login,setLogin] = useState(false);
  const [data,setData] = useState({});
  const [picture,setPicture] = useState('');

  return(
    <div class="container">
      <Card>
       <Card.Header>
        <h1>My React App</h1>
       </Card.Header>

       <Card.Body>
          <Card.Text>
            <h3>Please login using one of the following:</h3>
            {/*login form*/}
             {/*Facebook login button*/}
          </Card.Text>
       </Card.Body>

      </Card>
    </div>
  )

}

function LoginForm(){
  
}

export default App;
