export default function EventCard({ event }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 16,
      cursor: 'pointer',
      backgroundColor: '#f9f9f9',
      transition: 'background-color 0.2s',
    }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0f7fa'}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f9f9f9'}>
      <h3>{event.title}</h3>
      <p><strong>Tanggal:</strong> {event.date}</p>
      <p><strong>Lokasi:</strong> {event.location}</p>
    </div>
  );
}
