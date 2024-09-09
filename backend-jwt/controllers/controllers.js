import conectar from "../db/database.js"

// Endpoint de inicio de sesión (login)
export const login = async (req, res) => {
    const { username, password } = req.body;

    const connection = await conectar();
    try {
        const sql = "SELECT * FROM `users` WHERE `username` = ? AND `password` = ? LIMIT 1";

        const [resultUsername] = await connection.query(sql, [username, password]);
        // Validación de usuario
        if (resultUsername.length == 0) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Generar token JWT
        const token = await generarJwt(user.id);

        // Almacenar el token en la sesión del servidor
        req.session.token = token;

        // Almacenar el token en una cookie segura
        res.cookie('authToken', token, {
            httpOnly: true, // La cookie no es accesible desde JavaScript
            secure: false, // Cambiar a true en producción con HTTPS
            maxAge: 3600000 // Expiración en milisegundos (1 hora)
        });

        return res.json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error Inesperado' });
    }
};

// Endpoint para validar la sesión
export const validarSession = (req, res) => {
    console.log(req.user);
    return res.json({ message: 'Acceso permitido a área protegida', user: req.user });
};

// Endpoint de cierre de sesión (logout)
export const logout = (req, res) => {
    try {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ message: 'Error al cerrar sesión' });
            }

            res.clearCookie('authToken');
            return res.json({ message: 'Cierre de sesión exitoso' });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error Inesperado' });
    }
};

export const register = async (req, res) => {
    const {username, password} = req.body;
    if(!username && !password ){
        return res.status(404).json({
            message:'todos los campos deben estar completos'
        })
    }else if(!username && password){
        return res.status(404).json({
            message:'todos los campos deben estar completos'
        })
    }else if(username && !password){
        return res.status(404).json({
            message:'todos los campos deben estar completos'
        })
    }
    try {
        const conectado = await conectar();
        const sql = 'INSERT INTO `users`( `username`, `password`) VALUES (?,?);'
        const [respuesta] = await conectado.query(sql,[username,password]);
        if(respuesta)res.json({msg:'datos insertados correctamente'})   
    } catch (error) {
        console.log(error);
        
    }
}