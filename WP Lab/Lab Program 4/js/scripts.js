move = () => {
    var container = document.getElementById("container");
    var elem = document.getElementById("img");
    var id = setInterval(frame, 5);
    var maxDistToTravel = container.offsetWidth - elem.offsetWidth;
    var pos = 0;
    var end = maxDistToTravel;
    var direction = 1;
    var loopCounter = 0;
    
    function frame() { 
     if (pos === end) {
       if (!pos)
         loopCounter++;
       direction *= -1;
       end = Math.abs(maxDistToTravel - end); 
     }
     pos += direction;
     elem.style.top = pos + "px";
     elem.style.left = pos + "px";
    }
  }