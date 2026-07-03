import { useEffect } from "react";

type Service = {
  title: string;
  description: string;
  accent: string;
  slug: string;
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

type Transformation = {
  title: string;
  treatment: string;
  image: string;
  featured?: boolean;
};

type ServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  heroCopy: string;
  intro: string;
  highlights: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const openDentalSchedulingUrl =
  import.meta.env.VITE_OPEN_DENTAL_SCHEDULING_URL?.trim();
const schedulingHref = openDentalSchedulingUrl || "tel:+12014319753";

const services: Service[] = [
  {
    title: "Cleanings",
    description: "Gentle preventive care with a calm, spa-like rhythm.",
    accent: "bg-sage",
    slug: "dental-cleanings-englewood-cliffs",
  },
  {
    title: "Invisalign",
    description: "Discreet aligners planned around your real life.",
    accent: "bg-clay",
    slug: "invisalign-englewood-cliffs",
  },
  {
    title: "Veneers",
    description: "Natural-looking smile design with refined proportions.",
    accent: "bg-charcoal",
    slug: "veneers-englewood-cliffs",
  },
  {
    title: "Implants",
    description: "Confident tooth replacement with clear next steps.",
    accent: "bg-gradient-to-br from-sage/80 to-linen",
    slug: "dental-implants-englewood-cliffs",
  },
  {
    title: "Emergency",
    description: "Same-week relief for tooth pain, chips, and swelling.",
    accent: "bg-gradient-to-br from-clay/75 to-oat",
    slug: "emergency-dentist-englewood-cliffs",
  },
  {
    title: "Whitening",
    description: "Brighter, polished results without a one-size-fits-all plan.",
    accent: "border border-charcoal/10 bg-white shadow-sm",
    slug: "teeth-whitening-englewood-cliffs",
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
      "Such a good doctor. Very caring and not trying to sell me treatment.",
    name: "WebMD patient",
    detail: "November 13, 2025",
  },
  {
    quote:
      "Gentle hands, good at explaining treatment, and very funny as well.",
    name: "WebMD patient",
    detail: "November 13, 2025",
  },
  {
    quote:
      "Friendly staff, quick and efficient. Clean office. Dentist was very nice and gave me my options.",
    name: "Brett A.",
    detail: "Zocdoc verified patient, July 2, 2025",
  },
];

const transformations: Transformation[] = [
  {
    title: "Chipped front tooth repair",
    treatment: "Cosmetic bonding",
    image: "/assets/transformation-chipped-tooth-1.webp",
    featured: true,
  },
  {
    title: "Natural edge restoration",
    treatment: "Chipped tooth bonding",
    image: "/assets/transformation-chipped-tooth-2.webp",
  },
];

const servicePages: ServicePage[] = [
  {
    slug: "new-patient-dentist-englewood-cliffs",
    eyebrow: "New patient visits",
    title: "New patient dentist in Englewood Cliffs, NJ",
    metaTitle:
      "New Patient Dentist in Englewood Cliffs, NJ | Dentiq Smile Studios",
    metaDescription:
      "Schedule a calm new patient dental visit in Englewood Cliffs, NJ. Judgment-free care, clear treatment plans, PPO insurance help, and same-week appointments.",
    heroCopy:
      "A first visit designed for clarity, comfort, and absolutely no judgment, whether it has been 6 months or 16 years.",
    intro:
      "Your first appointment at Dentiq Smile Studios starts with a conversation. We listen to what brought you in, take the records needed to understand your smile, and explain your options in a calm, practical way.",
    highlights: [
      "75-minute new patient visit",
      "Photos, x-rays, and exam as needed",
      "No lectures or shame",
      "Clear plan with insurance guidance",
    ],
    faqs: [
      {
        question: "What happens at my first visit?",
        answer:
          "We begin with your goals and concerns, then complete a thoughtful exam with photos and x-rays as needed. From there, we explain what we see and outline next steps clearly.",
      },
      {
        question: "Will I get a cleaning at my first appointment?",
        answer:
          "Sometimes, yes. If your gums and dental needs allow for a routine cleaning, we will try to keep care efficient. If you need a deeper or different type of visit, we will explain why before moving forward.",
      },
      {
        question: "What if I am embarrassed or nervous?",
        answer:
          "You are not alone, and you will not be scolded. We designed the visit to feel calm, respectful, and paced around comfort.",
      },
      {
        question: "Can you help me understand insurance?",
        answer:
          "Yes. We accept many PPO plans and can help review benefits and estimated costs before treatment decisions are made.",
      },
    ],
  },
  {
    slug: "dental-cleanings-englewood-cliffs",
    eyebrow: "Preventive dentistry",
    title: "Dental cleanings in Englewood Cliffs, NJ",
    metaTitle: "Dental Cleanings in Englewood Cliffs, NJ | Dentiq Smile Studios",
    metaDescription:
      "Gentle dental cleanings and preventive visits in Englewood Cliffs, NJ. Judgment-free care for new and returning patients.",
    heroCopy:
      "A calm, thorough cleaning visit designed to help you feel caught up, informed, and comfortable.",
    intro:
      "Cleanings at Dentiq Smile Studios are unhurried and clear. We check your gums, teeth, bite, and concerns, then explain what we see in plain language so your next steps feel manageable.",
    highlights: [
      "Gentle cleanings for sensitive or anxious patients",
      "Digital photos and clear explanations",
      "Personalized prevention plan",
      "Most PPO insurance accepted",
    ],
    faqs: [
      {
        question: "What if I have not had a cleaning in years?",
        answer:
          "That is exactly what we are here for. We start with where you are today and build a realistic plan without lectures or shame.",
      },
      {
        question: "How often should I schedule a dental cleaning?",
        answer:
          "Many patients do well with cleanings every six months, while some gum or buildup concerns may benefit from a different schedule.",
      },
      {
        question: "Will my first visit include a treatment plan?",
        answer:
          "Yes. If we see anything that needs attention, we will explain priorities, timing, and options before you make decisions.",
      },
    ],
  },
  {
    slug: "invisalign-englewood-cliffs",
    eyebrow: "Clear aligners",
    title: "Invisalign in Englewood Cliffs, NJ",
    metaTitle: "Invisalign in Englewood Cliffs, NJ | Dentiq Smile Studios",
    metaDescription:
      "Explore Invisalign clear aligners in Englewood Cliffs, NJ with modern cosmetic dentistry and comfortable planning.",
    heroCopy:
      "Subtle orthodontic treatment for patients who want a straighter smile without traditional braces.",
    intro:
      "Invisalign planning begins with your goals, bite, timeline, and daily routine. We design aligner care around natural-looking results and a process that feels practical.",
    highlights: [
      "Clear aligner planning for adults and teens",
      "Smile and bite evaluation",
      "Cosmetic-minded treatment goals",
      "Flexible appointment flow",
    ],
    faqs: [
      {
        question: "Am I a candidate for Invisalign?",
        answer:
          "Many mild to moderate spacing, crowding, and bite concerns can be treated with clear aligners. A consultation confirms what is realistic.",
      },
      {
        question: "How long does Invisalign take?",
        answer:
          "Treatment time varies by case. After your exam, we can give a clearer estimate based on the movement needed.",
      },
      {
        question: "Can Invisalign improve my smile before veneers or bonding?",
        answer:
          "Often, yes. Aligning teeth first can make cosmetic dentistry more conservative and natural-looking.",
      },
    ],
  },
  {
    slug: "veneers-englewood-cliffs",
    eyebrow: "Cosmetic dentistry",
    title: "Veneers in Englewood Cliffs, NJ",
    metaTitle: "Veneers in Englewood Cliffs, NJ | Dentiq Smile Studios",
    metaDescription:
      "Natural-looking porcelain veneers in Englewood Cliffs, NJ. Cosmetic smile design with refined, patient-centered planning.",
    heroCopy:
      "Thoughtful smile design for patients who want a brighter, more balanced smile that still feels like them.",
    intro:
      "Veneers are never one-size-fits-all here. We look at tooth shape, shade, facial balance, bite, and your comfort level before recommending a cosmetic plan.",
    highlights: [
      "Natural-looking smile design",
      "Shade and shape planning",
      "Conservative cosmetic options",
      "Clear treatment sequence and costs",
    ],
    faqs: [
      {
        question: "Do veneers look natural?",
        answer:
          "They can. Natural results depend on proportion, translucency, shade, and careful planning around your face and smile.",
      },
      {
        question: "Are veneers permanent?",
        answer:
          "Veneers are a long-term cosmetic treatment and usually involve changing the tooth surface. We review conservative options first.",
      },
      {
        question: "Can veneers fix chipped teeth?",
        answer:
          "Sometimes. Small chips may also be treated with bonding, depending on the tooth, bite, and cosmetic goals.",
      },
    ],
  },
  {
    slug: "dental-implants-englewood-cliffs",
    eyebrow: "Restorative dentistry",
    title: "Dental implants in Englewood Cliffs, NJ",
    metaTitle: "Dental Implants in Englewood Cliffs, NJ | Dentiq Smile Studios",
    metaDescription:
      "Dental implant restoration planning in Englewood Cliffs, NJ for confident tooth replacement and clear next steps.",
    heroCopy:
      "A clear, supportive path for replacing missing teeth with stable, natural-looking restorations.",
    intro:
      "Dental implant care should feel organized from the start. We help you understand candidacy, timing, restorative options, and how the final tooth should look and function.",
    highlights: [
      "Single-tooth and multi-tooth replacement planning",
      "Restorative implant crowns",
      "Clear coordination and timelines",
      "Comfort-first visits",
    ],
    faqs: [
      {
        question: "What is a dental implant?",
        answer:
          "A dental implant is a replacement tooth root that supports a crown, bridge, or denture. We focus on the final restoration and overall plan.",
      },
      {
        question: "How long does implant treatment take?",
        answer:
          "Timing depends on healing, bone support, and the type of restoration. We will walk through the sequence before treatment begins.",
      },
      {
        question: "Will an implant crown match my smile?",
        answer:
          "The goal is a restoration that blends with your teeth in shape, shade, and bite.",
      },
    ],
  },
  {
    slug: "emergency-dentist-englewood-cliffs",
    eyebrow: "Urgent dental care",
    title: "Emergency dentist in Englewood Cliffs, NJ",
    metaTitle: "Emergency Dentist in Englewood Cliffs, NJ | Dentiq Smile Studios",
    metaDescription:
      "Emergency dental care in Englewood Cliffs, NJ for tooth pain, chipped teeth, cracked teeth, swelling, and urgent concerns.",
    heroCopy:
      "Same-week help for tooth pain, chips, cracks, swelling, and dental problems that cannot wait.",
    intro:
      "Dental emergencies are stressful. We focus first on comfort and clarity, then explain what is happening and what options can get you stable.",
    highlights: [
      "Tooth pain and swelling visits",
      "Chipped or cracked tooth evaluation",
      "Clear urgent-care options",
      "Judgment-free support",
    ],
    faqs: [
      {
        question: "What counts as a dental emergency?",
        answer:
          "Severe tooth pain, swelling, broken teeth, lost restorations, and injuries are good reasons to call promptly.",
      },
      {
        question: "Can you repair a chipped front tooth?",
        answer:
          "Often, yes. Depending on the chip, bonding or another cosmetic restoration may help restore the shape and appearance.",
      },
      {
        question: "Should I wait if tooth pain comes and goes?",
        answer:
          "It is better to have it checked. Intermittent pain can still point to a problem that is easier to treat earlier.",
      },
    ],
  },
  {
    slug: "teeth-whitening-englewood-cliffs",
    eyebrow: "Cosmetic whitening",
    title: "Teeth whitening in Englewood Cliffs, NJ",
    metaTitle: "Teeth Whitening in Englewood Cliffs, NJ | Dentiq Smile Studios",
    metaDescription:
      "Teeth whitening in Englewood Cliffs, NJ with polished, natural-looking cosmetic dentistry guidance.",
    heroCopy:
      "A brighter smile plan that considers sensitivity, shade goals, and what will look natural for you.",
    intro:
      "Whitening works best when it is planned around your teeth, existing dental work, and comfort. We help you choose an approach that feels polished, not overdone.",
    highlights: [
      "Shade evaluation and smile goals",
      "Guidance for sensitivity",
      "Cosmetic planning before bonding or veneers",
      "Natural-looking results",
    ],
    faqs: [
      {
        question: "Will whitening make my teeth sensitive?",
        answer:
          "Some patients notice temporary sensitivity. We can plan around that and recommend options that fit your comfort level.",
      },
      {
        question: "Does whitening work on crowns or veneers?",
        answer:
          "Whitening does not change the color of porcelain or composite restorations, so we review existing dental work before planning.",
      },
      {
        question: "How white should I go?",
        answer:
          "The best result usually looks clean and natural with your face, gums, and smile rather than artificially bright.",
      },
    ],
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
  href = "#schedule",
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
    <a
      href={`/${service.slug}`}
      className="group block rounded-[1.75rem] border border-charcoal/10 bg-porcelain p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div
        className={`mb-8 h-12 w-12 rounded-2xl ${service.accent} opacity-90`}
      />
      <h3 className="text-xl font-semibold text-charcoal">{service.title}</h3>
      <p className="mt-3 leading-7 text-charcoal/65">{service.description}</p>
      <p className="mt-6 text-sm font-semibold text-clay">Learn more</p>
    </a>
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
        {"★★★★★"}
      </div>
      <p className="text-xl leading-9 text-charcoal">"{review.quote}"</p>
      <div className="mt-8 border-t border-charcoal/10 pt-6">
        <p className="font-semibold text-charcoal">{review.name}</p>
        <p className="mt-1 text-sm text-charcoal/55">{review.detail}</p>
      </div>
    </article>
  );
}

function TransformationCard({
  transformation,
  compact = false,
}: {
  transformation: Transformation;
  compact?: boolean;
}) {
  return (
    <article
      className={`overflow-hidden rounded-[2rem] border border-charcoal/10 bg-porcelain shadow-sm ${
        compact ? "" : "shadow-soft"
      }`}
    >
      <div className="relative bg-linen">
        <img
          src={transformation.image}
          alt={`${transformation.title} before and after dental result`}
          className={`w-full object-cover ${
            compact ? "aspect-[1.18/1]" : "aspect-[1.28/1]"
          }`}
        />
        <div className="absolute left-4 top-4 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-charcoal">
          <span className="rounded-full bg-white/88 px-3 py-1.5 backdrop-blur">
            Before
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-charcoal">
          <span className="rounded-full bg-white/88 px-3 py-1.5 backdrop-blur">
            After
          </span>
        </div>
      </div>
      <div className={compact ? "p-5" : "p-6 md:p-7"}>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
          {transformation.treatment}
        </p>
        <h3
          className={`mt-3 font-semibold text-charcoal ${
            compact ? "text-xl" : "text-2xl"
          }`}
        >
          {transformation.title}
        </h3>
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

function ScheduleStep({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex gap-4 border-b border-charcoal/10 py-5 last:border-0">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linen text-xs font-bold text-clay">
        {number}
      </span>
      <div>
        <p className="font-semibold text-charcoal">{title}</p>
        <p className="mt-1 text-sm leading-6 text-charcoal/60">{copy}</p>
      </div>
    </div>
  );
}

function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-charcoal text-sm font-bold text-porcelain">
            DS
          </span>
          <span>
            <span className="block text-base font-semibold leading-tight tracking-tight sm:text-lg">
              Dentiq Smile Studios
            </span>
            <span className="mt-0.5 block text-xs font-medium text-charcoal/55">
              Englewood Cliffs, New Jersey
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-charcoal/70 lg:flex">
          <a href="/#services" className="transition hover:text-charcoal">
            Services
          </a>
          <a href="/#insurance" className="transition hover:text-charcoal">
            Insurance
          </a>
          <a href="/#reviews" className="transition hover:text-charcoal">
            Reviews
          </a>
          <a href="/#contact" className="transition hover:text-charcoal">
            Contact
          </a>
        </div>
        <a
          href="/#schedule"
          className="rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-porcelain transition hover:bg-charcoal/90"
        >
          Schedule
        </a>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-charcoal/60 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-charcoal">Dentiq Smile Studios</p>
        <p>Modern cosmetic and family dentistry in Englewood Cliffs.</p>
        <p>Copyright 2026 Dentiq Smile Studios</p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory text-charcoal">
      <SiteNav />

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
              <TrustBadge label="Englewood Cliffs, NJ" />
              <TrustBadge label="Same-week appointments" />
              <TrustBadge label="Emergency visits available" />
              <TrustBadge label="Most PPO insurance accepted" />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] border border-charcoal/10 bg-gradient-to-br from-white via-linen to-oat p-5 shadow-soft">
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/80 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.92),transparent_33%),linear-gradient(135deg,#f9f1e6,#d9c6ad_52%,#94a78f)] p-6">
                <img
                  src="/assets/mouth-hero.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-14 left-1/2 w-[92%] max-w-none -translate-x-1/2 -rotate-3 opacity-90 drop-shadow-[0_28px_36px_rgba(39,35,31,0.16)] sm:bottom-12 lg:bottom-16"
                />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="max-w-56 rounded-3xl border border-white/70 bg-white/70 p-5 shadow-[0_18px_50px_rgba(39,35,31,0.08)] backdrop-blur">
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
                  <div />
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
          <div className="mt-10 flex justify-center">
            <a
              href="/new-patient-dentist-englewood-cliffs"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-charcoal/15 bg-porcelain/80 px-6 text-sm font-semibold text-charcoal transition hover:bg-white"
            >
              What to expect at your first visit
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="aspect-[4/5] rounded-[2.5rem] border border-charcoal/10 bg-gradient-to-br from-white via-linen to-sage/70 p-5 shadow-soft">
            <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_58%_18%,rgba(255,248,238,0.9),transparent_24%),linear-gradient(160deg,rgba(255,255,255,0.32),rgba(155,172,147,0.34))] p-7">
              <div className="absolute inset-x-8 bottom-28 h-36 rounded-full bg-charcoal/10 blur-3xl" />
              <img
                src="/assets/dr-doreen-charly.png"
                alt="Founder dentist of Dentiq Smile Studios"
                className="absolute bottom-24 left-1/2 w-[82%] max-w-[31rem] -translate-x-1/2 drop-shadow-[0_26px_34px_rgba(39,35,31,0.24)]"
              />
              <div className="relative z-10 rounded-3xl border border-white/80 bg-porcelain/88 p-5 shadow-[0_18px_50px_rgba(39,35,31,0.08)] backdrop-blur">
                <p className="text-base font-semibold text-charcoal">
                  Founder dentist
                </p>
                <p className="mt-2 text-sm leading-6 text-charcoal/65">
                  Founder dentist focused on calm, cosmetic-minded care.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-clay">
              Meet the dentist
            </p>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-6xl">
              Calm care is better care.
            </h2>
            <p className="mt-7 text-lg leading-9 text-charcoal/70">
              Dentiq Smile Studios was created for people who want excellent
              dentistry without the cold clinical feeling. Our founder blends
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

      <section className="bg-linen/55 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-clay">
                Smile transformations
              </p>
              <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
                Small repairs can make a meaningful difference.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-charcoal/70 lg:ml-auto">
              See examples of chipped-tooth restorations planned to blend with
              the natural shape, shade, and character of each smile.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <TransformationCard transformation={transformations[0]} />
            <div className="flex flex-col gap-6">
              <TransformationCard transformation={transformations[1]} compact />
              <div className="rounded-[2rem] border border-charcoal/10 bg-white/75 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                  Patient-centered results
                </p>
                <p className="mt-4 leading-8 text-charcoal/68">
                  Every case starts with a conversation about comfort, goals,
                  and the most conservative way to restore confidence.
                </p>
                <p className="mt-5 text-xs leading-5 text-charcoal/45">
                  Actual patient photos. Individual results vary.
                </p>
              </div>
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

      <section id="schedule" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-charcoal/10 bg-linen/70 shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">
                Online scheduling
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-charcoal md:text-6xl">
                Choose a time that feels easy.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/68">
                Browse live availability and request your visit in a few calm,
                simple steps. Your appointment details connect directly with
                our Open Dental schedule.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Live openings", "Instant confirmation", "Secure details"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-charcoal/10 bg-white/75 px-4 py-2 text-sm font-medium text-charcoal/70"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="border-t border-charcoal/10 bg-porcelain p-6 md:p-10 lg:border-l lg:border-t-0">
            <div className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-charcoal/10 pb-6">
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    Request an appointment
                  </p>
                  <p className="mt-1 text-sm text-charcoal/55">
                    New and returning patients
                  </p>
                </div>
                <span className="rounded-full bg-sage/20 px-3 py-2 text-xs font-semibold text-charcoal/70">
                  Available 24/7
                </span>
              </div>

              <ScheduleStep
                number="01"
                title="Select your visit"
                copy="Choose the appointment type that best fits your needs."
              />
              <ScheduleStep
                number="02"
                title="Pick an opening"
                copy="See available dates and times from the practice schedule."
              />
              <ScheduleStep
                number="03"
                title="Confirm your details"
                copy="Share your contact information and receive confirmation."
              />

              <a
                href={schedulingHref}
                target={openDentalSchedulingUrl ? "_blank" : undefined}
                rel={openDentalSchedulingUrl ? "noreferrer" : undefined}
                className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-charcoal px-6 text-sm font-semibold text-porcelain transition hover:bg-charcoal/90"
              >
                {openDentalSchedulingUrl
                  ? "View available times"
                  : "Call to request a time"}
              </a>
              <p className="mt-4 text-center text-xs leading-5 text-charcoal/45">
                Powered by Open Dental Web Sched
              </p>
            </div>
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
                value="110 Charlotte Place, Englewood Cliffs, NJ 07632"
              />
            </div>
            <div className="min-h-96 rounded-[2.5rem] border border-charcoal/10 bg-gradient-to-br from-linen via-white to-oat p-5 shadow-soft">
              <div className="relative h-full min-h-80 overflow-hidden rounded-[2rem] border border-charcoal/10 bg-porcelain">
                <iframe
                  title="Map to Dentiq Smile Studios"
                  src="https://www.google.com/maps?q=110%20Charlotte%20Place%2C%20Englewood%20Cliffs%2C%20NJ%2007632&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ServicePageView({ page }: { page: ServicePage }) {
  const relatedServices = servicePages.filter((service) => service.slug !== page.slug);

  return (
    <main className="min-h-screen overflow-hidden bg-ivory text-charcoal">
      <SiteNav />

      <section className="relative px-5 py-16 sm:px-8 lg:py-24">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-linen/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-charcoal/10 bg-white/70 px-4 py-2 text-sm font-semibold text-clay">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] text-charcoal md:text-7xl">
              {page.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-charcoal/70">
              {page.heroCopy}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/#schedule">Schedule Appointment</Button>
              <Button href="tel:+12014319753" variant="secondary">
                Call Now
              </Button>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-charcoal/10 bg-gradient-to-br from-white via-linen to-oat p-5 shadow-soft">
            <div className="rounded-[2rem] border border-white/80 bg-porcelain/80 p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                Dentiq approach
              </p>
              <p className="mt-5 text-xl leading-9 text-charcoal/72">
                {page.intro}
              </p>
              <div className="mt-8 grid gap-3">
                {page.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white/75 px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-sage" />
                    <span className="text-sm font-medium text-charcoal/75">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen/55 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-clay">
              What to expect
            </p>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Clear answers before treatment starts.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/68">
              We explain findings, options, priorities, and costs in plain
              language so your visit feels calm and informed.
            </p>
          </div>
          <div className="grid gap-4">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[2rem] border border-charcoal/10 bg-white/75 p-6"
              >
                <h3 className="text-xl font-semibold text-charcoal">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-8 text-charcoal/68">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border border-charcoal/10 bg-charcoal p-8 text-porcelain shadow-soft md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-oat">
                  Ready when you are
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  Book a calm visit in Englewood Cliffs.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href="/#schedule"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-porcelain px-6 text-sm font-semibold text-charcoal transition hover:bg-white"
                >
                  Schedule Appointment
                </a>
                <a
                  href="tel:+12014319753"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-porcelain/25 px-6 text-sm font-semibold text-porcelain transition hover:bg-porcelain/10"
                >
                  Call 201-431-9753
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-clay">
              Explore more services
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.slice(0, 5).map((service) => (
                <a
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="rounded-3xl border border-charcoal/10 bg-porcelain p-5 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <p className="font-semibold text-charcoal">{service.title}</p>
                  <p className="mt-2 text-sm leading-6 text-charcoal/60">
                    {service.heroCopy}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.title,
            description: page.metaDescription,
            areaServed: {
              "@type": "City",
              name: "Englewood Cliffs",
            },
            provider: {
              "@type": "Dentist",
              name: "Dentiq Smile Studios",
              telephone: "+1-201-431-9753",
              url: "https://dentiqsmilestudios.com/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "110 Charlotte Place",
                addressLocality: "Englewood Cliffs",
                addressRegion: "NJ",
                postalCode: "07632",
                addressCountry: "US",
              },
            },
          }),
        }}
      />
      <SiteFooter />
    </main>
  );
}

