// <!-- 
//     Date: 12/09/23
//     Day:- Tuesday
//     Topic:- Making Form
//  -->

let userForm = document.querySelector('#userFrom');
let obj = {};
let arr = [];

const saveUser = () => {
    // For One Checkbox
    // let hoby =  [];
    // let hobbies = document.querySelectorAll('.chk:checked');
    // hobbies?.forEach((x) =>{
    //     hoby.push(x.value);
    // })
    // obj["Hobbies"] = hoby.join();
    
    // For One Checkbox
    let chk = document.querySelectorAll('.chk:checked');
    chk.forEach((x) => {
        // if(obj[x.name] == undefined){
        //     obj[x.name] = []
        // }
        // else{
        //     obj[x.name] = obj[x.name];
        // }
        // obj[x.name].push(x.value);
        obj[x.name] = obj[x.name] ?? []
        obj[x.name].push(x.value);

    })
    // console.log(arr);


    // For One Radio Btn
    // obj["Gender"] = document.querySelector('.rdb:checked').value;

    // For More then One Radio Btn 
    let rdb = document.querySelectorAll(".rdb:checked");
    rdb.forEach((x) => {
        obj[x.name] = x.value;
    })


    // For Text
    let text = document.querySelectorAll(".text");
    text.forEach((x) => {
        obj[x.name] = x.value;
    
    })
    // console.log(obj);   
    arr.push(obj);
    obj = {} ;
    console.log(arr);
    userGrid();
}

const userGrid = () => {
    let userString = '';
    arr.map((x) => {
        userString += `
        <tr>
             <td>${x.Name}</td>
             <td>${x.Email}</td>
             <td>${x.Password}</td>
             <td>${x.Gender}</td>
             <td>${x.Agree}</td>
             <td>${x.Hobbies}</td>
             <td>${x.Skill}</td>
        </tr>
        `
    })
    document.querySelector('#tBody').innerHTML = userString;
}

