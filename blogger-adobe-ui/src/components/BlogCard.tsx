"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost } from "../lib/mock-data";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
        >
            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {post.title}</span>
            </Link>
            <div className="aspect-video w-full overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {post.excerpt}
                </p>
            </div>
        </motion.div>
    );
}
