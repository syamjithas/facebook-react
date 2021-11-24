import React from 'react'
import "./login.scss"
import facebookLogo from "../../static-asset/facebook.svg"
function Login() {
    return (
        <div className="login-container">
            <section className="content-facebook">
                <div className="content-1">
                    <img className="facebook-logo" src={facebookLogo} alt="" />
                    <div>Facebook helps you connect and share with the people in your life.</div>
                </div>
                <div className="content-2">
                    <div className="card" >
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
