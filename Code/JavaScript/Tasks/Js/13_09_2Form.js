// <!--
//     Date: 13/09/23
//     Day:- Thursday
//     Topic:- Making Form For 2nd Time
//  -->

let arr = [];
let count = 0;
let editId;
let imageBox = document.querySelector("#imageBox");
const saveUser = async () => {
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
    if(x.type == 'file'){
      obj[x.name] = imageBox.src;
    }
    else{
      obj[x.name] = x.value;
    }
  });

  // For Image
  // let file = document.querySelector('#img').files[0];
  // obj.Profile = file ? await toBase64(file) : '';

  
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
  imageBox.style.display = 'none';
  document.querySelector("#userForm").reset();
};



// ###########################    EDITUSER
const editUser = (id) => {
  document.querySelector("#userForm").reset();
  let ediUser = arr.find((x) => x.Id == id);
  editId = id;

  // For File
  let inputs = document.querySelectorAll('.text');
inputs.forEach(x => {
  if(x.type == 'file'){
    imageBox.style.display = 'block';
    imageBox.src = ediUser[x.name];
    console.log(imageBox.src);
  }
  else{
    x.value = ediUser[x.name];
    console.log('object');
  }
})

  // For Text
  // let text = document.querySelectorAll(".text");
  // console.log(text);
  // text.forEach((x) => {
  //   x.value = ediUser[x.name];
  //   // if(x.name == ediUser[x.name]){
  //   //     console.log('asd');
  //   // }
  // });
  

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
        <td><img src="${x.Profile}" width='40px' height='40px'/></td>
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
};


const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

const previewImage = async () => {
  let file = document.querySelector('input[name=Profile]').files[0]
  imageBox.style.display = 'block';
  imageBox.src = await toBase64(file)
  // console.log(imageBox.src);
}