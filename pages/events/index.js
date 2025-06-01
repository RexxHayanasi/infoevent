import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EventCard from '../../components/EventCard';

export default function Events({ events }) {
  return (
    <Layout>
      <h1>Daftar Event Jejepangan Jabodetabek 2025</h1>
      {events.length === 0 && <p>Tidak ada event ditemukan.</p>}
      <div style={{ display: 'grid', gap: '1rem' }}>
        {events.map(event => (
          <Link key={event.id} href={`/events/${event.id}`} passHref>
            <a><EventCard event={event} /></a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

// Membaca file events.json dari folder data
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  // Berikan id unik untuk tiap event (misal index atau dari nama)
  const events = data.map((event, i) => ({
    ...event,
    id: i.toString(),
  }));

  return {
    props: { events }
  };
}
