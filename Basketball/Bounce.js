
//Called when game starts, so we can load our assets.
function OnLoad()
{
    //Enable physics with gravity of 20.
    gfx.AddPhysics( 50 ); 
    
    //Enclose screen with invisible walls.
    gfx.Enclose( -1, 'top,left,right' );
    
    //Create our sprite images.
    sky = gfx.CreateBackground( "/Sys/Img/Sky.jpg", "stretch" );
    squeak = gfx.CreateSound( "/Sys/Snd/Squeak.mp3" );
    floor = gfx.CreateRectangle( 1, 0.05, 0x338833, 0,0,1, "floor" );
    ball = gfx.CreateSprite( "Img/basketball2.png", "balls" );
    goalboard = gfx.CreateSprite( "Img/goal-board.png", "goal" );
    goalprop = gfx.CreateSprite( "Img/goal-prop.png", "goal" );
    goalring = gfx.CreateSprite( "Img/goal-ring.png", "goal" );
    goalring2 = gfx.CreateSprite( "Img/goal-ring.png", "goal" );

}

//Called when game assets have loaded.
function OnReady()
{
    //Add background.
    gfx.AddBackground( sky );
    
    //Add floor.
    gfx.AddGraphic( floor, 0, 0.95 )
  	floor.SetPhysics( 2, "fixed", 0.9, 0.8, 0.1 )
	  
	  gfx.AddSprite( goalboard, -0.08, 0.04, 0.2, 0.5 );
	  goalboard.SetPhysics( 2, "fixed", 0.1, 0.1, 0.1 );
	  goalboard.SetShape( "rect", 0.025 );
    gfx.AddSprite( goalprop, 0.00, 0.27, 0.075, 0.15 );
	  goalprop.SetPhysics( 2, "fixed", 0.1, 0.1, 0.1 );
	  goalprop.SetShape( "rect", 0.024 );
    gfx.AddSprite( goalring, 0.038, 0.318, 0.015 );
	  goalring.SetPhysics( 2, "fixed", 0.1, 0.1, 0.1 );
	  goalring.SetShape( "round", 0.025 );
    gfx.AddSprite( goalring2, 0.091, 0.318, 0.015 );
	  goalring2.SetPhysics( 2, "fixed", 0.1, 0.1, 0.1 );
	  goalring2.SetShape( "round", 0.025 );
	  
    //Add character and set physics properties.
    //(groupId, type, density, bounce, friction)
    gfx.AddSprite( ball, 0.4, 0.4, 0.053 );
    ball.SetPhysics( 1, "movable", 0.5, 0.2, 0.3 );
    ball.SetShape( "round", 1 );
    //Start game.
    gfx.Play();
}

//Called when physics objects collide.
function OnCollide( a, b )
{
    //Check if our bunnies has hit a wall/floor.
    if( a.group=="balls" && b.group!="balls" )
    {
        squeak.Play( false, 0, 0 );
    }
}

function moveleft() {
  ball.SetVelocity( -0.8, -0.8 );
}
function moveupleft() {
  ball.SetVelocity( -0.4, -0.8 );
}
function moveup() {
  ball.SetVelocity( 0, -0.8 );
}
function moveupright() {
  ball.SetVelocity( 0.4, -0.8 );
}
function moveright() {
  ball.SetVelocity( 0.8, -0.8 );
}
