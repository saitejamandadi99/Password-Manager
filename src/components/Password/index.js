import {Component} from 'react'

import PasswordItem from '../PasswordItem'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class Password extends Component {
  state = {count: 0}
  render() {
    const {count} = this.state
    const countpasswords = count > 0 ? true : false
    return (
      <div className="app-Container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="password-manager-Container">
          <div className="input-img-Container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="img-sm"
            />
            <form className="input-Container">
              <h1>Add New Password</h1>
              <div className="logo-input-Container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="inputLogo"
                />{' '}
                <input type="text" placeholder="Enter Website" />
              </div>

              <div className="logo-input-Container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="inputLogo"
                />{' '}
                <input type="text" placeholder="Enter Username" />
              </div>

              <div className="logo-input-Container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="inputLogo"
                />{' '}
                <input type="password" placeholder="Enter Password" />
              </div>
              <button>Add</button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="img-lg"
            />
          </div>
          <div className="your-password-Container">
            <div className="search-count-Container">
              <h1>Your Passwords {count}</h1>

              <div className="logo-search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <input type="search" placeholder="Search" className="search" />
              </div>
            </div>
            <hr />
            <div className="checkbox-container">
              <input type="checkbox" id="checkboxEle" />
              <label htmlFor="checkboxEle">Show Passwords</label>
            </div>

            {countpasswords ? (
              <ul className="passwordsList">
                {/* Render your password list here */}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Password
