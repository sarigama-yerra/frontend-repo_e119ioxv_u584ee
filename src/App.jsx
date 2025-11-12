import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

function Hero3D() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#05060A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.25)_0%,rgba(10,10,15,0.8)_60%,rgba(5,6,10,1)_100%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-md ring-1 ring-white/10">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_20px_4px_rgba(34,211,238,0.6)]" />
          <span className="text-xs uppercase tracking-[0.2em] text-cyan-200/90">Cesta Digital Crafts</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-violet-200 via-cyan-200 to-fuchsia-200 drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
          Crafting the Future
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl">
          Web, App, AI & Enterprise Solutions — premium experiences powered by bleeding-edge 3D and motion design.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="#services" className="pointer-events-auto rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/20 hover:opacity-95 transition">Explore Services</Link>
          <Link to="/contact" className="pointer-events-auto rounded-full bg-white/10 px-6 py-3 text-white/90 ring-1 ring-white/15 backdrop-blur hover:bg-white/15 transition">Get in touch</Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05060A] to-transparent" />
    </div>
  )
}

function ServicesShowcase() {
  const cards = [
    { title: 'Web Experiences', desc: 'Ultra-fast, aesthetic web apps with 3D flair.' },
    { title: 'Mobile Apps', desc: 'High-quality iOS/Android with native feel.' },
    { title: 'AI Systems', desc: 'Intelligent, explainable AI you can trust.' },
    { title: 'Enterprise', desc: 'Robust, secure solutions at scale.' },
  ]
  return (
    <section id="services" className="relative bg-[#060711] text-white">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(800px_circle_at_80%_20%,rgba(34,211,238,0.25),transparent_60%),radial-gradient(700px_circle_at_50%_80%,rgba(244,114,182,0.2),transparent_60%)]" />
      <div className="container mx-auto px-6 py-24 relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-br from-violet-200 via-cyan-200 to-fuchsia-200">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="group relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 via-cyan-500/10 to-fuchsia-500/10 rounded-2xl" />
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-white/70 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="relative bg-[#05060A] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.15)_0%,rgba(5,6,10,1)_70%)]" />
      <div className="relative container mx-auto px-6 text-center">
        <div className="mx-auto w-48 h-48 rounded-full border border-fuchsia-400/40 shadow-[0_0_80px_20px_rgba(236,72,153,0.2)] flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border border-cyan-400/40 animate-spin-slow" />
        </div>
        <h3 className="mt-10 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-cyan-200 to-fuchsia-200">Ready to build something iconic?</h3>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Let’s merge art, technology, and strategy to craft unforgettable digital experiences.</p>
        <Link to="/contact" className="inline-block mt-8 rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 px-8 py-3 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/20 hover:opacity-95 transition">Get in touch</Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#05060A] text-white">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white/60">Loading 3D...</div>}>
        <Hero3D />
      </Suspense>
      <ServicesShowcase />
      <CTA />
    </div>
  )
}
