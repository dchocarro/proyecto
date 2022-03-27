import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navega = useNavigate();

    const actualizaLogin = props.actualizaLogin;
    const login = props.login;

    const submitHandler = (event) => {
        event.preventDefault();
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0UFbKwDrhqf_eE4SSdQ3jNvnSG8NYTOs', authData)
            .then(response => {
                alert('Login correctamente');
                //console.log(response.data);
                props.actualizaLogin(true, response.data);
                navega("/productos")
            }).catch(err => {
                alert('Parece que no se ha logueado');
                props.actualizaLogin(false, {});
            });
    }
    useEffect(() => {
        if (login === true) {
            actualizaLogin(false, {});
            navega("/productos")
        }

    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Form autoComplete="off" onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                LOGIN
            </Button>
        </Form>
    )
}

export default Login;