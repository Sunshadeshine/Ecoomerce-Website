import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    
    // Ensure that the 'password' argument is not empty or undefined
    if (!password) {
      throw new Error('Password is missing');
    }

    // Use bcrypt to hash the password with the specified salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
  } catch (error) {
    console.log("Error in encrypting password", error);
    // You may choose to throw the error again or handle it differently here
  }
}
export const comparePassword = async (password,hashedPassword)=>{
   return bcrypt.compare(password,hashedPassword);
}