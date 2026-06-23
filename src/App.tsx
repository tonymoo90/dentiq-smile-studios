type Service = {
  title: string;
  description: string;
  accent: string;
};

type Review = {
  quote: string;
  name: string;
  detail: string;
};

type PatientPromise = {
  title: string;
  copy: string;
  mark: string;
};

const services: Service[] = [
  {
    title: "Cleanings",
    description: "Gentle preventive care with a calm, spa-like rhythm.",
    accent: "bg-sage",
  },
  {
    title: "Invisalign",
    description: "Discreet aligners planned around your real life.",
    accent: "bg-clay",
  },
  {
    title: "Veneers",
    description: "Natural-looking smile design with refined proportions.",
    accent: "bg-charcoal",
  },
  {
    title: "Implants",
    description: "Confident tooth replacement with clear next steps.",
    accent: "bg-sage",
  },
  {
    title: "Emergency",
    description: "Same-week relief for tooth pain, chips, and swelling.",
    accent: "bg-clay",
  },
  {
    title: "Whitening",
    description: "Brighter, polished results without a one-size-fits-all plan.",
    accent: "bg-charcoal",
  },
];

const promises: PatientPromise[] = [
  {
    title: "No lectures",
    copy: "We start with where you are today. No shame, no scolding, no awkward explanations required.",
    mark: "01",
  },
  {
    title: "Clear treatment plans",
    copy: "You will see priorities, timelines, and costs in plain language before making decisions.",
    mark: "02",
  },
  {
    title: "Comfort-first visits",
    copy: "From longer appointment blocks to anxiety-friendly options, your pace leads the process.",
    mark: "03",
  },
];

const reviews: Review[] = [
  {
    quote:
      "I avoided the dentist for years and expected to feel embarrassed. Instead, the whole team made me feel calm and cared for.",
    name: "Maya R.",
    detail: "New patient cleaning",
  },
  {
    quote:
      "The space is beautiful, the plan was clear, and my veneers look like my smile on its best day.",
    name: "Jordan T.",
    detail: "Cosmetic dentistry",
  },
  {
    quote:
      "They got me in quickly for a cracked tooth and explained every option without pressure.",
    name: "Priya S.",
    detail: "Emergency visit",
  },
];

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-clay">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-charcoal/70">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Button({
  children,
  href = "#contact",
  variant = "primary",
}: {
  children: string;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-charcoal text-porcelain shadow-soft hover:bg-charcoal/90"
      : "border border-charcoal/15 bg-porcelain/70 text-charcoal hover:bg-white";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </a>
  );
}

function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-charcoal/10 bg-white/70 px-4 py-3 text-sm text-charcoal/75 shadow-sm">
      <span className="h-2.5 w-2.5 rounded-full bg-sage" />
      {label}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group rounded-[1.75rem] border border-charcoal/10 bg-porcelain p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div
        className={`mb-8 h-12 w-12 rounded-2xl ${service.accent} opacity-90`}
      />
      <h3 className="text-xl font-semibold text-charcoal">{service.title}</h3>
      <p className="mt-3 leading-7 text-charcoal/65">{service.description}</p>
    </article>
  );
}

function PromiseCard({ item }: { item: PatientPromise }) {
  return (
    <article className="rounded-[2rem] border border-charcoal/10 bg-white/75 p-7">
      <div className="mb-8 flex items-center justify-between">
        <span className="rounded-full bg-linen px-4 py-2 text-xs font-bold text-clay">
          {item.mark}
        </span>
        <span className="h-px w-16 bg-charcoal/10" />
      </div>
      <h3 className="text-2xl font-semibold text-charcoal">{item.title}</h3>
      <p className="mt-4 leading-8 text-charcoal/68">{item.copy}</p>
    </article>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-[2rem] border border-charcoal/10 bg-porcelain p-8 shadow-sm">
      <div className="mb-8 flex gap-1 text-clay" aria-label="Five star review">
        {"* * * * *"}
      </div>
      <p className="text-xl leading-9 text-charcoal">"{review.quote}"</p>
      <div className="mt-8 border-t border-charcoal/10 pt-6">
        <p className="font-semibold text-charcoal">{review.name}</p>
        <p className="mt-1 text-sm text-charcoal/55">{review.detail}</p>
      </div>
    </article>
  );
}

function ContactDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-charcoal/10 bg-white/70 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
        {label}
      </p>
      <p className="mt-3 text-lg font-semibold leading-7 text-charcoal">
        {value}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory text-charcoal">
      <nav className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-charcoal text-sm font-bold text-porcelain">
              DS
            </span>
            <span className="text-base font-semibold tracking-tight sm:text-lg">
              Dentiq Smile Studios
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-charcoal/70 lg:flex">
            <a href="#services" className="transition hover:text-charcoal">
              Services
            </a>
            <a href="#insurance" className="transition hover:text-charcoal">
              Insurance
            </a>
            <a href="#reviews" className="transition hover:text-charcoal">
              Reviews
            </a>
            <a href="#contact" className="transition hover:text-charcoal">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-porcelain transition hover:bg-charcoal/90"
          >
            Schedule
          </a>
        </div>
      </nav>

      <section className="relative px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-linen/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-charcoal/10 bg-white/70 px-4 py-2 text-sm font-semibold text-clay">
              Premium family and cosmetic dentistry
            </p>
            <h1 className="max-w-3xl font-serif text-6xl leading-[0.95] tracking-normal text-charcoal sm:text-7xl lg:text-8xl">
              Dentistry without judgment.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/70 sm:text-xl sm:leading-9">
              Whether it's been 6 months or 16 years, we make getting back to
              the dentist feel comfortable.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button>Schedule Appointment</Button>
              <Button href="tel:+12014319753" variant="secondary">
                Call Now
              </Button>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrustBadge label="Same-week appointments" />
              <TrustBadge label="Most PPO insurance accepted" />
              <TrustBadge label="Anxiety-friendly care" />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] border border-charcoal/10 bg-gradient-to-br from-white via-linen to-oat p-5 shadow-soft">
              <div className="h-full rounded-[2rem] border border-white/80 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.92),transparent_33%),linear-gradient(135deg,#f9f1e6,#d9c6ad_52%,#94a78f)] p-6">
                <div className="flex h-full flex-col justify-between">
                  <div className="max-w-56 rounded-3xl border border-white/70 bg-white/65 p-5 backdrop-blur">
                    <p className="text-sm font-semibold text-charcoal">
                      New patient visit
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-charcoal">
                      75 min
                    </p>
                    <p className="mt-2 text-sm leading-6 text-charcoal/60">
                      A relaxed pace for questions, photos, and a clear plan.
                    </p>
                  </div>
                  <div className="ml-auto w-48 rounded-3xl bg-charcoal p-5 text-porcelain shadow-soft">
                    <p className="text-sm text-porcelain/70">Smile preview</p>
                    <div className="mt-5 grid grid-cols-6 gap-1.5">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <span
                          key={index}
                          className="h-7 rounded-b-full rounded-t-sm bg-porcelain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-3 rounded-[1.75rem] border border-charcoal/10 bg-porcelain p-5 shadow-soft sm:-left-8">
              <p className="text-sm text-charcoal/55">Patient comfort score</p>
              <p className="mt-2 text-3xl font-semibold">4.9/5</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our care"
            title="Modern dentistry for every kind of smile"
            copy="Preventive, restorative, and cosmetic care in one calm studio, built around comfort and transparency."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen/70 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-clay">
                Fresh start
              </p>
              <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
                For patients who've put it off
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-charcoal/70 lg:ml-auto">
              Life gets full. Dental anxiety is real. We designed the first
              visit to feel grounded, respectful, and doable.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {promises.map((item) => (
              <PromiseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="aspect-[4/5] rounded-[2.5rem] border border-charcoal/10 bg-gradient-to-br from-oat via-linen to-sage p-5 shadow-soft">
            <div className="flex h-full flex-col justify-end rounded-[2rem] bg-[radial-gradient(circle_at_50%_24%,#fff8ee_0_12%,transparent_13%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(39,35,31,0.18))] p-7">
              <div className="rounded-3xl border border-white/70 bg-white/70 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-charcoal">
                  Portrait placeholder
                </p>
                <p className="mt-2 text-sm leading-6 text-charcoal/60">
                  Warm editorial portrait area for the founder dentist.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-clay">
              Meet the dentist
            </p>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-6xl">
              Dr. Doreen Charly believes calm care is better care.
            </h2>
            <p className="mt-7 text-lg leading-9 text-charcoal/70">
              Dentiq Smile Studios was created for people who want excellent
              dentistry without the cold clinical feeling. Dr. Charly blends
              advanced cosmetic training with a gentle, unrushed approach so
              every patient understands their options and feels in control.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["5+ years", "AACD trained", "Invisalign", "Comfort led"].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-charcoal/10 bg-white/70 p-5 text-center"
                >
                  <p className="font-semibold text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-porcelain px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Reviews"
            title="Care that feels as good as it looks"
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section id="insurance" className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-charcoal/10 bg-charcoal p-8 text-porcelain shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-oat">
                Insurance and financing
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Beautiful care with clear costs.
              </h2>
            </div>
            <p className="text-lg leading-8 text-porcelain/72">
              We accept most PPO insurance plans and offer flexible monthly
              financing for cosmetic and restorative treatment.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Visit us"
            title="Schedule a calmer dental visit"
            copy="Call, book online, or stop by our studio near the heart of the neighborhood."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              <ContactDetail label="Hours" value="Mon-Thu 8-5, Fri 8-2" />
              <ContactDetail label="Phone" value="201-431-9753" />
              <ContactDetail
                label="Location"
                value="110 Charlotte Place, Englewood Cliffs, NJ"
              />
            </div>
            <div className="min-h-96 rounded-[2.5rem] border border-charcoal/10 bg-gradient-to-br from-linen via-white to-oat p-5 shadow-soft">
              <div className="relative h-full min-h-80 overflow-hidden rounded-[2rem] border border-charcoal/10 bg-porcelain">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,35,31,0.06)_1px,transparent_1px),linear-gradient(rgba(39,35,31,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[12px] border-clay bg-white shadow-soft" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-charcoal p-5 text-porcelain">
                  <p className="text-sm text-porcelain/65">Map placeholder</p>
                  <p className="mt-1 text-lg font-semibold">
                    Easy parking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-charcoal/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-charcoal/60 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-charcoal">Dentiq Smile Studios</p>
          <p>Modern cosmetic and family dentistry in Englewood Cliffs.</p>
          <p>Copyright 2026 Dentiq Smile Studios</p>
        </div>
      </footer>
    </main>
  );
}
