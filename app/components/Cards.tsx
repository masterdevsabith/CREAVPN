import BaseCard from "./ui/BaseCard";
import MainCard from "./ui/MainCard";

export default function Cards() {
  return (
    <section className="cards_section py-10">
      <div className="cards flex items-center justify-center gap-3">
        <BaseCard
          flag="/country-svgs/TR.svg"
          location="Istanbul, Turkey"
          cordinate="24.9420.2032"
          status
          classname="w-[31%] min-h-100"
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
          classname="w-[31%] "
        />
        <BaseCard
          flag="/country-svgs/TR.svg"
          location="Istanbul, Turkey"
          cordinate="24.9420.2032"
          status
          classname="w-[31%] min-h-100"
        />
      </div>
    </section>
  );
}
