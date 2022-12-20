const NAMES = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ. ';
const ALPHANUMERIC = 'abcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789@._, ';
const DIGITS = '0123456789';

function removeChar(value, inputName) {
    let VALIDATE_TO = '';
    let output = '';
    switch (inputName) {
        case 'name': VALIDATE_TO = NAMES; break;
        case 'email':
        case 'comment':  VALIDATE_TO = ALPHANUMERIC; break;
        case 'phone': VALIDATE_TO = DIGITS;  break;
      default: break;
    }
    for (let i = 0; i < value.length; i++) if (VALIDATE_TO.indexOf(value.charAt(i)) !== -1) output += value.charAt(i);
    return output;
}

export { removeChar }