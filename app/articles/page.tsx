import Image from "next/image";
import Navbar from "../components/includes/Navbar";
import { Calendar, Tag } from "lucide-react";
import Footer from "../components/includes/Footer";

const featuredPost = {
  id: 1,
  title: "Why You Need a VPN in 2025",
  author: "Alex Carter",
  date: "August 10, 2025",
  category: "Privacy & Security",
  image:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1", // placeholder image
  excerpt:
    "In a world where data breaches are more common than ever, a VPN is no longer optional. Learn how it keeps your online life private and secure.",
  content:
    "Full article content would go here. You could include multiple paragraphs, images, and even embedded videos for richer storytelling.",
  tags: ["VPN", "Privacy", "Security"],
};

const blogs = [
  {
    id: 1,
    title: "The Rise of Secure VPNs",
    subtitle:
      "Exploring how modern VPNs protect your privacy in an increasingly digital world.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1",
    created_at: "2025-08-01T10:30:00Z",
  },
  {
    id: 2,
    title: "5 Tips to Speed Up Your VPN Connection",
    subtitle:
      "Boost your VPN speed with these simple yet effective optimization techniques.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1",
    created_at: "2025-08-05T14:15:00Z",
  },
  {
    id: 3,
    title: "How VPNs Bypass Geo-Restrictions",
    subtitle:
      "Learn the technology behind VPNs that allows access to blocked content worldwide.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1",
    created_at: "2025-08-10T09:45:00Z",
  },
  {
    id: 4,
    title: "The Rise of Secure VPNs",
    subtitle:
      "Exploring how modern VPNs protect your privacy in an increasingly digital world.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1",
    created_at: "2025-08-01T10:30:00Z",
  },
  {
    id: 5,
    title: "5 Tips to Speed Up Your VPN Connection",
    subtitle:
      "Boost your VPN speed with these simple yet effective optimization techniques.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1",
    created_at: "2025-08-05T14:15:00Z",
  },
  {
    id: 6,
    title: "How VPNs Bypass Geo-Restrictions",
    subtitle:
      "Learn the technology behind VPNs that allows access to blocked content worldwide.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1",
    created_at: "2025-08-10T09:45:00Z",
  },
  {
    id: 7,
    title: "The Rise of Secure VPNs",
    subtitle:
      "Exploring how modern VPNs protect your privacy in an increasingly digital world.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1",
    created_at: "2025-08-01T10:30:00Z",
  },
  {
    id: 8,
    title: "5 Tips to Speed Up Your VPN Connection",
    subtitle:
      "Boost your VPN speed with these simple yet effective optimization techniques.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/54/4c/photo1jpg.jpg?w=900&h=500&s=1",
    created_at: "2025-08-05T14:15:00Z",
  },
];

export default function ArticlesPage() {
  return (
    <section className="special_bg bg-[radial-gradient(ellipse_at_center,_#0B172F,_#0a0f1c)] ">
      <Navbar />
      <section className="bottom flex flex-col items-center w-full justify-center h-full">
        <section className="featured hover:cursor-pointer rounded-xl w-full max-w-[80%] flex items-stretch overflow-hidden bg-neutral-900/20 backdrop-blur-2xl border border-neutral-600">
          {/* LEFT SIDE (Text) */}
          <div className="left flex flex-col justify-between p-10 w-2/3">
            <div className="top">
              <p className="text-sm text-neutral-400 mb-2">Featured Post</p>
              <h1 className="text-4xl font-extrabold text-white leading-tight">
                {featuredPost.title}
              </h1>
              <p className="text-lg text-neutral-300 mt-2">
                {featuredPost.excerpt}
              </p>
            </div>

            <div className="bottom mt-6">
              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
                <span className="flex items-center gap-3">
                  <Calendar size={20} /> {featuredPost.date}
                </span>
              </div>

              <div className="flex gap-2 flex-wrap">
                {featuredPost.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-neutral-800 text-neutral-200 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Image) */}
          <div className="right w-1/3">
            <Image
              src={featuredPost.image}
              alt="featured_article_image"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
        </section>

        <div className="mid mt-20 mb-5">
          <div className="flex gap-8 bg-[#080c15] p-4 text-white rounded-2xl">
            <button className="px-4 py-2 rounded-md bg-[#121c34] font-semibold">
              All
            </button>
            <button className="px-4 py-2 rounded-md hover:bg-[#121c34] transition">
              Product
            </button>
            <button className="px-4 py-2 rounded-md hover:bg-[#121c34] transition">
              Engineering
            </button>
            <button className="px-4 py-2 rounded-md hover:bg-[#121c34] transition">
              Company
            </button>
          </div>
        </div>
        <section className="articles w-full flex items-center justify-center pb-20">
          <div className="bottom max-w-[80%] mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {blogs.map((blog) => (
              <div
                // onClick={() => handleRedirect(blog.id)}
                key={blog.id}
                className="single_blog_item w-full flex flex-col justify-between items-start h-full bg-blue-500/10 backdrop-blur-lg text-neutral-200 rounded-xl hover:bg-blue-500/20 transition-all duration-200 cursor-pointer overflow-hidden shadow-lg"
              >
                <div className="wrapper w-full">
                  <div className="img w-full h-48 overflow-hidden rounded-t-xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={300}
                      height={200}
                      loading="lazy"
                      className="object-cover w-full h-full rounded-t-xl"
                    />
                  </div>
                  <div className="base_content p-4">
                    <h4 className="font-bold text-xl mb-2 line-clamp-2">
                      {blog.title}
                    </h4>{" "}
                    <p className="text-sm text-neutral-400 line-clamp-3">
                      {blog.subtitle}
                    </p>{" "}
                  </div>
                </div>
                <div className="details p-4 w-full flex flex-row items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(blog.created_at).toLocaleString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}
