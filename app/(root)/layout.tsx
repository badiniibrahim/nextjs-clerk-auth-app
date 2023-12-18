import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-center h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
