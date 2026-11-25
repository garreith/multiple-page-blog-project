import { Link } from "react-router-dom";

function Blog() {

  return (
    <div>
      <h1>Blog Page</h1>
      
      <Link to='/blog/users' >Go to users page</Link>
    </div>
  )
}

export default Blog;