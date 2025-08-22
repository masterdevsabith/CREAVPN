import { Check, X } from "lucide-react";

const providers = [
  {
    name: "NordVPN",
    logo: "/icons/logo.svg",
    highlight: true,
  },
  {
    name: "ExpressVPN",
    logo: "https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/6a6a63c28e036c45/original/table-expressvpn-logo.svg",
  },
  {
    name: "PrivateVPN",
    logo: "https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/5581e5a9bfc2b47a/original/table-privatevpn-logo.svg",
  },
  {
    name: "ProtonVPN",
    logo: "https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/181e90885a5e30d7/original/table-protonvpn-logo.svg",
  },
  {
    name: "PureVPN",
    logo: "https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/30228f737077932d/original/table-purevpn-logo.svg",
  },
];

const rows = [
  {
    label: "Connection speed*",
    values: [
      "6730+ Mbps",
      "2220+ Mbps",
      "3320+ Mbps",
      "1600+ Mbps",
      "2320+ Mbps",
    ],
  },
  {
    label: "Malware scan for downloads",
    values: [true, false, false, false, true],
  },
  {
    label: "Alerts about leaked credentials",
    values: [true, false, false, false, true],
  },
  {
    label: "Tracker and ad blocker",
    values: [true, true, false, true, true],
  },
];
export default function WhyChooseUs() {
  return (
    <section className="whychooseus pt-18 pb-36 ">
      <div className="top flex flex-col items-center mb-12">
        <h2 className="text-5xl">Why choose CREAVPN?</h2>
        <p className="text-md text-[var(--text-dim-color)]">
          See how we compare to other VPN providers.
        </p>
      </div>
      <div className="bottom flex items-center justify-center overflow-x-auto">
        <table className="max-w-[70%] border-separate border-spacing-0 text-black bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-6"></th>
              {providers.map((provider) => (
                <th
                  key={provider.name}
                  className={`px-4 py-6 ${
                    provider.highlight
                      ? "bg-blue-950 rounded-t-md border border-blue-300"
                      : ""
                  }`}
                >
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    width={150}
                    height={50}
                    className="mx-auto"
                  />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row.label}
                className={rowIndex % 2 === 0 ? "bg-gray-50" : ""}
              >
                <td className="px-4 py-3 font-medium">{row.label}</td>
                {row.values.map((val, colIndex) => {
                  const isHighlight = providers[colIndex]?.highlight;
                  const highlightClass = isHighlight
                    ? "bg-blue-950 border border-blue-300"
                    : "";

                  return (
                    <td
                      key={colIndex}
                      className={`px-4 py-3 text-center ${highlightClass}`}
                    >
                      {typeof val === "boolean" ? (
                        val ? (
                          <Check
                            className={` w-5 h-5 mx-auto ${
                              isHighlight ? "text-white" : "text-green-600"
                            }`}
                          />
                        ) : (
                          <X className="text-red-600 w-5 h-5 mx-auto" />
                        )
                      ) : (
                        <span
                          className={`${
                            isHighlight ? "font-bold text-white" : ""
                          }`}
                        >
                          {val}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
