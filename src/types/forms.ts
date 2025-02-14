export interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  genero: string;
  profissao: string;
  dataNascimento: string;
  endereco: string;
  telefone: string;
  cpf: string;
  tipoSanguineo: string;
  alergias: string;
  fotoPerfil: File | null;
  imagePreview: string | null;
}