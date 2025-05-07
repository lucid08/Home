'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import axios from 'axios';

export default function BookHome() {
  const { id } = useParams();
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const router = useRouter();

  const handleBooking = useCallback(async () => {
    const userId =
      typeof window !== 'undefined' ? localStorage?.getItem('userId') : null;

    if (!userId) {
      alert('Please log in to book');
      router.push('/login');
      return;
    }

    try {
      await axios.post('/api/bookings', {
        homeId: Number(id),
        userId: Number(userId),
        fromDate,
        toDate,
      });

      alert('Booking successful!');
      router.push('/home-listings');
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Failed to book. Please try again.');
    }
  }, [fromDate, toDate, id, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6 transition-all duration-300 hover:shadow-2xl">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Book Your Stay</h1>
          <p className="text-gray-600">Home ID: {id}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-in Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
              <span className="absolute right-4 top-3 text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-out Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
              <span className="absolute right-4 top-3 text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleBooking}
            disabled={!fromDate || !toDate}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