function setMetaTag(name: string, content: string) {
  const selector = `meta[name="${name}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setPropertyMetaTag(property: string, content: string) {
  const selector = `meta[property="${property}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(pathname: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", `https://dentiqsmilestudios.com${pathname}`);
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const servicePage = servicePages.find((page) => `/${page.slug}` === pathname);

  useEffect(() => {
    if (servicePage) {
      document.title = servicePage.metaTitle;
      setMetaTag("description", servicePage.metaDescription);
      setPropertyMetaTag("og:title", servicePage.metaTitle);
      setPropertyMetaTag("og:description", servicePage.metaDescription);
      setPropertyMetaTag("og:url", `https://dentiqsmilestudios.com/${servicePage.slug}`);
      setMetaTag("twitter:title", servicePage.metaTitle);
      setMetaTag("twitter:description", servicePage.metaDescription);
      setCanonical(`/${servicePage.slug}`);
      return;
    }

    document.title = "Dentiq Smile Studios | Dentist in Englewood Cliffs, NJ";
    setMetaTag(
      "description",
      "Judgment-free family and cosmetic dentistry in Englewood Cliffs, NJ. Schedule cleanings, Invisalign, veneers, implants, whitening, and emergency care.",
    );
    setPropertyMetaTag(
      "og:title",
      "Dentiq Smile Studios | Dentist in Englewood Cliffs, NJ",
    );
    setPropertyMetaTag(
      "og:description",
      "Judgment-free family and cosmetic dentistry in Englewood Cliffs, NJ. Modern care designed around your comfort.",
    );
    setPropertyMetaTag("og:url", "https://dentiqsmilestudios.com/");
    setMetaTag(
      "twitter:title",
      "Dentiq Smile Studios | Dentist in Englewood Cliffs, NJ",
    );
    setMetaTag(
      "twitter:description",
      "Judgment-free family and cosmetic dentistry in Englewood Cliffs, NJ.",
    );
    setCanonical("/");
  }, [servicePage]);

  if (servicePage) {
    return <ServicePageView page={servicePage} />;
  }

  return <HomePage />;
}
