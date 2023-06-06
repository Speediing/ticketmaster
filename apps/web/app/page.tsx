import Image from "next/image";
import { Button } from "ui";
import ButtonArray from "./ButtonArray";
import FeatureCards from "./FeatureCards";
import InfoHeader from "./InfoHeader";
export const runtime = "experimental-edge";
export const dynamic = "force-dynamic";
import { get } from "@vercel/edge-config";
export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let features: any = "";
  let currentID = "";

  const readSingle = await fetch(
    "https://edge-config.vercel.com/ecfg_8wahyb0j3f067kj94bdflxixqrwb?token=7fc1a75f-ed9d-4ce7-92e9-61a7d6da159b",
    { cache: "no-store" }
  );

  const result = await readSingle.json();
  currentID = result.items.currentHeader;

  const data = await fetch(`https://ticketmaster-docs-virid.vercel.app/data`, {
    next: { revalidate: 60 },
  });

  features = await data.json();
  const filteredFeatures = features.data.filter((x: any) => {
    return x.id === currentID;
  });
  const feature = filteredFeatures[0];

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
            placeholder="blur"
            blurDataURL={feature.smallImage}
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
