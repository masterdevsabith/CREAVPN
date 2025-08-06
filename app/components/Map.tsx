import FloatingFlag from "./ui/FloatingFlag";

export default function Map() {
  return (
    <section className="globe_section pt-30">
      <div className="top mb-12 flex flex-col items-center">
        <h2 className="text-5xl text-white font-light text-center">
          Secure Access Across 50+ <br />
          Countries at Your Fingertips
        </h2>
        <p className="text-md text-neutral-400 text-center mt-4 max-w-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          atque dolorem, voluptatem aliquam quaerat cupiditate veniam in ea
          omnis iure dicta provident fugit pariatur voluptates corrupti
          perspiciatis ad ex quis.
        </p>
      </div>
      <section className="world_map py-14 px-20 h-160 relative">
        <FloatingFlag
          image="/country-svgs/GB.svg"
          country="England"
          servers="45"
          top="10"
          right="200"
          alignment="right"
        />
      </section>
    </section>
  );
}
