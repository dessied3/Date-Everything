function myfunction() {
    let results;

    if (document.getElementById("smarts").value !=0){
        results = "success"; 
    }else{
        results = "not success"; 
    }
    document.getElementById("result").innerHTML = results;
};