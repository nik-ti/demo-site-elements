import { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Mountain, Waves, Mail, Plus } from 'lucide-react'

export default function App() {
  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
  }

  const faqs = [
    {
      q: 'What inspires the aesthetic?',
      a: 'Natural forms, slow motion, and materials like stone, water, and wood. We design for calm attention rather than constant stimulation.',
    },
    {
      q: 'Is this a real studio?',
      a: 'This is a sample site showcasing a nature-inspired layout, interactions, and component library you could adapt for a real brand.',
    },
    {
      q: 'How accessible is the design?',
      a: 'Color contrast, keyboard focus states, semantic markup, and large touch targets are considered to support accessibility.',
    },
  ]

  const [open, setOpen] = useState<number | null>(null)

  // Procedural tokens (six cards)
  const tokens = [
    {
      name: 'Moss Gradient',
      bg: 'linear-gradient(135deg, #e6f1e8 0%, #cfe3d7 50%, #b6d2c2 100%)',
    },
    {
      name: 'Sand Dune',
      bg: 'linear-gradient(180deg, #f4ecdd 0%, #efe5cf 50%, #e6d9c0 100%)',
    },
    {
      name: 'River Glass',
      bg: 'radial-gradient(120% 120% at 20% 20%, #dfe9e2 0%, #cfe3d7 45%, #eef3ee 100%)',
    },
    {
      name: 'Stone Vein',
      bg: 'repeating-linear-gradient(45deg, #efe9dc 0 12px, #e6decd 12px 24px)',
    },
    {
      name: 'Canopy Shade',
      bg: 'linear-gradient(135deg, #d7e7dc 0%, #a8cbb6 100%)',
    },
    {
      name: 'Clay Ridge',
      bg: 'linear-gradient(160deg, #f2e8d9 0%, #e7d9c3 100%)',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef3ee] via-[#f7f3ea] to-[#f5efe4] text-[#253328] overflow-x-hidden">
      {/* Announcement Bar */}
      <div className="w-full bg-[#dfe9e2] text-[#2a4b35] text-xs md:text-sm py-2 text-center">
        Sample concept • Nature-inspired UI kit • <span className="font-medium">Terra Elements</span>
      </div>

      {/* Header */}
      <header className="border-b border-[#e3e0d6] bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-[#2f6f53] text-white grid place-items-center">
              <Leaf className="size-4" />
            </div>
            <span className="font-medium tracking-tight">Terra Elements</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#466452]">
            <a href="#values" className="hover:text-[#1e4d37]">
              Values
            </a>
            <a href="#library" className="hover:text-[#1e4d37]">
              Library
            </a>
            <a href="#stories" className="hover:text-[#1e4d37]">
              Stories
            </a>
            <a href="#faq" className="hover:text-[#1e4d37]">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#1e4d37]">
              Reach Out
            </a>
          </nav>
          <a
            href="#contact"
            className="px-4 py-2 text-sm rounded-full border border-[#cfd7cf] hover:bg-white/60 transition"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-[#cfe3d7] blur-3xl opacity-40" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-[#e8dbc2] blur-3xl opacity-40" />
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-wider text-xs text-[#5e7a67]">Nature • Motion • Balance</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-serif leading-tight text-[#1f2e26]">
              Design that breathes with the earth
            </h1>
            <p className="mt-5 text-[#4a6455] max-w-prose">
              A softer system for digital spaces — shaped by water, stone, and light. Terra Elements is a
              sample site demonstrating a distinct nature aesthetic and component patterns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Curved sections', 'Organic cards', 'Token library', 'Accessible focus'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/70 border border-[#dcd7c9] text-xs text-[#234534]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
              <video
                className="w-full aspect-[4/5] object-cover"
                src="https://cdn.coverr.co/videos/coverr-water-flowing-over-rocks-6224/1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_100%,rgba(0,0,0,0.25),transparent)]" />
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              />
              {/* Chips */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-4 flex flex-wrap gap-2"
              >
                {['Calm', 'Organic', 'Lightweight'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/60 text-[11px] font-medium text-[#1f2e26] shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
              {/* Live badge */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 right-4"
              >
                <span className="px-3 py-1 rounded-full bg-[#2f6f53] text-white text-[11px] font-medium shadow">
                  Live
                </span>
              </motion.div>
            </div>
            {/* Slow loop badge */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-md border border-[#e5e2d8] rounded-2xl px-4 py-3 flex items-center gap-2">
              <Waves className="text-[#2f6f53]" size={18} />
              <span className="text-sm text-[#274235]">Slow loop • 12s</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="bg-white/70 border-y border-[#e9e5da]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-serif text-center text-[#223529]">
            Guiding Values
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-3 text-center max-w-2xl mx-auto text-[#4a6455]"
          >
            Form follows feeling. Motion serves meaning. Materials matter.
          </motion.p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                icon: <Mountain className="text-[#2f6f53]" />, title: 'Grounded', desc: 'Rooted in place and material honesty.',
              },
              {
                icon: <Waves className="text-[#2f6f53]" />, title: 'In Flow', desc: 'Interfaces that move with intention.',
              },
              {
                icon: <Leaf className="text-[#2f6f53]" />, title: 'Alive', desc: 'Soft, breathable spaces that invite focus.',
              },
              {
                icon: <Leaf className="text-[#2f6f53]" />, title: 'Sustainable', desc: 'Designs that respect resources and last long.',
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl bg-[#f7f6f1] border border-[#e6e1d6] p-6 shadow-sm"
              >
                <div className="size-10 grid place-items-center rounded-xl bg-[#e2efe8] mb-4">
                  {c.icon}
                </div>
                <div className="font-medium text-lg text-[#1f2e26]">{c.title}</div>
                <p className="text-sm text-[#4a6455] mt-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Library */}
      <section id="library" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-serif text-center text-[#223529]"
          >
            Elements Library
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-3 text-center max-w-2xl mx-auto text-[#4a6455]"
          >
            Procedural color, texture, and motion tokens — no external images.
          </motion.p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tokens.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ delay: 0.05 * i }}
                className="rounded-3xl border border-[#e6e1d6] bg-white/70 shadow-sm overflow-hidden"
              >
                <div className="h-40 md:h-52 w-full" style={{ backgroundImage: t.bg }} />
                <div className="p-5">
                  <div className="font-medium text-[#1f2e26]">{t.name}</div>
                  <p className="text-sm text-[#4a6455]">
                    Layered gradients and CSS-only patterns that keep payloads tiny.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="bg-white/70 border-y border-[#e9e5da]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-serif text-center text-[#223529]"
          >
            Stories
          </motion.h2>
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[#d9d4c8]" />
            {[
              {
                t: 'Field Notes',
                d: 'Sketching components outdoors to study light, shade, and edge softness.',
              },
              {
                t: 'Water Study',
                d: 'Exploring scroll motion inspired by river currents and tidal cycles.',
              },
              {
                t: 'Material Lab',
                d: 'Testing color palettes against stone, clay, and fiber swatches.',
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className={`relative md:grid md:grid-cols-2 gap-6 ${i % 2 ? 'md:pl-12' : 'md:pr-12'} py-6`}
              >
                <div className={`hidden md:block ${i % 2 ? 'order-2' : ''}`}></div>
                <div className="bg-[#f7f6f1] border border-[#e6e1d6] rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-[#2f6f53]">
                    <div className="size-2 rounded-full bg-[#2f6f53]" />
                    <span className="text-xs uppercase tracking-wide">
                      Note {i + 1}
                    </span>
                  </div>
                  <div className="mt-2 font-medium text-lg text-[#1f2e26]">
                    {s.t}
                  </div>
                  <p className="text-sm text-[#4a6455] mt-1">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-serif text-center text-[#223529]"
          >
            FAQ
          </motion.h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const active = open === i
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#f7f6f1] border border-[#e6e1d6] rounded-2xl"
                >
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="w-full flex items-center justify-between text-left px-4 md:px-6 py-4 md:py-5"
                  >
                    <span className="font-medium text-[#1f2e26]">{f.q}</span>
                    {active ? (
                      <Plus className="text-[#2f6f53] rotate-45" />
                    ) : (
                      <Plus className="text-[#2f6f53]" />
                    )}
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    } px-4 md:px-6`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm text-[#4a6455]">{f.a}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white/70 border-t border-[#e9e5da]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-4xl font-serif text-[#223529]"
            >
              Reach Out
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="mt-3 text-[#4a6455]"
            >
              Whether you wish to collaborate, share a story, or explore work further — we’d
              love to connect.
            </motion.p>
            <motion.a
              {...fadeUp}
              transition={{ delay: 0.15 }}
              href="mailto:hello@simple-flow.co"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-[#2f6f53] text-white text-sm font-medium hover:bg-[#254f3c] transition"
            >
              <Mail className="size-4" />
              Email us
            </motion.a>
          </div>
          <motion.form
            {...fadeUp}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-[#f7f6f1] border border-[#e6e1d6] rounded-2xl p-6 shadow-sm space-y-4"
          >
            <div>
              <label className="block text-xs text-[#476553] mb-1">Name</label>
              <input
                className="w-full rounded-xl border border-[#d8d3c9] bg-white/80 px-3 py-2 outline-none focus:ring-4 focus:ring-[#cfe3d7]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-[#476553] mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-[#d8d3c9] bg-white/80 px-3 py-2 outline-none focus:ring-4 focus:ring-[#cfe3d7]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs text-[#476553] mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-[#d8d3c9] bg-white/80 px-3 py-2 outline-none focus:ring-4 focus:ring-[#cfe3d7]"
                placeholder="Tell us a little bit..."
              />
            </div>
            <button
              className="w-full rounded-xl bg-[#2f6f53] text-white py-2.5 font-medium hover:bg-[#254f3c] transition"
            >
              Send (demo)
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e3e0d6]">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#597563]">
            © {new Date().getFullYear()} Terra Elements (Sample)
          </p>
          <p className="text-[#597563]">
            Built by{' '}
            <a
              href="https://simple-flow.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2f6f53] font-semibold underline underline-offset-2 hover:text-[#1e4d37] transition-colors"
            >
              Simple Flow
            </a>
          </p>
        </div>
      </footer>

      {/* Floating Badge */}
      <a
        href="https://simple-flow.co"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-[#2f6f53] text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
      >
        Built by Simple Flow
      </a>
    </div>
  )
}