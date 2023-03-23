import { NextResponse } from "next/server";

export async function GET() {
  const features = [
    {
      id: "1",
      category: "Festival",
      title: "Download 20",
      description: "Bring Me The Horizon, Metallica, Slipknot and more",
      smallImage:
        "https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/cf5e879b-5af3-4b73-fe88-407381f17600/public",
      largeImage:
        "https://uk.tmconst.com/ccp-salesforce-images/UK/Download23_1702_1440x450.jpg?auto=webp",
    },
    {
      id: "2",
      category: "Pop",
      title: "Beyonce",
      description: "Touring the UK this summer!",
      smallImage:
        "https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/c3147546-88ee-46f5-22d1-2262de25f300/public",
      largeImage:
        "https://uk.tmconst.com/ccp-salesforce-images/UK/Beyonce23_0102_1440x450.jpg?auto=webp",
    },

    {
      id: "3",
      category: "Audio visual experience",
      title: "BBC Earth Experience",
      description: "2 weeks to go!",
      smallImage:
        "https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/d563f066-9660-41c5-cc7f-5abf3d5ba900/public",
      largeImage:
        "https://uk.tmconst.com/ccp-salesforce-images/UK/_1440x450BBCEarth.png?auto=webp",
    },
    {
      id: "4",
      category: "Theatre",
      title: "Harry Potter and the Cursed Child",
      description: "Exclusive upgrade and new dates",
      smallImage:
        "https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/2a91d2bd-eee0-49a2-e2e9-9e42b5836000/public",
      largeImage:
        "https://uk.tmconst.com/ccp-salesforce-images/UK/HPCC_MARCH_1440x450.jpg?auto=webp",
    },
    {
      id: "5",
      category: "Baseball",
      title: "MLB World Tour: London Series",
      description: "100 days to go",
      smallImage:
        "https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/d73a0fdc-dad5-4a70-e96c-aeb9ef99da00/big",
      largeImage:
        "https://uk.tmconst.com/ccp-salesforce-images/UK/230317_MLB_1440.jpg?auto=webp",
    },
  ];
  return NextResponse.json({ data: features });
}
