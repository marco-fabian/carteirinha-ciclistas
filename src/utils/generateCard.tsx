import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';
import { FormData } from '@/types/forms';

export async function generateMembershipCard(formData: FormData): Promise<Buffer> {
  const doc = new PDFDocument({
    size: [400, 250],
    margin: 10,
    autoFirstPage: true,
    bufferPages: true,
    font: undefined // Usa as fontes embutidas (Helvetica padrão)
  });

  const chunks: Buffer[] = [];
  doc.on('data', chunk => chunks.push(chunk));
  const getBuffer = new Promise<Buffer>((resolve) => {
    doc.on('end', () => resolve(Buffer.concat(chunks)));
  });

  try {
    const qrCodeData = await QRCode.toDataURL(JSON.stringify({
      nome: `${formData.nome} ${formData.sobrenome}`,
      cpf: formData.cpf,
      tipoSanguineo: formData.tipoSanguineo
    }));

    // ... (resto do seu código para desenhar o PDF)

    doc.end();
    return getBuffer;

  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao gerar PDF:', error.message, error.stack); // Mais detalhes sobre o erro
    } else {
      console.error('Erro ao gerar PDF:', error); // Caso o erro não seja uma instância de Error
    }
    throw error;
  }
}