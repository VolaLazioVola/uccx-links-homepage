function updateClock()
{var currentTime=new Date();var weekday=new Array(7);weekday[0]="Sunday";weekday[1]="Monday";weekday[2]="Tuesday";weekday[3]="Wednesday";weekday[4]="Thursday";weekday[5]="Friday";weekday[6]="Saturday";var month=new Array(12);month[0]="January";month[1]="Febuary";month[2]="March";month[3]="April";month[4]="May";month[5]="June";month[6]="July";month[7]="August";month[8]="September";month[9]="October";month[10]="November";month[11]="December";var currentDay=weekday[currentTime.getDay()];var currentDoM=currentTime.getDate();var currentMonth=month[currentTime.getMonth()];var currentYear=currentTime.getFullYear();var currentHours=currentTime.getHours();var currentMinutes=currentTime.getMinutes();var currentSeconds=currentTime.getSeconds();currentMinutes=(currentMinutes<10?"0":"")+currentMinutes;currentSeconds=(currentSeconds<10?"0":"")+currentSeconds;var timeOfDay=(currentHours<12)?"AM":"PM";currentHours=(currentHours>12)?currentHours-12:currentHours;currentHours=(currentHours==0)?12:currentHours;var currentTimeString=currentDay+", "+currentDoM+" "+currentMonth+" "+currentYear+"  "+currentHours+":"+currentMinutes+":"+currentSeconds+" "+timeOfDay;document.getElementById("clock").firstChild.nodeValue=currentTimeString;}