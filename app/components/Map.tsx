import FloatingFlag from "./ui/FloatingFlag";

export default function Map() {
  return (
    <section className="globe_section pt-16">
      <div className="top mb-12 flex flex-col items-center">
        <h2 className="text-5xl text-white font-light text-center">
          Secure Access Across 50+ <br />
          Countries at Your Fingertips
        </h2>
        <p className="text-md text-neutral-400 text-center mt-4 max-w-2xl sm:max-w-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          atque dolorem, voluptatem aliquam quaerat cupiditate veniam in ea
          omnis iure dicta provident fugit pariatur voluptates corrupti
          perspiciatis ad ex quis.
        </p>
      </div>
      <section className="world_map py-14 px-20 h-140 relative">
        <FloatingFlag
          image="/country-svgs/RU.svg"
          country="Russia"
          servers="45"
          classname="top-30 2xl:right-280 xl:right-240 lg:right-200 md:right-140 sm:right-100"
          alignment="right"
        />
        <FloatingFlag
          image="/country-svgs/PT.svg"
          country="Portugal"
          servers="102"
          classname="top-80 2xl:right-210 xl:right-180 lg:right-140 md:right-120 sm:right-100"
          alignment="right"
        />{" "}
        <FloatingFlag
          image="/country-svgs/US.svg"
          country="USA"
          servers="2"
          classname="top-30 2xl:right-170 xl:right-120 lg:right-90 md:right-60 sm:top-40 sm:right-50"
          alignment="right"
        />
        <FloatingFlag
          image="/country-svgs/ID.svg"
          country="Indonesia"
          servers="89"
          classname="top-68 2xl:right-140 xl:right-90 lg:right-50 md:right-30 sm:right-10"
          alignment="right"
        />
        <FloatingFlag
          image="/country-svgs/MY.svg"
          country="Malaysia"
          servers="16"
          classname="top-20 2xl:right-80 xl:right-40 lg:right-20 md:right-8 sm:right-3"
          alignment="right"
        />
      </section>
    </section>
  );
}
