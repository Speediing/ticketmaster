import React from "react";
import { get } from "@vercel/edge-config";
import Image from "next/image";

async function FeatureCards() {
  // initialize returns a promise which always resolves

  let features: any = "";
  const currentID = await get("currentHeader");
  console.log(currentID);
  const data = await fetch(`https://ticketmaster-docs.vercel.app/data`, {
    next: { revalidate: 60 },
  });
  features = await data.json();

  const filteredFeatures = features.data.filter((x: any) => {
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
      </div>
    </div>
  );
}

export default FeatureCards;
