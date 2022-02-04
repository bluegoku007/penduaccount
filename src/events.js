const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.post('/event', (req, res, next) => {
    db.query(
      'INSERT INTO events (username, password, email,email_password,type,contact_email) VALUES (?,?,?,?,?,?)',
      [username, req.body.password, req.body.email,req.email_password,req.type,req.contact_email],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  return router;
}

module.exports = createRouter;