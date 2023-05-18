
module.exports =(roles) => async (req, res, next) => {
    const user = req.user;
    if (!user || !roles.includes(user.roles)) {
        return res.status(403).json({ status: 403, message: 'Access denied.' });
    }
    next();
}