import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/lib/data';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const exists = users.find(u => u.username === username);
    users.find(u => console.log(u));
  if (exists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const newUser = {
    id: Date.now(),
    username,
    password,
  };
  users.push(newUser);
  users.find(u => console.log(u));
  return NextResponse.json({ message: 'Signup successful', userId: newUser.id });
}
