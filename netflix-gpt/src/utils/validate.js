export const checkValidSignInFrom = (email, password) => { // valid email and return different different values depending----------
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if (!isEmailValid) return "Please enter a valid email";
    if (!isPasswordValid) return "Please enter a valid password";
    return null;
}
export const checkValidSignUpFrom = (name, email, password) => {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if (!isNameValid) return "Please enter a valid Name";
    if (!isEmailValid) return "Please enter a valid Email";
    if (!isPasswordValid) return "Please enter a valid Password";
    return null;
}