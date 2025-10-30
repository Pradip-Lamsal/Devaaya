import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Dubai: From Burj Khalifa to Desert Safari",
    excerpt:
      "Discover the best attractions, dining spots, and hidden gems in Dubai. Our comprehensive guide covers everything you need to know for your UAE adventure.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    category: "Destination Guide",
    readTime: "8 min read",
    date: "October 25, 2024",
    author: "Travel Team",
  },
  {
    id: 2,
    title: "Maldives on a Budget: Affordable Paradise for Nepalese Travelers",
    excerpt:
      "Think Maldives is too expensive? Think again! Learn how to experience this tropical paradise without breaking the bank with our insider tips.",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop",
    category: "Budget Travel",
    readTime: "6 min read",
    date: "October 20, 2024",
    author: "Budget Expert",
  },
  {
    id: 3,
    title:
      "European Visa Guide for Nepalese Citizens: Everything You Need to Know",
    excerpt:
      "Navigate the European visa process with confidence. Our step-by-step guide covers Schengen visa requirements, documents, and tips for approval.",
    image:
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=600&h=400&fit=crop",
    category: "Travel Tips",
    readTime: "12 min read",
    date: "October 15, 2024",
    author: "Visa Specialist",
  },
  {
    id: 4,
    title: "Thailand Street Food: A Culinary Journey for Adventurous Nepalis",
    excerpt:
      "Explore Thailand&apos;s vibrant street food scene. From pad thai to mango sticky rice, discover the flavors that make Thai cuisine so special.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    category: "Food & Culture",
    readTime: "7 min read",
    date: "October 10, 2024",
    author: "Food Explorer",
  },
  {
    id: 5,
    title: "Best Time to Visit Turkey: Weather, Festivals, and Seasonal Guide",
    excerpt:
      "Plan your Turkish adventure with our seasonal guide. Learn about weather patterns, cultural festivals, and the best times for sightseeing.",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop",
    category: "Travel Planning",
    readTime: "9 min read",
    date: "October 5, 2024",
    author: "Destination Expert",
  },
  {
    id: 6,
    title: "Travel Insurance for International Trips: Protecting Your Journey",
    excerpt:
      "Don&apos;t let unexpected events ruin your dream vacation. Learn about travel insurance options and why it&apos;s essential for international travel.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    category: "Travel Safety",
    readTime: "5 min read",
    date: "September 30, 2024",
    author: "Safety Expert",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Travel Insights & Guides
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay informed with our latest travel tips, destination guides, and
            expert insights to make your journey unforgettable.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Articles
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
          </Link>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {blogPosts[0].category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-4">
                    <span>{blogPosts[0].author}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                >
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
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1, 6).map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors text-sm"
                >
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              Stay Updated with Travel Tips
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest travel guides, visa
              updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
