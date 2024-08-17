var NewPasswordValidation = (password) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&^]{8,15}$/;
    return regex.test(password);
}
module.exports = NewPasswordValidation;