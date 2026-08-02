function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          Swarnavo Daw
        </h1>

        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;