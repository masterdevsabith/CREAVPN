import { footerData } from "@/app/data/footerData";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div>
          <div className="text-xl font-bold">
            <Image
              src={"/icons/logo.svg"}
              alt="logo"
              width={120}
              height={120}
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            {footerData.company.map((item, i) => (
              <li key={i} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-3">Products</h3>
          <ul className="space-y-2">
            {footerData.products.map((item, i) => (
              <li key={i} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            {footerData.resources.map((item, i) => (
              <li key={i} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Headquarters */}
        <div>
          <h3 className="font-semibold mb-3">Headquarters</h3>
          <p className="mb-2">{footerData.headquarters.address}</p>
          <p className="mb-2">{footerData.headquarters.phone}</p>
          <p>{footerData.headquarters.email}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
        <p className="text-sm">© Copyright CreaVPN 2024</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {footerData.social.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.link}
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
