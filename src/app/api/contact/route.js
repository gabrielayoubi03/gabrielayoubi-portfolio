import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Add a new document to Firestore
    const docRef = await addDoc(collection(db, 'messages'), {
      ...data,
      createdAt: new Date().toISOString()
    });
    
    return NextResponse.json(
      { message: 'Message stored successfully', id: docRef.id },
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