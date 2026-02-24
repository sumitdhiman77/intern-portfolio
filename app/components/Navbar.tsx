export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-[#0f172a]/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="font-semibold text-lg text-white">Sumit Dhiman</h2>

        <div className="space-x-6 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
