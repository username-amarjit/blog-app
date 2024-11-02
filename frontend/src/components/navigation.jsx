export function Navigation({className} ) {
  return (
    <nav className={`space-y-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-600 hover:underline">Technology</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Travel</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Food</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Lifestyle</a></li>
      </ul>
    </nav>
  )
}