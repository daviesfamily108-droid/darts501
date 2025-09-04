'use client';
import React, { useState } from 'react';

export default function PremiumOverlay() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);
      const res = await fetch('/api/checkout', { method: 'POST' });
      if (!res.ok) throw new Error('Checkout init failed');
      const { url } = await res.json();
      if (url) window.location.href = url;
      else alert('Stripe not configured. Set STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PRICE_ID.');
    } catch (e:any) {
      alert(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="btn btn-warning text-lg"
        aria-label="Start free trial"
      >
        {loading ? 'Redirecting…' : 'Unlock with Free Trial'}
      </button>
    </div>
  );
}
