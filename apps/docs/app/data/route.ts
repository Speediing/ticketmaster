import { NextResponse } from "next/server";

export async function GET() {
  const features = [
    {
      id: "1",
      category: "Festival",
      title: "Download 20",
      description: "Bring Me The Horizon, Metallica, Slipknot and more",
      smallImage:
        "https://mobileimages.lowes.com/marketingimages/581e18db-3c0c-4d61-824f-d441b8c9eaa3/hp-build-it-forward-pre-premiere-dt.png?im=Resize,width=468&fmt=webp",
      largeImage:
        "https://mobileimages.lowes.com/marketingimages/581e18db-3c0c-4d61-824f-d441b8c9eaa3/hp-build-it-forward-pre-premiere-dt.png?im=Resize,width=468&fmt=webp",
    },
    {
      id: "2",
      category: "Pop",
      title: "Beyonce",
      description: "Touring the UK this summer!",
      smallImage:
        "https://mobileimages.lowes.com/marketingimages/32b60aa4-a947-4814-8553-c581d8f25054/hp-free-basic-carpet-install-dt.png?im=Resize,width=468&fmt=webp",
      largeImage:
        "https://mobileimages.lowes.com/marketingimages/32b60aa4-a947-4814-8553-c581d8f25054/hp-free-basic-carpet-install-dt.png?im=Resize,width=468&fmt=webp",
    },

    {
      id: "3",
      category: "Audio visual experience",
      title: "BBC Earth Experience",
      description: "2 weeks to go!",
      smallImage:
        "https://mobileimages.lowes.com/marketingimages/1e1e4664-a82e-42da-befe-811448479599/hp-weekending-at-lowes-events-3col-dt.png?im=Resize,width=468&fmt=webp",
      largeImage:
        "https://mobileimages.lowes.com/marketingimages/1e1e4664-a82e-42da-befe-811448479599/hp-weekending-at-lowes-events-3col-dt.png?im=Resize,width=468&fmt=webp",
    },
    {
      id: "4",
      category: "Theatre",
      title: "Harry Potter and the Cursed Child",
      description: "Exclusive upgrade and new dates",
      smallImage:
        "https://mobileimages.lowes.com/marketingimages/d9cc2f96-ced0-43db-9976-7d98a4ebd6a1/hp-craftsman-days-promo-dt.png?im=Resize,width=351&fmt=webp",
      largeImage:
        "https://mobileimages.lowes.com/marketingimages/d9cc2f96-ced0-43db-9976-7d98a4ebd6a1/hp-craftsman-days-promo-dt.png?im=Resize,width=351&fmt=webp",
    },
    {
      id: "5",
      category: "Baseball",
      title: "MLB World Tour: London Series",
      description: "100 days to go",
      smallImage:
        "https://mobileimages.lowes.com/marketingimages/77890178-afc1-4bb2-b1c2-b3355a8c6e52/hp-ego-days-promo-dt.png?im=Resize,width=351&fmt=webp",
      largeImage:
        "https://mobileimages.lowes.com/marketingimages/77890178-afc1-4bb2-b1c2-b3355a8c6e52/hp-ego-days-promo-dt.png?im=Resize,width=351&fmt=webp",
    },
  ];
  return NextResponse.json({ data: features });
}
