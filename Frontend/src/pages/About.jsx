function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Our Project
        </h1>

        <p className="text-gray-700 text-lg leading-8 mb-6">
          This is a simple MERN Stack Authentication project built using
          React, Node.js, Express.js, and MongoDB. It demonstrates secure
          user authentication with JWT and password encryption.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Features
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>User Registration (Signup)</li>
          <li>User Login</li>
          <li>JWT Authentication</li>
          <li>Password Hashing with bcrypt</li>
          <li>Protected Routes</li>
          <li>Secure Cookies</li>
          <li>Responsive UI with Tailwind CSS</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Technologies Used
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center font-semibold">
            React
          </div>

          <div className="bg-green-100 p-4 rounded-lg text-center font-semibold">
            Node.js
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg text-center font-semibold">
            Express.js
          </div>

          <div className="bg-purple-100 p-4 rounded-lg text-center font-semibold">
            MongoDB
          </div>

          <div className="bg-red-100 p-4 rounded-lg text-center font-semibold">
            JWT
          </div>

          <div className="bg-gray-200 p-4 rounded-lg text-center font-semibold">
            Tailwind CSS
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-gray-600">
          <p>
            Developed using the MERN Stack for learning authentication,
            routing, and backend integration.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;