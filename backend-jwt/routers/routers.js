app.post('/login'); //endpoint de inicio de sesión
app.get('/session', validarJwt);//endpoint para validar ña sesión
app.post('/logout') //endpoint de cierre de sesión