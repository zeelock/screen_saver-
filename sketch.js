  var b = [];
var d;
function setup() {

  createCanvas (windowWidth,windowHeight);

for (i = 0 ; i < 20 ; i ++ ){
b[i] = new Ball(random(width),random(height*0.5));

}
   background(0);
}
var reset = function(){
  
  background(0,b.length);
  
};

function draw() {




 for(i = 0 ; i < b.length ; i++){
   
 b[i].ball;
 
 b[i].update();
 b[i].shouw();
 b[i].end();
 
 
  for( j = 0 ; j < b.length ; j++){
   if( i != j ){
     b[i].diss( b[i] , b[j]);
    
   }
  }
 }
}
var Ball = function( x , y  ){
  
  
  

     
      this.pos = createVector( x , y);
      this.v = p5.Vector.random2D();
      this.acc = createVector(0,0);
      this.mass = 1;
   
     
     this.update = function (){
  
     this.pos.add(this.v);
     this.v.add(this.acc);
     this.acc.mult(0);
 
    };
    
    this.shouw = function(){
    
    //ellipse(this.pos.x , this.pos.y , this.mass );
  
  };
     
     this.end = function(){
     
      
       
       if (this.pos.x < 0 || this.pos.x > width){
         
         this.v.x = this.v.x*-1;
         this.mass = this.mass + 1;
         stroke(random(255),random(255),random(255), this.mass*1000);
         console.log(this.mass);
       }
       
        if (this.pos.y < 0 || this.pos.y > height){
          
         this.v.y = this.v.y*-1;
         this.mass = this.mass + 1;
       
         stroke(random(255),random(255),random(255), this.mass*1000);
         console.log(this.mass);
       
        }
     };
    
     
   
   this.diss = function(thiss , other){
  

  if( i != j ){
    
    diss = b[i].pos.dist(b[j].pos);
   
  }
  
   d = floor(diss);
   
strokeWeight (this.mass*0.001);
      
   if( d+this.mass < width*0.25){
   
   line(b[i].pos.x , b[i].pos.y , b[j].pos.x , b[j].pos.y);
   }


  if(this.mass > 10 ){
    
    reset();
    this.mass = 1;
    
  }
  
 
   };
   
   
   

   
   
};
