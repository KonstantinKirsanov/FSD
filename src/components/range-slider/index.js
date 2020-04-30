$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 15000,
      step: 100,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) 
      
      {
        $( "#amount" ).val(ui.values[ 0 ].toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + "₽" + " - " +  ui.values[ 1 ].toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + "₽");
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + "₽" +
      " - " + $( "#slider-range" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + "₽" );
} );