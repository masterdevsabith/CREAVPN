import Image from "next/image";
import Navbar from "../components/includes/Navbar";

const misson1 = [
  {
    title: "Our Mission",
    text: `We aim to provide users all over the world with the most reliable and
      helpful cyber-security solutions. CREAVPN utilizes top-of-the-game
      technologies and KeepSolid's extensive experience to keep user data
      secure, and users - protected, private, and free on the internet.`,
  },
  {
    title: "Our Core Values",
    values: [
      `The quality of the final product is what's most important. Profits
        merely reflect users' happiness with CREAVPN, they shouldn't be
        the goal in itself.`,
      `Focus on growth and development. We shall never get complacent
        and rest on our laurels - we will always strive to improve and enhance
        CREAVPN.`,
      `Think about the future. Short-term plans and solutions should always
        be based on the existing long-term strategy.`,
      `Pleasure of simplicity. You don't have to be an IT expert to use CREAVPN.
        It's super intuitive to pick up, with a transparent
        onboarding process that ensures that you can get started right away.`,
      `Aesthetic satisfaction. The user's desire to engage with CREAVPN
        and keep using it is the highest praise for our company.`,
    ],
  },
];
const historyContent = [
  {
    title: "Our History",
    sections: [
      {
        subtitle: "Early years",
        text: `CREAVPN first launched on iOS in November 2013. Back then, it only had two
          servers - in the US and Netherlands. However, the app stood out from the crowd
          because it was among the few VPNs that didn't limit user bandwidth and traffic. We
          instantly saw how relevant, essential, and in-demand it was. CREAVPN became the
          company's flagship product in less than a year.`,
      },
      {
        subtitle: "2014 Expansion",
        text: `Following the initial success, we decided to focus on broadening our horizons. By 2014,
          CREAVPN extended the number of supported platforms to macOS, Windows,
          Android, and Linux, in addition to the originally available iOS. We also established 36
          new servers in the US, Canada, the UK, France, Germany, Netherlands, Luxembourg, and
          Romania.`,
      },
      {
        subtitle: "StackSocial Partnership",
        text: `Additionally, in 2014 we collaborated with StackSocial to distribute the app there. CREAVPN
          ended up topping its Bestsellers List for years to come.`,
      },
      {
        subtitle: "2015 Growth",
        text: `CREAVPN achieved momentum and wasn't going to slow down. In 2015, we
          increased the number of VPN servers to a whopping 230 servers in 44 regions
          worldwide. We also added Windows Phone support to the list. It was great to see our
          hard work pay off, with the app hitting 2.5 million downloads.`,
      },
    ],
  },
];

export default function OurMissionsPage() {
  return (
    <section id="ourmissions">
      <div className="status_bar w-full py-3 bg-blue-700">
        <p className="font-semibold text-white text-center text-md">
          Rewards Program Now Live! Earn Crypto KS Coins While Using the App!
        </p>
      </div>
      <Navbar />
      <div className="top flex flex-col items-center justify-center text-center py-8">
        <h2 className="text-[var(--text-color)] text-4xl">
          Get To Know About <b>CreaVPN</b>
        </h2>
        <p className="text-[var(--text-premium)]">
          Making impeccable security and privacy affordable since 2013
        </p>
      </div>
      <div className="first flex items-center justify-center ">
        <div className="left flex items-center justify-end h-full w-1/2 p-12">
          <Image
            src={"/missions/1.png"}
            alt="series one"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="right w-1/2 p-12">
          {misson1.map((item, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              {item.text && <p className="text-base">{item.text}</p>}
              {item.values && (
                <ul className="list-disc ml-6 space-y-2">
                  {item.values.map((val, i) => (
                    <li key={i} className="text-base">
                      {val}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="second flex items-center justify-center">
        <div className="left p-6">
          {historyContent.map((item, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold mb-4">{item.title}</h2>
              {item.sections.map((section, i) => (
                <div key={i} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {section.subtitle}
                  </h3>
                  <p className="text-base">{section.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
