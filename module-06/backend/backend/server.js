import express from 'express';
import postRoutes from './routes/post.routes.js';
// const postRoutes = require('./routes/post.routes.js');

const port = 3001;
const app =  express();

app.use(express.json());
app.use('/', postRoutes);
app.use('/post', postRoutes);




//lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port} avec succès okok encore ok`);
});
