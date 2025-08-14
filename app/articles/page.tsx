import Image from "next/image";
import Navbar from "../components/includes/Navbar";

const featuredPost = {
  id: 1,
  title: "Why You Need a VPN in 2025",
  author: "Alex Carter",
  date: "August 10, 2025",
  category: "Privacy & Security",
  image: "https://via.placeholder.com/800x400", // placeholder image
  excerpt:
    "In a world where data breaches are more common than ever, a VPN is no longer optional. Learn how it keeps your online life private and secure.",
  content:
    "Full article content would go here. You could include multiple paragraphs, images, and even embedded videos for richer storytelling.",
};

export default function ArticlesPage() {
  return (
    <section className="special_bg bg-[radial-gradient(ellipse_at_center,_#0B172F,_#0a0f1c)]">
      <Navbar />
      <section className="bottom flex flex-col items-center w-full justify-center">
        <section className="featured p-5 border border-neutral-400 rounded-md w-full max-w-[80%] flex gap-6 items-start bg-zinc-900">
          <div className="left flex-shrink-0">
            <Image
              src={"/images/vpn_cover.webp"}
              alt="featured_article_image"
              width={200}
              height={200}
              className="rounded-md object-cover"
            />
          </div>

          <div className="right flex flex-col justify-between">
            <h1 className="text-2xl font-bold text-white">
              {featuredPost.title}
            </h1>
            <p className="text-neutral-400 mt-2">{featuredPost.excerpt}</p>

            <div className="flex items-center justify-between mt-4 text-sm text-neutral-500">
              <span>By {featuredPost.author}</span>
              <span>{featuredPost.date}</span>
            </div>

            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm w-fit">
              Read More
            </button>
          </div>
        </section>

        <section className="articles"></section>
      </section>
    </section>
  );
}
