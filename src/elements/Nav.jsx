// NavLink creates links that work with React Router.
// Clicking them changes the route without a full page reload.
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    // nav is the semantic wrapper for site/app navigation.
    <nav className="mt-6 rounded-md border border-gray-200 bg-white px-4 py-3">
      {/* Simple horizontal list of route links */}
      <ul className="flex gap-6 text-sm text-gray-700">
        <li>
          {/* Go to the home route */}
          <NavLink className="hover:text-gray-900" to="/">Home</NavLink>
        </li>
        <li>
          {/* Go to the rendering route */}
          <NavLink className="hover:text-gray-900" to="/rendering">Rendering</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav