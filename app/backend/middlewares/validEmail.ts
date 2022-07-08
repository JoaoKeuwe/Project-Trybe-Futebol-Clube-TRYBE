import token from ./
const emailRegex = /\S+@\S+.\S+/;
const validEmail (req, res, next) {
    const {email} = req.body
    if (!emailRegex.test(email)) {
        return token
    }
}