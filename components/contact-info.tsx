"use client"

import { motion } from "framer-motion"
import { User, Mail, Phone, MapPin } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <User className="h-6 w-6 text-purple-500" />,
      label: "Name",
      value: "Yash Agrahari",
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-500" />,
      label: "Email",
      value: "yashagrahari7@gmail.com",
      link: "mailto:yashagrahari7@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-500" />,
      label: "Phone",
      value: "+91 8004236560",
      link: "tel:+918004236560",
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-500" />,
      label: "Location",
      value: "Ghaziabad, Uttar Pradesh, India",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {contactDetails.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gradient-to-b from-purple-950/20 to-black p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.1)" }}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-500/10 rounded-full">{item.icon}</div>
            <div>
              <h3 className="text-sm text-gray-400 mb-1">{item.label}</h3>
              {item.link ? (
                <a href={item.link} className="text-lg font-medium text-white hover:text-purple-400 transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="text-lg font-medium text-white">{item.value}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
