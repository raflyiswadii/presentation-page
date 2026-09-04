import PresentationViewer from "@/components/PresentationViewer";

export const metadata = {
  title: "Laporan Penjualan Rio Iswadi",
  description: "Laporan penjualan Bulan Agustus 2026",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <PresentationViewer />
    </main>
  );
}
