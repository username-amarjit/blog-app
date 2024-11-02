import { BlogPost } from './blog-post.jsx'

export function BlogPostList({ className }) {
  // You'll replace this with actual data fetching logic
  const posts = [
    { id: 1, title: "First Blog Post", excerpt: "This is the first blog post." },
    { id: 2, title: "Second Blog Post", excerpt: "This is the second blog post." },
    { id: 3, title: "Third Blog Post", excerpt: "This is the third blog post." },
  ]

  return (
    <div className={`space-y-6 ${className}`}>
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} excerpt={post.excerpt} />
      ))}
    </div>
  )
}