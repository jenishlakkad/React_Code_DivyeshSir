// <!--
//     Date: 13/09/23
//     Day:- Thursday
//     Topic:- Making Form For 2nd Time
//  -->

let arr = [];
let count = 0;
let editId;
const saveUser = () => {
  let obj = {};
  // For Radio
  let rdb = document.querySelectorAll("input[type=radio]:checked");
  rdb.forEach((x) => {
    obj[x.name] = x.value;
  });

  // For Checkbox
  let chk = document.querySelectorAll("input[type=checkbox]:checked");
  chk?.forEach((x) => {
    obj[x.name] = obj[x.name] ?? [];
    obj[x.name].push(x.value);

    // if(obj[x.name] == undefined){
    //     obj[x.name] = [""]
    // }
    // else{
    //     obj[x.name] = obj[x.name];
    // }
    // obj[x.name].push(x.value);
  });

  // For text
  let text = document.querySelectorAll(".text");
  text.forEach((x) => {
    obj[x.name] = x.value;
  });

  
  
  if(editId == undefined){
    // For ID
    count++;
    obj.Id = count; 
    arr.push(obj);
  }
  else{
    let index = arr.findIndex(x => x.Id == editId);
    obj.Id = editId;
    arr.splice(index,1,obj);
    editId = undefined;    
  }
  // obj = {};
  userGrid();
  document.querySelector("#userForm").reset();
};

// ###########################    EDITUSER
const editUser = (id) => {
  document.querySelector("#userForm").reset();
  let ediUser = arr.find((x) => x.Id == id);
  editId = id;

  // For Text
  let text = document.querySelectorAll(".text");
  text.forEach((x) => {
    x.value = ediUser[x.name];
    // if(x.name == ediUser[x.name]){
    //     console.log('asd');
    // }
  });

  // For Radio
  let radio = document.querySelectorAll("input[type=radio]");
  radio.forEach((x) => {
    if (x.value == ediUser[x.name]) {
      x.checked = true;
    }
  });

  // For Checkbox
  let chk = document.querySelectorAll("input[type=checkbox]");
  chk.forEach((x) => {
    x.checked = ediUser[x.name]?.includes(x.value)? true : false;

    // ediUser[x.name].forEach((y) => {
      // if (x.value == y) {
      //   x.checked = true;
      // } else {
      //   x.checked = false;
      // }


      // if(ediUser[x.name].includes(x.name)){
      //     x.checked = true;
      // }
    // });
    // if(x.value == ediUser[x.name]){

    // }
  });
};

const deleteUser = (id) => {
  let del = arr.findIndex((x) => x.Id == id); //Here we Can't Use Find Method.Still dought? just try it replace findIndex with find
  arr.splice(del, 1);
  userGrid();
};

const userGrid = () => {
  let userString = "";
  arr.map((x, i) => {
    userString += `
    <tr>
        <td>${x.Id}</td>
        <td>${x.Name}</td>
        <td>${x.Email}</td>
        <td>${x.Password}</td>
        <td>${x.Gender}</td>
        <td>${x.Hobbies}</td>
        <td>${x.Skill}</td>
        <td>
        <button type="button" class="btn btn-info " onClick="editUser(${x.Id})">Edit</button>
        <button type="button" class="btn btn-danger " onClick="deleteUser(${x.Id})">Delete</button>
        </td>
    </tr>       
        `;
  });
  document.querySelector("#tBody").innerHTML = userString;
  // console.log(userString);
};
