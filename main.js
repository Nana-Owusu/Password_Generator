let passwordCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passGenOne = document.getElementById("passgenone")
let passGenTwo = document.getElementById("passgentwo")




function generatePassword(length) {
    let allCharacters = passwordCharacters
    let password = ""

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length)
        password += allCharacters[randomIndex]
    }

    return password;
}

// Function to handle button click
 function generatorBtn() {
    let passwordLengthOne = 8 // Change the desired length as needed
    let passwordLengthTwo = 8
    let generatedPasswordOne = generatePassword(passwordLengthOne)
    let generatedPasswordTwo = generatePassword(passwordLengthTwo)
    passGenOne.textContent = generatedPasswordOne
    passGenTwo.textContent = generatedPasswordTwo

}

