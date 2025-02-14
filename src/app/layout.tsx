import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Associação de Ciclistas",
  description: "Cadastro de membros da associação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-gray-100">
        {/* Cabeçalho */}
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-xl font-bold text-center">Associação de Ciclistas</h1>
        </header>

        {/* Conteúdo da Página */}
        <main className="max-w-2xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
