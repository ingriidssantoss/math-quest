import { CertificateForm } from "@/components/certificate-form";
import { notFound } from 'next/navigation';
import { moduleTitles } from '@/lib/jornada';

// Generate valid certificate IDs from moduleTitles
const VALID_CERTIFICATE_IDS = Object.keys(moduleTitles);

export async function generateStaticParams() {
  // geramos rotas para cada módulo
  return VALID_CERTIFICATE_IDS.map(id => ({ id }));
}

export default function CertificadoPage({ params }: { params: { id: string } }) {
  const moduleId = parseInt(params.id, 10);
  const moduleTitle = moduleTitles[moduleId];
  if (!VALID_CERTIFICATE_IDS.includes(params.id) || !moduleTitle) {
    notFound();
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 bg-gradient-to-b from-background to-muted/50">
      <CertificateForm moduleId={moduleId} moduleTitle={moduleTitle} />
    </div>
  );
}