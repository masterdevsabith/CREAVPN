"use client";

import Image from "next/image";
import LeafletMap from "./components/LeafLetMap";

import {
  Search,
  Globe,
  User,
  ChevronRight,
  Zap,
  Shield,
  Power,
  Glasses,
  Split,
  Settings,
} from "lucide-react";
import { useState } from "react";

const availableCountries = [
  {
    img: "/country-svgs/GB.svg",
    name: "United Kingdom",
    lat: 55.3781,
    lng: -3.436,
  },
  {
    img: "/country-svgs/ID.svg",
    name: "Indonesia",
    lat: -0.7893,
    lng: 113.9213,
  },
  { img: "/country-svgs/KR.svg", name: "Korea", lat: 35.9078, lng: 127.7669 },
  { img: "/country-svgs/MY.svg", name: "Malaysia", lat: 4.2105, lng: 101.9758 },
  { img: "/country-svgs/PT.svg", name: "Portugal", lat: 39.3999, lng: -8.2245 },
  { img: "/country-svgs/TR.svg", name: "Turkey", lat: 38.9637, lng: 35.2433 },
  {
    img: "/country-svgs/US.svg",
    name: "United States",
    lat: 37.0902,
    lng: -95.7129,
  },
];

export default function Dashboard() {
  const [lat, setLat] = useState<number>(55.3781);
  const [lng, setLng] = useState<number>(-3.436);

  const handleSetLatLong = (lat: number, lng: number) => {
    setLat(lat);
    setLng(lng);
  };
  return (
    <section className="dashboard relative  h-screen overflow-hidden ">
      <LeafletMap lat={lat} lng={lng} />
      <div className="left absolute z-30 top-4 left-4 w-80 h-175 p-4 bg-[#1a1a1f]/90 backdrop-blur-md rounded-md">
        {/* Search */}
        <div className="flex items-center gap-2 bg-[#2a2a2f] rounded-md px-2 py-2 mb-4">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Browse from..."
            className="flex-1 bg-transparent text-sm placeholder-gray-400 outline-none"
          />
          <span className="text-gray-500 text-xs">ctrl + F</span>
        </div>

        {/* Nav Items */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-[#2a2a2f] cursor-pointer">
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>Countries</span>
            </div>
            <span className="text-gray-500 text-xs">ctrl + 2</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-[#2a2a2f] cursor-pointer">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Profiles</span>
            </div>
            <span className="text-gray-500 text-xs">ctrl + 3</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-4 text-xs">
          <button className="px-3 py-1 rounded-md bg-[#2a2a2f]">All</button>
          <button className="px-3 py-1 rounded-md hover:bg-[#2a2a2f]">
            Secure Core
          </button>
          <button className="px-3 py-1 rounded-md hover:bg-[#2a2a2f]">
            P2P
          </button>
          <button className="px-3 py-1 rounded-md hover:bg-[#2a2a2f]">
            Tor
          </button>
        </div>

        {/* Promo Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#1e1e25] to-[#2a2a30] p-3 rounded-lg mb-4 cursor-pointer hover:from-[#2a2a30] hover:to-[#333]">
          <span className="text-sm">Get worldwide coverage with VPN Plus</span>
          <ChevronRight size={16} className="text-gray-400" />
        </div>

        {/* Country List */}
        <div className="space-y-2 text-sm">
          <h3 className="text-gray-400 uppercase text-xs mb-2">
            Countries (122)
          </h3>

          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2f] cursor-pointer">
            <Zap size={16} className="text-green-500" />
            <span>Fastest country</span>
          </div>

          {availableCountries.map((countrydata, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2f] cursor-pointer"
              onClick={() => handleSetLatLong(countrydata.lat, countrydata.lng)}
            >
              {/* <div className="w-5 h-3 rounded-sm bg-gradient-to-r from-[#000] to-[#c00]" /> */}
              <Image
                src={countrydata.img}
                alt={countrydata.name}
                width={20}
                height={20}
              />
              <span>{countrydata.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right absolute z-30 top-2 right-2 w-50 h-100 p-4 bg-[#1a1a1f]/90 backdrop-blur-md rounded-md">
        <div className="flex flex-col items-center gap-8 pb-5">
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
            <Shield size={28} />
            <span className="text-xs">NetShield</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
            <Power size={28} />
            <span className="text-xs">Kill switch</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
            <Glasses size={28} />
            <span className="text-xs">Port forwarding</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
            <Split size={28} />
            <span className="text-xs">Split tunneling</span>
          </div>
        </div>

        <div className="w-full border-t border-gray-700  pt-6 flex flex-col items-center gap-1 cursor-pointer hover:text-white">
          <Settings size={28} />
          <span className="text-xs">Settings</span>
        </div>
      </div>
    </section>
  );
}
