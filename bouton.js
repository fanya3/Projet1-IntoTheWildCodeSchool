
/*button*/

let button = false;
function slide(){
    if(!button){
        button = !button;
        document.documentElement.setAttribute("data-theme" , 'dark');
        document.getElementById("slideThree").innerHTML = "LightMode";
        return;
    }
    if(button) {
        button = !button;
        document.documentElement.setAttribute("data-theme",'light');
        document.getElementById("slideThree").innerHTML = "DarkMode";
        return
    }
}
 







