export default function Home() {
  return (
    <div style={{textAlign: "center", padding: "50px", fontFamily: "sans-serif"}}>
      <h1 style={{fontSize: "32px", marginBottom: "20px"}}>Онлайн-запись к репетитору</h1>
      <p style={{fontSize: "18px", color: "#666", marginBottom: "30px"}}>Павел Омельянович · Физика</p>
      <a href="/booking" style={{display: "inline-block", padding: "15px 30px", backgroundColor: "#2563eb", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "18px", fontWeight: "bold"}}>
        Записаться на занятие →
      </a>
    </div>
  );
}

// Updated homepage
