function stringTransform (str) {
    const length = str.length; 
    
    if(length % 15 === 0) {
        let reversed = str.split('').reverse().join('')
        let  asciiCode = reversed.split('').map(char => char.charCodeAt(0)).join('')
        return asciiCode;
    }

    else if (length % 3 === 0 ){
        return str.split('').reverse().join('');
    }

    else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join('');
    }
    
    else {
        return str;
    }
}

console.log(stringTransform ("Hamburger"))
console.log(stringTransform("Pizza"));
console.log(stringTransform("Chocolate Chip Cookie"))