(function(){
    var comma_r = d3.format(",");

    if(System.support.webgl === false){

        var message = document.createElement( 'div' );
        message.style.cssText = 'font-family:monospace;font-size:13px;text-align:center;color:#fff;background:#333;padding:1em;width:540px;margin:30em auto 0';
        message.innerHTML = 'Either your graphics card or your browser does not support WebGL.<br /><a href="http://www.khronos.org/webgl/wiki_1_15/index.php/Getting_a_WebGL_Implementation">View a list</a> of WebGL compatible browsers.';
        document.body.appendChild( message );
        document.body.style.background = '#000000';

    } else {
        var container = document.getElementById('container');
        var globe = new DAT.Globe(container);

        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function(e) {
            var data = JSON.parse(e.target.responseText);
            window.data = data.nodes;

            var d = [];
            document.getElementById("n_volunteers").innerHTML = comma_r(data.nodes.length);
            for (var i=0;i<data.nodes.length;i++) {
                var node = data.nodes[i];
                if ((node.lat.toFixed(2) != 0) && (node.lon.toFixed(2) != 0))
                    {
                        d.push(node.lat.toFixed(2), node.lon.toFixed(2), 0.2);
                    }
            }
            d = [['Test4Theory', d]];
            data = d;
            for (var i=0;i<data.length;i++) {
                globe.addData(data[i][1], {format: 'magnitude', name: data[i][0], animated: false});
            }
            globe.createPoints();
            new TWEEN.Tween(globe).to({time: 1},500).easing(TWEEN.Easing.Cubic.Out).start();
            globe.animate();
        }, false);

        xhr.open('GET', 'http://lhcathome2.cern.ch/project/data/users/json?24', true);
        xhr.send(null);

        var pollId = setInterval(function () {
            xhr.open('GET', 'http://lhcathome2.cern.ch/project/data/users/json?24', true);
            xhr.send(null);
        }, 3600000);

        var animate = function(){
            requestAnimationFrame(animate);
            TWEEN.update();
        }

        animate();
    }

    var btn = document.getElementById('control');    
    btn.onclick = function(){
        var icon = document.getElementById('control-icon');
        if (icon.className.match(/(?:^|\s)icon-pause(?!\S)/)) {
            icon.className = 'icon-play';
            window.clearInterval(globe.spinning_id);
        }
        else {
            icon.className = 'icon-pause';
            globe.spinning_id = window.setInterval(globe.spinning, 100);
        }
    }
})();
