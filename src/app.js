import css from "./style.styl";
var currentItem;


window.onclick = e => {

    if (e.target.className === 'circled_button') {
        currentItem = e.target;
        console.log(currentItem.id, currentItem);
        var plot = document.createElement('div');
        plot.className = 'circlePlot';
        var pressed = false;
        var circlee = document.getElementById(currentItem.id);
        circlee.appendChild(plot);
        if (circlee.childElementCount > 1)
            circlee.removeChild(circlee.childNodes[1]);
        console.log(circlee.childNodes);
        var offset = plot.offsetWidth / 2;
        var elemleft = circlee.offsetLeft;
        var elemright = circlee.offsetLeft + circlee.offsetWidth;
        var elemtop = circlee.offsetTop;
        var elembottom = circlee.offsetTop + circlee.offsetHeight;
    }
    document.addEventListener('mousedown', function (ev) {
        if (ev.pageX > elemleft && ev.pageX < elemright &&
            ev.pageY > elemtop && ev.pageY < elembottom) {
            circlee.classList.add('down');
            pressed = true;
            plot.style.left = ev.pageX - offset + 'px';
            plot.style.top = ev.pageY - offset + 'px';
            console.log('X:'+ev.pageX+ ' Y:'+ ev.pageY + ' buttonX '+ circlee.offsetLeft);    
        }
        

    }, false);


    document.addEventListener('mouseup', function (ev) {
        circlee.classList.remove('down');
        pressed = false;
    }, false);




}


