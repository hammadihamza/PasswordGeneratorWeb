  
  const d = new Date().toLocaleString();
  var SFBtn = document.getElementById("SaveFileBtn");
SFBtn.addEventListener('click',function save(){

  const thePassword = document.getElementById('passwordDisplay').value;
  const pwdLength =document.getElementById('passwordDisplay').length;
  var blob = new Blob(["Password: "+thePassword+"\n"+"Creation Date: "+d],
  {type: "text/plain;charset=utf-8"});
  saveAs(blob, "GeneratedPWD.txt");
});