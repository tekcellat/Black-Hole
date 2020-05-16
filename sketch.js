x = 445; // Event horizon at x = 455, y = 250
y = 250;

c = 25; // speed of light

//vx = c;
//vy = 0;

vx = 0;
vy = c;

deltaVx = 0;
deltaVy = 0;

theta = 0;

mass = 3.0;
dt = 0.1;

x_massive = 375;
y_massive = 250;

M = 1000;
G = 100; 


function draw(){
    // Update velocities
    vx += deltaVx;
  	vy += deltaVy;

    // Update location
    x += vx*dt;
    y += vy*dt;

    // velocity is unchanged if there are no forces
    deltaVx = 0;
  	deltaVy = 0;
  
  	r = sqrt((x - x_massive)*(x-x_massive) + (y - y_massive)*(y - y_massive));
    Fgrav = G*M*mass/(r*r);
  
  	theta = atan2(y - y_massive,x-x_massive);
  
  	Fx = -Fgrav*cos(theta);
    deltaVx = (Fx/mass)*dt; // = ax*dt;
  
  	Fy = -Fgrav*sin(theta);
    deltaVy = (Fy/mass)*dt; // = ay*dt;
  
    // This will clear the screen and re-draw it
    display();
  
    // Add more graphics here before the end of draw()
  	drawBlackHole(x_massive,y_massive,0,0,-Fx,-Fy);	
    drawBlob(x,y,vx,vy,Fx,Fy);
  	//print(sqrt(x*x+y*y));
  
  	// event horizon
    drawEllipse(x_massive,y_massive,2*G*M/(c*c),2*G*M/(c*c));
  
} // end draw()
