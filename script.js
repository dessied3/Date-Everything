document.getElementById("stats-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let attack = parseInt(document.getElementById("attack").value);
    let defense = parseInt(document.getElementById("defense").value);

    let info ="";
    if (attack > defense){
        info = "You should focus on defesive gear!";
    }else {
        info ="Your defense is solid, boost attack!";
    }

    document.getElementById("results").innerText = info;
});