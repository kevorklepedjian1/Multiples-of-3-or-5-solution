const solution = (number) =>{
    if (number < 0) return 0; // If the number is negative, return 0

    let multiples = []; // Array to store valid multiples

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i); // Add the multiple to the array
        }
    }

    return multiples.reduce((sum, num) => sum + num, 0); // Sum up the array
  
}