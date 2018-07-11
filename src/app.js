import css from "./style.styl";
var currentItem;


window.onmousedown = e => {

    if (e.target.className === 'circled_button') {
        currentItem = e.target;
        highlight(currentItem, e);
    } else if (e.target.className === 'circlePlot') {
        currentItem = e.target.parentElement;
        highlight(currentItem, e);
    }
}

function highlight(item, e) {
    var plot = document.createElement('div');
    plot.className = 'circlePlot';
    var pressed = false;
    var circle = document.getElementById(currentItem.id);
    circle.appendChild(plot);
    if (circle.childElementCount > 1)
        circle.removeChild(circle.childNodes[1]);
    //console.log(circlee.childNodes);
    var offset = plot.offsetWidth / 2;
    circle.classList.add('down');
    pressed = true;
    plot.style.left = e.pageX - circle.offsetLeft - offset + 'px';
    plot.style.top = e.pageY - circle.offsetTop - offset + 'px';
    window.onmouseup = e => {
        circle.classList.remove('down');
        pressed = false;
    }
}
