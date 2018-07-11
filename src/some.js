
/*function circlePlot() {
   
    var plot = document.createElement('div'),
        pressed = false;

    plot.id = 'lookatmeiamhere';
    //document.body.appendChild(plot);
    var circlee = document.getElementsByClassName('circled_button');
    circlee[0].appendChild(plot);
    var offset = plot.offsetWidth / 2;
    var elemleft = circlee[0].offsetLeft;
    var elemright = circlee[0].offsetLeft + circlee[0].offsetWidth;
    var elemtop = circlee[0].offsetTop;
    var elembottom = circlee[0].offsetTop + circlee[0].offsetHeight;

    document.addEventListener('mousedown', function (ev) {
        //document.body.classList.add('down');
        if (ev.pageX > elemleft && ev.pageX < elemright &&
            ev.pageY > elemtop && ev.pageY < elembottom) {
            circlee[0].classList.add('down');
            pressed = true;
            plot.style.left = ev.pageX - offset + 'px';
            plot.style.top = ev.pageY - offset + 'px';

        }
    }, false);


    document.addEventListener('mouseup', function (ev) {
        //document.body.classList.remove('down');
        circlee[0].classList.remove('down');
        pressed = false;
    }, false);
}
*/
var some = function(){
     console.log('clicked');
}
