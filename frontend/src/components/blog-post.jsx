
  export function BlogPost({ title, excerpt }) {
    return (
      <article className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <a href="#" className="text-blue-600 hover:underline">Read more</a>
        </div>
      </article>
    )
  }