# Next Level Training — Front-end Prototype

Protótipo navegável da experiência da **Next Level Training**, pensado para substituir gradualmente a experiência atual de consultoria em plataforma de terceiros.

## Objetivo desta versão

Esta primeira fase é **somente front-end**. Não há banco de dados, autenticação real, pagamentos ou backend.

Fluxos incluídos:
- Tela de boas-vindas;
- Onboarding com questionário de perfil;
- Dashboard do aluno;
- Treino do dia;
- Lista de exercícios e conclusão de treino;
- Progresso e consistência;
- Comparação entre o plano Essencial (R$47/mês) e Personal (R$200/mês);
- Perfil e preferências;
- Layout mobile-first com adaptação para desktop.

## Stack

- React
- TypeScript
- Vite
- CSS
- Lucide React

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O `vite.config.ts` já está preparado com o caminho base `/next-level-training-app/` para facilitar um preview via GitHub Pages no futuro.
