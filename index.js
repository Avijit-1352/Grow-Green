const name = document.getElementById('name');
const email = document.getElementById("email");
const phone = document.getElementById('phone');
// console.log(name,email,phone);
name.addEventListener('blur',()=>{
    console.log("name is blured");
    let regex =/^[a-zA-Z]([0-9a-zA-Z]){2,25}$/;
    let str=name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('it mathced');
        name.classList.remove('is-invalid');
    }
    else{
        console.log('no match');
        name.classList.add('is-invalid');
    }
})
email.addEventListener('blur',()=>{
    console.log("email is blured");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str =email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        // validEmail = true;
    }
    else{
        console.log('your email is not vaild');
        email.classList.add('is-invalid');
        // validEmail=false;
    }
})
phone.addEventListener('blur',()=>{
    console.log("phone is blured");
    let regex = /([0-9]){10,10}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
    }
    else{
        phone.classList.add('is-invalid');
        
    }
})
