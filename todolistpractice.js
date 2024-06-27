const userNameTextField = document.getElementById("username")
// const addUserBtn = document.getElementById('adduser')

// let userArray = []
// addUserBtn.onclick = () => {
//     const name = userNameTextField.value
//     alert(name)
//     userArray.push({ 'name': name })
//     // console.log(userArray)
//     // savedata(userArray)
// }
// function savedata(userArray) {
//     console.log(userArray)
//     let str = JSON.stringify(userArray)
//     // console.log(str)
//     localStorage.setItem('user', str)
// }
// function displaydata() {
//     let data = ''
//     userArray.forEach((item, i) => {
//         console.log(i)
//     })
// }

const userNameTextField = document.getElementById('username')
const addUserBtn = document.getElementById('addUser')
const recordDisplay = document.getElementById('records')

let userArray=[]

//get data local storage

let data = localStorage.getItem('users')
if(data){
    userArray = JSON.parse(data)
    displayData()
}
addUserBtn.onclick = () => {
    const name = userNameTextField.value
    userArray.push({'name':name})
    saveData(userArray)
}

function saveData(userArray){
    //console.log(userArray)
    let str = JSON.stringify(userArray)//string
    //console.log(str)
    localStorage.setItem('users',JSON.stringify(userArray)) //string format
    displayData()

}

function displayData(){
  let data  = ''
  userArray.forEach((item,i)=>{
    // console.log(i)
    data += `<tr>
    <th>${i+1}</th>
    <td>${item.name}</td>
    <td>
    <i class="btn text-white fa fa-edit btn-info mx-2"onclick=" EditInfo(${i})"></i>
    <i class="btn btn-danger text-white fa fa-trash"onclick=" DeleteInfo(${1})"></i>
    </td>
    </tr>`;
    console.log(data)
})
recordDisplay.innerHTML = data;
}