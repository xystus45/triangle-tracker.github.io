function trackButton(){
  var A=parseFloat(document.getElementById("a").value);
  var B=parseFloat(document.getElementById("b").value);
  var C=parseFloat(document.getElementById("c").value);
  if((A+B)<=C || (B+C)<=A || (C+A)<=B){
      document.getElementById('answer').innerHTML="Not a triangle"
    }else if ((A===B) && (B===C) && (C===A)){
      document.getElementById('answer').innerHTML="Equilateral triangle"
    } else if ((A===B) || (B===C) || (C===B)) {
      document.getElementById('answer').innerHTML="Isosceles triangle"
    }else if ((A!==B) && (B!==C) && (C!==A)) {
      document.getElementById('answer').innerHTML="scalene triangle"
    }else{
      document.getElementById('answer').innerHTML="Enter the values"
    }
 };
