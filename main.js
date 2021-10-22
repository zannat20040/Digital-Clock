function myclock(){
    myDateTime= new Date();

    //time part 

    var hr=myDateTime.getHours();
    var hrDom=document.querySelector(".hr");
    var hour=["01","02","03","04","05","06","07","08","09","10","11","12","01","02","03","04","05","06","07","08","09","10","11","12"];

    (hr>12)? hrDom.innerHTML =hour[hr-1]:hrDom.innerHTML=hr;

    var min=document.querySelector(".min").innerHTML=myDateTime.getMinutes();
    (min<10)? document.querySelector(".min").innerHTML="0"+myDateTime.getMinutes(): min;

    var sec=document.querySelector(".sec").innerHTML=myDateTime.getSeconds();
    (sec<10)? document.querySelector(".sec").innerHTML="0"+myDateTime.getSeconds(): sec;

    //date time

    var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.querySelector(".day").innerHTML=day[myDateTime.getDay()];


    var month=myDateTime.getMonth()+1;
    var day=myDateTime.getDate();
    var year=myDateTime.getFullYear();
    document.querySelector(".date").innerHTML=month+" / "+ day+" / "+year;

    var dateFormate=document.querySelector(".apm");
    (hr>=12)? dateFormate.innerHTML="PM":dateFormate.innerHTML="AM";
    
}

myclock();

setInterval(function(){
    myclock();
},1000);