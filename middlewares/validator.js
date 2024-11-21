const validator = (req, res, next) => {
    const { id, firstName, lastName, hobby } = req.body;
    if (!id || !firstName || !lastName || !hobby) {
        return res.status(400).json({ message: 'Missing required fields: id, firstName, lastName, hobby' });
    }
    next();
};

module.exports = validator;
