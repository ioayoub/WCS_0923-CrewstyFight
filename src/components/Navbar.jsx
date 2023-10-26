function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-4 bg-pink-500 text-white">
      <span className="block my-auto">CrewSty Fight</span>
      <ul className="flex flex-row gap-4">
        <li>Accueil</li>
        <li>Combattants</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
