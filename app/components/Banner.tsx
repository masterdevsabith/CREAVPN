import Button from "./ui/Button";

export default function Banner() {
  return (
    <section className="banner_sec px-30 py-20 flex items-center justify-between lg:flex-row sm:flex-col ">
      <div className="left xl:w-2/5 lg:w-3/5 sm:mb-5 lg:mb-0">
        <h2 className="text-5xl text-white font-light lg:text-left sm:text-center">
          Experience Ultimate Online Protection
        </h2>
      </div>
      <div className="right xl:w-2/5 lg:block sm:flex sm:flex-col sm:items-center">
        <p className="lg:mb-12 sm:mb-4 text-neutral-300 max-w-md sm:text-center lg:text-left ">
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
