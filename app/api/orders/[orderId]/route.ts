import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Order from "@/lib/models/Order";

export async function GET(req: NextRequest, context: { params: { orderId: string } }) {
  try {
    await dbConnect();

    // Await params before using them
    const { orderId } = await context.params;

    if (!orderId) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
    }

    console.log("Fetching order with ID:", orderId);

    const order = await Order.findById(orderId).lean();
    if (!order) {
      console.error("Order not found in DB:", orderId);
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


/*
export async function GET(req: NextRequest, { params }: { params: { orderId: string } }) {
  try {
    await dbConnect();

    if (!params?.orderId) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
    }

    console.log("Fetching order with ID:", params.orderId);

    const order = await Order.findById(params.orderId);
    if (!order) {
      console.error("Order not found in DB:", params.orderId);
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
*/