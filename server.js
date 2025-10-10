import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos do build do Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Todas as rotas vão para index.html (SPA - Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor React rodando na porta ${PORT}`);
  console.log(`📁 Servindo arquivos de: ${path.join(__dirname, 'dist')}`);
  console.log(`🌐 Acesse: http://localhost:${PORT}`);
});