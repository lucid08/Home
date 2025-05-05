import { NextRequest, NextResponse } from 'next/server';

let homes: any[] = []; 
export async function GET(req: NextRequest) {
  return NextResponse.json(homes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newHome = {
    id: homes.length + 1,
    location: data.location,
    availableFrom: data.availableFrom,
    availableTo: data.availableTo,
    description: data.description,
    price: data.price,
  };
  homes.push(newHome);
  return NextResponse.json(newHome);
}
