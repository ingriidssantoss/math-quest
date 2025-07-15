// app/certificado/[id]/page.tsx
import { CertificateForm } from "@/components/certificate-form";
import { notFound } from "next/navigation";
import { moduleTitles } from "@/lib/jornada";

// Define PageProps to match Next.js dynamic route expectations
type PageProps = {
  readonly params: Promise<{ id: string }>; // params is a Promise in Next.js App Router
};

export async function generateStaticParams() {
  return Object.keys(moduleTitles).map((id) => ({ id }));
}

export default async function CertificadoPage({ params }: PageProps) {
  const { id } = await params; // Await the params Promise to access id
  const moduleId = parseInt(id, 10);
  const moduleTitle = moduleTitles[moduleId];

  if (!moduleTitle) {
    notFound();
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 bg-gradient-to-b from-background to-muted/50">
      <CertificateForm moduleId={moduleId} moduleTitle={moduleTitle} />
    </div>
  );
}