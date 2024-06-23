const userNameTextField = document.getElementById("username")
const addUserBtn = document.getElementById('adduser')

let userArray = []
addUserBtn.onclick = () => {
    const name = userNameTextField.value
    alert(name)
    userArray.push({ 'name': name })
    // console.log(userArray)
    // savedata(userArray)
}
function savedata(userArray) {
    console.log(userArray)
    let str = JSON.stringify(userArray)
    // console.log(str)
    localStorage.setItem('user', str)
}
function displaydata() {
    let data = ''
    userArray.forEach((item, i) => {
        console.log(i)
    })
}