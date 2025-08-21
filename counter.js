
//Factory Function
const counterModule=()=>{
    let counter=0
   const increment=()=>{
  //→ increases the count
  console.log(counter,"inc")
return  ++counter
    }
  

const decrement=()=>{
// → decreases the count
 console.log(counter,"dec")
return  --counter
}


const getValue=()=>{
// → returns the current value
 console.log(counter,"curr")
return counter
}

return {
    increment,
    decrement,
    getValue
}

}
const count=counterModule() //counterModule written as a factory → each call gives a new independent counter.Use when you want multiple independent instances.
count.increment()
count.increment()
count.increment()
count.decrement()
console.log(count.getValue())

//IIFE style iiFE runs once immediately and returns whatever you expose.
// const counterModule = (() => {
//   let counter = 0;
//   const increment = () => ++counter;
//   const decrement = () => --counter;
//   const getValue = () => counter;
//   return { increment, decrement, getValue };
// })();