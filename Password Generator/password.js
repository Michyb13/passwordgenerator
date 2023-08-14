let char =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0]
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordThree= document.getElementById("password-three")
let sliderNumber = document.getElementById("label-el")
let slider = document.getElementById("slider")
let passwordLength = 8



function generatePassword(){
    let password = ""
    for(let p =0; p< passwordLength; p++){
        randomChar = Math.floor(Math.random() * char.length)
         password += char[randomChar]

    }
    return password
}
function getPasswords(){
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
    passwordThree.textContent = generatePassword()
}

function sliderChange(){
    sliderNumber.textContent = slider.value
    passwordLength = slider.value
}


