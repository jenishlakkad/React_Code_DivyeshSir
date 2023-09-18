let arr = []
let count = 0
let editId ;

const saveUser = async () => {

    let obj = {}
    // For Radio
    let rdb = document.querySelectorAll('input[type= radio]:checked');
    rdb.forEach((x) =>{
        obj[x.name] = x.value
    })

    // For Checkbox
    let chk = document.querySelectorAll('input[type=checkbox]:checked');
    chk.forEach((x) => {
    //     obj[x.name] = push(x.value)
    // console.log(x.name)
    obj[x.name] = obj[x.name] ?? []
    obj[x.name].push(x.value)
    })
    

    //For Text
    let text = document.querySelectorAll('.text');
    text.forEach((x) =>{
        if(x.type == 'file'){
            obj[x.name] = img.src;
            console.log(img.src)
        }
        else{
            obj[x.name] = x.value
        }
    })

    if(editId == undefined){
        count++
        obj.Id = count
        arr.push(obj)
    }

    else{
        let editIndex = arr.findIndex((x) => x.id == editId)
        obj.Id = editId
        arr.splice(editIndex,1,obj)
        editId = undefined
    }
    console.log(arr)
    userGrid()
    img.src = ''
    document.querySelector('#userForm').reset()

}

// Delete Function
const deleteUser = (id) =>{
    let delIndex = arr.findIndex((x) => x.id == id)
    arr.splice(delIndex,1)
    userGrid()
}


//Edit User
const editUser = (id) =>{
    document.querySelector('#userForm').reset()

    editId = id

    let editObj = arr.find((x) => x.Id == id)

    //For Checkbox 
    let chk = document.querySelectorAll('input[type=checkbox]');
    chk?.forEach((x) =>{
        // x.checked = (editObj[x.name] == x.value ? true : false)
        if(editObj[x.name] == x.value){
            x.checked = true
        }
        // console.log()
    })


    //For radio
    let rdb = document.querySelectorAll('input[type=radio]');
    rdb?.forEach((x) =>{
        x.checked = (editObj[x.name] == x.value ? true : false)
        console.log()
    })

    //For Text
    let text = document.querySelectorAll('.text');
    console.log(text)
    text?.forEach((x) =>{
        if(x.type == 'file'){
            img.src = editObj[x.name]
        }
        else{
        x.value = editObj[x.name]
        }
    })

}

const userGrid = () =>{
    let userString = ''
    arr.map((x) => {
        userString += `
        <tr>
            <td>${x.Id}</td>
            <td><img src='${x.Profile}' height="40px" id="image"'</td>
            <td>${x.Name}</td>
            <td>${x.Email}</td>
            <td>${x.Password}</td>
            <td>${x.Hobbies}</td>
            <td>${x.Skills}</td>
            <td>${x.Gender}</td>
            <td>${x.Agree}</td>
            <td>
                <button class='btn btn-success' onclick=editUser(${x.Id})>Edit</button> 
                <button class='btn btn-danger' onclick=deleteUser(${x.Id})>Delete</button> 
            </td>
        </tr>
        `
    })

    document.querySelector('#tBody').innerHTML = userString;
}

let img = document.querySelector('#image');
// console.log(img)

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});


const preview = async () =>{
    let file = document.querySelector('input[type=file]').files[0]
    // img.display.block;
    img.src = await toBase64(file)
}