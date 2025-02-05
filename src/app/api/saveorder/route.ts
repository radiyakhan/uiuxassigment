// import { NextRequest, NextResponse } from 'next/server';
// import { createClient } from '@sanity/client';
// type OrderData = {
//   userId: string;
//   fullName: string;
//   email: string;
//   phone: string;
//   company: string;
//   address: string;
//   orderTotal: number;
//   cartItems: {
//     name: string;
//     quantity: number;
//     price: number;}[];};
// export async function POST(req: NextRequest) {
//   const client = createClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//     useCdn: false,
//     token: process.env.SANITY_TOKEN!,
//     apiVersion: '2021-08-31',});
//   try { const data: OrderData = await req.json();
//     // Define the order document structure to match your schema
//     const newOrder = {
//       _type: 'order',
//       userId: data.userId,
//       fullName: data.fullName,
//       email: data.email,
//       phone: data.phone,
//       company: data.company,
//       address: data.address,
//       orderTotal: data.orderTotal,
//       cartItems: data.cartItems.map((item) => ({
//         title: item.name, // 'title' hona chahiye jo schema me hai
//         quantity: item.quantity,
//         price: Number(item.price) // Ensure price is a number
//       })),
//       // cartItems: data.cartItems.map((item) => ${item.name} (x${item.quantity}) - $${item.price}), // Flatten cart items into string format
//       orderStatus: 'Order Confirmed',};
//     // Create the order in Sanity
//     await client.create(newOrder);
//     return NextResponse.json({ message: 'Order created successfully!' });
//   } catch (error) {
//     console.error('Error creating order:', error);
//     return NextResponse.json(
//       { error: 'Failed to create order. Please try again.' },
//       { status: 500 })}}


import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique keys

export async function POST(req: NextRequest) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: false,
    token: process.env.SANITY_TOKEN!,
    apiVersion: '2021-08-31',
  });

  try {
    const data = await req.json();
    const newOrder = {
      _type: 'order',
      userId: data.userId,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      address: data.address,
      orderTotal: Number(data.orderTotal), // Ensure orderTotal is a number
      cartItems: data.cartItems.map((item:any) => ({
        _key: uuidv4(), // Unique key for each cart item
        title: item.title, // 'title' as per schema
        quantity: item.quantity,
        price: Number(item.price), // Ensure price is a number
      })),
      orderStatus: 'Order Confirmed',
    };

    await client.create(newOrder);
    return NextResponse.json({ success: true, message: 'Order created successfully!' });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order. Please try again.' },
      { status: 500 }
    );
  }
}