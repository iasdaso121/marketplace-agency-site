import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamCard({ name, role, bio, photo }: { name: string, role: string, bio?: string, photo: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .3 }}
      whileHover={{ scale: 1.03 }}
      className="glass p-4 group"
      style={{ boxShadow: '0 0 30px -10px rgba(34,211,238,.5)' }}
    >
      <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
        <Image src={photo} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-neon-blue text-sm">{role}</p>
      {bio && <p className="text-white/70 mt-2 text-sm">{bio}</p>}
    </motion.div>
  )
}
