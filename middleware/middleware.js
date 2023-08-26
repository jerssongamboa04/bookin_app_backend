const middleware = (req, res, next) => {
    const { name} = req.body;

    // Verificar que los campos requeridos no estén vacíos
    if (!name) {
        return res.status(400).json({ error: 'Incomplete field' });
    }

    // Verificar los tipos de datos
    if (typeof name !== 'string') {
        return res.status(400).json({ error: 'Tipos de datos inválidos' });
    }

    next();
};

//  crear middleware que me reciba un token de firebase 

module.exports = middleware;