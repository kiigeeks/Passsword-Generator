import { toast } from 'react-toastify';
const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeric = "0123456789"
const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

export const generatePassword = (len, isLower, isUpper, isNumeric, isSymbol) => {
    let generator = '';
    let data = '';

    if (isLower) data += lowerAlphabet;
    if (isUpper) data += upperAlphabet;
    if (isNumeric) data += numeric;
    if (isSymbol) data += symbol;

    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }

    return generator
}

export const copyClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        toast.success("Password copied to clipboard", {
            position: "top-right",
            autoClose: 3000
        });
    }).catch(err => {
        toast.error("Failed to copy password " + err, {
            position: "top-right",
            autoClose: 3000
        });
    });
}