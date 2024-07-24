export function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-800 text-white py-2 h-10">
      <div className="relative" style={{ paddingLeft: "7%", width: "100%" }}>
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
