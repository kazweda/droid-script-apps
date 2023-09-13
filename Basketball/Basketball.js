
//Called when application is started.
function OnStart()
{
    //Lock screen orientation to Landscape and
    //stop screen turning off while playing.
    app.SetOrientation( "Landscape" );
    app.PreventScreenLock( true );
    
    //Create the main layout
    lay = app.CreateLayout( "absolute" );
    
   btnleft = app.CreateImage( "Img/button-orange-up.png", 0.08, 0.18, "button"  );
    btnleft.SetOnTouch( function() { 
	    gv.Execute( "moveleft();" );
	 } );
	 btnleft.Rotate( -60 );
	 btnupleft = app.CreateImage( "Img/button-orange-up.png", 0.08, 0.18, "button"  );
    btnupleft.SetOnTouch( function() { 
	    gv.Execute( "moveupleft();" );
	 } );
	 btnupleft.Rotate( -30 );
   btnup = app.CreateImage( "Img/button-orange-up.png", 0.08, 0.18,  "button" );
    btnup.SetOnTouch( function() { 
	    gv.Execute( "moveup();" );
	  } );
	  btnupright = app.CreateImage( "Img/button-orange-up.png", 0.08, 0.18,  "button" );
    btnupright.SetOnTouch( function() { 
	    gv.Execute( "moveupright();" );
	  } );
	 btnupright.Rotate( 30 );
	 btnright = app.CreateImage( "Img/button-orange-up.png", 0.08, 0.18, "button" );
   btnright.SetOnTouch( function() { 
	    gv.Execute( "moveright();" );
	 } );
	 btnright.Rotate( 60 );
	 goalnet = app.CreateImage( "Img/goal-net.png", 0.073, 0.18, null );

   //Create game view and load our game.
   gv = app.CreateGameView( 1, 1 );
   gv.SetFile( "Bounce.js" );
   lay.AddChild( gv );
  
 btnleft.SetPosition( 0.67, 0.6 );
 lay.AddChild( btnleft );
 btnupleft.SetPosition( 0.71, 0.5 );
 lay.AddChild( btnupleft );
 btnup.SetPosition( 0.77, 0.46 );
 lay.AddChild( btnup );
 btnupright.SetPosition( 0.83, 0.5 );
 lay.AddChild( btnupright );
 btnright.SetPosition( 0.87, 0.6 );
 lay.AddChild( btnright );
 
 goalnet.SetPosition( 0.04, 0.3 );
 lay.AddChild( goalnet );
        
 app.AddLayout( lay );
}
