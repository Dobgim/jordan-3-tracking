import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { brand } from '../data/site'
import TrustBar from '../sections/TrustBar'

const useTitle = (t: string) =>
  useEffect(() => {
    document.title = `${t} | ${brand.name}`
  }, [t])

export function About() {
  useTitle('About')
  return (
    <>
      <PageBanner image="/img/img-about-freight.jpg" title={`About ${brand.name}`}>
        A dependable freight partner, focused on clear communication and careful coordination from pickup to delivery.
      </PageBanner>
      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1175px] items-center gap-9 md:grid-cols-2 md:gap-14">
          <div className="overflow-hidden rounded">
            <img
              src="/img/img-about-freight.jpg"
              alt="Freight containers ready for transport"
              className="block aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-[11px] font-bold tracking-[2px] text-blue">WHO WE ARE</p>
            <h2 className="mb-4 text-[30px] leading-9 font-bold text-navy">Freight moving forward, together.</h2>
            <p className="mb-4 text-[15px] leading-7 text-[#4b5563]">
              Shipping takes more than getting a load from one place to another. It takes careful planning,
              responsive support, and people who keep you informed along the way.
            </p>
            <p className="mb-6 text-[15px] leading-7 text-[#4b5563]">
              The Jordans brings air, ocean, and road freight together with shipment tracking and pickup
              coordination, so you have one place to turn from booking through delivery.
            </p>
            <Link to="/contact" className="inline-flex rounded-[3px] bg-navy px-6 py-3 font-bold text-white transition-colors hover:bg-navy-dark">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1175px]">
          <div className="mb-8 max-w-[620px]">
            <p className="mb-2 text-[11px] font-bold tracking-[2px] text-blue">WHAT YOU CAN EXPECT</p>
            <h2 className="mb-3 text-[30px] leading-9 font-bold text-navy">A clearer way to move freight.</h2>
            <p className="text-[15px] leading-7 text-muted">
              We focus on the details that make shipping easier to plan and simpler to follow.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['One point of contact', 'Get support with your shipment from the first request through its journey.'],
              ['Updates you can follow', 'Use shipment tracking to check progress and stay informed along the way.'],
              ['Options for your cargo', 'Choose air, ocean, or road freight to suit the shipment and its destination.'],
            ].map(([title, text], i) => (
              <article key={title} className="border-t-[3px] border-red bg-white p-6">
                <span className="mb-4 flex size-9 items-center justify-center rounded-full bg-[#eaf2f8] text-sm font-bold text-navy">
                  0{i + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
                <p className="text-[14px] leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  )
}

export function Services() {
  useTitle('Services')
  const services = [
    {
      title: 'Air freight',
      text: 'For shipments where speed matters, coordinate air cargo and follow its progress with shipment tracking.',
      image: '/img/img-cargo-hero.jpg',
      alt: 'Air cargo prepared for shipment',
    },
    {
      title: 'Ocean freight',
      text: 'Move cargo across international trade lanes with ocean shipping arranged around your shipment.',
      image: '/img/img-svc-ocean.jpg',
      alt: 'Container ship at sea',
    },
    {
      title: 'Road freight',
      text: 'Arrange ground transportation for freight moving between pickup, distribution, and delivery points.',
      image: '/img/img-about-freight.jpg',
      alt: 'Freight containers at a logistics facility',
    },
    {
      title: 'Warehousing',
      text: 'Coordinate storage and cargo handling as part of your broader freight journey.',
      image: '/img/img-svc-warehouse.jpg',
      alt: 'Warehouse storage and freight handling',
    },
  ]

  return (
    <>
      <PageBanner image="/img/img-svc-ocean.jpg" title="Our Services">
        Choose the freight and logistics support you need, with shipment tracking and pickup coordination.
      </PageBanner>
      <section className="bg-white px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1175px]">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[620px]">
              <p className="mb-2 text-[11px] font-bold tracking-[2px] text-blue">FREIGHT &amp; LOGISTICS</p>
              <h2 className="mb-3 text-[30px] leading-9 font-bold text-navy">Services for every leg of the journey.</h2>
              <p className="text-[15px] leading-7 text-muted">
                Explore the options below, then talk with our team about what fits your shipment.
              </p>
            </div>
            <Link to="/track" className="inline-flex w-fit shrink-0 rounded-[3px] border border-navy px-5 py-2.5 font-bold text-navy transition-colors hover:bg-navy hover:text-white">
              Track a shipment
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="overflow-hidden rounded border border-line bg-white">
                <img src={service.image} alt={service.alt} loading="lazy" className="block aspect-[16/8] w-full object-cover" />
                <div className="p-5 md:p-6">
                  <h3 className="mb-2 text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mb-5 text-[14px] leading-6 text-muted">{service.text}</p>
                  <Link to="/contact" className="text-sm font-bold text-blue hover:underline">
                    Ask about {service.title.toLowerCase()} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-[1175px] flex-col gap-5 rounded bg-navy px-6 py-7 text-white md:flex-row md:items-center md:justify-between md:px-9">
          <div>
            <h2 className="mb-1 text-xl font-bold">Need help choosing a service?</h2>
            <p className="text-[14px] text-white/75">Tell us about your shipment and we’ll help with the next step.</p>
          </div>
          <Link to="/contact" className="inline-flex w-fit shrink-0 rounded-[3px] border border-white px-5 py-2.5 font-bold text-white transition-colors hover:bg-white hover:text-navy">
            Request a quote
          </Link>
        </div>
      </section>
    </>
  )
}

export function SignIn() {
  useTitle('Register / Sign In')
  return (
    <>
      <PageBanner image="/img/hero-warehouse.jpg" title="Register / Sign In" />
      <section className="bg-paper px-5 py-16 text-center">
        <p className="mx-auto mb-6 max-w-[520px] text-base leading-[22px] text-muted">
          Customer accounts are set up by our support team. Get in touch and we will create your account.
        </p>
        <Link to="/contact" className="inline-block min-w-[275px] rounded-[3px] bg-navy px-5 py-2.5 text-white hover:bg-navy-dark">
          Contact Support
        </Link>
      </section>
    </>
  )
}

export function NotFound() {
  useTitle('Page not found')
  return (
    <section className="bg-paper px-5 py-24 text-center">
      <h1 className="mb-3 text-[32px] leading-9 font-bold text-black">Page not found</h1>
      <p className="mb-6 text-base text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="inline-block rounded-[3px] bg-navy px-6 py-2.5 text-white hover:bg-navy-dark">
        Back to Home
      </Link>
    </section>
  )
}
