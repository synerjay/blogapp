import { Link } from 'react-router-dom'
// instead of anchor tags, use Link components from react router to prevent sending request to server so it is much faster

const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>The Synerjay Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: "white",
          backgroundColor: "gray",
          borderRadius: '8px'
        }}>New Blog</Link>
      </div>
    </nav>

    
  );
}
 
export default Navbar;