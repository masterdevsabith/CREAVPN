import Image from "next/image";

const servers = [
  {
    country: "London, UK",
    ip: "32.9992.9012",
    ping: "10 ms",
    flag: "/country-svgs/GB.svg",
  },
  {
    country: "Lisbon, Portugal",
    ip: "24.9300.4920",
    ping: "40 ms",
    flag: "/country-svgs/PT.svg",
  },
  {
    country: "Seoul, South Korea",
    ip: "32.9992.9012",
    ping: "10 ms",
    flag: "/country-svgs/KR.svg",
  },
];

const features = [
  {
    id: "01",
    title: "Smart Location Selection",
    description:
      "Automatically connect to the fastest server based on your location, ensuring optimal performance without manual configuration.",
  },
  {
    id: "02",
    title: "Advanced Split Tunneling",
    description:
      "Select which apps or websites use the VPN tunnel while allowing others to access the internet directly, providing flexibility in your experience.",
  },
  {
    id: "03",
    title: "Customizable Settings",
    description:
      "Tailor your VPN experience with adjustable settings for encryption levels, connection protocols, and more, allowing you to prioritize.",
  },
];

export default function InnovativeFeature() {
  return (
    <section className="innovative_feautre py-14 px-20 flex items-start gap-16">
      <div className="left w-1/2">
        <div className="outercontainer bg-[#0D1424] border border-neutral-600 p-30 rounded-2xl">
          <div className="inner_container bg-[#141A2B]/60 p-5 border border-neutral-600 rounded-2xl backdrop-blur-lg shadow-xl/30 shadow-black/70">
            <div className="top mb-5">
              <h4 className="text-2xl font-light">Available Server</h4>
              <p className="text-md text-neutral-400">5 server available</p>
            </div>
            <div className="servers">
              {servers.map((server, idx) => (
                <div
                  className="server flex items-center justify-between bg-white/8 p-3 rounded-xl mb-2 border-3 border-white/8 hover:bg-white/12 hover:border-3 hover:border-blue-500 hover:shadow-[0_0_20px_0_rgba(0,123,255,0.7)]"
                  key={idx}
                >
                  <div className="left flex items-center gap-2">
                    <Image
                      src={server.flag}
                      alt={server.country}
                      width={50}
                      height={50}
                    />
                    <div className="content">
                      <h5>{server.country}</h5>
                      <p>{server.ip}</p>
                    </div>
                  </div>
                  <div className="right flex flex-col items-end text-right">
                    <Image
                      src={"/icons/cell-signal-high.svg"}
                      alt="cell signal full"
                      width={40}
                      height={40}
                    />
                    <p>{server.ping}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right w-1/2">
        <div className="top mb-12">
          <h2 className="text-5xl font-light mb-4">
            Innovative Features for Ultimate Online Security
          </h2>
          <p className="text-md text-neutral-400 max-w-lg">
            Stay ahead of threats with our real-time threat detection, which
            alerts you to potential risks and keeps your connection safe.
          </p>
        </div>
        <div className="bottom flex flex-col items-start justify-between gap-16">
          {features.map((feature, idx) => (
            <div className="item flex items-start gap-3" key={idx}>
              <div className="num p-3 bg-blue-600 rounded-md w-10 h-10 flex items-center justify-center text-white">
                {feature.id}
              </div>
              <div className="content">
                <h4 className="text-3xl font-light mb-2">{feature.title}</h4>
                <p className="text-md text-neutral-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
