import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    // Insert the message into a 'messages' collection
    await db.collection('messages').insertOne({
      ...data,
      createdAt: new Date()
    });
    
    return NextResponse.json(
      { message: 'Message stored successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to store message' },
      { status: 500 }
    );
  }
} 