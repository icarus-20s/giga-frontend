import React, { useEffect, useState, useMemo } from "react";
import parse, { domToReact } from "html-react-parser";
import { useParams, Link } from "react-router-dom";
import api from "../Components/Api";
import Fadeup from "../Components/Fadeup";
import { FaD } from "react-icons/fa6";

const MEDIA_URL = (() => {
    const raw = import.meta.env.VITE_MEDIA_API_URL || "";
    return raw.endsWith("/") ? raw : raw + "/";
})();

const isAbsolute = (url = "") =>
    /^(?:[a-z]+:)?\/\//i.test(url) ||
    url.startsWith("data:") ||
    url.startsWith("blob:");

const fixRelativeMediaUrls = (htmlString, mediaUrl) => {
    if (!htmlString) return htmlString;
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");

        const fixUrl = (url) => {
            if (!url || isAbsolute(url)) return url;
            return mediaUrl + (url.startsWith("/") ? url.slice(1) : url);
        };

        const fixSrcset = (srcset) => {
            if (!srcset) return srcset;
            return srcset
                .split(",")
                .map((part) => {
                    const [url, descriptor] = part.trim().split(/\s+/, 2);
                    if (!url) return "";
                    const fixed = fixUrl(url);
                    return descriptor ? `${fixed} ${descriptor}` : fixed;
                })
                .filter(Boolean)
                .join(", ");
        };

        doc.querySelectorAll("img").forEach((img) => {
            const src = img.getAttribute("src");
            if (src) img.setAttribute("src", fixUrl(src));
            const srcset = img.getAttribute("srcset");
            if (srcset) img.setAttribute("srcset", fixSrcset(srcset));
            if (!img.getAttribute("loading"))
                img.setAttribute("loading", "lazy");
        });

        doc.querySelectorAll("source").forEach((source) => {
            const src = source.getAttribute("src");
            if (src) source.setAttribute("src", fixUrl(src));
            const srcset = source.getAttribute("srcset");
            if (srcset) source.setAttribute("srcset", fixSrcset(srcset));
        });

        let headingIndex = 0;
        doc.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
            if (!heading.id) {
                const baseSlug = (heading.textContent || "")
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, "")
                    .trim()
                    .replace(/\s+/g, "-");
                heading.id = baseSlug || `heading-${headingIndex++}`;
            }
        });

        return doc.body.innerHTML;
    } catch (e) {
        console.error("Error parsing HTML:", e);
        return htmlString;
    }
};

const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

const calculateReadTime = (content) => {
    const text = content?.replace(/<[^>]*>/g, "") || "";
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
};

const BackgroundEffects = () => (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-full -translate-x-1/2 bg-cyan-500/15 blur-3xl" />
    </div>
);

const BlogDetailSkeleton = () => (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-4">
            <div className="h-4 w-24 rounded-full bg-slate-700/50" />
            <div className="h-10 w-full rounded-lg bg-slate-700/50" />
            <div className="h-10 w-3/4 rounded-lg bg-slate-700/50" />
        </div>
        <div className="mb-10 h-72 rounded-2xl bg-slate-700/50 sm:h-96" />
        <div className="space-y-3">
            {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-4 w-full rounded bg-slate-700/30" />
            ))}
        </div>
    </div>
);

const NotFoundState = () => (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="px-4 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
                Article Not Found
            </h2>
            <Link
                to="/blogs"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
                <span className="text-lg leading-none">←</span>
                <span>Back to Blogs</span>
            </Link>
        </div>
    </main>
);

