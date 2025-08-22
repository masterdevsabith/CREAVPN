import { AlertTriangle } from "lucide-react";
import Button from "./ui/Button";

const infoData = [
  { label: "Your location:", value: "India, Kollam" },
  { label: "Your IP address:", value: "59.94.73.125" },
  { label: "Your ISP:", value: "BSNL" },
  { label: "Your status:", value: "Unprotected" },
];
const steps = [
  { number: 1, text: "Purchase a subscription" },
  { number: 2, text: "Download the CreaVPN app" },
  { number: 3, text: "Connect to a VPN server" },
];

export default function HowTo() {
  return (
    <section className="howtocreavpn pb-36">
      <div className="top flex flex-col items-center mb-12">
        <h2 className="text-5xl">Protect your online activity</h2>
        <p className="text-md text-[var(--text-dim-color)] max-w-3xl text-center">
          If you are not using a reliable VPN, your private information can be
          easily accessed by third parties. Get CreaVPN to protect yourself from
          prying eyes.
        </p>
      </div>
      <div className="bottom flex items-center justify-center gap-12">
        <div className="left w-1/2 flex items-center justify-end">
          <div className="border border-red-200 bg-red-50 p-6 rounded-xl w-fit min-w-lg">
            <div className="grid grid-cols-2 gap-6">
              {infoData.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-gray-700 text-sm">{item.label}</span>
                  <div className="flex items-center gap-2 text-red-600 font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right w-1/2 flex flex-col items-start gap-6">
          <div className="content ">
            <h3 className="text-2xl">How can CreaVPN help?</h3>
            <p className="text-md text-[var(--text-dim-color)] max-w-lg">
              CreaVPN encrypts your internet connection and hides your IP
              address and location, making you much safer and more private
              online. All you have to do is:
            </p>
          </div>
          <div className="steps flex flex-col items-start gap-1.5">
            {steps.map((step, idx) => (
              <div key={idx} className="item flex items-center gap-2">
                <h3
                  className={` rounded-full p-2 w-8 h-8 flex items-center justify-center ${
                    step.number == 1
                      ? "bg-blue-500"
                      : "border-2 border-blue-500 text-blue-200"
                  }`}
                >
                  {step.number}
                </h3>
                <h3>{step.text}</h3>
              </div>
            ))}
          </div>
          <Button
            content="Get CreaVPN Now"
            className="bg-blue-500 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
