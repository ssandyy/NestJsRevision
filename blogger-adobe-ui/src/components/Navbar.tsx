"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                Blogger<span className="text-blue-600">Adobe</span>
                            </span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <Link href="/" className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">Home</Link>
                                <Link href="/blog" className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">Blog</Link>
                                <Link href="/about" className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">About</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800"
                    >
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">Home</Link>
                            <Link href="/blog" className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">Blog</Link>
                            <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">About</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
