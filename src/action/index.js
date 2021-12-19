export const AddUser =(data)=>{
    return{
        type:"Add_User",
        payload:{
            data:data
        }
    }
}
export const UpdateUser =()=>{
    return{
        type:"Update_User"
    }
}
export const DeleteUser =()=>{
    return{
        type:"Delete_User"
    }
}