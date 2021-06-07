const form = document.getElementById('form');
const usernameErr = document.querySelector('.username.error');
const emailErr = document.querySelector('.email.error');
const passwordErr = document.querySelector('.password.error');
const confirmPasswordErr = document.querySelector('.confirm_password.error');
const {log} = console;

// ----------------- USERNAME VALIDATION ------------

const validateUsername = (value) => {
    value = value.trim();

    if(!value){
            return 'Username cannot be empty';
        }

        if(value.length < 6){
            return 'Username should be atleast 6 characters long';
        }   
        
        if(!isNaN(+value)){
            return 'Username cannot be a number';
        }   
        
        if(/(\s)/.test(value)){
            return 'Username should not contain whitespaces';
        }   

        if(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)){
            return 'Username should not contain any special characters'
        }
    
    return false;
}

const validateUsernameAggresive = (e) => {
    let error = validateUsername(e.target.value);
    usernameErr.textContent = error ? error : '';
}

const validateUsernameLazy = (e) =>{
    let error = validateUsername(e.target.value);

    if(error){
        usernameErr.textContent = error;
        form.username.addEventListener('input', validateUsernameAggresive);
    }else{
        usernameErr.textContent = '';
    }
}

form.username.addEventListener('blur', validateUsernameLazy);

// ----------------- EMAIL VALIDATION ------------

const validateEmail = (value) => {
    value = value.trim();

    if(!value){
        return 'Email cannot be empty';
    }

    if(!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)){
        return 'Enter a valid email'; // Regex from ihateregex https://ihateregex.io/expr/email/
    }

    return false;
}

const validateEmailAggresive = (e) => {
    let error = validateEmail(e.target.value);
    emailErr.textContent = error ? error : '';
}

const validateEmailLazy = (e) => {
    let error = validateEmail(e.target.value);

    if(error){
        emailErr.textContent = error;
        form.email.addEventListener('input', validateEmailAggresive);
    }else{
        usernameErr.textContent = '';
    }
}

form.email.addEventListener('blur', validateEmailLazy);

// ----------------------- PASSWORD VALIDATION ---------------------


const validatePassword = (value) => {
    value = value.trim();
    
    if(!value){
        return 'Password cannot be blank';
    }  
    
    if(value.length < 8){
        return 'Password should at least have 8 characters';
    }  

    return false;
}

const validatePasswordAggresive = (e) => {
    let error = validatePassword(e.target.value);
    passwordErr.textContent = error ? error : '';
}

const validatePasswordLazy = (e) => {
    let error = validatePassword(e.target.value);

    if(error){
        passwordErr.textContent = error;
        form.password.addEventListener('input', validatePasswordAggresive);
    }else{
        passwordErr.textContent = '';
    }
}

form.password.addEventListener('blur', validatePasswordLazy);

// ------------------------ CONFIRM PASSWORD VALIDATION ------------


const validateConfirmPassword = (value) => {
    value = value.trim();

    if(!value){
        return 'confirm password cannot be blank';
    }  
    
    if(value !== form.password.value.trim()){
        return 'Does not match Password field';
    } 

    return false;
}

const validateConfirmPasswordAggresive = (e) => {
    let error = validateConfirmPassword(e.target.value);
    confirmPasswordErr.textContent = error ? error : '';
}

const validateConfirmPasswordLazy = (e) => {
    let error = validateConfirmPassword(e.target.value);

    if(error){
        confirmPasswordErr.textContent = error;
        form.confirm_password.addEventListener('input', validateConfirmPasswordAggresive);
    }else{
        confirmPasswordErr.textContent = '';
    }
}

form.confirm_password.addEventListener('blur', validateConfirmPasswordLazy);

// -------------------------  HANDLE SUBMISSION --------------------

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirm_password.value.trim();
    const email = form.email.value.trim();

    usernameErr.textContent = emailErr.textContent = 
    passwordErr.textContent = confirmPasswordErr.textContent = '';

    if(!validateUsername(username) && !validateEmail(email) && !validatePassword(password) && !validateConfirmPassword(confirmPassword)){
        log('Form Submitted');
        log({"body" : {username, email, password, confirmPassword}})
        // try {
        //   const res = await fetch('/signup', {
        //      method: 'POST',
        //      body: JSON.stringify( {username, password, confirmPassword, email} ),
        //      headers:{'Content-Type': 'application/json'}
        //  });
        //    const data = await res.json();
        // } catch (error) {
        //     log(error);
        // }
        
    }else{
        log('error');
        usernameErr.textContent = validateUsername(username) || '';
        passwordErr.textContent = validatePassword(password) || '';
        confirmPasswordErr.textContent = validateConfirmPassword(confirmPassword) || '';
        emailErr.textContent = validateEmail(email) || '';
    }

})
