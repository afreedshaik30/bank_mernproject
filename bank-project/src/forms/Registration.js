import React , { useState }from 'react';

const Registration = () => {
    const [signupData,setSignupData]= useState({
        username: "",
    });
    console.log(signupData)
  return (
    <div>
        <form>
            <div>
            <label for="username">Username:</label>
            <input type="text" id="username" placeholder='Enter username '
            value={signupData.username}
            onChange={(e)=> setSignupData({ ...signupData,username: e.target.value})} />
            </div>

            <div>
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder='Enter password '  
            
            />
            </div>
            
        </form>
    </div>
  )
}

export default Registration