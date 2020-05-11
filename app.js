var topic1,topic2,topic3,topic4;


function Popup(data) {
    var mywindow = window.open('', 'new div', 'height=600,width=800');
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('<link rel="stylesheet" href="w3-css.css" type="text/css" media="all">');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.focus();
    setTimeout(function(){mywindow.print();},1000);

    return true;
}

document.getElementById("resetbtn").addEventListener('click', function(){  
    location.reload();
});

document.getElementById("submitall").addEventListener("click", function(){
    topic1 = document.getElementById("topic1").value;
    document.getElementById("title1").textContent = topic1;
    topic2 = document.getElementById("topic2").value;
    document.getElementById("title2").textContent = topic2;
    topic3 = document.getElementById("topic3").value;
    document.getElementById("title3").textContent = topic3;
    topic4 = document.getElementById("topic4").value;
    document.getElementById("title4").textContent = topic4;



    document.getElementById("worksheet").style.display = "block";
    document.getElementById("inputbox").style.display = "none";
})

document.getElementById("worksheet").style.display = "none";
document.getElementById("inputbox").style.display = "block";

document.getElementById("printbtn").addEventListener("click", function(){
    Popup(document.getElementById("worksheetbox").innerHTML);
})











