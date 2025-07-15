import { useState, useRef } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleBookNow = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblkreqz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-gray-950 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-orbitron text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]">
          THE GAMER'S HUB
        </h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#media" className="hover:text-cyan-400 transition">Media</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          <a href="#booking" className="hover:text-cyan-400 transition">Book</a>
        </nav>
        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-orbitron text-cyan-400 drop-shadow-[0_0_20px_#06b6d4] mb-4">
          THE GAMER'S HUB
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Book your gaming slot now and dominate the arena.
        </p>
        <button
          onClick={handleBookNow}
          className="mt-10 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl shadow-lg transition duration-300"
        >
          Book Now
        </button>
      </main>

      {/* About Section */}
      <section id="about" className="bg-gray-900 py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-orbitron text-cyan-400 mb-6 drop-shadow-[0_0_6px_#06b6d4]">
            About Us
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Welcome to <span className="text-cyan-400 font-semibold">THE GAMER'S HUB</span> — your ultimate gaming destination. 
            Whether you're into casual FIFA sessions or intense Call of Duty marathons, 
            we’ve got the perfect setup with high-end consoles, blazing-fast internet, and the best gaming ambiance in town.
          </p>
          <p className="mt-4 text-gray-400 text-sm">
            🎮 PS5 | 🖥️ Gaming PCs | 🕹️ Tournaments | 💺 Comfortable seating | ⚡ Snack Bar & More!
          </p>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="bg-black py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-orbitron text-cyan-400 mb-6 drop-shadow-[0_0_6px_#06b6d4]">
            Media
          </h3>
          <p className="text-gray-400 mb-8">Check out our gaming setup and past events.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/media1.png" alt="Media 1" className="rounded-lg w-full h-40 object-cover" />
            <img src="/media2.png" alt="Media 2" className="rounded-lg w-full h-40 object-cover" />
            <img src="/media3.png" alt="Media 3" className="rounded-lg w-full h-40 object-cover" />
            <img src="/media4.png" alt="Media 4" className="rounded-lg w-full h-40 object-cover" />
            <img src="/media5.png" alt="Media 5" className="rounded-lg w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-950 py-16 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-orbitron text-cyan-400 mb-6 drop-shadow-[0_0_6px_#06b6d4]">
            Contact Us
          </h3>
          <p className="text-gray-300">📞 Call us: <span className="text-cyan-400">+91 98765 43210</span></p>
          <p className="text-gray-300 mt-2">📧 Email: <span className="text-cyan-400">mrzayed45@gmail.com</span></p>
          <p className="text-gray-300 mt-2">📍 Location: <span className="text-cyan-400">Your Gaming Lounge Address</span></p>
          <p className="text-gray-300 mt-2">
            📸 Instagram:{" "}
            <a
              href="https://www.instagram.com/the.gamers.hub_/?__pwa=1#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              Follow us on Instagram
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            🗺️ Google Maps:{" "}
            <a
              href="https://g.co/kgs/MuEjDQM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              View on Map
            </a>
          </p>
        </div>
      </section>

      {/* Booking Form */}
      {showForm && (
        <section
          id="booking"
          ref={formRef}
          className="bg-black py-16 px-6 border-t border-gray-800"
        >
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-orbitron text-cyan-400 mb-4 text-center">
              Book Your Slot
            </h3>

            {submitted ? (
              <div className="text-center text-green-400 text-xl mt-10">
                ✅ Thank you! We've received your booking request.<br />
                We'll contact you shortly to confirm your slot.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10,}"
                    title="Enter a valid phone number"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Select Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Start Time</label>
                  <input
                    type="time"
                    name="startTime"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">What do you want to book?</label>
                  <select
                    name="item"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
                  >
                    <option value="">-- Select --</option>
                    <option value="PC">PC</option>
                    <option value="PS5">PS5</option>
                    <option value="Steering Wheel">Steering Wheel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1">Duration</label>
                  <select
                    name="duration"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
                  >
                    <option value="">-- Select --</option>
                    <option value="1 hour">1 Hour</option>
                    <option value="2 hours">2 Hours</option>
                    <option value="3 hours">3 Hours</option>
                    <option value="More than 3 hours">More than 3 Hours</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl shadow-md transition duration-300"
                >
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
