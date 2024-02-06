
export const checkValidData=(email,password,name)=>{
    console.log('name in valid',name.current);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name.current.value)
    
      if (!isEmailValid) return "Email is not valid"
     if (!isPasswordValid) return "Password is not valid"

    return null
}