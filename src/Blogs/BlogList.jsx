import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import api from "../Components/Api";
import FadeUp from "../Components/Fadeup";

const MEDIA_URL = import.meta.env.VITE_MEDIA_API_URL;

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

const calculateReadTime = (description) => {
    const words = description?.split(" ").length || 0;
    return Math.max(1, Math.ceil(words / 200));
};

// Skeleton Components
const FeaturedSkeleton = () => (
    <div className="rounded-3xl overflow-hidden bg-slate-800/50 border border-white/10">
        <div className="grid lg:grid-cols-2">
            <div className="h-64 lg:h-[400px] bg-slate-700/50" />
            <div className="p-8 lg:p-12 space-y-6">
                <div className="h-6 bg-slate-700/50 rounded-full w-32" />
                <div className="h-8 bg-slate-700/50 rounded-lg w-full" />
                <div className="h-8 bg-slate-700/50 rounded-lg w-3/4" />
                <div className="h-4 bg-slate-700/30 rounded w-full" />
                <div className="h-4 bg-slate-700/30 rounded w-5/6" />
                <div className="h-12 bg-slate-700/50 rounded-full w-40" />
            </div>
        </div>
    </div>
);

const BlogCardSkeleton = () => (
    <div className="rounded-2xl overflow-hidden bg-slate-800/30 border border-white/10">
        <div className="h-56 bg-slate-700/50" />
        <div className="p-6 space-y-4">
            <div className="h-5 bg-slate-700/50 rounded-full w-20" />
            <div className="h-6 bg-slate-700/50 rounded w-full" />
            <div className="h-6 bg-slate-700/50 rounded w-2/3" />
            <div className="h-3 bg-slate-700/30 rounded w-full" />
            <div className="h-3 bg-slate-700/30 rounded w-5/6" />
        </div>
    </div>
);

// Background
const BackgroundEffects = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {" "}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />{" "}
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl animate-pulse animation-delay-2000" />{" "}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-500/20 blur-3xl" />{" "}
    </div>
);

// Header
const PageHeader = () => (
    <div className="text-center mb-16 lg:mb-20 relative z-10">
        <FadeUp>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-semibold tracking-wider text-blue-300 uppercase bg-blue-500/10 border border-blue-400/20 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Our Latest Articles
            </div>
        </FadeUp>

        <FadeUp delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                Discover Our
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Blog & Insights
                </span>
            </h1>
        </FadeUp>

        <FadeUp delay={200}>
            <p className="text-lg md:text-xl text-slate-400 w-full mx-auto leading-relaxed">
                Explore our collection of articles, tutorials, and insights.
            </p>
        </FadeUp>
    </div>
);

