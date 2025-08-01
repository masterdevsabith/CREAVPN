import BaseCard from "./ui/BaseCard";
import MainCard from "./ui/MainCard";

export default function Cards() {
  return (
    <section className="cards_section py-10">
      <div className="cards flex items-end justify-center gap-5">
        <BaseCard
          flag="/country-svgs/TR.svg"
          location="Istanbul, Turkey"
          cordinate="24.9420.2032"
          status
          classname="w-[31%] min-h-110"
        />
        <MainCard
          logo="/icons/logo.svg"
          status
          time="00:58:26"
          flag="/country-svgs/US.svg"
          location="London, UK"
          cordinate="32.9992.9012"
          download_speed="32"
          upload_speed="23"
          classname="w-[31%] shadow-[0_0_20px_0_rgba(0,123,255,0.2)] border-3 border-blue-500/60"
        />
        <BaseCard
          flag="/country-svgs/ID.svg"
          location="Jakarta, Indonesia"
          cordinate="54.3421.9482"
          status
          classname="w-[31%] min-h-110"
        />
      </div>
    </section>
  );
}
