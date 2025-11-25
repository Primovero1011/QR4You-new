export const metadata = {
  title: "QR4You",
  description: "Erstelle QR Codes in Sekunden – ohne Abo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{
        margin: 0,
        background: "#0B1120",
        fontFamily: "Arial, sans-serif"
      }}>
        {children}
      </body>
    </html>
  );
}
