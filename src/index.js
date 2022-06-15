
//11111111111111111 Use of the arrow function 

{/*// const multiply=(a,b)=>a*b;
function multiply(a,b){
  console.log(a*b);
}
multiply(2,3)*/}
// 222222222222222222222222Use of the switchCase
{/*function getPlanetId(id){
  var name;
  switch(id){
    case 1:
     var name="mercury";
     console.log(name)
      break;
    case 2:
      var name="venus";
      console.log(name)
      break;
    case 3:
      var name="earth";
      console.log(name)


      break;
    case 4:
      var name="mars";
      console.log(name)

      break;
    case 5:
      var name="jupiter";
      console.log(name)

      break;
  }}
getPlanetId(3)*/}



//3333333333333333333333reverseing the string


{/*const reverses=(s)=>
{
 var arr=s.split("")
 var s=arr.reverse()
 var ss=s.join("")

console.log(ss) 


}
reverses("World")*/}

// 4444444444444444444444 

 {/*function oddOrEven(s){

 var i = s.length

  if(s.length%2===0){
    console.log("It has even number of character")
  }else{
      console.log("It has odd number of chracater")}
}


oddOrEven("World")*/}



//5555555 return no of vowels


{/*function numberOfVowels(s){
    var novowels=0
    for(let index=0;index<s.length;index++){
        if(s[index]==='a'|| s[index]==='e'|| s[index]==='i' || s[index]==='o'||s[index]==='u'){
           novowels=novowels+1;
        }
        else{novowels=novowels+0}
    console.log(novowels)

    }
  }
numberOfVowels("hey")
*/}

///6666 'Divisible by both the numbers'
{/*function check(n,x,y){
    if( n%x===0 && n%y===0){

      console.log("It is dicisible by both the numbers.")}
    else{
      console.log("It is not divisible by both the numbers.")
    }
    }
  check(6,3,2)*/}

//7 find the leastinteger in the array
{/*  function findTheInteger(array){
    var smallest      
    smallest=array[0]
    ;
    for(let i=0;i<array.length;i++){
      const arrayNumber=array[i]
      if(arrayNumber<smallest){
        smallest=arrayNumber;
      }
      console.log(smallest)

    }}
findTheInteger([111,32,43,2,43,222,1])



  */}

//8 find the sum of nstural numbers

 {/*} function sum(n){
    var add=0;
    for(let i = 1;i<=n;i++){

      add+=i
    }

console.log(add)
  }
sum(5)*/}

// 9 average of array
{/*function averageOfArray(arr){
let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  console.log(sum/arr.length)
}

averageOfArray([1,6])*/}

//10 paperScissorRock

{/*const paperScissorRock=(Player1,Player2)=>{

  if(Player1==="Rock"&& Player2==="Scissor"){
    console.log(" Player 1 wins ")}
  if(Player1==="Rock"&& Player2==="Rock"){
    console.log("Neither wins ")}
  if(Player1==="Rock"&& Player2==="Paper"){
      console.log(" Player 2 wins ")}
  if(Player1==="Scissor"&& Player2==="Rock"){
      console.log("Player 2 win ")}
  if(Player1==="Scissor"&& Player2==="Paper"){
     console.log("Player 1 win  ")}
  if(Player1==="Scissor"&& Player2==="Scissor"){
      console.log("Neither wins ")}
  if(Player1==="Paper"&& Player2==="Rock"){
      console.log("Palyer 1 wins ")}
  if(Player1==="Paper"&& Player2==="Paper"){
      console.log("Neither wins ")}
  if(Player1==="Paper"&& Player2==="Scissor"){
      console.log("Player 2 wins ")}

  }
paperScissorRock("Rock","Paper")
*/}


//11Removing the character from the string

//let strr="Sudip"
//console.log(strr.substr(0,3))

//12 Sum of  positive numbers in Array

{/*const positiveSumm=(array)=>{
  var sum=0;  
  
  for (let i= 0;i<array.length;i++){

      if (array[i]>0){
        sum+=array[i]
      }
    }
console.log(sum)

}

positiveSumm([1,-2,4])*/}

//12 Use of the switch
{/*function basicOp(operation,value1,value2)
{

  switch(operation){

    case("+"):
    console.log(value1+value2)

    break;
    case("-"):
    console.log(value1-value2)

    break;
    case("*"):
    console.log(value1*value2)

    break;
    case("/"):
    console.log(value1/value2)
      break;
  }

}

basicOp("+",1,2) */}

 //13 Repeat n times
{/*function repeatt(s,n){
  
  var str="";
  for (var i=0;i<n;i++){


    str=str+s  
  
  }
console.log(str)

}

repeatt("Hello",5)

*/}
//14 Covert string toArray 
{/*function convertToArray(s){

  console.log(s.split(" "))

}
convertToArray("Ram is  Nice boy.") */}

//15 Remove the spaces 

{/*function noSpaces(x){

    let a=x.split(" ")
     let b=a.join("")

console.log(b)
}
noSpaces("I am fine")

*/}

//16 double the value

{/*function double(arr){

const ar= arr.map(
   (arrItem)=>{return arrItem*2}

   )
 console.log(ar)
 }
 double([1,23,3])*/}

