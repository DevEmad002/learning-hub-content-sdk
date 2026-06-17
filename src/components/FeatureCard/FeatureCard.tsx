export default function FeatureCard() {
  return (
    <section
      style={{
        padding: '40px',
        border: '1px solid #ddd',
        borderRadius: '16px',
        maxWidth: '420px',
        margin: '40px auto',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      }}
    >
      <h2>Feature Card</h2>
      <p>This is my second Content SDK component.</p>
      <button
        style={{
          padding: '12px 20px',
          borderRadius: '999px',
          border: 'none',
          background: '#4f46e5',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Learn more
      </button>
    </section>
  );
}