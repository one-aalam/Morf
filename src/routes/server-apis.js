module.exports = function(app){
  app.post('/api/login', function(req, res) {
      const credentials = req.body;
      if(credentials.user==='admin' && credentials.password==='password'){
        res.json({'user': credentials.user, 'role': 'ADMIN'});   
      }else{
        res.status('500').send({'message' : 'Invalid user/password'});
      }
  });

  app.post('/api/logout', function(req, res) {
      res.json({'user': 'admin', 'role': 'ADMIN'});   
  });
}