const usernametextfield = document.getElementById("username")
const adduserBtn = document.getElementById("addUser")

let userArray = []

adduserBtn.onclick = () => {
    const name = usernametextfield.value
    //alert(name)
    // console.log(name)
    userArray.push({ 'name': name })
    // console.log(userArray)
    saveData(userArray)
}

function saveData(userArray) {
    // console.log(userArray)
    let str = JSON.stringify("user",str)  //string format
    console.log(str)
}