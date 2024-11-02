import { Header } from './components/header.jsx'
import { Navigation } from './components/navigation.jsx'
import { BlogPostList } from './components/blog-post-list.jsx'
import { Footer } from './components/footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Navigation className="md:col-span-1" />
          <BlogPostList className="md:col-span-3" />
        </div>
      </main>
      <Footer />
    </div>
  )
}