import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Coding Hunters</h1>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <a href="/about" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">About</a>
            <a href="/contact" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">Contact</a>
            <a href="/blog" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">Blog</a>
          </nav>
          <a href="/login" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 font-medium">
            Login
          </a>
        </div>
      </header>
    )
  }
  
  export default Header
  