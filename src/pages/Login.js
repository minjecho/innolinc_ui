// Login page
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

// CSS
import '../css/Login.css';

function Login(){
    useEffect(() => {
        const loginJs = document.createElement('script');
        loginJs.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.js';

        const loginCss = document.createElement('link');
        loginCss.rel = 'stylesheet';
        loginCss.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';

        document.head.appendChild(loginJs);
        document.head.appendChild(loginCss);

        return () => {
            document.head.removeChild(loginJs);
            document.head.removeChild(loginCss);
        }
    }, []);

    return (
        <div class="login-container">
            <h2>Innolinc Login</h2>
            <form>
                <div class="form-group">
                    <label for="serverIp">Server IP</label>
                    <input type="text" class="form-control" id="serverIp" name="serverIp" value={"192.168.219.228"} required />
                </div>
                <div class="form-group">
                    <label for="port">Port</label>
                    <input type="number" class="form-control" id="port" name="port" value={"7878"} required />
                </div>
                <div class="form-group">
                    <label for="id">ID</label>
                    <input type="text" class="form-control" id="id" name="id" value={"Minje-Cho"} required />
                </div>
                <div class="form-group">
                    <label for="pwd">Password</label>
                    <input type="password" class="form-control" id="pwd" name="pwd" required />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="rememberMe" name="rememberMe" />
                    <label class="form-check-label" for="rememberMe">Remember Me</label>
                </div>
                <Link to={"/main"}><button type="submit" class="btn btn-primary">OK</button></Link>
            </form>
        </div>
    )
}

export default Login;