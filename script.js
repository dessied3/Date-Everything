function myfunction() {
    let results;
    let val = parseInt(document.getElementById("smarts").value)
    if (val != 0){
        results = "success"; 
    }else{
        results = "not success"; 
    }
    document.getElementById("result").innerHTML = results;
};