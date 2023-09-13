
//Called when application is started.
function OnStart()
{
    //Lock screen orientation to Landscape and
    //stop screen turning off while playing.
    app.SetOrientation( "Landscape" );
    app.PreventScreenLock( true );
    
    //Create the main layout
    lay = app.CreateLayout( "absolute" );
    btnup = app.CreateImage( "Img/button-orange-up.png", 0.08, 0.18,  "button" );
    btnup.SetOnTouch( function() { 
	    gv.Execute( "moveup();" );
	  } );
	  btnleft = app.CreateImage( "Img/button-orange-left.png", 0.08, 0.18, "button"  );
    btnleft.SetOnTouch( function() { 
	    gv.Execute( "moveleft();" );
	  } );
	 btnright = app.CreateImage( "Img/button-orange-right.png", 0.08, 0.18, "button" );
   btnright.SetOnTouch( function() { 
	    gv.Execute( "moveright();" );
	 } );
	 goalnet = app.CreateImage( "Img/goal-net.png", 0.073, 0.18, null );

   //Create game view and load our game.
   gv = app.CreateGameView( 1, 1 );
   gv.SetFile( "Bounce.js" );
   lay.AddChild( gv );
    
 btnup.SetPosition( 0.815, 0.39 );
 lay.AddChild( btnup );
 btnleft.SetPosition( 0.75, 0.4 );
 lay.AddChild( btnleft );
 btnright.SetPosition( 0.88, 0.4 );
 lay.AddChild( btnright );
 goalnet.SetPosition( 0.04, 0.3 );
 lay.AddChild( goalnet );
        
 app.AddLayout( lay );
 
}
