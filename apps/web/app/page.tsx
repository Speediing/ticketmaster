import Image from "next/image";
import { Button } from "ui";
import ButtonArray from "./ButtonArray";
import InfoHeader from "./InfoHeader";
import left from "./leftimg.png";
import right from "./rightimg.png";

const images = [
  "https://directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-fox-legomasters-2.jpg?noretina=true",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-abc-livekellyandryan-2.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/agnostic/hero-carousel/1304550-dtv-hero-caro_walkingdead.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/holiday_22/heroes/1378605-dtv-hero-caro_Merry_Swissmas.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-lifetime-marriedatfirstsight-2.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/agnostic/hero-carousel/1304550-dtv-hero-caro_walkingdead.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/holiday_22/heroes/1378605-dtv-hero-caro_Merry_Swissmas.jpg",
];
export const runtime = "experimental-edge";
export const revalidate = 0;
export default function Page() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <InfoHeader />
      <div className="flex flex-row justify-center ">
        <div className="relative w-full bg-black h-fit">
          <Image
            alt=""
            src="https://uk.tmconst.com/ccp-salesforce-images/UK/230317_MLB_1440.jpg?auto=webp"
            layout="fill"
            objectFit="cover"
            className="opacity-50 z-1"
          />

          <div className="z-50 flex flex-col justify-end mt-4 h-[500px] font-sans text-white ">
            <div className="z-50 flex flex-col justify-center mx-40">
              <h2 className={` leading-tight  text-[32px]  font-bold `}>
                Beyonce
              </h2>
              <h3 className="max-w-md text-base font-medium leading-9 text-white ">
                Touring the UK this summer
              </h3>
              {/* @ts-expect-error Server Component */}
              <ButtonArray />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
