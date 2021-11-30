import "./login.scss"
import Input from "../../components/input/Input"
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
                    <div className="card input-container">
                        <form className="row g-3 "  >
                            <div className="mb-3">
                                <Input
                                    type="input"
                                    id="email"
                                    placeholder="Email address or phone number"
                                    validMessage=""
                                    invalidMessage="Please choose a username."
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    validMessage=""
                                    invalidMessage="Please choose a password."
                                    required={true}
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="button">Sign in</button>
                            </div>
                            <br />
                            <div className="d-grid gap-2">
                                <a href="" className="link-primary" onClick={(e) => e.preventDefault()}>Forgotten password?</a>
                            </div>
                            <br />
                            <div className="d-grid gap-2">
                                <button className="btn btn-success" type="button">Create New Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
