const usernameTextField = document.getElementById("username");
const addUserBtn = document.getElementById("addUser");
const recordsDisplay = document.getElementById("records");

//get data
let userArray = [];
let edit_id = null;
// gte data local storage
let objstr = localStorage.getItem("users");
//console.log(objstr)
if (objstr != null) {
    userArray = JSON.parse(objstr); // string to object
    //console.log(UserArray)
}
displayData();
addUserBtn.onclick = () => {
    const name = usernameTextField.value;
    // const name = userNameTextField.value.trim();
    if (name === "") return; // Prevent adding empty names

    if (edit_id != null) {
        userArray.splice(edit_id, 1, {
            name: name,

        });
        edit_id = null;
        addUserBtn.innerText = 'Add Text';
    } else userArray.push({ name: name });
    // alert(name)
    // userArray.push({ 'name': name });
    // console.log(userArray)
    saveData(userArray);
    usernameTextField.value = ""; //data empty
};

function saveData(userArray) {
    // console.log(userArray)
    let str = JSON.stringify(userArray); //string
    //console.log(str)

    localStorage.setItem("users", str); // string formate
    displayData();
}

function displayData() {
    let data = "";
    userArray.forEach((item, i) => {
        data += `<tr>
<th>${i + 1}</th>
<td>${item.name}</td>
<td>
<i class = "btn text-white fa fa-edit btn-warning mx-2"
onclick='EditInfo(${i})'></i>
<i class = "btn btn-success text-white fa fa-trash"
onclick='DeleteInfo(${i})'><i/>
</td>
</tr>`;
        //  console.log(data)
    });
    recordsDisplay.innerHTML = data;
}
function DeleteInfo(id) {
    userArray.splice(id, 1); // Remove 1 element at index id
    saveData(userArray);
}

function EditInfo(id) {
    // alert(id)
    edit_id = id;
    usernameTextField.value = userArray[id].name;
    addUserBtn.innerText = "Updateuser";
}
