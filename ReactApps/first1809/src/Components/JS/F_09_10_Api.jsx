import axios from "axios";

export const getApi = async() => { 
    return await axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) =>{
        res.data.data.forEach(x => {
            x.hobbies = x.hobbies.split(',')
        });
        return res.data.data
        // setarray([...res.data.data])
        // console.log(res.data.data);
    }).catch((err) =>{
        console.log(err);
    }) 
}