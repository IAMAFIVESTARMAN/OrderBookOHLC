import { NextResponse } from "next/server";
import getCandleData from "../../../../lib/getCandleData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  console.log(searchParams);
  const duration = searchParams.get("timeDuration");
  const section = searchParams.get("section");

  //   console.log(searchParams.get("timeDuration"));
  const res = await getCandleData(duration!, section!);

  //   console.log(res);

  return NextResponse.json(res);
}
