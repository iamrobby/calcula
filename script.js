let operator='';
let previousvalue='';
let currentvalue='';


document.addEventListener("DOMContentLoaded",function(){
  
  let clear=document.querySelector(".clear");
  let equal=document.querySelector(".equal");
  let decimal=document.querySelector(".decimal");
  let operators=document.querySelectorAll(".operator");
  let numbers=document.querySelectorAll(".number");
   let previousscreen=document.querySelector(".previous");
   let currentscreen=document.querySelector(".current");
  numbers.forEach((number) =>number.addEventListener("click",function(e){
    handlenumber(e.target.textContent)
    currentscreen.textContent=currentvalue;
    
  }))
  operators.forEach((op)=>op.addEventListener("click",function(e){
    handleoperator(e.target.textContent)
    
    previousscreen.textContent=previousvalue +" "+operator;
    currentscreen.textContent=currentvalue;
  }))
  equal.addEventListener("click",function(e){
    handleequal(e.target.textContent)
    previousscreen.textContent=previousvalue;
    currentscreen.textContent='';
  
  })
  clear.addEventListener("click",function(){
    previousvalue='';
    currentvalue='';
    operator='';
    previousscreen.textContent=currentvalue;
    currentscreen.textContent=currentvalue;
  })
  decimal.addEventListener("click",function(e){
    handledecimal(e.target.textContent)
    currentscreen.textContent=currentvalue;
  })
})
function handlenumber(num){
  if(currentvalue.length<=5){
  currentvalue+=num;
  }
}
function handleoperator(op){
  operator=op;
  previousvalue=currentvalue;
  currentvalue='';
}
function handleequal(){
  previousvalue=Number(previousvalue);
  currentvalue=Number(currentvalue);
    if(operator==='+')
    { 
       
      previousvalue+=currentvalue;
       
      
    }
    else if(operator==='-')
    {
      
      previousvalue-=currentvalue;
              
      
      
    }
    else if(operator==='*')
    {
      
      previousvalue*=currentvalue;
       previousvalue=parseFloat(previousvalue.toFixed(2));
      
    }
    else if(operator==='/')
    {
      if(currentvalue==0)
        previousvalue="Error";
      else
      {
      previousvalue/=currentvalue;
      previousvalue=parseFloat(previousvalue.toFixed(2));
       
//Math.round(number * 100) / 100

    }
    }
    else
    {
      previousvalue="NaN";
    }


  }
function handledecimal()
{
  if(currentvalue.includes('.'))
  {
    return;
  }
  currentvalue+='.';
}

  