import Button from "./ui/Button";

export default function Banner() {
  return (
    <section className="banner_sec px-30 py-20 flex items-center justify-between">
      <div className="left w-2/5">
        <h2 className="text-5xl text-white font-light text-left">
          Experience Ultimate Online Protection
        </h2>
      </div>
      <div className="right w-2/5">
        <p className="mb-12 text-neutral-300 max-w-md">
          Stay safe online with our advanced VPN technology, designed to protect
          your data and privacy no matter where you are.
        </p>
        <Button
          content="14-day Free Trial"
          className="bg-blue-600 border-blue-600"
        />
      </div>
    </section>
  );
}
