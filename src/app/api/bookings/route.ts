import { NextRequest, NextResponse } from 'next/server';
import { bookings } from '@/lib/data';

export async function GET() {
  return NextResponse.json(bookings);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { homeId, userId, fromDate, toDate } = body;

  const newBooking = {
    id: Date.now(),
    homeId,
    userId,
    fromDate,
    toDate,
  };

  bookings.push(newBooking);
  return NextResponse.json({ message: 'Booking confirmed', booking: newBooking });
}
 