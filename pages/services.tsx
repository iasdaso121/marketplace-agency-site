import Head from 'next/head';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <>
      <Head>
        <title>Услуги | Агентство WB/OZON</title>
      </Head>
      <section className="mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-semibold mb-8">Услуги</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(s => (
            <ServiceCard
              key={s.group}
              title={s.group}
              points={s.items as unknown as string[]}
              icon={<s.icon />}
            />
          ))}
        </div>
      </section>
    </>
  );
}
