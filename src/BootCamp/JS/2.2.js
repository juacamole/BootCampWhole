//Bonus

let n = 10;

let characters = "*";
let space = " ";
let spaceIndex = n;

for (let i = 0; i < n; i++) {
  space = setSpace(spaceIndex)
  spaceIndex--;
  console.log(space + characters)
  characters += "**";
}
spaceIndex = n;
space = setSpace(spaceIndex)
for (let i = 0; i< n; i++){
  console.log(space + "*")
}

function setSpace (spaceIndex){
  let space = "";
  for (let i = 0; i < spaceIndex; i++){
    space += " "
  }
  return space;
}
