import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPasswords, onDeletePassword} = props
  const {id, website, username, password} = passwordDetails
  const initial = username.slice(0, 1).toUpperCase()

  const onDelete = () => {
    onDeletePassword(id)
  }

  const displayPassword = showPasswords ? (
    <p className="password-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )

  return (
    <li className="password-item">
      <div className="profile">{initial}</div>
      <div className="password-details">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {displayPassword}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
          testid="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
