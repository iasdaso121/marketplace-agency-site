import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import TeamCard from '@/components/TeamCard';
import { team } from '@/lib/data';
import { Mail, Phone, SendHorizonal } from 'lucide-react';

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Контакты | Агентство WB/OZON</title>
      </Head>
      <section className="mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-semibold mb-8">Контакты</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ContactForm />
            <div className="glass p-6">
              <h2 className="text-xl font-semibold mb-4">Как с нами связаться</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80">
                <div className="flex items-center gap-3"><Mail className="text-neon-purple" /><span>hello@wb-ozon.agency</span></div>
                <div className="flex items-center gap-3"><Phone className="text-neon-pink" /><span>+7 (900) 000-00-00</span></div>
                <div className="flex items-center gap-3"><SendHorizonal className="text-neon-blue" /><span>@wb_ozon_agency</span></div>
              </div>
            </div>
            <div className="glass p-1 overflow-hidden">
              <iframe
                title="Google Map"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.2652484646467!2d37.620393!3d55.75396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5d791a69d9%3A0x967ff2f436c3dc93!2z0JzQvtGB0LrQstCw0YAg0JzQvtGB0LrQstCw0YLRjA!5e0!3m2!1sru!2sru!4v1700000000000">
              </iframe>
            </div>
          </div>
          <aside className="space-y-6">
            <h2 className="text-xl font-semibold">Наша команда</h2>
            <div className="grid grid-cols-1 gap-4">
              {team.map(member => (
                <TeamCard key={member.name} name={member.name} role={member.role} photo={member.photo} />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
