import React, { Suspense } from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";
const returnName = async () => {
  await new Promise((r) => setTimeout(r, 3000));
  return "My Account";
};

async function NameComponent() {
  const name = await returnName();
  return (
    <div className="flex flex-row text-lg font-semibold">
      <div className="flex flex-row ml-3">
        <div className="flex flex-col justify-center ml-2 cursor-pointer">
          {name}
        </div>
      </div>
    </div>
  );
}

async function NameComponentContainer() {
  return (
    <Suspense fallback={NameComponentLoading()}>
      {/* @ts-expect-error Server Component */}
      <NameComponent />
    </Suspense>
  );
}
function NameComponentLoading() {
  return (
    <div className="flex flex-row text-lg font-semibold animate-pulse">
      <div className="flex flex-row ml-3">
        <div className="flex flex-col justify-center ml-2 cursor-pointer ">
          <div className="h-5 bg-gray-400 w-[98px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default NameComponentContainer;
