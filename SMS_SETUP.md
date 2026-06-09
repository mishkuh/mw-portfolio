# SMS Verification Setup Guide

## Environment Variables

Add the following to your `.env.local` file:

```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
```

## Getting Your Twilio Credentials

1. Go to [Twilio Console](https://www.twilio.com/console)
2. Find your **Account SID** and **Auth Token** on the dashboard
3. Get a phone number from Twilio (SMS capable)

## How It Works

1. User enters phone number and confirms consent
2. Click "Send Verification Code" → SMS is sent with 6-digit code
3. User enters the verification code they received
4. Click "Verify Code" → Phone number is confirmed
5. Success page shows verified phone number

## Testing

For local development, you can use Twilio's test credentials or a verified phone number in your account settings.

## Next Steps (Optional Enhancements)

- Store verified phone numbers in a database
- Add rate limiting to prevent abuse
- Implement code expiration (currently no expiration check)
- Add phone number unsubscribe handling
- Track opt-in status per user
