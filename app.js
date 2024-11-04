let user = prompt("Zəhmət olmasa reqem daxil edin(yanlızca 4 rəqəmdən ibarət olsun)")

 if (user <= 9999){
     userNum = Number(user[0])
     userNum2 = Number(user[1])
     userNum3 = Number(user[2])
     userNum4 = Number(user[3])
     numSum = userNum + userNum2 + userNum3 + userNum4
     console.log(numSum);  
 } else{
    console.log("Rəqəmlərin sayi 4-den artıqdır(yeniden cehd edin) ");
 }