// Featured Card
const FeaturedBlogCard = ({ blog, imageLoaded, onImageLoad }) => (
    <FadeUp>
        <Link
            to={`/blogs/${blog.slug}`}
            className="group block rounded-3xl overflow-hidden bg-slate-800/50 border border-white/10 hover:border-white/20 transition-all duration-300"
        >
            <div className="absolute top-6 left-6 z-20">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full">
                    <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                </span>
            </div>

            <div className="grid lg:grid-cols-2">
                <div className="relative h-64 sm:h-80 lg:h-[400px] overflow-hidden">
                    {!imageLoaded[blog.id] && (
                        <div className="absolute inset-0 bg-slate-700" />
                    )}
                    {blog.cover_image && (
                        <img
                            src={`${MEDIA_URL}${blog.cover_image}`}
                            alt={blog.title}
                            onLoad={() => onImageLoad(blog.id)}
                            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                                imageLoaded[blog.id]
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/80" />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                            Recent
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                        {blog.title}
                    </h2>

                    <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-6 line-clamp-3">
                        {blog.short_description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8 py-2">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            {formatDate(blog.created_at)}
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {calculateReadTime(blog.short_description)} min read
                        </div>
                    </div>

                    <div>
                        <span className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full group-hover:gap-4 transition-all duration-300">
                            Read Full Article
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    </FadeUp>
);

// Blog Card
const BlogCard = ({ blog, index, imageLoaded, onImageLoad }) => (
    <FadeUp delay={50 + index * 30}>
        <Link
            to={`/blogs/${blog.slug}`}
            className="group block h-full rounded-2xl overflow-hidden bg-slate-800/40 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="relative h-56 overflow-hidden">
                {!imageLoaded[blog.id] && (
                    <div className="absolute inset-0 bg-slate-700" />
                )}
                {blog.cover_image && (
                    <img
                        src={`${MEDIA_URL}${blog.cover_image}`}
                        alt={blog.title}
                        onLoad={() => onImageLoad(blog.id)}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                            imageLoaded[blog.id] ? "opacity-100" : "opacity-0"
                        }`}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />

                <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-full">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        {calculateReadTime(blog.short_description)} min
                    </span>
                </div>

            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    {formatDate(blog.created_at)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                    {blog.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                    {blog.short_description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        Read More
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    </FadeUp>
);

// Horizontal Card
const HorizontalBlogCard = ({ blog, index, imageLoaded, onImageLoad }) => (
    <FadeUp delay={50 + index * 30}>
        <Link
            to={`/blogs/${blog.slug}`}
            className="group block rounded-2xl overflow-hidden bg-slate-800/40 border border-white/10 hover:border-white/20 transition-all duration-300"
        >
            <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/3 h-48 sm:h-auto min-h-[160px] overflow-hidden">
                    {!imageLoaded[blog.id] && (
                        <div className="absolute inset-0 bg-slate-700" />
                    )}
                    {blog.cover_image && (
                        <img
                            src={`${MEDIA_URL}${blog.cover_image}`}
                            alt={blog.title}
                            onLoad={() => onImageLoad(blog.id)}
                            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                                imageLoaded[blog.id]
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    )}
                </div>

                <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                            Insights
                        </span>
                        <span className="text-slate-500 text-sm">
                            {formatDate(blog.created_at)}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
                        {blog.title}
                    </h3>

                    <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                        {blog.short_description}
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-500">
                            {calculateReadTime(blog.short_description)} min read
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-purple-400">
                            Continue
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    </FadeUp>
);

// Empty State
const EmptyState = () => (
    <FadeUp>
        <div className="text-center py-20 px-4">
            <div className="w-32 h-32 mx-auto mb-8 bg-slate-800 rounded-full flex items-center justify-center border border-white/10">
                <svg
                    className="w-16 h-16 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
                No Articles Yet
            </h3>
            <p className="text-slate-400 text-lg max-w-md mx-auto">
                We're working on creating amazing content for you. Check back
                soon!
            </p>
        </div>
    </FadeUp>
);

// Main Component
const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState({});

    useEffect(() => {
        api.get("blogs/")
            .then((res) => {
                setBlogs(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleImageLoad = (id) => {
        setImageLoaded((prev) => ({ ...prev, [id]: true }));
    };

    const { featuredBlog, regularBlogs } = useMemo(() => {
        if (blogs.length === 0) return { featuredBlog: null, regularBlogs: [] };
        return {
            featuredBlog: blogs[0],
            regularBlogs: blogs.slice(1),
        };
    }, [blogs]);

    return (
        <div className="w-full relative min-h-screen py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <BackgroundEffects />

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <PageHeader />

                {loading && (
                    <div className="space-y-12">
                        <FeaturedSkeleton />
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[...Array(6)].map((_, i) => (
                                <BlogCardSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                )}

                {!loading && blogs.length > 0 && (
                    <div className="space-y-16">
                        {featuredBlog && (
                            <section>
                                <FadeUp>
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 py-5">
                                        <span className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
                                        Featured Article
                                    </h2>
                                </FadeUp>
                                <FeaturedBlogCard
                                    blog={featuredBlog}
                                    imageLoaded={imageLoaded}
                                    onImageLoad={handleImageLoad}
                                />
                            </section>
                        )}

                        {regularBlogs.length > 0 && (
                            <section>
                                <FadeUp>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 py-5">
                                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                                            Latest Articles
                                        </h2>
                                        <span className="text-sm text-slate-400">
                                            {regularBlogs.length} articles
                                        </span>
                                    </div>
                                </FadeUp>

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {regularBlogs
                                        .slice(0, 6)
                                        .map((blog, index) => (
                                            <BlogCard
                                                key={blog.id}
                                                blog={blog}
                                                index={index}
                                                imageLoaded={imageLoaded}
                                                onImageLoad={handleImageLoad}
                                            />
                                        ))}
                                </div>
                            </section>
                        )}

                        {regularBlogs.length > 6 && (
                            <section>
                                <FadeUp>
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                        <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                                        More to Explore
                                    </h2>
                                </FadeUp>

                                <div className="grid gap-6 lg:grid-cols-2">
                                    {regularBlogs
                                        .slice(6)
                                        .map((blog, index) => (
                                            <HorizontalBlogCard
                                                key={blog.id}
                                                blog={blog}
                                                index={index}
                                                imageLoaded={imageLoaded}
                                                onImageLoad={handleImageLoad}
                                            />
                                        ))}
                                </div>
                            </section>
                        )}
                    </div>
                )}

                {!loading && blogs.length === 0 && <EmptyState />}
            </div>
        </div>
    );
};

export default BlogList;
