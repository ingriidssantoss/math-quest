import { notFound } from "next/navigation";
import { CertificateForm } from "@/components/certificate-form";

// Define valid certificate IDs
const VALID_CERTIFICATE_IDS = ["1", "2", "3"];

export function generateStaticParams() {
  return VALID_CERTIFICATE_IDS.map(id => ({ id }));
}

export default function CertificadoPage({ params }: { params: { id: string } }) {
  // Check if the ID is valid
  if (!VALID_CERTIFICATE_IDS.includes(params.id)) {
    notFound();
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 bg-gradient-to-b from-background to-muted/50">
      <CertificateForm params={params} />
    </div>
  );
}