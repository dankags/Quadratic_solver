var results=document.getElementById('results');
var results1=document.getElementById('results1');
var  x1_value=document.getElementById('x1');
var x2_value=document.getElementById('x2');
var theme=document.getElementById("theme");
//change theme dark to ligtmode and viceversa
theme.addEventListener("change",(e)=>{
if (e.target.checked) {
  document.body.setAttribute("data-theme","dark")
}else{
  document.body.setAttribute("data-theme","light")
}
});
//calculate quadratic equation function
function quadratic(ax2,b,c){
    results1.style.display="block";
    var ac_part = 4*ax2*c;
    var diffrence = (Math.pow(b,2))-ac_part;
    var root_part =Math.sqrt(diffrence);
    if(root_part>=0){
      if (b<0) {
        let x1=((-(b)+root_part)/(2*ax2)).toFixed(4);
        let x2=((-(b)-root_part)/(2*ax2)).toFixed(4);
        return {x1,x2};
      }else{
        let x1=((-b+root_part)/(2*ax2)).toFixed(4);
        let x2=((-b-root_part)/(2*ax2)).toFixed(4);
        return {x1,x2};
      }
    }else{
       
        results.innerHTML="<div style='display:block' ><span class='results4' ><span style='color:#red' class='error'>ERROR!</span> no squareroot of  ax2 negative number</span>"+diffrence+"</div>";
    }
}
//qstn_display function helps in changes after every second when the user enters an input
function qstn_display(){
  let ax2=Number(document.getElementById("ax2").value);
    let bx=Number(document.getElementById("bx").value);
    let c=Number(document.getElementById("c").value);
    let question=document.getElementById("question");
    if(ax2>=0&&bx>=0&&c>=0){
      question.innerHTML=ax2+"x² + "+bx+"x + "+c+" = 0";
         }else if(ax2>=0&&bx<0&&c>=0){
            question.innerHTML=ax2+"x² - "+(-(bx))+"x + "+c+" = 0";
          
          }else if(ax2<0&&bx>=0&&c>=0){
              question.innerHTML=ax2+"x² + "+bx+"x + "+c+" = 0";
          }else if(ax2>=0&&bx>=0&&c<0){
              question.innerHTML=ax2+"x² + "+bx+"x - "+(-(c))+" = 0";
          }else if(ax2>=0&&bx<0&&c<0){
              question.innerHTML=ax2+"x² - "+(-(bx))+"x - "+(-(c))+" = 0";
          }else if(ax2<0&&bx<0&&c<0){
             question.innerHTML=ax2+"x² - "+(-(bx))+"x - "+(-(c))+" = 0"; 
          }else if(ax2<0&&bx<0&&c>=0){
              question.innerHTML=ax2+"x² - "+(-(bx))+"x + "+c+" = 0";
          }else if(ax2<0&&bx>=0&&c<0){
              question.innerHTML=ax2+"x² + "+bx+"x - "+(-(c))+" = 0";
          }
     
}
//default when page load
function show(){
  let ax2=Number(document.getElementById("ax2").value);
    let bx=Number(document.getElementById("bx").value);
    let c=Number(document.getElementById("c").value);
   let xs_values= quadratic(ax2,bx,c);
    let x1=xs_values.x1;
    let x2=xs_values.x2;
    x1_value.innerHTML=x1;
    x2_value.innerHTML=x2;
    results.innerHTML=" <div class=x1_results><label for='' class=value>The value of x1 : </label><span id=x1>"+x1+"</span></div><div><label for='' class=value >The value of x2 : </label> <span id=x2 >"+x2+"</span></div>";

};

    show();
    qstn_display();
let calculate =()=>{
    show();
}
var calc=document.getElementById("calculate");
calc.addEventListener('click',calculate);
//refresh when entering a number.It connects with qstn_display() function
 setInterval(qstn_display,1000)