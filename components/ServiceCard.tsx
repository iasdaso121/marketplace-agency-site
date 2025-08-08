import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export default function ServiceCard({ title, points, icon }: { title: string, points: string[], icon?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .3 }}
      whileHover={{ scale: 1.02 }}
      className={cn('glass p-6 group relative overflow-hidden')}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
           style={{ boxShadow: 'inset 0 0 80px rgba(168,85,247,.25)' }} />
      <div className="flex items-start gap-3">
        <div className="text-neon-purple">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <ul className="space-y-2 text-white/80">
            {points.map((p, i) => <li key={i} className="list-disc list-inside">{p}</li>)}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
