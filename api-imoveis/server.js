const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

// Habilita CORS
server.use(cors());
server.use(middlewares);

// Rota personalizada para status
server.get('/status', (req, res) => {
  res.json({ 
    status: 'API Imobiliária Online',
    timestamp: new Date().toISOString()
  });
});

server.use(router);

server.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});