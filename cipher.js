function cipher(str) {
    str = str.toLowerCase();
    const result = '';
    const charcode = 0;

    for (let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + 1;
        result += String.fromCharCode(charcode);
    }
    return result;

}
console.log(cipher('i love cryptography!'));


