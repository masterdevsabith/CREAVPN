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
          image="/country-svgs/RU.svg"
          country="Russia"
          servers="45"
          classname="top-30 right-280"
          alignment="right"
        />
        <FloatingFlag
          image="/country-svgs/PT.svg"
          country="Portugal"
          servers="102"
          classname="top-80 right-210"
          alignment="right"
        />{" "}
        <FloatingFlag
          image="/country-svgs/US.svg"
          country="USA"
          servers="2"
          classname="top-30 right-170"
          alignment="right"
        />
        <FloatingFlag
          image="/country-svgs/ID.svg"
          country="Indonesia"
          servers="89"
          classname="top-68 right-140"
          alignment="right"
        />
        <FloatingFlag
          image="/country-svgs/MY.svg"
          country="Malaysia"
          servers="16"
          classname="top-20 right-80"
          alignment="right"
        />
      </section>
    </section>
  );
}
