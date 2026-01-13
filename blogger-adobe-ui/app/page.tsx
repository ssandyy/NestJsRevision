import Link from "next/link";
import { MOCK_POSTS } from "../src/lib/mock-data";
import BlogCard from "../src/components/BlogCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
                Your Story, <span className="text-blue-600"> Styled.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
                A premium blogging experience designed for creators. Share your thoughts, tutorials, and innovations with a community that cares about quality.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/blog"
                  className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                >
                  Start Reading
                </Link>
                <Link
                  href="/about"
                  className="rounded-full px-8 py-3.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 ring-1 ring-zinc-200 dark:ring-zinc-800 hover:ring-zinc-300 dark:hover:ring-zinc-700 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
                alt="Creative Workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Latest Stories</h2>
            <Link href="/blog" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
              View all posts &raquo;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
