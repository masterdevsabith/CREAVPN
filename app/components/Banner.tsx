"use client";

import LinkButton from "./ui/LinkButton";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  return (
    <section className="banner px-12 py-12">
      <div className="top text-center flex flex-col items-center justify-center">
        <h2 className="font-semibold text-4xl max-w-[90%] md:max-w-[60%] xl:max-w-[40%] mb-5">
          Let's start your privacy journey from here !!!
        </h2>
        <LinkButton
          content="Get Started"
          className="py-3 cursor-pointer"
          onClick={() => router.push("/auth/signup")}
        />
      </div>
    </section>
  );
}
