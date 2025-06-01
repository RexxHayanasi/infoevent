import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout';

export default function EventDetail({ event }) {
  if (!event) return <Layout><p>Event tidak ditemukan.</p></Layout>;

  return (
    <Layout>
      <h1>{event.title}</h1>
      <p><strong>Tanggal:</strong> {event.date}</p>
      <p><strong>Lokasi:</strong> {event.location}</p>
      {event.info && <p><strong>Info:</strong> <a href={event.info} target="_blank" rel="noopener noreferrer">{event.info}</a></p>}
    </Layout>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const paths = data.map((_, i) => ({
    params: { id: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const event = data[parseInt(params.id)] || null;

  return {
    props: { event }
  };
}
