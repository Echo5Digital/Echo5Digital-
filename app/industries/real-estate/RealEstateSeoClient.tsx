"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import {
  Search,
  FileText,
  Cpu,
  MapPin,
  Globe2,
  Share2,
  Palette,
  Target,
  Bot,
  TrendingUp,
  Users,
  BarChart3,
  ChevronDown,
  ArrowRight,
  Home,
  Mail,
  PhoneCall,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function RealEstateSeoClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const strategyComponents = [
    {
      icon: Search,
      title: "AI-Driven Keyword Research",
      description:
        "The real estate market is constantly evolving, with changing buyer preferences, market conditions, and location-specific demands. We use advanced AI tools to conduct in-depth keyword research, identifying the most relevant and profitable terms for your business. Our AI-driven approach ensures that your site is optimized for the keywords that attract high-value traffic and generate leads.",
    },
    {
      icon: FileText,
      title: "Content Optimization for Real Estate",
      description:
        "High-quality content is key to engaging potential buyers and sellers. We optimize your property listings, neighborhood guides, blog posts, and service pages to ensure they rank highly in search engine results. Our content strategies focus on storytelling, local market expertise, and SEO best practices to create compelling narratives that resonate with your audience.",
    },
    {
      icon: Cpu,
      title: "Technical SEO for Real Estate Websites",
      description:
        "A seamless user experience is critical in the real estate industry, where potential clients expect fast, secure, and mobile-friendly websites. Our technical SEO services include optimizing your site's architecture, improving loading times, ensuring mobile responsiveness, and implementing AI-driven solutions to monitor and enhance site performance continuously.",
    },
    {
      icon: MapPin,
      title: "Local SEO for Real Estate Agents",
      description:
        "Local SEO is crucial for real estate professionals who focus on specific geographic areas. We optimize your Google My Business profile, build local citations, and use AI tools to analyze local search patterns, ensuring your business appears in local search results. This increases your visibility to potential clients searching for real estate services in your target locations.",
    },
    {
      icon: Globe2,
      title: "National SEO for Real Estate Firms",
      description:
        "For real estate businesses that operate on a national level, we provide comprehensive national SEO services. This includes optimizing for broad, location-agnostic keywords, creating content that appeals to a wider audience, and implementing strategies to increase your site's authority and relevance in the national real estate market.",
    },
    {
      icon: Share2,
      title: "Social Media Integration for Real Estate",
      description:
        "Social media is an essential tool for building your real estate brand, showcasing listings, and driving traffic to your website. We integrate your social media strategy with SEO, using AI to optimize social media campaigns, analyze audience behavior, and drive targeted traffic to your site. Platforms like Facebook, Instagram, and LinkedIn are particularly powerful for reaching potential clients.",
    },
    {
      icon: Palette,
      title: "Real Estate Branding and Web Development",
      description:
        "Your website is often the first point of contact between your brand and potential clients, and it needs to make a strong impression. Our web development and branding services focus on creating visually stunning, user-friendly websites that capture your brand's essence. From custom designs to AI-enhanced user experiences, we ensure your site stands out in the competitive real estate market.",
    },
    {
      icon: Target,
      title: "Google Ads and PPC Campaigns",
      description:
        "To complement your organic SEO efforts, our Google Ads services help you capture immediate attention in the real estate market. We use AI to optimize PPC campaigns in real-time, ensuring your ads reach the right audience, maximize ROI, and drive leads.",
    },
    {
      icon: Bot,
      title: "AI-Powered Real Estate Marketing",
      description:
        "The future of real estate marketing is powered by AI, and we're at the forefront of this technology. Our AI-driven solutions include personalized property recommendations, dynamic pricing strategies, and automated lead nurturing, all designed to enhance the client experience and drive sales.",
    },
  ];

  const dataPoints = [
    {
      number: "01",
      title: "The Role of SEO in Real Estate",
      description:
        "A study by the National Association of Realtors found that 97% of home buyers use the internet to search for homes, highlighting the importance of effective SEO strategies in attracting buyers and sellers.",
    },
    {
      number: "02",
      title: "Impact of Social Media on Real Estate Decisions",
      description:
        "According to a report by the National Association of Realtors, 77% of real estate agents actively use social media for real estate in some way, with 47% of them reporting that social media results in the highest quality leads.",
    },
    {
      number: "03",
      title: "Local Search Behavior in Real Estate",
      description:
        "Research by Google indicates that 46% of all Google searches are seeking local information, making local SEO critical for real estate professionals focusing on specific markets.",
    },
    {
      number: "04",
      title: "AI in Real Estate Marketing",
      description:
        "Research by Deloitte indicates that AI-driven personalization can increase lead conversion rates in the real estate industry by up to 25%, making it a critical component of modern real estate marketing strategies.",
    },
  ];

  const relatedIndustries = [
    {
      title: "Law Firm SEO",
      href: "/industries/law-firms",
      image:
        "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400",
    },
    {
      title: "Dental SEO",
      href: "/industries/dental",
      image:
        "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400",
    },
    {
      title: "Automotive SEO",
      href: "/industries/automotive",
      image:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400",
    },
    {
      title: "Healthcare SEO",
      href: "/industries/healthcare",
      image:
        "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400",
    },
  ];

  return (
    <main>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Home size={15} className="text-purple-400" />
              <span className="text-purple-300 text-sm font-medium font-[Inter]">
                Real Estate SEO
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Real Estate SEO{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                & SEO for Realtors
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Enhance Local and National Search Visibility to Close More Deals
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Learn more
              </Link>
              <Link
                href="#strategy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-purple-300 font-semibold text-base border border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore Strategy
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Modern home representing real estate SEO visibility for realtors"
              className="w-full h-80 lg:h-[440px] object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(10,15,30,0.5) 100%)",
              }}
            />
          </motion.div>
        </div>
      </Section>

      {/* ── INTRO ── */}
      <Section background="elevated" spacing="md" withDivider id="intro">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto text-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          In the highly competitive real estate market, visibility is key to success. Whether
          you&rsquo;re focusing on local buyers and sellers or expanding your reach nationally,
          your online presence must be strong and easily discoverable. At Echo5 Digital, we
          specialize in Real Estate SEO, utilizing advanced strategies and AI-driven tools to
          boost your visibility, drive traffic, and generate leads, ultimately helping you close
          more deals. Our real estate SEO strategies are designed to help property listings gain
          maximum visibility and attract potential buyers effectively.
        </motion.p>
      </Section>

      {/* ── WHY SEO IS CRUCIAL ── */}
      <Section background="default" spacing="lg" withDivider id="why-seo">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Why SEO is Crucial for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Real Estate Professionals
              </span>
            </h2>
            <p
              className="text-gray-400 text-base leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The real estate industry is increasingly digital, with most buyers and sellers
              beginning their property search online. To stay competitive, your real estate
              business needs to rank well in both local and national search results. SEO for real
              estate agents is essential for improving your site&rsquo;s visibility in search
              engine results, optimizing user experience, and ensuring that your listings and
              services are easily found by potential clients.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden order-first lg:order-last"
          >
            <img
              src="https://images.pexels.com/photos/8293650/pexels-photo-8293650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Realtor reviewing search visibility data for a property listing"
              className="w-full h-72 lg:h-96 object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, transparent 60%)",
              }}
            />
          </motion.div>
        </div>
      </Section>

      {/* ── REAL ESTATE SEO STRATEGY ── */}
      <Section background="elevated" spacing="lg" id="strategy" withDivider>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Approach
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Real Estate SEO Strategy
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {strategyComponents.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <item.icon size={22} className="text-purple-400" />
              </div>
              <h3
                className="text-base font-semibold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── GET STARTED TODAY / CONTACT ── */}
      <Section background="gradient" spacing="lg" id="get-started" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden order-last lg:order-first"
          >
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Real estate agent handing over house keys after closing a deal"
              className="w-full h-72 lg:h-96 object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(10,15,30,0.4) 100%)",
              }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center lg:text-left"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Get Started Today
            </h2>
            <p
              className="text-gray-300 text-base leading-relaxed mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ready to enhance your real estate business&rsquo;s local and national search
              visibility and close more deals? Contact Echo5 Digital today to learn how our expert
              SEO and digital marketing strategies can help you boost your online presence and
              grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <PhoneCall size={18} />
                Get in Touch
              </Link>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Mail size={15} className="text-purple-400" />
                <a href="mailto:sale@echo5digital.com" className="hover:text-purple-300 transition-colors">
                  sale@echo5digital.com
                </a>
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall size={15} className="text-purple-400" />
                <a href="tel:7134897004" className="hover:text-purple-300 transition-colors">
                  713-489-7004 (US)
                </a>
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall size={15} className="text-purple-400" />
                <a href="tel:+917012835673" className="hover:text-purple-300 transition-colors">
                  +91 70128 35673 (India)
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section background="default" spacing="lg" id="faq" withDivider>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            How its Working
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                background:
                  openFaq === index
                    ? "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)"
                    : "rgba(255,255,255,0.03)",
                borderColor:
                  openFaq === index ? "rgba(124,58,237,0.4)" : "rgba(124,58,237,0.15)",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === index}
              >
                <span
                  className="text-sm sm:text-base font-semibold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 text-purple-400 transition-transform duration-300"
                  style={{
                    transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p
                    className="text-sm text-gray-300 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── INDUSTRY STUDIES AND DATA POINTS ── */}
      <Section background="elevated" spacing="lg" id="data-points" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Analytics dashboard showing real estate SEO performance data"
              className="w-full h-72 lg:h-[420px] object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, transparent 60%)",
              }}
            />
          </motion.div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left mb-10"
            >
              <span
                className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                The Numbers
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Industry Studies and Data Points
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {dataPoints.map((point) => (
                <motion.div
                  key={point.number}
                  variants={staggerItem}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
                    borderColor: "rgba(124,58,237,0.25)",
                  }}
                >
                  <p
                    className="text-3xl font-bold mb-3"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {point.number}
                  </p>
                  <h3
                    className="text-base font-semibold text-white mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="text-sm text-gray-400 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── RELATED INDUSTRIES ── */}
      <Section background="default" spacing="lg" id="related" withDivider>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Others
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Explore Other Industries We Serve
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {relatedIndustries.map((industry) => (
            <motion.div key={industry.title} variants={staggerItem} transition={{ duration: 0.5 }}>
              <Link
                href={industry.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "rgba(124,58,237,0.2)",
                }}
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(10,15,30,0.1) 0%, rgba(10,15,30,0.85) 100%)",
                    }}
                  />
                </div>
                <div
                  className="p-4 text-center"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <h3
                    className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {industry.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section background="gradient" spacing="xl" id="cta">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            <TrendingUp size={15} className="text-purple-400" />
            <span
              className="text-purple-300 text-sm font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ready to grow your real estate business?
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Boost Your Real Estate Visibility Today
          </h2>

          <p
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Partner with Echo5 Digital for real estate SEO strategies that enhance local and
            national search visibility, drive qualified traffic, and help you close more deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 30px rgba(124,58,237,0.65), 0 4px 20px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <PhoneCall size={18} />
              Get in Touch
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-purple-300 font-semibold text-base border border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
