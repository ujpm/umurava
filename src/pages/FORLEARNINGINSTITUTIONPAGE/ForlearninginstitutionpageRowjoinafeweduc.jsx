import { Img, Heading } from "../../components";
import React, { Suspense } from "react";

const data = [
  { tori: "images/img_tori_1.png" },
  { tori: "images/img_gdg_kigali_1.png" },
  { tori: "images/img_educationcollaborative.png" },
  { tori: "images/img_keplerlogo_1.png" },
  { tori: "images/img_hiil_logo_1.png" },
  { tori: "images/img_ciba_1.png" },
  { tori: "images/img_ared_1.png" },
  { tori: "images/img_igihe_logo_1.png" },
  { tori: "images/img_educationcollaborative_62x216.png" },
  { tori: "images/img_keplerlogo_1.png" },
  { tori: "images/img_hiil_logo_1_66x196.png" },
  { tori: "images/img_sokofund_1.png" },
];

export default function ForlearninginstitutionspageRowjoinafeweduc() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[#ffffff] py-[5.63rem] md:py-[1.25rem]">
        <div className="container-xs mt-[0.88rem] flex flex-col items-center gap-[2.88rem] px-[0.75rem] md:px-[1.25rem]">
          <Heading
            size="heading9xl"
            as="h2"
            className="w-[68%] text-center text-[2.25rem] font-bold leading-[120%] tracking-[0.00rem] !text-[#03192e] md:w-full md:text-[2.13rem] sm:text-[2.00rem]"
          >
            Join a few Educational Institutions using Skills Challenges by Umurava
          </Heading>
          <div className="grid grid-cols-6 justify-center gap-[2.50rem] self-stretch md:grid-cols-3 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <Img
                  key={"gridtori" + index}
                  src={d.tori}
                  alt="Tori"
                  className="h-[3.63rem] w-full object-cover md:h-auto"
                />
              ))}
            </Suspense>
          </div>
        </div>
