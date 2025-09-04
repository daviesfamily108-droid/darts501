'use client';
import { useState } from 'react';
import TrialBanner from '@/components/TrialBanner';
import PremiumOverlay from '@/components/PremiumOverlay';

export default function Home() {
  const [onlineCount, setOnline] = useState(0);
  const [offlineCount, setOffline] = useState(0);
  const [subscribed, setSubscribed] = useState(false); // demo flag

  return (
    <main className="min-h-screen mx-auto max-w-5xl p-4 md:p-8">
      <TrialBanner />
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
          BullseyeDartsLeague <span>🎯</span>
        </h1>
        <div className="text-sm opacity-80">Demo build</div>
      </header>

      <section className="card mb-6">
        <h2 className="text-xl font-semibold mb-2">Quick‑Fire Menu</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => setOnline(onlineCount+1)}>Play Online ({onlineCount})</button>
          <button className="btn btn-success" onClick={() => setOffline(offlineCount+1)}>Play Offline ({offlineCount})</button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Free Stats</h3>
          <ul className="space-y-1">
            <li>Best 3 Darts Avg 🎯</li>
            <li>Worst 3 Darts Avg 🎯</li>
          </ul>
        </div>

        <div className="card relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Premium Stats</h3>
            <span title="Locked">🔒</span>
          </div>
          {!subscribed && <PremiumOverlay />}
          <ul className={`space-y-1 ${subscribed ? '' : 'opacity-60 pointer-events-none'}`}>
            <li>Best Checkout 🔥</li>
            <li>Worst Checkout</li>
            <li>Best Leg Won 🥇</li>
            <li>Worst Leg Won</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
