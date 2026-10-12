/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickContactHelper } from './components/QuickContactHelper';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { CoverageAreas } from './components/CoverageAreas';
import { PricingTransparency } from './components/PricingTransparency';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans pb-16 sm:pb-0">
      {/* Top Bar Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Quick WhatsApp & Call Dispatch Helper */}
        <QuickContactHelper />

        {/* Services Bento Grid */}
        <Services />

        {/* How It Works */}
        <HowItWorks />

        {/* Coverage Areas & Car Brands */}
        <CoverageAreas />

        {/* Transparent Starting Rates */}
        <PricingTransparency />

        {/* Customer Proof & Real Stories */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Contact Buttons (WhatsApp & Call) */}
      <FloatingContactButtons />
    </div>
  );
}