const ShareButton = ({ icon, label, onClick, className }) => (
    <button
        type="button"
        onClick={onClick}
        aria-label={label}
        title={label}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-slate-300 transition-colors duration-200 hover:border-white/30 hover:text-white ${className}`}
    >
        {icon}
    </button>
);

/* ---------- Table of Contents (H2/H3) ---------- */

const TableOfContents = ({ content }) => {
    const [activeId, setActiveId] = useState(null);

    const headings = useMemo(() => {
        if (!content) return [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");
        const elements = doc.querySelectorAll("h2, h3");

        return Array.from(elements).map((el, index) => {
            let id = el.id;
            if (!id) {
                const baseSlug = (el.textContent || "")
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, "")
                    .trim()
                    .replace(/\s+/g, "-");
                id = baseSlug || `heading-${index}`;
            }
            return {
                id,
                text: el.textContent || "",
                level: el.tagName.toLowerCase(),
            };
        });
    }, [content]);

    useEffect(() => {
        if (!headings.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-120px 0px -70% 0px",
                threshold: 0.1,
            }
        );

        headings.forEach((heading) => {
            const el = document.getElementById(heading.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length < 2) return null;

    return (
        <nav
            aria-label="Table of contents"
            className="sticky top-28 text-sm text-slate-300"
        >
            <div className="overflow-hidden rounded-2xl border border-blue-500/25 bg-slate-950/85 p-5 shadow-sm backdrop-blur">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    On this page
                </div>
                <ol className="space-y-2">
                    {headings.slice(0, 30).map((heading) => {
                        const isActive = heading.id === activeId;
                        const isH2 = heading.level === "h2";

                        const baseClasses =
                            "block border-l pl-3 text-xs transition-colors duration-150";
                        const levelClasses = isH2
                            ? "font-medium"
                            : "ml-3 text-[11px]";
                        const stateClasses = isActive
                            ? "border-blue-500 text-blue-300"
                            : "border-transparent text-slate-400 hover:text-slate-100";

                        return (
                            <li key={heading.id}>
                                <a
                                    href={`#${heading.id}`}
                                    className={`${baseClasses} ${levelClasses} ${stateClasses}`}
                                >
                                    <span className="line-clamp-2">
                                        {heading.text}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

/* ---------- CKEditor-aware Content Rendering ---------- */
const getAlignmentClass = (attribs = {}) => {
    const classes = attribs.class || "";
    const style = attribs.style || "";

    if (classes.includes("text-center") || style.includes("text-align:center"))
        return "text-center";
    if (classes.includes("text-right") || style.includes("text-align:right"))
        return "text-right";
    if (
        classes.includes("text-justify") ||
        style.includes("text-align:justify")
    )
        return "text-justify";

    return "";
};

const BlogContent = ({ content }) => {
    if (!content) return null;

    return (
        <section
            aria-label="Article content"
            className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:no-underline"
        >
            {parse(content, {
                replace: (domNode) => {
                    if (!domNode.attribs) return;

                    const { name, attribs, children } = domNode;
                    const { id } = attribs;
                    const alignClass = getAlignmentClass(attribs);

                    switch (name) {
                        /* ----- Headings ----- */
                        case "h1":
                        case "h2": {
                            return (
                                <h2
                                    id={id}
                                    className={`py-3 mt-12 mb-5 border-l-4 border-blue-500/70 pl-4 text-2xl font-semibold tracking-tight text-cyan-300 sm:text-3xl ${alignClass}`}
                                >
                                    {domToReact(children)}
                                </h2>
                            );
                        }
                        case "h3": {
                            return (
                                <h3
                                    id={id}
                                    className={`mt-9 mb-3 text-xl font-semibold text-cyan-200 ${alignClass}`}
                                >
                                    {domToReact(children)}
                                </h3>
                            );
                        }
                        case "h4": {
                            return (
                                <h4
                                    id={id}
                                    className={`mt-8 mb-2 text-lg font-semibold text-slate-100 ${alignClass}`}
                                >
                                    {domToReact(children)}
                                </h4>
                            );
                        }
                        case "h5":
                        case "h6": {
                            return (
                                <h5
                                    id={id}
                                    className={`py-3 mt-6 mb-1 text-base font-semibold uppercase tracking-wide text-slate-300 ${alignClass}`}
                                >
                                    {domToReact(children)}
                                </h5>
                            );
                        }

                        /* ----- Paragraphs & lists ----- */
                        case "p": {
                            return (
                                <p
                                    id={id}
                                    className={`mt-2 mb-4 text-[15px] leading-relaxed text-slate-200 ${alignClass}`}
                                >
                                    {domToReact(children)}
                                </p>
                            );
                        }

                        case "ul": {
                            return (
                                <ul
                                    id={id}
                                    className={`px-4 mt-3 mb-4 ml-6 list-disc space-y-2 text-[15px] text-slate-200 ${alignClass}`}
                                >
                                    {domToReact(children)}
                                </ul>
                            );
                        }

                        case "ol": {
                            return (
                                <ol
                                    id={id}
                                    className={`px-4 mt-3 mb-4 ml-6 list-decimal space-y-2 text-[15px] text-slate-200 ${alignClass}`}
                                >
                                    {domToReact(children)}
                                </ol>
                            );
                        }

                        case "li": {
                            return (
                                <li id={id} className="pl-1">
                                    {domToReact(children)}
                                </li>
                            );
                        }

                        /* ----- Links ----- */
                        case "a": {
                            const href = attribs.href || "#";
                            const isExternal = /^https?:\/\//i.test(href);
                            return (
                                <a
                                    id={id}
                                    href={href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={
                                        isExternal
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="font-medium text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline"
                                >
                                    {domToReact(children)}
                                </a>
                            );
                        }

                        /* ----- Figures (CKEditor images & tables) ----- */
                        case "figure": {
                            const className = attribs.class || "";
                            const hasTableChild =
                                Array.isArray(children) &&
                                children.some((c) => c.name === "table");
                            const isTableFigure =
                                className.includes("table") || hasTableChild;

                            if (isTableFigure) {
                                return (
                                    <figure
                                        id={id}
                                        className="my-8 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80"
                                    >
                                        <div className="overflow-x-auto">
                                            {domToReact(children)}
                                        </div>
                                        {Array.isArray(children) &&
                                            children
                                                .filter(
                                                    (c) =>
                                                        c.name === "figcaption"
                                                )
                                                .map((cap, i) => (
                                                    <figcaption
                                                        key={i}
                                                        className="border-t border-slate-800/80 px-4 py-3 text-xs text-slate-400"
                                                    >
                                                        {domToReact(
                                                            cap.children
                                                        )}
                                                    </figcaption>
                                                ))}
                                    </figure>
                                );
                            }
                            return;
                        }

                        /* ----- Tables (standalone or inside figure) ----- */
                        case "table": {
                            return (
                                <div className="my-8 overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-950/80">
                                    <table
                                        id={id}
                                        className="min-w-full border-collapse text-left text-sm text-slate-200"
                                    >
                                        {domToReact(children)}
                                    </table>
                                </div>
                            );
                        }
                        case "thead": {
                            return (
                                <thead id={id} className="bg-slate-900/80">
                                    {domToReact(children)}
                                </thead>
                            );
                        }
                        case "tbody": {
                            return (
                                <tbody
                                    id={id}
                                    className="divide-y divide-slate-800/80"
                                >
                                    {domToReact(children)}
                                </tbody>
                            );
                        }
                        case "tr": {
                            return (
                                <tr
                                    id={id}
                                    className="transition-colors duration-150 even:bg-slate-900/40 hover:bg-slate-900/80"
                                >
                                    {domToReact(children)}
                                </tr>
                            );
                        }
                        case "th": {
                            return (
                                <th
                                    id={id}
                                    className="border-b border-slate-800/80 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300"
                                >
                                    {domToReact(children)}
                                </th>
                            );
                        }
                        case "td": {
                            return (
                                <td
                                    id={id}
                                    className="px-4 py-3 text-[13px] text-slate-200 align-top"
                                >
                                    {domToReact(children)}
                                </td>
                            );
                        }

                        /* ----- Quotes, code, separators ----- */
                        case "blockquote": {
                            return (
                                <blockquote
                                    id={id}
                                    className="my-8 border-l-4 border-sky-500/80 bg-slate-950/70 px-5 py-4 text-sm italic text-slate-200"
                                >
                                    {domToReact(children)}
                                </blockquote>
                            );
                        }
                        case "pre": {
                            return (
                                <pre
                                    id={id}
                                    className="my-6 overflow-x-auto rounded-xl bg-slate-950/95 p-4 text-sm leading-relaxed text-slate-100"
                                >
                                    <code>{domToReact(children)}</code>
                                </pre>
                            );
                        }
                        case "code": {
                            if (domNode.parent && domNode.parent.name === "pre")
                                return;
                            return (
                                <code
                                    id={id}
                                    className="rounded bg-slate-950/80 px-1.5 py-0.5 text-[12px] text-sky-200"
                                >
                                    {domToReact(children)}
                                </code>
                            );
                        }
                        case "hr": {
                            return (
                                <hr
                                    id={id}
                                    className="my-10 border-t border-dashed border-slate-700/80"
                                />
                            );
                        }

                        /* ----- Inline formatting ----- */
                        case "strong":
                        case "b": {
                            return (
                                <strong
                                    id={id}
                                    className="font-semibold text-slate-50"
                                >
                                    {domToReact(children)}
                                </strong>
                            );
                        }
                        case "em":
                        case "i": {
                            return (
                                <em id={id} className="italic text-slate-200">
                                    {domToReact(children)}
                                </em>
                            );
                        }
                        case "u": {
                            return (
                                <u
                                    id={id}
                                    className="underline decoration-sky-400/70 underline-offset-2"
                                >
                                    {domToReact(children)}
                                </u>
                            );
                        }
                        case "s":
                        case "del": {
                            return (
                                <span
                                    id={id}
                                    className="line-through decoration-slate-500/80"
                                >
                                    {domToReact(children)}
                                </span>
                            );
                        }

                        default:
                            return;
                    }
                },
            })}
        </section>
    );
};
const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setImageLoaded(false);

        const fetchBlog = async () => {
            try {
                const res = await api.get(`blogs/${slug}/`);
                if (isMounted) setBlog(res.data || null);
            } catch (err) {
                console.error("Error fetching blog:", err);
                if (isMounted) setBlog(null);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchBlog();

        return () => {
            isMounted = false;
        };
    }, [slug]);

    const fixedContent = useMemo(() => {
        if (!blog?.content) return "";
        return fixRelativeMediaUrls(blog.content, MEDIA_URL);
    }, [blog?.content]);

    const readTime = useMemo(
        () => (blog?.content ? calculateReadTime(blog.content) : null),
        [blog?.content]
    );

    const coverImageUrl = useMemo(() => {
        if (!blog?.cover_image) return null;
        return isAbsolute(blog.cover_image)
            ? blog.cover_image
            : `${MEDIA_URL}${blog.cover_image.replace(/^\//, "")}`;
    }, [blog?.cover_image]);

    const handleShare = (platform) => {
        if (!blog) return;
        const url = window.location.href;
        const title = blog.title || "";

        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                url
            )}&text=${encodeURIComponent(title)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                url
            )}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
            )}`,
        };

        const shareUrl = shareUrls[platform];
        if (shareUrl) {
            window.open(shareUrl, "_blank", "width=600,height=400");
        }
    };

    const copyLink = async () => {
        const href = window.location.href;
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(href);
            }
        } catch (e) {
            console.error("Failed to copy link:", e);
        }
    };

    if (loading) {
        return (
            <div className="relative min-h-screen bg-slate-950 text-slate-100">
                <BackgroundEffects />
                <BlogDetailSkeleton />
            </div>
        );
    }

    if (!blog) return <NotFoundState />;

    return (
        <main className="relative min-h-screen bg-slate-950 text-slate-100">
            <BackgroundEffects />

            <article className="relative z-10">
                {/* Hero Header */}
                <header className="border-b border-slate-900/80 bg-gradient-to-b from-slate-950/80 via-slate-950 to-slate-950/90">
                    <div className="mx-auto w-full px-4 pb-12 pt-20 sm:px-6 lg:pb-16 lg:pt-24">
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                            {/* Left: Back link + Meta + Title + Author + Share */}
                            <Fadeup delay={0.1}>
                                <div className="w-full max-w-4xl">
                                    <Link
                                        to="/blogs"
                                        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                                    >
                                        <span className="text-lg leading-none">
                                            Back to Blogs
                                        </span>
                                    </Link>

                                    <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
                                        <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">
                                            Article
                                        </span>
                                        <span>
                                            {formatDate(blog.created_at)}
                                        </span>
                                        {readTime && (
                                            <span className="text-slate-500">
                                                • {readTime} min read
                                            </span>
                                        )}
                                    </div>

                                    <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                                        {blog.title}
                                    </h1>

                                    <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                                        <div className="text-sm text-slate-400">
                                            Published by:{" "}
                                            <span className="font-medium text-slate-200">
                                                {blog.author_name ||
                                                    "Not found"}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                                Share
                                            </span>
                                            <ShareButton
                                                onClick={() =>
                                                    handleShare("twitter")
                                                }
                                                label="Share on X"
                                                icon="X"
                                            />
                                            <ShareButton
                                                onClick={() =>
                                                    handleShare("linkedin")
                                                }
                                                label="Share on LinkedIn"
                                                icon="in"
                                            />
                                            <ShareButton
                                                onClick={() =>
                                                    handleShare("facebook")
                                                }
                                                label="Share on Facebook"
                                                icon="Fb"
                                            />
                                            <ShareButton
                                                onClick={copyLink}
                                                label="Copy link"
                                                icon="Copy"
                                                className="hidden sm:inline-flex"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Fadeup>

                            {/* Desktop Hero Image */}
                            {coverImageUrl && (
                                <Fadeup delay={0.4}>
                                    <div className="hidden lg:block max-w-sm shrink-0">
                                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl">
                                            <img
                                                src={coverImageUrl}
                                                alt={blog.title}
                                                className="aspect-[4/3] w-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </Fadeup>
                            )}
                        </div>
                    </div>
                </header>

                {/* Mobile/Tablet Cover Image */}
                {coverImageUrl && (
                    <Fadeup delay={0.3}>
                        <section className="lg:hidden -mt-8 mb-12 px-4 sm:px-6">
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-xl">
                                <img
                                    src={coverImageUrl}
                                    alt={blog.title}
                                    className="w-full max-h-[520px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </section>
                    </Fadeup>
                )}

                {/* Main Content + Table of Contents */}
                <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:pt-12">
                    <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1fr_280px]">
                        {/* Blog Content with Staggered Animations */}
                        <div className="min-w-0">
                            <BlogContent content={fixedContent} />
                        </div>

                        {/* Table of Contents - Desktop Only */}
                        <aside className="hidden xl:block">
                            <Fadeup delay={0.6}>
                                <TableOfContents content={fixedContent} />
                            </Fadeup>
                        </aside>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default BlogDetail;
