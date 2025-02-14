"use client";
import { useState, useEffect } from "react";
import { FormField } from "@/components/FormField";
import { PhotoUpload } from "@/components/PhotoUpload";
import type { FormData } from "@/types/forms";

const initialFormData: FormData = {
  nome: "", sobrenome: "", email: "", genero: "",
  profissao: "", dataNascimento: "", endereco: "",
  telefone: "", cpf: "", tipoSanguineo: "",
  alergias: "", fotoPerfil: null, imagePreview: null
};

const genderOptions = [
  { value: "masculino", label: "Masculino" },
  { value: "feminino", label: "Feminino" }
];

const bloodTypeOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" }
];

export default function Home() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    return () => {
      if (formData.imagePreview) {
        URL.revokeObjectURL(formData.imagePreview);
      }
    };
  }, [formData.imagePreview]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('A imagem deve ter menos que 5MB.');
        return;
      }
      setFormData(prev => ({
        ...prev,
        fotoPerfil: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cadastro de Membro</h2>
      <p className="text-gray-600 mb-4">Preencha os dados para se cadastrar.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Nome" name="nome" value={formData.nome} onChange={handleChange} required />
          <FormField label="Sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} required />
        </div>

        <FormField label="E-mail" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <FormField label="Gênero" name="genero" value={formData.genero} onChange={handleChange} options={genderOptions} required />
        <FormField label="Profissão" name="profissao" value={formData.profissao} onChange={handleChange} />
        <FormField label="Data de Nascimento" name="dataNascimento" type="date" value={formData.dataNascimento} onChange={handleChange} required />
        <FormField label="Endereço" name="endereco" value={formData.endereco} onChange={handleChange} />
        <FormField label="Número de Telefone" name="telefone" type="tel" value={formData.telefone} onChange={handleChange} required />
        <FormField label="CPF" name="cpf" value={formData.cpf} onChange={handleChange} />
        <FormField label="Tipo Sanguíneo" name="tipoSanguineo" value={formData.tipoSanguineo} onChange={handleChange} options={bloodTypeOptions} />
        <FormField label="Alergias" name="alergias" type="textarea" value={formData.alergias} onChange={handleChange} />
        
        <PhotoUpload 
          imagePreview={formData.imagePreview} 
          onChange={handleFileChange} 
          required
        />

        <div className="text-sm text-gray-600">
          <span className="text-red-500">*</span> Campos obrigatórios
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
