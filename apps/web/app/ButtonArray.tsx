import React from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";

async function ButtonArray() {
  // initialize returns a promise which always resolves
  const headersList = headers();
  const ip = headersList.get("x-real-ip");
  const country = headersList.get("x-vercel-ip-country") || "ca";

  const buttonArrayReversed = await get("buttonArrayReversed");
  return (
    <div className="flex flex-row gap-4 mt-2 mb-10">
      {buttonArrayReversed[country] && (
        <button className="bg-[#0369d8] h-[50px] rounded-sm text-white px-4">
          Find More
        </button>
      )}
      {/* <button className="bg-[#0369d8] h-[50px] rounded-sm text-white px-4">
        Save on Quickbooks
      </button> */}
      {!buttonArrayReversed[country] && (
        <button className="bg-[#0369d8] h-[50px] rounded-sm text-white px-4">
          Find More
        </button>
      )}
    </div>
  );
}

export default ButtonArray;
