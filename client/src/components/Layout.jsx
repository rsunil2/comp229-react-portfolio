import { Link } from 'react-router-dom'
const Layout = () => {
    return(
        
        <div>
          <img src="/ras-logo.png" alt="RS Logo" className="logo" />

            <h1>My Portfolio</h1>
            <nav>
            <Link to="/">Home</Link>  | {/* same as <a href="/">Home</a */}
            <Link to="/about">About</Link> |
            <Link to="/contact">Contact</Link> |
            <Link to="/projects">Projects</Link> |
            <Link to="/education">Education</Link> |
            <Link to="/services">Services</Link>
            </nav>
            <hr />
        </div>
    )
}

export default Layout;