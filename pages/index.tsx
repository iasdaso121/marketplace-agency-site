import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";
import { services, perks, team } from "@/lib/data";
import { Rocket, Bolt, ShieldCheck, LineChart } from "lucide-react";
const Icons = [Rocket, Bolt, ShieldCheck, LineChart];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ведение Wildberries и Ozon под ключ | Агентство</title>
        <meta
          name="description"
          content="Полное ведение кабинетов на маркетплейсах Wildberries и Ozon: реклама, логистика, дизайн, SEO и внешнее продвижение."
        />
      </Head>

      <section className="mx-auto max-w-7xl px-4 pt-10 md:pt-16">
        <div className="glass p-8 md:p-12 text-center relative overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Ведение Wildberries и Ozon под ключ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Реклама, логистика, SEO, дизайн и ежедневная операционка — всё для
            вашего роста на маркетплейсах.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#request"
              className="neon-hover rounded-2xl px-8 py-4 bg-white/10 border border-white/20 text-lg font-semibold"
            >
              Оставить заявку
            </Link>
            <Link
              href="/services"
              className="neon-hover rounded-2xl px-8 py-4 bg-white/5 border border-white/10"
            >
              Наши услуги
            </Link>
          </motion.div>

          <div
            className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,.6), transparent 60%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,.5), transparent 60%)",
            }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Преимущества
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass p-6"
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const Icon = Icons[idx % 4];
                  return <Icon className="text-neon-purple" />;
                })()}
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-white/80 text-sm">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Наши направления
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.group}
              title={s.group}
              points={s.items as unknown as string[]}
              icon={<s.icon />}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Наша команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              photo={member.photo}
            />
          ))}
        </div>
      </section>

      <section id="request" className="mx-auto max-w-7xl px-4 mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Оставить заявку
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="text-white/80">
            Заполните форму — мы свяжемся с вами, уточним цели и подготовим
            медиаплан.
          </div>
        </div>
      </section>
    </>
  );
}
