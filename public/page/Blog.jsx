import { useState } from 'react'

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'tips', name: 'Tips & Tricks' },
    { id: 'news', name: 'News' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
      category: 'tutorials',
      author: 'John Doe',
      date: 'May 28, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: '10 VS Code Extensions Every Developer Needs',
      excerpt: 'Boost your productivity with these must-have Visual Studio Code extensions.',
      category: 'tips',
      author: 'Jane Smith',
      date: 'May 26, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
      category: 'news',
      author: 'Mike Johnson',
      date: 'May 24, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Stay up to date with the latest coding tutorials, tips, and industry news.
          </p>
        </div>

        {/* Categories */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-blue-600 font-medium">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="text-gray-900 font-medium">{post.author}</p>
                        <p className="text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-3xl mx-auto mt-16 bg-blue-600 rounded-lg text-white p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-blue-100 mb-6">
              Get the latest articles and tutorials directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
