window.onload = init;

var inputElements;

function init()
{
    var buttons = document.getElementsByTagName('button');
    inputElements = document.getElementsByName('input');
    
    for( var i = 0; i < buttons.length; i++ )
        buttons[i].onclick = onClick;
}

function onClick()
{
    for( var i in inputElements ){
        if( inputElements[i].textContent == "" )
            animate();
    }
}
    
function animate(){
    alert("anim");
}