function myfunction() {
    let results;
    let val = parseInt(document.getElementById("frm1").value)
    if (val != 0){
        results = "success"; 
    }else{
        results = "not success"; 
    }
    document.getElementById("result").innerHTML = results;
};