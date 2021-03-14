function removePunctuation(inString){
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const pRemoved = inString.replace(regex, '');
    return pRemoved;
}