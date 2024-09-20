import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'
class Password extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    showPasswords: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    if (websiteInput && usernameInput && passwordInput) {
      const newPassword = {
        id: uuidv4(),
        website: websiteInput,
        username: usernameInput,
        password: passwordInput,
      }
      this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPassword],
        websiteInput: '',
        usernameInput: '',
        passwordInput: '',
      }))
    }
  }

  onDeletePassword = id => {
    const {passwordsList} = this.state
    const filteredPasswordsList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({passwordsList: filteredPasswordsList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onToggleShowPasswords = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  getFilteredPasswordsList = () => {
    const {passwordsList, searchInput} = this.state
    return passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      showPasswords,
    } = this.state
    const filteredPasswordsList = this.getFilteredPasswordsList()
    const count = filteredPasswordsList.length
    const hasPasswords = count > 0

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
            <form className="input-Container" onSubmit={this.onAddPassword}>
              <h1>Add New Password</h1>
              <div className="logo-input-Container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="inputLogo"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={websiteInput}
                  onChange={this.onChangeWebsiteInput}
                />
              </div>

              <div className="logo-input-Container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="inputLogo"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={usernameInput}
                  onChange={this.onChangeUsernameInput}
                />
              </div>

              <div className="logo-input-Container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="inputLogo"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="img-lg"
            />
          </div>

          <div className="your-password-Container">
            <div className="search-count-Container">
              <h1>
                Your Passwords <p>{count}</p>
              </h1>
              <div className="logo-search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <input
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  className="search"
                />
              </div>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkboxEle"
                onChange={this.onToggleShowPasswords}
              />
              <label htmlFor="checkboxEle">Show Passwords</label>
            </div>

            <hr />
            {hasPasswords ? (
              <ul className="passwordsList">
                {filteredPasswordsList.map(eachPassword => (
                  <PasswordItem
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    showPasswords={showPasswords}
                    onDeletePassword={this.onDeletePassword}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-img"
                />
                <p>No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Password
