import React from 'react';
import SignIn from './Sign';
import SignUp from './SignUp';
import CommonPage from './CommonPage';
import LeetcodeSolve from '../lettsolve/SolvePage';
// import LeetcodeSolve from '../KTHlargest';
export default function CommonComponent({active}){

    // const isCoomonPage = active === 'commonpage';
// const isCoomonPage= active!=="SignIn" && active!=="SignUp";
const isCoomonPage = active !== "signIn" && active !== "signUp" && active !== "leetsolve";
    return(
        <>

        {isCoomonPage  && <CommonPage />}

            {active === "signIn" && <SignIn />}
            {active === "signUp" && <SignUp />}
            {active === "leetsolve" && <LeetcodeSolve />}
      
        </>
    )
}