import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Home page ok'
  });
});

router.get('/post', (req, res) => {
  res.json({
    id: 1,
    title: 'Mon premier post api',
    content: 'Contenu du premier post valider'
  });
});
export default router; // cas : ES6

// module.exports = router;  cas require: CommonJS