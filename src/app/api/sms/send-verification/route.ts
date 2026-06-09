import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Validate phone number format
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromPhone = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromPhone) {
      return NextResponse.json(
        { error: "Twilio credentials not configured" },
        { status: 500 }
      );
    }

    // Generate a 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Store verification code in session/cache (in production, use Redis or database)
    // For now, we'll send it via Twilio
    const formattedPhone = `+1${cleanPhone.slice(-10)}`;
    
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

    const response = await fetch("https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: fromPhone,
        To: formattedPhone,
        Body: `Your verification code is: ${verificationCode}. This code expires in 10 minutes.`,
      }).toString(),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: "Failed to send SMS", details: error },
        { status: response.status }
      );
    }

    // Store code in memory/session (implement proper storage in production)
    // For now, return success and client will store the phone temporarily
    return NextResponse.json({
      success: true,
      message: "Verification code sent",
      // In production, don't return the code - just confirm it was sent
      phoneNumber: formattedPhone,
    });
  } catch (error) {
    console.error("SMS verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
