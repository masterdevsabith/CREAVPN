import Navbar from "../components/includes/Navbar";

export default function ContactUsPage() {
  return (
    <section id="contactsection ">
      <Navbar />
      <div className="botttom w-full flex flex-col items-center justify-center py-20">
        <div className="top w-full flex flex-col items-center justify-center text-center py-8">
          <h2 className="text-[var(--text-color)] text-5xl">
            Get in <b>Touch With Us</b>
          </h2>
          <p className="text-[var(--text-premium)]">
            Making impeccable security and privacy affordable since 2013
          </p>
        </div>
        <div className="bottom  w-full">
          <form className="w-full max-w-lg mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-pricing)] text-[var(--text-color)] placeholder-[var(--text-dim-color)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-pricing)] text-[var(--text-color)] placeholder-[var(--text-dim-color)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              placeholder="Tell us about your idea..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-pricing)] text-[var(--text-color)] placeholder-[var(--text-dim-color)] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
