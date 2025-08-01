import BaseCard from "./ui/BaseCard";

export default function Cards() {
  return (
    <section className="cards_section">
      <div className="cards flex items-center justify-center gap-3">
        <BaseCard
          flag="/country-svgs/TR.svg"
          location="Istanbul, Turkey"
          cordinate="24.9420.2032"
          status
        />
        <BaseCard
          flag="/country-svgs/TR.svg"
          location="Istanbul, Turkey"
          cordinate="24.9420.2032"
          status
        />
        <BaseCard
          flag="/country-svgs/TR.svg"
          location="Istanbul, Turkey"
          cordinate="24.9420.2032"
          status
        />
      </div>
    </section>
  );
}
