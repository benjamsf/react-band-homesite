export function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}