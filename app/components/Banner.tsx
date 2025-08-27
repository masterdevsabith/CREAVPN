import LinkButton from "./ui/LinkButton";

export default function Banner() {
  return (
    <section className="banner px-12 py-12">
      <div className="top text-center flex flex-col items-center justify-center">
        <h2 className="font-semibold text-4xl max-w-[90%] md:max-w-[60%] xl:max-w-[40%] mb-5">
          Let's start your privacy journey from here !!!
        </h2>
        <LinkButton
          content="Sign Up Now"
          className="py-3 bg-[var(--bg-premium)] border-[var(--bg-premium)] bg-[radial-gradient(circle_at_center,_#111,_#333)]"
        />
      </div>
    </section>
  );
}
