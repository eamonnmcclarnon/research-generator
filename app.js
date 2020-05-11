var name,monthSalary,savePercent,saveMonths,resultShown,totalSavings;


document.getElementById("save").addEventListener("click", function(){
    var saveText = document.getElementById("save").value;
    console.log(saveText);
    document.getElementById("savelabel").textContent = saveText + "%";

});

document.getElementById("months").addEventListener("click", function(){
    var monthsText = document.getElementById("months").value;
    console.log(monthsText);
    document.getElementById("monthslabel").textContent = monthsText + " months";

});

document.getElementById("submitall").addEventListener('click', function(){
    name = document.getElementById("name").value;
    monthSalary = document.getElementById("salary").value;
    savePercent = document.getElementById("save").value;
    saveMonths = document.getElementById("months").value

    console.log(name);
    console.log(monthSalary);
    console.log(savePercent);
    console.log(saveMonths);

    totalSavings = Math.round((monthSalary * (savePercent/100)) * saveMonths);
    fotmattedSavings = totalSavings.toLocaleString('ko-KR');
    document.getElementById("totalsavings").textContent = fotmattedSavings + " won";
    document.getElementById("resultname").textContent = "Congratulations " + name + "!";

    document.getElementById("resultset").style.display = "block";
    document.getElementById("dataset").style.display = "none";


    
});

document.getElementById("resetbtn").addEventListener('click', function(){  
    location.reload();
});

document.getElementById("resultset").style.display = "none";
document.getElementById("dataset").style.display = "block";











