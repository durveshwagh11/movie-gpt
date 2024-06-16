const checkValidData = (email, password) => {
    const isEmailValid = email.includes("@");
    const isPasswordValid = password.length > 8;

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    return null;
}

export default checkValidData;