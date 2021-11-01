const EncryptBtn=document.getElementById('EncryptBtn');
EncryptBtn.addEventListener('click',function encrypt(){
const thePassword = document.getElementById('passwordDisplay').value;
const Encrypted = window.btoa(thePassword); //The btoa() method encodes a string in base-64, This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string.
document.getElementById('encryptedPassword').value=Encrypted;
})