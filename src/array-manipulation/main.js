// Using two pointers approach
// converting string to array using "split" cuz strings are immutable in JS :(
function reversingString(str) {
    let left = 0;
    let right = str.length - 1;
    let chars = str.split('');


    while (left < right) {
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
    }

    return chars.join('');
}

 console.log(reversingString("gnirts desrever"));