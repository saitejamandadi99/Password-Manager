import {Component} from 'react'

import './index.css'

class Password extends Component {
  render() {
    return (
      <div className="app-Container">
        <div className="password-manager-Container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="input-img-Container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
            <div className="input-Container">
              <h1>Add New Password</h1>
              <input />
              <input />
              <input />
              <button>Add</button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div className="your-password-Container">
            <div className="search-count-Container">
              <h1>Your Passwords :</h1>
              <input type="search" />
            </div>
            <hr />
            <div>
              <inpt />
              <label>Show Passwords</label>

              <ul className="passwordsList"></ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Password
