function Header() {
    return (
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Coding Hunters</h1>
          <nav className="flex items-center space-x-6">
            <a href="/"className="hover:text-blue-200 transition">Home</a>
            <a href="/about" className="hover:text-blue-200 transition">About</a>
            <a href="/contact" className="hover:text-blue-200 transition">Contact</a>
            <a href="/blog" className="hover:text-blue-200 transition">Blog</a>
          </nav>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 font-medium">
            Login
          </button>
        </div>
      </header>
    )
  }
  
  export default Header
  