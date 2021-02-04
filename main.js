nameofthestudentarray=[] ;

function submit() {
    var name1 = document.getElementById("student-1").value ;
    var name2 = document.getElementById("student-2").value ;
    var name3 = document.getElementById("student-3").value ;
    var name4 = document.getElementById("student-4").value ;

    nameofthestudentarray.push(name1) ;
    nameofthestudentarray.push(name2) ;
    nameofthestudentarray.push(name3) ;
    nameofthestudentarray.push(name4) ;

    console.log (nameofthestudentarray) ;

    document.getElementById("displayname").innerHTML = nameofthestudentarray ;
    document.getElementById("submitbtn").style.display = "none" ;
    document.getElementById("sortbtn").style.display = "inline-block" ;
} ;

function sorting() {
    nameofthestudentarray.sort() ;
    console.log (nameofthestudentarray) ;
    document.getElementById ("displayname").innerHTML = nameofthestudentarray ;
} ;