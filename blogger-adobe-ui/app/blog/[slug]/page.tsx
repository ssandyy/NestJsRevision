import { MOCK_POSTS } from "../../../src/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = MOCK_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white dark:bg-black font-sans pb-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors mb-8"
                >
                    <ArrowLeft size={16} />
                    Back to all stories
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                        <span>{post.date}</span>
                        <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <span>{post.author}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-4 border-blue-600 pl-4 py-1">
                        {post.excerpt}
                    </p>
                </header>

                <div className="aspect-video w-full overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 mb-12 shadow-xl">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6 whitespace-pre-wrap">
                        {post.content}
                    </p>
                    {/* Add more placeholder content to make it look like a full post */}
                    <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-6">Deep Dive into the Topic</h2>
                    <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                </div>
            </div>
        </article>
    );
}
