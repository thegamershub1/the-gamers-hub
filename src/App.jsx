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

  const handleSubmit = () => {
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-5xl md:text-6xl font-orbitron text-cyan-400 drop-shadow-[0_0_12px_#06b6d4]">
          Level Up Your Play
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
          Book your gaming slot now and dominate the arena at THE GAMER'S HUB.
        </p>
        <button
          onClick={handleBookNow}
          className="mt-10 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl shadow-lg transition duration-300"
        >
          Book Now
        </button>
      </main>

      {/* About Section */}
      <section className="bg-gray-900 py-16 px-6 border-t border-gray-800">
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

      {/* Booking Form Section */}
      {showForm && (
        <section
          ref={formRef}
          className="bg-gray-950 py-16 px-6 border-t border-gray-800"
        >
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-orbitron text-cyan-400 mb-4 text-center">
              Book Your Slot
            </h3>

            {submitted ? (
              <div className="text-center text-green-400 text-xl mt-10">
                ✅ Thank you! Your booking has been confirmed.
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xblkreqz"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
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
                  <label className="block text-sm mb-1">Booking Item</label>
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
                  <label className="block text-sm mb-1">Select Start Time</label>
                  <input
                    type="time"
                    name="startTime"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Duration</label>
                  <select
                    name="duration"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
                  >
                    <option value="">-- Select Duration --</option>
                    <option value="1 hour">1 Hour</option>
                    <option value="2 hours">2 Hours</option>
                    <option value="3 hours">3 Hours</option>
                    <option value="4 hours">4 Hours</option>
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
