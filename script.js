// complete the given function

function palindrome(str){
	const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
	const reveredStr = cleanedStr.split('').reverse().join('');
	return (reveredStr === cleanedStr);
}
module.exports = palindrome
