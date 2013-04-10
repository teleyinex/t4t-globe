var userLang = (navigator.language) ? navigator.language : navigator.userLanguage;
var messages = {
    'es': {
        'board': 'Ordenadores en las últimas 24 horas',
        'info': '<strong><a href="http://www.chromeexperiments.com/globe">WebGL Globe</a></strong> <span class="bull">&bull;</span> Creado por el equipo <span itemprop="creator">Data Arts de Google</span> y Adaptado por el <span itemprop="creator">Citizen Cyberscience Centre</span><span class="bull">&bull;</span> Datos obtenidos del proyecto <a href="http://lhcathome2.cern.ch">CERN LHC@HOME: Test4Theory</a>',
        'description': 'Esta aplicación WebGL ha sido creada a partir del código de la aplicación WebGL Globe del equipo de visualización de datos de Google. El globo terráqueo muestra los ordenadores de los voluntarios activos en las últimas 24 horas que han contribuido al proyecto <a href="http://cern.ch/lhcathome"><i class="icon-link"></i> LHC@Home: Test4Theory del CERN</a>.',
        'play': 'Iniciar/Pausar la rotación <button id="control" class="btn btn-danger"><i id="control-icon" class="icon-pause"></i></button>'
    },
    'en': {
        'board': 'Computers in the last 24 hours',
        'info': '<strong><a href="http://www.chromeexperiments.com/globe">WebGL Globe</a></strong> <span class="bull">&bull;</span> Created by the <span itemprop="creator">Google Data Arts Team</span> and Adapted by the <span itemprop="creator">Citizen Cyberscience Centre</span><span class="bull">&bull;</span> Data acquired from <a href="http://lhcathome2.cern.ch">CERN LHC@HOME: Test4Theory</a>',
        'description': 'This WebGL demo is built using the Google Chrome Globe WebGL experiment from Google Data Arts Team (you can zoom in using the wheel of your mouse!). The globe shows the volunteers in the last 24 hours contributing to the <a href="http://cern.ch/lhcathome"><i class="icon-link"></i> LHC@Home CERN Test4Theory project</a>.',
        'play': 'Play/Pause the rotation <button id="control" class="btn btn-danger"><i id="control-icon" class="icon-pause"></i></button>'
    }
}

//userLang= "default";

if (userLang in messages) {
    document.getElementById('board').innerHTML = messages[userLang].board;
    document.getElementById('info').innerHTML = messages[userLang].info;
    document.getElementById('description').innerHTML = messages[userLang].description;
    document.getElementById('play').innerHTML = messages[userLang].play;
}
else {
    document.getElementById('board').innerHTML = messages.en.board;
    document.getElementById('info').innerHTML = messages.en.info;
    document.getElementById('description').innerHTML = messages.en.description;
    document.getElementById('play').innerHTML = messages.en.play;
}
