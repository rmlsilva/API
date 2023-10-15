module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || 3333,
        expiresIn: "1d",
    }
}