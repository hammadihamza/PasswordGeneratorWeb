//Définition des variables
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')


//Définition des variables à utiliser dans arrayFromLowToHigh
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

//Cela nous permet de synchroniser le nombre de character à l'utilisation de la fonction: syncCharacterAmount
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)



/*Une fois l'utilisateur clique sur le bouton "Generer Mot de passe" l'événement submit sera déclenché
Ensuite, pour generer un mdp à l'aide de la fonction generatePassword les valeurs de chaque composant seront obtenus.
Enfin, Le résultat va être affiché dans un input de type texte.
*/
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.value = password
})




//La fonction qui permet de générer un mot de passe aléatoire
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}



//cette fonction crée un tableau puis ajoute auquel les valeurs des variables 
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


//syncCharacterAmount retourne le nombre de characters
function syncCharacterAmount(e) {
  const value = e.target.value //The target event property returns the element that triggered the event
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

