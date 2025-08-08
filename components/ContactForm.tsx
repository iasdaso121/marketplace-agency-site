import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) setStatus('Спасибо! Мы свяжемся с вами в ближайшее время.');
    else setStatus('Упс, что-то пошло не так.');
    form.reset();
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .3 }}
      onSubmit={onSubmit}
      className="glass p-6 space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-white/70">Имя</span>
          <input name="name" required className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:ring-2 focus:ring-neon-purple" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-white/70">Телефон</span>
          <input name="phone" required className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:ring-2 focus:ring-neon-pink" />
        </label>
        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="text-sm text-white/70">Email</span>
          <input type="email" name="email" required className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:ring-2 focus:ring-neon-blue" />
        </label>
        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="text-sm text-white/70">Сообщение</span>
          <textarea name="message" rows={4} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:ring-2 focus:ring-neon-purple" />
        </label>
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="neon-hover rounded-xl px-6 py-3 bg-white/10 border border-white/20">Отправить</button>
        {status && <p className="text-sm text-white/80">{status}</p>}
      </div>
    </motion.form>
  )
}
