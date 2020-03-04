import React from 'react'

const AddExpenses = ({users,deleteUser}) => {
    const userinfo = users.map(user=>{
        return (
            <div key={user.id}>
                <div>Amount:{user.Amount}</div>
                <div>Description:{user.Description}</div>
                <button onClick={()=>{deleteUser(user.id)}} className="btn btn-danger">Delete</button>
            </div>
        )
    })
    return(
        <div>
            {userinfo}
        </div>
    )

}

export default AddExpenses
