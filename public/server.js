const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Todas as rotas vão para index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📁 Servindo arquivos de: ${path.join(__dirname, 'dist')}`);
});