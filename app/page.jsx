exp"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0B1120",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "80px",
      gap: "24px"
    }}>

      <h1 style={{ fontSize: "42px", fontWeight: 800 }}>QR for You</h1>
      <p style={{ opacity: 0.8 }}>
        Erstelle deinen QR-Code in Sekunden – ohne Abo.
      </p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Gib deine URL oder Text ein..."
        style={{
          width: "60%",
          maxWidth: "480px",
          padding: "12px 16px",
          borderRadius: "8px",
          background: "#111827",
          border: "1px solid #2563EB",
          color: "white",
          fontSize: "16px"
        }}
      />

      <button
        style={{
          width: "60%",
          maxWidth: "480px",
          padding: "14px",
          borderRadius: "8px",
          background: "#06B6D4",
          color: "#00111B",
          fontWeight: 700,
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Generate QR
      </button>

      <div style={{
        display: "flex",
        gap: "16px",
        marginTop: "40px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {/* Pro QR */}
        <div style={cardStyle}>
          <div style={icon}>🛡</div>
          <h3>Pro QR</h3>
          <p>2048×2048 DPI + Rahmen + Premium Colors</p>
          <span style={price}>4,99€</span>
        </div>

        {/* Logo QR */}
        <div style={cardStyle}>
          <div style={icon}>⚡</div>
          <h3>Logo QR</h3>
          <p>QR mit kleinem Logo / Symbol in der Mitte</p>
          <span style={price}>6,99€</span>
        </div>

        {/* Bundle */}
        <div style={cardStyle}>
          <div style={icon}>✔️</div>
          <h3>Business Bundle</h3>
          <p>3 individuelle QR Codes</p>
          <span style={price}>6,99€</span>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "260px",
  background: "#111827",
  padding: "18px",
  textAlign: "center",
  borderRadius: "12px",
  border: "1px solid #1E293B",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const icon = {
  fontSize: "28px",
};

const price = {
  marginTop: "8px",
  fontSize: "18px",
  fontWeight: 700,
  color: "#06B6D4",
};ort default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color: "white",
      background: "#0B1120"
    }}>
      <h1>QR4You – coming soon</h1>
    </div>
  );
}
