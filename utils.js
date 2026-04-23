export function checkPolindrome(text){
    const text_res = text.toLowerCase();
    const rewers = text_res.split('').reverse().join('');
    return rewers === text_res
   

}
