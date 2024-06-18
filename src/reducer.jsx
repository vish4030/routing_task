
export const is = {
    users:[{name: "Shyam Kumar", age:25,email:"test1@gmail.com"},
            {name: "Chandan Kumar", age:28,email:"test2@gmail.com"},
             {name: "Mohan Kumar", age:21,email:"test3@gmail.com"}]
}

export const reducer = (state,action)=>{
    switch(action.type){
        case "add" : const preUser = [...state.users];
                    preUser.push(action.payload);
                    return {users:preUser}
        case "del" : const unFilterUsers = [...state.users];
                     unFilterUsers.splice(action.payload,1);
                     return {users:unFilterUsers}
        default : return state;                       
    }
}