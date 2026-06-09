"use client";

import { useState } from "react";
import { BlurScrollContainer } from "@/app/components/animations";

export default function SMSOptInPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [consent, setConsent] = useState(false);
  const [stage, setStage] = useState<"input" | "verification" | "success">("input");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!consent) {
        setError("Please agree to receive SMS messages");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/sms/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to send verification code");
      } else {
        setStage("verification");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/sms/confirm-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, code: verificationCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Verification failed");
      } else {
        setStage("success");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen px-6 py-24 bg-muted/20">
      <BlurScrollContainer>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,64,55,0.15),transparent_45%)]" />
          </div>

          <div className="relative z-10 bg-card border border-border shadow-xl rounded-3xl p-10 md:p-14">
            {stage === "input" && (
              <>
                <h1 className="text-4xl md:text-5xl font-semibold mb-6">SMS Messaging Opt-In</h1>
                <p className="text-lg text-muted-foreground mb-8 leading-8">
                  Sign up to receive SMS updates about new projects, availability, and career opportunities. You can opt out at any time.
                </p>

                <form onSubmit={handleSendVerification} className="grid gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="smsPhone">
                      Phone Number
                    </label>
                    <input
                      id="smsPhone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="smsConsent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                      disabled={loading}
                    />
                    <label htmlFor="smsConsent" className="text-sm leading-6 text-muted-foreground">
                      I agree to receive SMS messages regarding updates and opportunities. Message and data rates may apply.
                    </label>
                  </div>

                  {error && <div className="text-sm text-destructive">{error}</div>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white transition hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Verification Code"}
                  </button>
                </form>

                <p className="text-sm text-muted-foreground mt-8">
                  By opting in, you authorize Michael Wiens to send periodic SMS notifications. You may unsubscribe at any time by replying STOP.
                </p>
              </>
            )}

            {stage === "verification" && (
              <>
                <h1 className="text-4xl md:text-5xl font-semibold mb-6">Verify Your Phone Number</h1>
                <p className="text-lg text-muted-foreground mb-8 leading-8">
                  We've sent a verification code to {phoneNumber}. Enter it below to confirm your number.
                </p>

                <form onSubmit={handleConfirmVerification} className="grid gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="verifyCode">
                      Verification Code
                    </label>
                    <input
                      id="verifyCode"
                      type="text"
                      placeholder="000000"
                      maxLength={6}
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ""))}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 text-center text-2xl letter-spacing-widest"
                      required
                      disabled={loading}
                    />
                  </div>

                  {error && <div className="text-sm text-destructive">{error}</div>}

                  <button
                    type="submit"
                    disabled={loading || verificationCode.length !== 6}
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white transition hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Verifying..." : "Verify Code"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setStage("input");
                      setVerificationCode("");
                      setError("");
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    Go back
                  </button>
                </form>
              </>
            )}

            {stage === "success" && (
              <>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-semibold mb-6">You're All Set!</h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-8">
                    Thanks for opting in! You'll start receiving SMS updates about new projects and opportunities.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Verified phone: {phoneNumber}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </BlurScrollContainer>
    </section>
  );
}
