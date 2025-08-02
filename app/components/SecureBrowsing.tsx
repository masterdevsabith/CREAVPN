import FeatureCard from "./ui/FeatureCard";

export default function SecureBrowsing() {
  return (
    <section className="secure_browsing py-14 px-20">
      <div className="master_top">
        <div className="top mb-12">
          <h2 className="text-5xl text-white font-light text-center">
            Your Partner <br /> for Secure Browsing
          </h2>
          <p></p>
        </div>
        <div className="bottom flex items-center gap-5">
          <FeatureCard
            image="/icons/lock.svg"
            heading="Lightning-Fast Speeds"
            subtitle="No slowdowns here. Enjoy smooth, uninterrupted browsing, streaming, and gaming without compromising your security."
            className="min-h-90"
          />
          <FeatureCard
            image="/icons/lightning.svg"
            heading="Lightning-Fast Speeds"
            subtitle="No slowdowns here. Enjoy smooth, uninterrupted browsing, streaming, and gaming without compromising your security."
            className="min-h-90"
          />
          <FeatureCard
            image="/icons/globe.svg"
            heading="Lightning-Fast Speeds"
            subtitle="No slowdowns here. Enjoy smooth, uninterrupted browsing, streaming, and gaming without compromising your security."
            className="min-h-90"
          />
        </div>
      </div>
      <div className="master_bottom flex items-center justify-between mt-16">
        <div className="left">
          <h2 className="text-5xl font-light">
            Our Success, <br /> Measured in Stats
          </h2>
        </div>
        <div className="right flex items-center justify-between gap-8 text-white">
          <div className="text-left">
            <h3 className="text-5xl font-medium">99.9%</h3>
            <p className="text-md text-white/70">Average Uptime</p>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-blue-500/70 to-transparent"></div>
          <div className="text-left">
            <h3 className="text-5xl font-medium">50+</h3>
            <p className="text-md text-white/70">Countries Covered</p>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-blue-500/70 to-transparent"></div>
          <div className="text-left">
            <h3 className="text-5xl font-medium">10M+</h3>
            <p className="text-md text-white/70">Users Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
