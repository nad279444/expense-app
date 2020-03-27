const initialState = {
    users:[
        {Amount:"40",Description:"A black Shoe",id:1},
        {Amount:"150",Description:"A Laptop",id:2},
        {Amount:"40",Description:"A Red Dress",id:3}
      
      ]
}




const userReducer = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
                Amount:action.payload.Amount,
                Description:action.payload.Description
            };

            return {...state,user:[...state.users,newUser]}
    
        default:
            return state;
    }

}

export default userReducer