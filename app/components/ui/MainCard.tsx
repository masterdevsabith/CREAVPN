import { MainCardProps } from "@/app/types/uiTypes";
import Image from "next/image";
import Statusbar from "./Statusbar";
import { CirclePower, Download, Power, Upload, Wifi } from "lucide-react";

export default function MainCard({
  logo,
  status,
  time,
  flag,
  location,
  cordinate,
  download_speed,
  upload_speed,
  classname,
}: MainCardProps) {
  return (
    <div
      className={`main_card ${classname} flex flex-col items-center justify-between p-6 border-2 border-blue-600 rounded-3xl`}
    >
      <div className="top w-full flex flex-col items-center mb-8">
        <div className="logo_and_status w-full flex items-center justify-between mb-8">
          <Image src={logo} alt={logo} width={150} height={150} />
          {status ? (
            <Statusbar content="Connected" classname="bg-green-400" />
          ) : (
            <Statusbar content="Failed" classname="bg-red-400" />
          )}
        </div>

        <div className="time">
          <h2 className="text-7xl font-semibold">{time}</h2>
        </div>
      </div>
      <div className="mid w-full flex flex-col items-center gap-3 mb-8">
        <div className="connected_set w-full p-4 bg-white/10 rounded-2xl flex items-center justify-between border-1 border-neutral-600">
          <div className="left flex items-center gap-2">
            <Image src={flag} alt={flag} width={50} height={50} />
            <div className="content">
              <h4>{location}</h4>
              <p>{cordinate}</p>
            </div>
          </div>
          <div className="right flex flex-col items-end">
            <Wifi className="text-blue-300" />
            <p>Ping: 10 ms</p>
          </div>
        </div>
        <div className="imp_data w-full flex items-center gap-2">
          <div className="download_speed w-1/2 bg-white/10 p-4 rounded-2xl flex items-center gap-2">
            <Download
              className="bg-blue-600 p-2 rounded-sm border-1 border-blue-500"
              size={40}
            />
            <div className="content">
              <p className="text-neutral-400">Downloaded</p>
              <p>
                <b>{download_speed} </b>Mb/s
              </p>
            </div>
          </div>
          <div className="upload_speed w-1/2 bg-white/10 p-4 rounded-2xl flex items-center gap-3">
            <Upload
              className="bg-blue-600 p-2 rounded-sm border-1 border-blue-500"
              size={40}
            />
            <div className="content">
              <p className="text-neutral-400">Uploaded</p>
              <p>
                <b>{upload_speed}</b> Mb/s
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom w-full flex items-center justify-center">
        <Power className="bg-blue-600 text-white rounded-full p-4" size={90} />
      </div>
    </div>
  );
}
