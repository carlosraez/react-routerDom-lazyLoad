import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate  } from "react-router-dom"



import logo from '../logo.svg'
import { routes } from "./routes"

export const Navigation = () => {
  return (
    <BrowserRouter>
       <div className="main-layout">
            <nav>
                <img src={logo} alt="react-logo"/>
            <ul>
              {
                routes.map(({ to, name })=> (
                  <li key={name}>
                      <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({ path, component : Component }) => (
                <Route 
                  key={path}
                  path={path} element={<Component />} />
              ))
            }
            <Route path="/*" element={ <Navigate to={routes[0].to} replace />} />
          </Routes>
       </div>
    </BrowserRouter>
  )
}
