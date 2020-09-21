class TrashCan {
    constructor(x, y) {
      var options = {
          isStatic: true
      }

      this.body1 = Bodies.rectangle(x, y, 200, 20,  options);
      this.body2 = Bodies.rectangle(x - 100, y - 50, 20, 100,  options);
      this.body3 = Bodies.rectangle(x + 100, y - 50, 20, 100,  options);

      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }

    display(){
      var pos1 =this.body1.position;
      var pos2 =this.body2.position;
      var pos3 =this.body3.position;

      var rect1; 
      var rect2;
      var rect3;

      rectMode(CENTER);
      fill(255);
      stroke(255);

      rect1 = rect(pos1.x, pos1.y, 200, 20);
      rect2 = rect(pos2.x, pos2.y, 20, 100);
      rect3 = rect(pos3.x, pos3.y, 20, 100);
      
    }
  };