import Image from "next/image";
import { Button } from "ui";
import ButtonArray from "./ButtonArray";
import FeatureCards from "./FeatureCards";
import InfoHeader from "./InfoHeader";
import left from "./leftimg.png";
import right from "./rightimg.png";
import redis from "@vercel/redis";
import { headers } from "next/headers";
export const runtime = "experimental-edge";
export const revalidate = 0;
import { get } from "@vercel/edge-config";
export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const headersList = headers();
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
    return x.id === currentID;
  });
  const feature = filteredFeatures[0];
  // const hmm = await test.json();

  // let rip = hmm.replace(
  //   /(['"])?([a-zA-Z0-9_]+)(['"])?:([^\/])/g,
  //   '"$2":$4'
  // );
  // console.log(rip);
  // hmm.map((x) => console.log(x));

  // console.log(test);
  // const session = await redis.get("user_1_session");
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <InfoHeader />
      <div className="flex flex-row justify-center ">
        <div className="relative w-full bg-black h-fit">
          <Image
            alt=""
            src={feature.largeImage}
            layout="fill"
            objectFit="cover"
            className="opacity-50 z-1"
          />

          <div className="z-50 flex flex-col justify-end mt-4 h-[500px] font-sans text-white ">
            <div className="z-50 flex flex-col justify-center mx-40">
              <h2 className={` leading-tight  text-[32px]  font-bold `}>
                {feature.title}
              </h2>
              <h3 className="max-w-md text-base font-medium leading-9 text-white ">
                {feature.description}
              </h3>
              {/* @ts-expect-error Server Component */}
              <ButtonArray />
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center grid-cols-5 text-black bg-slate-100">
        <div className="col-span-4">
          {/* @ts-expect-error Server Component */}
          <FeatureCards />
        </div>
        <div className="col-span-1 mr-4 bg-white shadow-lg shadow-black">
          <div className="flex flex-col justify-center px-2 pt-4 bg-white ">
            <div className="flex flex-row justify-center">
              <Image
                alt=""
                height={600}
                width={300}
                src="https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/aadc4ab4-73ee-4c0f-0e3b-cf7531eba400/big"
              />
            </div>
            <div className="flex flex-row justify-center text-sm">
              <p>Advertisement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}