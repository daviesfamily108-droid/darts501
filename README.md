# BullseyeDartsLeague — Styled + Stripe (Test)

## Setup
1. Install deps: `npm install`
2. Create `.env.local` with:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PRICE_ID=price_...
   ```
   Use Stripe test mode. Price should be a recurring £2.99/month.
3. Run dev: `npm run dev` then open http://localhost:3000

## Notes
- Premium stats are shown locked with a 🔒 and overlay.
- The **Unlock with Free Trial** button posts to `/api/checkout` and redirects to Stripe Checkout.
- TailwindCSS is preconfigured. Styles live in `styles/globals.css` and utility classes in the components/pages.
