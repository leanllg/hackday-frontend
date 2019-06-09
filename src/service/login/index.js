import * as React from "react"
import Header from "../../pages/home/header"
import './index.css'
class Login extends React.Component {
  state = {
      verifyCode:null,
      phoneNumber:null
  }

  componentDidMount() {

  }

  getCode() {
      // send sms to this.state.phoneNumber
      fetch('https://mywebsite.com/endpoint/', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              phonenumber: this.state.phoneNumber,
          })
      })
  }

  render() {
    return (
        <div>
          <Header />
          <div className="bgColor">
          </div>
            <div className="low-water"></div>
          <div className="inputBox">
            <div className="login-text">
                手机验证登录
            </div>

              <div className="first-container">
                  <div className="blue-bar">
                  </div>

                  <div className="aux-text">
                      手机号
                  </div>
              </div>
              <div className="first-inputrow">
                  <input type="text" id="nbinput" value={this.state.phoneNumber} className="form-control input-item2 "  required />
              </div>
              <div className="second-container">
                  <div className="blue-bar">
                  </div>
                  <div className="aux-text">
                      验证码
                  </div>
              </div>

              <div className="second-inputrow">
                  <input type="text" id="codeinput" value={this.state.verifyCode}className="form-control input-item "  required />

                  <button className="btn" onClick="getCode()">
                      获取验证码
                  </button>

              </div>

              <div className="">

              </div>
          </div>

        </div>


    )
  }
}

export default Login
