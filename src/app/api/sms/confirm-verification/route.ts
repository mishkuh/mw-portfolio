import { NextRequest, NextResponse } from "next/server";

// In production, store verification codes in Redis or database with expiration
const verificationCodes: Record<string, { code: string; expiresAt: number }> = {};

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, code } = await request.json();

    if (!phoneNumber || !code) {
      return NextResponse.json(
        { error: "Phone number and verification code required" },
        { status: 400 }
      );
    }

    // In production, verify against database
    // For now, this is a placeholder - you'll need proper verification logic
    const response = NextResponse.json({
      success: true,
      message: "Phone number verified successfully",
      phoneNumber,
    });

    // Set a cookie to mark this phone as verified
    response.cookies.set("phone_verified", phoneNumber, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;
  } catch (error) {
    console.error("SMS confirmation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
