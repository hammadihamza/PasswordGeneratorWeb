const DecryptBtn=document.getElementById('DecryptBtn');
DecryptBtn.addEventListener('click',function decrypt(){
const Encrypted = document.getElementById('encryptedPassword').value;
const Decrypted = window.atob(Encrypted);
/*The atob() method decodes a base-64 encoded string.
This method decodes a string of data which has been encoded by the btoa() method.*/

document.getElementById('decryptedPassword').value=Decrypted;
 })