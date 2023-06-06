import "../styles/globals.css";
import { Khula } from "@next/font/google";
import { footerItems } from "ui";
import { AnalyticsWrapper } from "./Analytics";
export const dynamic = "force-dynamic";
import { headers } from "next/headers";
import Image from "next/image";
import NameComponentContainer from "./NameComponent";
const roboto = Khula({
  weight: ["400", "700", "600", "800"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: any) {
  const headersList = headers();
  const ip = headersList.get("x-real-ip");

  return (
    <html lang="en">
      <head />
      <body className={`${roboto.className} text-white`}>
        <header className="font-light bg-[#1f262d]  h-[44px] min-h-[44px]">
          <div className="flex flex-row justify-between h-full">
            <div className="flex flex-row justify-start h-full gap-6 mx-10 text-sm text-white xl:text-base">
              <div className="flex flex-row gap-1">
                <div className="flex flex-col justify-center">
                  <Image
                    width="25"
                    height="25"
                    alt=""
                    className="h-fit"
                    src="https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/2cefdcfa-8afc-42e8-40ba-eb5474f70f00/smol"
                  />
                </div>
                <a className="flex flex-col justify-center h-full mt-0.5 text-center align-bottom">
                  UK
                </a>
              </div>
              <a className="flex flex-col justify-center h-full mt-0.5 text-center align-bottom">
                All of United Kingdom
              </a>
            </div>
            <div className="flex flex-row justify-start h-full gap-6 text-sm text-white xl:text-base">
              <a className="flex flex-col justify-center h-full mt-0.5 text-center align-bottom">
                Help/FAQ
              </a>
              <a className="flex flex-col justify-center h-full mt-0.5 text-center align-bottom">
                Gift Cards
              </a>
              <a className="flex flex-col justify-center h-full mt-0.5 text-center align-bottom">
                Order Status
              </a>
              <a className="flex flex-col justify-center h-full mt-0.5 text-center align-bottom">
                Weekly Ads
              </a>
              <a className="flex flex-col justify-center h-full mt-0.5 text-center align-bottom pr-4">
                VIP
              </a>
            </div>
          </div>
        </header>
        <div className="flex flex-row justify-between h-[98px] px-10  text-white bg-[#013f9c] font-normal  ">
          <div className="flex flex-row gap-6 text-lg font-semibold">
            <div className="flex flex-col justify-center align-middle">
              <Image
                width="166"
                height="44"
                alt=""
                src="https://logos-world.net/wp-content/uploads/2021/03/Lowes-Emblem.png"
              />
            </div>
            <div className="flex flex-row pt-1 hover:underline">
              <div className="flex flex-col justify-center cursor-pointer">
                Shop
              </div>
            </div>
            <div className="flex flex-row pt-1 hover:underline">
              <div className="flex flex-col justify-center cursor-pointer">
                Savings
              </div>
            </div>
            <div className="flex flex-row pt-1 hover:underline">
              <div className="flex flex-col justify-center cursor-pointer">
                Installations
              </div>
            </div>{" "}
            <div className="flex flex-row pt-1 hover:underline">
              <div className="flex flex-col justify-center cursor-pointer">
                DIY & Ideas
              </div>
            </div>
          </div>
          {/* @ts-expect-error Server Component */}
          <NameComponentContainer />
        </div>
        <AnalyticsWrapper />
        <div>{children}</div>
        <footer className="py-20 bg-[#013f9c] px-32 xl:px-44 text-white">
          <div className="flex flex-col justify-center">
            <Image
              width="166"
              height="44"
              alt=""
              src="https://logos-world.net/wp-content/uploads/2021/03/Lowes-Emblem.png"
            />
          </div>
          <p className="pb-4 border-b border-white pt-11">
            Need help? Call us at 855.559.1455
          </p>
          <div className="flex flex-row justify-start gap-3 mt-8 text-sm font-light">
            {footerItems.map((x: any, i: any) => {
              if (i % 2 === 1) return <p className="text-white">{x}</p>;
              return <p className="text-white cursor-pointer">{x}</p>;
            })}
          </div>
        </footer>
      </body>
    </html>
  );
}
