# Carteirinha de Ciclistas 🚲

Sistema web para geração de carteirinhas digitais para ciclistas, desenvolvido com Next.js e TypeScript.

## 🚀 Funcionalidades

- ✅ Cadastro de ciclistas com informações pessoais
- ✅ Upload de foto de perfil
- ✅ Geração de carteirinha em PDF com QR Code
- ✅ Design responsivo com Tailwind CSS
- ✅ Validações de formulário

## 🛠️ Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- PDFKit
- QR Code Generator

## 📋 Pré-requisitos

```bash
node >= 18.17.0
npm >= 9.6.7
```

## 🔧 Instalação e Uso

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/carteirinha-ciclistas.git
```

2. Instale as dependências:
```bash
cd carteirinha-ciclistas
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```plaintext
carteirinha-ciclistas/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate-card/
│   │   └── page.tsx
│   ├── components/
│   │   ├── FormField.tsx
│   │   └── PhotoUpload.tsx
│   ├── types/
│   │   └── forms.ts
│   └── utils/
│       └── generateCard.ts
├── public/
├── tailwind.config.js
└── package.json
```

## 💻 Como Usar

1. Acesse a aplicação no navegador
2. Preencha o formulário com os dados do ciclista
3. Faça upload da foto de perfil
4. Clique em "Cadastrar"
5. A carteirinha será gerada automaticamente em PDF

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Faça commit das suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

