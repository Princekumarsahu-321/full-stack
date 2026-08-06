import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-bold text-blue-600">
            MERN Auth
          </h1>

          <nav className="flex items-center gap-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Signup
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Secure MERN
              <span className="text-blue-600"> Authentication </span>
              System
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              Build secure applications with modern authentication using
              React, Node.js, Express.js, MongoDB, JWT, and bcrypt.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/signup"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition font-semibold"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Features
            </h3>

            <div className="grid gap-4">

              <div className="bg-blue-50 rounded-lg p-4">
                ✅ User Registration
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                🔐 Secure Login
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                🔑 JWT Authentication
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                🔒 Password Hashing (bcrypt)
              </div>

              <div className="bg-pink-50 rounded-lg p-4">
                🛡 Protected Routes
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                🚪 Logout System
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-semibold">
            MERN Authentication Project
          </h3>

          <p className="text-gray-400 mt-2">
            React • Node.js • Express.js • MongoDB • JWT • Tailwind CSS
          </p>

          <div className="flex justify-center gap-6 mt-4">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>

            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>

            <Link to="/login" className="hover:text-blue-400">
              Login
            </Link>

            <Link to="/signup" className="hover:text-blue-400">
              Signup
            </Link>
          </div>

          <p className="text-gray-500 mt-6 text-sm">
            © 2026 MERN Authentication. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;