import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  const isAdmin = user && user.role === "admin"

  const adminOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link onClick={handleLogOut} to="/">
        Sign Out
      </Link>
      <Link to="/games">Game List</Link>
      <Link to="/games/creategame">Add Games</Link>
    </nav>
  )

  const userOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link onClick={handleLogOut} to="/">
        Sign Out
      </Link>
      <Link to="/games">Game List</Link>
    </nav>
  )

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Sign In</Link>
    </nav>
  )

  return (
    <header>
      {isAdmin ? adminOptions : user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
