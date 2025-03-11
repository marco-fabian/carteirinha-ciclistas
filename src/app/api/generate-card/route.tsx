import { NextResponse } from 'next/server';
import { generateMembershipCard } from '@/utils/generateCard';

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const pdfBuffer = await generateMembershipCard(formData);

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=carteirinha-ciclista.pdf'
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao gerar carteirinha:', error.message, error.stack); // Detalhes do erro
      return NextResponse.json(
          { error: error.message || 'Erro ao gerar carteirinha' }, // Envia a mensagem de erro para o front
      );
    } else {
      console.error('Erro ao gerar carteirinha:', error);
      return NextResponse.json(
          { error: 'Erro ao gerar carteirinha' }, // Envia a mensagem de erro para o front
          { status: 500 }
      );
    }
}
}