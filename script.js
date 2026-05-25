function checkPassword(){

let password=
document.getElementById(
"password"
).value;

let score=0;


let length=
document.getElementById(
"length"
);

let uppercase=
document.getElementById(
"uppercase"
);

let lowercase=
document.getElementById(
"lowercase"
);

let number=
document.getElementById(
"number"
);

let special=
document.getElementById(
"special"
);

let uniqueness=
document.getElementById(
"uniqueness"
);


//Length

if(password.length>=8){

score+=2;

length.innerHTML=
"✔ Length sufficient";

}
else{

length.innerHTML=
"❌ Minimum 8 characters needed";

}


//Uppercase

if(/[A-Z]/.test(password)){

score++;

uppercase.innerHTML=
"✔ Uppercase present";

}

else{

uppercase.innerHTML=
"❌ Add uppercase letter";

}


//Lowercase

if(/[a-z]/.test(password)){

score++;

lowercase.innerHTML=
"✔ Lowercase present";

}

else{

lowercase.innerHTML=
"❌ Add lowercase letter";

}


//Numbers

if(/[0-9]/.test(password)){

score++;

number.innerHTML=
"✔ Number present";

}

else{

number.innerHTML=
"❌ Add numbers";

}


//Special Character

if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){

score+=2;

special.innerHTML=
"✔ Special character present";

}

else{

special.innerHTML=
"❌ Add special character";

}


//Common Passwords

let commonPasswords=[

"password",

"123456",

"admin",

"welcome",

"qwerty"

];


if(
commonPasswords.includes(
password.toLowerCase()
)
){

score-=3;

uniqueness.innerHTML=
"❌ Common password";

}

else{

uniqueness.innerHTML=
"✔ Unique password";

}


let strength=
document.getElementById(
"strengthText"
);

let bar=
document.getElementById(
"strengthBar"
);


//Strength Rating

if(score<=2){

strength.innerHTML=
"Strength: Weak 🔴";

bar.style.width=
"30%";

bar.style.background=
"red";

}

else if(score<=5){

strength.innerHTML=
"Strength: Medium 🟡";

bar.style.width=
"65%";

bar.style.background=
"orange";

}

else{

strength.innerHTML=
"Strength: Strong 🟢";

bar.style.width=
"100%";

bar.style.background=
"green";

}



//Suggestions

let suggestions=[];


if(password.length<8)

suggestions.push(
"Increase length"
);


if(!/[A-Z]/.test(password))

suggestions.push(
"Add uppercase"
);


if(!/[a-z]/.test(password))

suggestions.push(
"Add lowercase"
);


if(!/[0-9]/.test(password))

suggestions.push(
"Add numbers"
);


if(!/[!@#$%^&*(),.?":{}|<>]/
.test(password))

suggestions.push(
"Add symbol"
);


if(
suggestions.length==0
){

document
.getElementById(
"suggestionText"
)

.innerHTML=
"Excellent Password 👍";

}

else{

document
.getElementById(
"suggestionText"
)

.innerHTML=
suggestions.join(", ");

}

}