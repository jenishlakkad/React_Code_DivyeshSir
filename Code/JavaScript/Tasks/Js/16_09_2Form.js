// <!--
//     Date: 16/09/23
//     Day:- Saturday
//     Topic:- Making Form For 3nd Time For the 
//              Practice of Sunday's Exam
//  -->

let arr = JSON.parse(localStorage.getItem('arr')) ?? [];
let cout = JSON.parse(localStorage.getItem('cout')) ?? 0;
// let cout = 0;
let imageBox = document.querySelector('#imageBox');
let editId;

const saveUser = () => {
    let obj = {}

    // For Radio
    let rdb = document.querySelectorAll('input[type=radio]:checked')
    rdb?.forEach((x) =>{
        obj[x.name] = x.value
    })

    // For Checkbox
    let chk = document.querySelectorAll('input[type=checkbox]:checked')
    chk?.forEach((x) => {
        // if(x.checked = true){
            obj[x.name] = obj[x.name] ?? []
            obj[x.name].push(x.value)
            // console.log('true');
        // }
        // else{
        //     obj[x.name] = ' ' 
        //     console.log('false');

        // }
    })

    // For Text
    let text = document.querySelectorAll('.text')
    text?.forEach((x) =>{
        if(x.type == 'file'){
            obj[x.name] = imageBox.src

        }
        else{
            obj[x.name] = x.value
        }
    })

    if(editId == undefined){
        cout++
        obj.Id = cout
        arr.push(obj)
        localStorage.setItem('cont' , JSON.stringify(cout));
    }
    else{
        console.log('object');
        let index = arr.findIndex(x => x.id == editId)
        obj.Id = editId
        arr.splice(index,1,obj)
        editId = undefined;

    }
    userGrid()
    imageBox.src = ''
    imageBox.style.display = 'none'
    document.querySelector('#userForm').reset()
    localStorage.setItem('arr', JSON.stringify(arr))
    localStorage.setItem('cout', JSON.stringify(cout))
}

const editUser = (id) =>{
    let editObj = arr.find((x) =>x.Id == id)
    editId = id

    // For Text 
    let text = document.querySelectorAll('.text');
    text?.forEach((x) => {
        if(x.type == 'file'){
            imageBox.style.display = 'block';
            imageBox.src = editObj[x.name]
        }
        else{
            x.value = editObj[x.name] 
        }
    })

    // For Radio
    let rdb = document.querySelectorAll('input[type=radio]')
    rdb?.forEach((x) => {
        // if(x.value  == editObj[x.name]){
        //     x.checked = true;
        // }

        x.checked = (x.value ==editObj[x.name] ? true : false)
    })

    // For Checkbox
    let chk = document.querySelectorAll('input[type=checkbox]')
    chk?.forEach((x) => {
        x.checked = editObj[x.name].includes(x.value) ? true : false;
    })
    console.log(editObj);

    
    localStorage.setItem('arr', JSON.stringify(arr))
    localStorage.setItem('cout', JSON.stringify(cout))
}

const deleteUser = (id) => {
    let delIndex = arr.findIndex((x) => x.Id == id)
    arr.splice(delIndex,1);

    
    localStorage.setItem('arr', JSON.stringify(arr))
    localStorage.setItem('cout', JSON.stringify(cout))
    
    userGrid();
}


const userGrid = () =>{
    let userString = ''
    arr.map((x) => {
        userString += `
            <tr>
                <td>${x.Id}</td>
                <td><img src='${x.Profile}' width='40px' height='40px'></td>
                <td>${x.Email}</td>
                <td>${x.Password}</td>
                <td>${x.Name}</td>
                <td>${x.Gender}</td>
                <td>${x.Hobbies}</td>
                <td>${x.Skill}</td>
                <td>
                    <button onclick="editUser(${x.Id})" class="btn btn-success" >Edit</button>
                    <button onclick="deleteUser(${x.Id})" class="btn btn-danger" >Delete</button>
                </td>
            </tr>
        `
    })
    document.querySelector('#tBody').innerHTML = userString
}



const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});
const preview = async () =>{
    let file = document.querySelector('input[type=file]').files[0]
    imageBox.style.display = 'block'
    imageBox.src = await toBase64(file);
}


userGrid();















// let arr = []
// let count = 0

// const saveUser = () =>{
//     let obj = {}

//     // For Radio Buttton
//     let rdb = document.querySelectorAll('input[type=radio]:checked')
//     rdb?.forEach((x) =>{
//         obj[x.name] = x.value
//     })

//     // For Checkbox 
//     let chk = document.querySelectorAll('input[type=checkbox]:checked');
//         chk?.forEach((x) =>{
//             obj[x.name] = obj[x.name] ?? [];
//             obj[x.name].push(x.value);
//     })

//     // For Other
//     let text = document.querySelectorAll('.text');
//     text?.forEach((x) => {
//         obj[x.name] = [x.value];
//     })

//     count++;
//     obj.Id = count;
//     arr.push(obj)
//     userGrid()
//         console.log(arr);
//     document.querySelector('#userForm').reset()
// }

// const delteUser = (x) => {
//     let delIndex = arr.findIndex(x.id == x);
//     arr.splice(delIndex,1);
//     userGrid()
// }

// const editUser = (id) =>{ 
//     // For radio
//     let editObj = arr.find((x) =>x.Id == id);

//     console.log(arr);
//     let rdb = document.querySelectorAll('input[type=radio]');
//     rdb?.forEach((y) => {
//         // if(y.value == editObj[y.name]){
//         //     y.checked = true;
//         // }

//         // console.log(editObj[y.name]);'

//         y.checked = (y.value == editObj[y.name] ? true : false);
//     })
//     console.log(editObj);
// }
// const userGrid = () =>{
//     let userString = ''
//     arr.map((x) => {
//         userString +=`
//         <tr>
//             <td>${x.Id}</td>
//             <td></td>
//             <td>${x.Email}</td>
//             <td>${x.Password}</td>
//             <td>${x.Name}</td>
//             <td>${x.Gender}</td>
//             <td>${x.Hobbies}</td>
//             <td>${x.Skill}</td>
//             <td>
//                 <button onclick='editUser(${x.Id})' class='btn btn-success'> Edit</button>
//                 <button onclick='deleteUser(${x.Id})' class='btn btn-success'> Delete</button>
//             </td>
//         </tr>
//         `
//     })
//     document.querySelector('#tBody').innerHTML = userString;
// }