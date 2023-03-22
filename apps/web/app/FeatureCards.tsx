import React from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";
import Image from "next/image";

async function FeatureCards() {
  // initialize returns a promise which always resolves
  const headersList = headers();
  const ip = headersList.get("x-real-ip");
  const country = headersList.get("x-vercel-ip-country") || "ca";
  let features: any = "";
  const currentID = await get("currentHeader");

  if (headersList.get("host") === "localhost:3000") {
    const data = await fetch(`http://${headersList.get("host")}/data`);
    features = await data.json();
  } else {
    const data = await fetch(`https://${headersList.get("host")}/data`);
    features = await data.json();
  }
  const filteredFeatures = features.data.filter((x) => {
    return x.id !== currentID;
  });
  return (
    <div className="flex flex-col w-full pl-6 pr-4 my-4">
      <div className="grid justify-between w-full grid-cols-2 gap-4">
        {filteredFeatures.map((x: any) => {
          return (
            <div>
              <Image
                width={688}
                height={440}
                className={"rounded-md"}
                alt=""
                src={x.smallImage}
              />
              <p
                className={`pb-2 mx-2 leading-tight align-middle text-start mt-3 mb-1 text-[16px] text-gray-500 `}
              >
                {x.category}
              </p>
              <p
                className={`pb-0  mx-2 leading-tight align-middle text-start mt-1 mb-2 text-[16px] text-black font-bold text-xl `}
              >
                {x.title}
              </p>
            </div>
          );
        })}
        {/* <div>
          <Image
            width={688}
            height={440}
            className={"rounded-md"}
            alt=""
            src={
              "https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/d563f066-9660-41c5-cc7f-5abf3d5ba900/public"
            }
          />
          <p
            className={`pb-2  leading-tight align-middle text-center mt-1  text-[17px]`}
          >
            Shop all Cat Dental Care
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default FeatureCards;
