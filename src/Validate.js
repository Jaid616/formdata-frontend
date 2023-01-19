export const Validate = (value) => {
   let errors = {};

   let numbercheck = /^[6789][0-9]{9}$/;
    if(value.number===""){
     errors.numberError = " * Required Field";
    }
    else{

      
      if (!numbercheck.test(value.number)) {
        errors.numberError = " * Must be 10 digit and Start with 6,7,8,9";
       }
     }

   let namecheck = /[a-zA-Z]{3,20}$/;
     if(value.name === ""){
       errors.nameError =
       " * Required Field";
     }
     else{

       
       if (!namecheck.test(value.name)) {
         errors.nameError =
         " * Minimum 3 charactor and Maximum 20 charactor allowed no space allowed";
       }
   }

   let checkemail = /^[aA-zZ0-9]{4,20}@[aA-zZ]{2,20}.{2,10}$/;

   if(value.email === ""){
     errors.emailError =
       " * Required Field";
   }
   else{

     
     if (!checkemail.test(value.email)) {
       errors.emailError = " * Enter Valid Email Address";
     }
   }
   let checkpassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}/;

   if(value.password === ""){
     errors.passwordError =
     " * Required Field";
   }
   else{

     if (!checkpassword.test(value.password)) {
       errors.passwordError =
       " * Minimum 8 digit and must be uppercase lowercase number and special charactor";
     }
   }
   if(value.cpassword===""){
     errors.cpasswordError = " * Required Field";
   }
    else{

      if (value.password !== value.cpassword) {
        errors.cpasswordError = " * Password and Match";
       }
     }

   if (value.gender === "") {
     errors.genderError = " * Gender Required";
   }

   if (value.languages.length < 1) {
     errors.languagesError = " * Any one language Required";
   }
   if (value.country === "") {
     errors.countryError = " * Country Required";
   }

return errors ;
 };