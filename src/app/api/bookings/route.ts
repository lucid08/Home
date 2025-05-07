import { NextRequest, NextResponse } from 'next/server';
import { bookings } from '@/lib/data';

export async function GET() {
  return NextResponse.json(bookings);
}

export async function POST(req: NextRequest) {
  const { homeId, userId, fromDate, toDate } = await req.json();

  const newBooking = {
    id: Date.now(),
    homeId,
    userId,
    fromDate,
    toDate,
  };

  bookings.push(newBooking);

  return NextResponse.json({
    message: 'Booking confirmed',
    booking: newBooking,
  });
}
