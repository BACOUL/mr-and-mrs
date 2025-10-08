import "./globals.css";

export const metadata = {
  title: "Mr & Mrs Prompt",
  description: "L’art de parler aux intelligences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
