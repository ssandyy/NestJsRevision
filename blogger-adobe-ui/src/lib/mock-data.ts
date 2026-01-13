export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    slug: string;
    image: string;
}

export const MOCK_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "Mastering Next.js 16 and Tailwind CSS 4",
        excerpt: "Explore the latest features of Next.js 16 and how Tailwind CSS 4 simplifies your styling workflow.",
        content: "Next.js 16 introduces several improvements to performance and developer experience. Coupled with Tailwind CSS 4, which removes the need for PostCSS and direct configuration in many cases, building modern web apps has never been faster. In this post, we delve deep into the new engine and how it impacts your daily development...",
        date: "Jan 12, 2026",
        author: "Jane Doe",
        slug: "mastering-nextjs-16",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "The Future of AI in Web Development",
        excerpt: "How agentic AI models are changing the way software engineers write and debug code.",
        content: "Agentic AI is no longer a futuristic concept. It's here, and it's helping developers automate repetitive tasks, refactor complex codebases, and even suggest architecture improvements. But what does this mean for the role of a traditional software engineer?",
        date: "Jan 10, 2026",
        author: "John Smith",
        slug: "future-of-ai-web-dev",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Clean Code Principles for React 19",
        excerpt: "Stay ahead of the curve with React 19 best practices and the new compiler capabilities.",
        content: "React 19 brings the long-awaited compiler, which automatically optimizes your components. This shifts the focus back to writing clean, readable code while the compiler handles performance. Let's look at some patterns that are more relevant than ever.",
        date: "Jan 8, 2026",
        author: "Alice Johnson",
        slug: "clean-code-react-19",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
    }
];
