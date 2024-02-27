//Main Task

let age = 15;

for (let i = 0; i <= age; i++){
  console.log(i)
}
if (age >= 18){
  console.log("yes");
} else {
  console.log("no")
}

let score = 0;

if (score !== 0){
  console.log("Score is available");
}

if (score){
  console.log("Score is evaluated as truthy.")
} else {
  console.log("Score is not evaluated as truthy.")
}

let username = null;

if (username != null){
  console.log("Username is available");
}

if(!username){
  console.log("Username is evaluated as falsy.")
} else {
  console.log("Username is not evaluated as falsy.")
}

let isAdmin = false;

if (isAdmin){
  console.log("isAdmin is evaluated as truthy.");
} else if (!isAdmin){
  console.log("isAdmin is false.")
}


