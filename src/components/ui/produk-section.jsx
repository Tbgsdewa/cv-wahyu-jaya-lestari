import { motion } from "framer-motion"
import { ArrowUpRight, Factory, Scale, Warehouse, Leaf, Sparkles } from "lucide-react"

const products = [
  {
    number: "01",
    title: "Pengolahan TBS → CPO",
    description:
      "Penerimaan dan pengolahan tandan buah segar menjadi Crude Palm Oil melalui lini produksi lengkap. Infrastruktur mencakup jembatan timbang, sterilizer, press, klarifikasi, dan tangki penyimpanan.",
    image: "/images/product-tbs-cpo.png",
    icon: Factory,
  },
  {
    number: "02",
    title: "Penerimaan & Penimbangan TBS",
    description:
      "Layanan penerimaan TBS dengan jembatan timbang berkapasitas memadai dan pencatatan terstruktur. Kepastian bobot yang akurat dan dokumentasi yang rapi untuk seluruh pemasok.",
    image: "/images/product-weighbridge.png",
    icon: Scale,
  },
  {
    number: "03",
    title: "Penyimpanan CPO",
    description:
      "Fasilitas tangki penyimpanan CPO untuk menampung hasil produksi sebelum distribusi. Fleksibilitas waktu pengiriman ke pembeli atau offtaker dengan kapasitas yang memadai.",
    image: "/images/product-cpo-storage.png",
    icon: Warehouse,
  },
  {
    number: "04",
    title: "Hasil Sampingan (Kernel)",
    description:
      "Pengolahan inti sawit sebagai produk sampingan dari proses produksi CPO. Proses kernel recovery terintegrasi dalam lini produksi sebagai sumber pendapatan tambahan bagi mitra.",
    image: "/images/product-kernel.png",
    icon: Leaf,
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ProdukSection() {
  return (
    <section
      id="produk"
      className="relative overflow-hidden bg-[#FBFAF6] py-24 sm:py-28 lg:py-32"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,61,46,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_34%)]" />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,61,46,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,61,46,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#063D2E]/10 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-[#C89B3C]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={containerVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUpVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#A77A24] shadow-sm backdrop-blur"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Produk & Layanan
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl font-extrabold tracking-tight text-[#063D2E] sm:text-4xl lg:text-5xl"
          >
            Solusi Pengolahan Sawit{" "}
            <span className="relative inline-block">
              Terpadu
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#C89B3C] to-[#E7C873] rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1, originX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#344054] sm:text-lg"
          >
            Dari penerimaan TBS hingga penyimpanan CPO, seluruh proses dilakukan
            dalam satu ekosistem operasional yang terintegrasi, efisien, dan
            didukung infrastruktur yang lengkap.
          </motion.p>
        </motion.div>

        {/* Highlight Bar */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="grid overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white/75 shadow-[0_20px_70px_rgba(6,61,46,0.08)] backdrop-blur md:grid-cols-3">
            <div className="border-b border-[#E5E7EB] px-6 py-5 text-center md:border-b-0 md:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A77A24]">
                Terintegrasi
              </p>
              <p className="mt-2 text-sm leading-6 text-[#344054]">
                Proses dari hulu operasional hingga penyimpanan.
              </p>
            </div>

            <div className="border-b border-[#E5E7EB] px-6 py-5 text-center md:border-b-0 md:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A77A24]">
                Efisien
              </p>
              <p className="mt-2 text-sm leading-6 text-[#344054]">
                Mendukung penerimaan dan pengolahan yang lebih cepat.
              </p>
            </div>

            <div className="px-6 py-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A77A24]">
                Terukur
              </p>
              <p className="mt-2 text-sm leading-6 text-[#344054]">
                Dokumentasi dan proses operasional lebih tertata.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          {products.map((item) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.number}
                variants={fadeUpVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-white shadow-[0_22px_70px_rgba(6,61,46,0.08)] transition-all duration-300 hover:border-[#C89B3C]/70 hover:shadow-[0_28px_90px_rgba(6,61,46,0.16)]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#063D2E]/70 via-[#063D2E]/10 to-transparent opacity-70" />

                  <motion.div
                    className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-[#063D2E] shadow-lg backdrop-blur transition duration-300 group-hover:bg-[#C89B3C] group-hover:text-white"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  <div className="absolute right-6 top-6 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
                    {item.number}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-7 sm:p-8">
                  <motion.div
                    className="mb-5 h-1 w-14 rounded-full bg-[#C89B3C]"
                    initial={{ width: 56 }}
                    whileInView={{ width: 56 }}
                    viewport={{ once: true }}
                  />

                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-xl font-extrabold tracking-tight text-[#063D2E] sm:text-2xl transition-colors duration-300 group-hover:text-[#C89B3C]">
                      {item.title}
                    </h3>

                    <motion.div
                      className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-[#063D2E] transition duration-300 group-hover:border-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white sm:flex"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#344054] sm:text-[15px]">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#A77A24] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Layanan Terintegrasi
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-[-90px] right-[-90px] h-48 w-48 rounded-full bg-[#063D2E]/5 blur-3xl transition duration-300 group-hover:bg-[#C89B3C]/20" />
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
