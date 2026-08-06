import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-blue-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <p className="mb-8 text-blue-100">
            We'd love to hear from you. Fill out the form and we'll get back to
            you as soon as possible.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">📍 Address</h3>
              <p>Jaipur, Rajasthan, India</p>
            </div>

            <div>
              <h3 className="font-semibold">📧 Email</h3>
              <p>support@example.com</p>
            </div>

            <div>
              <h3 className="font-semibold">📞 Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;