let scadenza = '12/23/2024';

function tempoRimasto(tempo){
  let t = Date.parse(tempo) - Date.parse(new Date());
  let sec = Math.floor( (t/1000) % 60 );
  let min = Math.floor( (t/1000/60) % 60 );
  let ore = Math.floor( (t/(1000*60*60)) % 24 );
  let giorni = Math.floor( t/(1000*60*60*24) );
  return {
    'totale': t,
    'giorni': giorni,
    'ore': ore,
    'minuti': min,
    'secondi': sec
  };
}

function inizializzoTimer(id, scadenza){
    let timer = document.getElementById( id );
    let giorni = timer.querySelector( '.giorni span' );
    let ore = timer.querySelector( '.ore span' );
    let minuti = timer.querySelector( '.minuti span' );
    let secondi = timer.querySelector( '.secondi span' );

    function aggiornaTimer(){
        let t = tempoRimasto(scadenza);   
      
      
        giorni.innerHTML = t.giorni;
        ore.innerHTML = ('0' + t.ore).slice(-2);
        minuti.innerHTML = ('0' + t.minuti).slice(-2);
        secondi.innerHTML = ('0' + t.secondi).slice(-2);
      
        if(t.total<=0){
            clearInterval(intervalloTempo);
        }
    }

    aggiornaTimer();

    let intervalloTempo = setInterval(aggiornaTimer,1000);
}

inizializzoTimer( 'timer', scadenza );