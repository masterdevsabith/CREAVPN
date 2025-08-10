import FeatureCard from "./ui/FeatureCard";

export default function SecureBrowsing() {
  return (
    <section className="secure_browsing py-14 xl:px-20 lg:px-10 ">
      <div className="master_top">
        <div className="top mb-12 flex flex-col items-center">
          <h2 className="text-5xl text-white font-light text-center">
            Your Partner <br /> for Secure Browsing
          </h2>
          <p className="text-md text-neutral-300 text-center mt-4 sm:max-w-lg md:max-w-xl lg:w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            doloribus nam atque totam?{" "}
          </p>
        </div>
        <div className="bottom flex items-center lg:gap-5 sm:flex-col lg:flex-row sm:gap-10">
          <FeatureCard
            image="/icons/lock.svg"
            heading="Lightning-Fast Speeds"
            subtitle="No slowdowns here. Enjoy smooth, uninterrupted browsing, streaming, and gaming without compromising your security."
            className="min-h-90 sm:w-[60%] lg:w-[31%]"
          />
          <FeatureCard
            image="/icons/lightning.svg"
            heading="Lightning-Fast Speeds"
            subtitle="No slowdowns here. Enjoy smooth, uninterrupted browsing, streaming, and gaming without compromising your security."
            className="min-h-90 sm:w-[60%] lg:w-[31%]"
          />
          <FeatureCard
            image="/icons/globe.svg"
            heading="Lightning-Fast Speeds"
            subtitle="No slowdowns here. Enjoy smooth, uninterrupted browsing, streaming, and gaming without compromising your security."
            className="min-h-90 sm:w-[60%] lg:w-[31%]"
          />
        </div>
      </div>
      <div className="master_bottom flex items-center justify-between mt-16 sm:flex-col lg:flex-row">
        <div className="left sm:mb-5 lg:mb-0">
          <h2 className="sm:text-3xl lg:text-4xl xl:text-5xl font-light sm:text-center lg:text-left">
            Our Success, <br /> Measured in Stats
          </h2>
        </div>
        <div className="right flex items-center justify-between gap-8 text-white">
          <div className="lg:text-left sm:text-center">
            <h3 className="sm:text-4xl lg:text-5xl font-medium">99.9%</h3>
            <p className="text-md text-white/70">Average Uptime</p>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-blue-500/70 to-transparent"></div>
          <div className="lg:text-left sm:text-center">
            <h3 className="sm:text-4xl lg:text-5xl font-medium">50+</h3>
            <p className="text-md text-white/70">Countries Covered</p>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-blue-500/70 to-transparent"></div>
          <div className="lg:text-left sm:text-center">
            <h3 className="sm:text-4xl lg:text-5xl font-medium">10M+</h3>
            <p className="text-md text-white/70">Users Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
