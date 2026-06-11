import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  Factory,
  Scale,
  FileCheck2,
  Zap,
  Truck,
  MapPin,
  ArrowRight,
  Shield,
  TrendingUp,
} from "lucide-react"

const advantages = [
  {
    number: "01",
    icon: Factory,
    title: "Infrastruktur Terpadu",
    description:
      "Fasilitas pabrik mendukung seluruh tahap pengolahan, mulai dari penerimaan BRONDOLAN, sterilisasi, digester & press, klarifikasi CPO, pemulihan kernel, hingga penyimpanan di tangki.",
    color: "#063D2E",
  },
  {
    number: "02",
    icon: Scale,
    title: "Jembatan Timbang Operasional",
    description:
      "Jembatan timbang berada langsung di area pabrik untuk mempercepat proses penerimaan BRONDOLAN dan memastikan akurasi data penimbangan yang dapat diverifikasi.",
    color: "#C89B3C",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Legalitas Lengkap",
    description:
      "Terdaftar resmi sebagai CV berdasarkan akta notaris dengan pengesahan Kementerian Hukum dan HAM RI, memberikan kepastian hukum bagi seluruh mitra.",
    color: "#063D2E",
  },
  {
    number: "04",
    icon: Zap,
    title: "Listrik PLN Tetap",
    description:
      "Sambungan listrik PLN langsung di area pabrik mendukung stabilitas operasional dan membantu menjaga efisiensi biaya energi jangka panjang.",
    color: "#C89B3C",
  },
  {
    number: "05",
    icon: Truck,
    title: "Alat Mekanis Pendukung",
    description:
      "Ketersediaan wheel loader di area pabrik membantu proses handling material BRONDOLAN menjadi lebih cepat, efisien, dan mengurangi waktu tunggu.",
    color: "#063D2E",
  },
  {
    number: "06",
    icon: MapPin,
    title: "Lokasi Strategis",
    description:
      "Berada di Kecamatan Tapung, salah satu kawasan produksi BRONDOLAN potensial di Provinsi Riau, sehingga mendukung efisiensi biaya dan waktu transportasi.",
    color: "#C89B3C",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function FloatingParticle({ delay, x, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#C89B3C]/20"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  )
}

function GlowingOrb({ className }) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export default function KeunggulanSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8F5EE] py-24 sm:py-28 lg:py-32"
    >
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,61,46,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_34%)]" />

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,61,46,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,61,46,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </motion.div>

      {/* Glowing Orbs with Parallax */}
      <motion.div
        className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#063D2E]/10 blur-3xl"
        style={{ y: orbY1 }}
      />
      <GlowingOrb className="absolute left-[10%] top-[15%] h-40 w-40 rounded-full bg-[#063D2E]/8 blur-3xl" />
      <motion.div
        className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-[#C89B3C]/20 blur-3xl"
        style={{ y: orbY2 }}
      />
      <GlowingOrb className="absolute right-[15%] bottom-[20%] h-48 w-48 rounded-full bg-[#C89B3C]/10 blur-3xl" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingParticle delay={0} x={10} size={6} />
        <FloatingParticle delay={0.5} x={25} size={4} />
        <FloatingParticle delay={1} x={40} size={8} />
        <FloatingParticle delay={1.5} x={55} size={5} />
        <FloatingParticle delay={2} x={70} size={7} />
        <FloatingParticle delay={2.5} x={85} size={4} />
        <FloatingParticle delay={3} x={95} size={6} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUpVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/30 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#A77A24] shadow-sm backdrop-blur"
          >
            Keunggulan Kompetitif
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl font-extrabold tracking-tight text-[#063D2E] sm:text-4xl lg:text-5xl"
          >
            Fondasi Kuat untuk{" "}
            <span className="relative inline-block">
              Kemitraan
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#C89B3C] to-[#E7C873] rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1, originX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>{" "}
            Jangka Panjang
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#344054] sm:text-lg"
          >
            Infrastruktur terpadu, legalitas yang jelas, serta lokasi strategis
            menjadi fondasi kami dalam menghadirkan proses penerimaan dan
            pengolahan BRONDOLAN yang lebih efisien, transparan, dan berkelanjutan.
          </motion.p>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-4xl items-center justify-center"
        >
          <motion.div
            className="group flex flex-col items-center gap-4 rounded-3xl border border-[#C89B3C]/30 bg-white/70 px-6 py-5 text-center shadow-[0_20px_60px_rgba(6,61,46,0.08)] backdrop-blur sm:flex-row sm:text-left"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#063D2E] text-white transition duration-300 group-hover:bg-[#C89B3C]"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Shield className="h-5 w-5" />
            </motion.div>

            <p className="text-sm leading-7 text-[#344054] sm:text-base">
              Dirancang untuk mendukung proses operasional yang efisien,
              transparan, dan siap menjadi mitra jangka panjang bagi pemasok
              maupun pelaku industri kelapa sawit.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {advantages.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.number}
                variants={scaleInVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white/85 p-7 shadow-[0_18px_55px_rgba(6,61,46,0.07)] backdrop-blur transition-all duration-300 hover:border-[#C89B3C]/70 hover:shadow-[0_24px_75px_rgba(6,61,46,0.14)]"
              >
                {/* Gold Accent Line */}
                <motion.div
                  className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#C89B3C] via-[#E7C873] to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1, originX: 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Animated Corner Accent */}
                <div className="absolute right-0 top-0 w-20 h-20 bg-gradient-to-bl from-[#063D2E]/[0.03] to-transparent rounded-bl-[40px] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:from-[#C89B3C]/[0.08]" />

                {/* Number with Animation */}
                <div className="absolute right-6 top-6 text-5xl font-black tracking-tight text-[#063D2E]/[0.06] transition-all duration-500 group-hover:text-[#C89B3C]/20 group-hover:scale-110 group-hover:rotate-3">
                  {item.number}
                </div>

                {/* Icon with Hover Animation */}
                <motion.div
                  className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#063D2E] text-white shadow-lg shadow-[#063D2E]/20 transition-all duration-300 group-hover:bg-[#C89B3C] group-hover:shadow-[#C89B3C]/25"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </motion.div>

                <div className="relative z-10 mt-7">
                  <h3 className="text-lg font-extrabold tracking-tight text-[#063D2E] transition-colors duration-300 group-hover:text-[#C89B3C]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#344054]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Detail */}
                <div className="relative z-10 mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A77A24] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Detail Keunggulan
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.div>
                </div>

                {/* Decorative blur */}
                <div className="absolute bottom-[-70px] right-[-70px] h-36 w-36 rounded-full bg-[#063D2E]/5 blur-2xl transition-all duration-500 group-hover:bg-[#C89B3C]/15 group-hover:scale-125" />
              </motion.article>
            )
          })}
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Factory, value: "100%", label: "Lini Produksi Terpadu" },
            { icon: TrendingUp, value: "24/7", label: "Operasional Stabil" },
            { icon: Shield, value: "AHU", label: "Terdaftar Resmi" },
            { icon: MapPin, value: "Tapung", label: "Sentra Sawit Riau" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 rounded-2xl bg-white/60 backdrop-blur border border-[#E5E7EB] px-5 py-4 transition-all duration-300 hover:border-[#C89B3C]/50 hover:bg-white/80 hover:shadow-lg"
              whileHover={{ y: -3, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#063D2E]/10 text-[#063D2E]">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-[#063D2E]">{stat.value}</p>
                <p className="text-xs text-[#344054]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
