"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, Download, ArrowLeft, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";
import * as htmlToImage from 'html-to-image';

interface CertificateFormProps {
  moduleId: number;
  moduleTitle: string;
}

export function CertificateForm({ moduleId, moduleTitle }: CertificateFormProps) {
  const router = useRouter();
  const certificateRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    studentName: "",
    moduleName: moduleTitle,
    date: new Date().toISOString().split("T")[0]
  });
  const [showCertificate, setShowCertificate] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCertificate(true);
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current || isDownloading) return;
    setIsDownloading(true);

    // Esconde botões pra captura
    const buttons = certificateRef.current.parentElement?.querySelector('.mb-8');
    if (buttons instanceof HTMLElement) buttons.style.display = 'none';

    try {
      // Gera PNG com alta resolução
      const dataUrl = await htmlToImage.toPng(certificateRef.current, {
        width: certificateRef.current.scrollWidth * 2,
        height: certificateRef.current.scrollHeight * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left',
        },
        canvasWidth: certificateRef.current.scrollWidth * 2,
        canvasHeight: certificateRef.current.scrollHeight * 2,
      });

      // Restaura botões
      if (buttons instanceof HTMLElement) buttons.style.display = '';

      // Força download
      const link = document.createElement('a');
      link.download = `certificado-${formData.studentName
        .toLowerCase()
        .replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Erro ao gerar certificado:', err);
    } finally {
      setIsDownloading(false);
    }
  };


  if (showCertificate) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => router.push('/jornada')}
            className="text-muted-foreground hover:text-foreground w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Jornada
          </Button>
          <Button
            onClick={downloadCertificate}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 w-full sm:w-auto"
            disabled={isDownloading}
          >
            <Download className="h-5 w-5 mr-2" />
            {isDownloading ? "Gerando..." : "Baixar Certificado"}
          </Button>
        </div>

        <div ref={certificateRef} className="bg-[url('https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg')] bg-cover bg-center p-4 sm:p-8 rounded-2xl shadow-2xl">
          <div className="bg-white/95 p-6 sm:p-12 border-8 border-double border-purple-200 dark:border-purple-800 rounded-xl backdrop-blur-sm">
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="flex justify-center">
                <Award className="h-16 sm:h-24 w-16 sm:w-24 text-purple-600 animate-in fade-in-50 zoom-in-50 duration-1000" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Certificado de Conclusão
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">Este certificado reconhece que</p>
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                {formData.studentName}
              </p>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">Concluiu com êxito o módulo</p>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {formData.moduleName}
              </p>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                O programa MathQuest – A Jornada de Combinatória
                demonstrando domínio sobre os temas abordados e resolução dos desafios propostos com excelência.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">Emitido em: {formData.date}</p>
              <div className="mt-8 sm:mt-12 space-y-2">
                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  — Equipe MathQuest
                </p>
                <p className="text-base sm:text-lg italic text-purple-600 dark:text-purple-400">
                  Guardiões da Ordem Matemática
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-xl border-2 shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500" />
        <CardHeader className="space-y-1 bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-950/50 dark:to-blue-950/50 rounded-t-lg border-b pt-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <CardTitle className="text-2xl">Gerar Certificado</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="space-y-2">
              <Label htmlFor="studentName" className="text-lg">Nome do Aluno</Label>
              <Input
                id="studentName"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="text-lg p-6 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                required
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="moduleName" className="text-lg">Módulo Concluído</Label>
              <Input
                id="moduleName"
                value={formData.moduleName}
                className="text-lg p-6 bg-gray-50 dark:bg-gray-800/50"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-lg">Data de Emissão</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="text-lg p-6 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transform transition-all duration-300 hover:scale-[1.02]"
            >
              <Award className="mr-2 h-5 w-5" />
              Gerar Certificado
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}