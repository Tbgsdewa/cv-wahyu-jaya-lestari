import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
} from "lucide-react"

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const letterVariants = {
  initial: {
    y: 0,
    color: "inherit",
  },
  animate: {
    y: "-120%",
    color: "#999",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

const AnimatedInput = ({ label, className = "", value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  const showLabel = isFocused || (value && value.length > 0)

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-[#1a3d2b]"
        variants={containerVariants}
        initial="initial"
        animate={showLabel ? "animate" : "initial"}
      >
        {label.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-sm"
            variants={letterVariants}
            style={{ willChange: "transform" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <input
        type={props.type || "text"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        {...props}
        className="outline-none border-b-2 border-gray-300 py-2 w-full text-base font-medium text-[#1a3d2b] bg-transparent placeholder-transparent focus:border-[#1a3d2b] transition-colors"
      />
    </div>
  )
}

const ContactInfoItem = ({ icon: Icon, label, value, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("flex items-start gap-4", className)}
    >
      <div className="bg-[#1a3d2b]/10 rounded-lg p-3 mt-1">
        <Icon className="h-5 w-5 text-[#1a3d2b]" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-[#1a3d2b]">{label}</p>
        <p className="text-sm text-[#555] mt-1">{value}</p>
      </div>
    </motion.div>
  )
}

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = `Halo CV. Wahyu Jaya Lestari,%0A%0ANama: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0ASubjek: ${formData.subject}%0A%0APesan:%0A${formData.message}`
    window.open(`https://wa.me/6283857649532?text=${msg}`, "_blank")
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tbgsdewa@gmail.com",
    },
    {
      icon: Phone,
      label: "Telepon / WhatsApp",
      value: "083857649532",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Kecamatan Tapung, Kabupaten Kampar, Provinsi Riau, Indonesia",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin - Sabtu: 08:00 - 17:00 WIB",
    },
  ]

  return (
    <div id="kontak" className="bg-[#f7f8f6]">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3d2b] mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Kami terbuka untuk kemitraan dengan petani, kelompok tani, investor, 
            dan pembeli CPO. Isi formulir di bawah atau hubungi kami langsung.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#1a3d2b] mb-6 flex items-center gap-2">
                <MessageSquare className="h-8 w-8 text-[#c9a44a]" />
                Informasi Kontak
              </h2>
              <p className="text-[#555] mb-8">
                Hubungi kami melalui saluran berikut. Kami siap membantu 
                dan menjawab pertanyaan Anda.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactInfoItem key={index} {...info} />
              ))}
            </div>

            <div className="bg-[#1a3d2b]/5 rounded-lg p-6 border border-[#1a3d2b]/10">
              <h3 className="font-semibold text-[#1a3d2b] mb-2">
                Respon Cepat
              </h3>
              <p className="text-sm text-[#555]">
                Kami merespon seluruh pertanyaan dalam 24 jam pada hari kerja. 
                Untuk hal mendesak, silakan hubungi kami langsung via WhatsApp.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/6283857649532"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl no-underline font-semibold text-lg hover:bg-[#20bd5a] transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat Langsung via WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#1a3d2b] mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <AnimatedInput
                      label="Nama Depan"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <AnimatedInput
                      label="Nama Belakang"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <AnimatedInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <AnimatedInput
                    label="Nomor Telepon"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <AnimatedInput
                    label="Subjek"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1a3d2b]">
                    Pesan
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ceritakan kebutuhan Anda..."
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold gap-2 bg-[#1a3d2b] hover:bg-[#2d5a3f] text-white"
                  size="lg"
                >
                  <Send className="h-5 w-5" />
                  Kirim via WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent
