// create funMouse function 
function funMouse() {
  
    // get canvas
    const canvas = document.querySelector("#canvas");
    const canvasContext = canvas.getContext("2d");
  
    // set canvas size
    let canvasWidth = (canvas.width = window.innerWidth);
    let canvasHeight = (canvas.height = 600);

    // get mouse position
    let mouseX = canvasWidth / 2;
    let mouseY = canvasHeight / 2;

    // create circles
    let circle = {
      radius: 12,
      lastX: mouseX,
      lastY: mouseY
    };
  
    let miniCircle = {
      radius: 3,
      lastX: mouseX,
      lastY: mouseY
    };
  

  
    
    
    
    // resize canvas function
    var resizeCanvas = function resizeCanvas() {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height;
    };
  
      // get all data-hover elements
    // obvi this is better one a web page with more than one anchor tag
    const elements = [...document.querySelectorAll("img")];
    
    // create var holding mouseRender function
    var mouseRender = function mouseRender() {
      
        const imageBg = new Image();
        imageBg.src = "./assets/images/bg1.jpg";
        // clear canvas so no colours or styles overlap
        canvasContext.drawImage(imageBg, 0, 0, canvasWidth, imageBg.height);
  
      
      // get circles x-coordinate and y-coordinate based on mouse coordinates
      // the small circle has a slight delay due to the last parms passed
      circle.lastX = lerp(circle.lastX, mouseX, 0.5);
      circle.lastY = lerp(circle.lastY, mouseY, 0.5);
      
      miniCircle.lastX = lerp(miniCircle.lastX, mouseX, 0.1);
      miniCircle.lastY = lerp(miniCircle.lastY, mouseY, 0.1);
  
      
      // create first circle
      canvasContext.beginPath();
      canvasContext.arc(
        circle.lastX,
        circle.lastY,
        circle.radius,
        0,
        Math.PI * 2,
        false
      );
      canvasContext.lineWidth = 3;
      canvasContext.strokeStyle = "black";
      canvasContext.stroke();
      canvasContext.closePath();
  
      
      // create small/second circle
      canvasContext.beginPath();
      canvasContext.arc(
        miniCircle.lastX,
        miniCircle.lastY,
        miniCircle.radius,
        0,
        Math.PI * 2,
        false
      );
      canvasContext.fillStyle = "black";
      canvasContext.fill();
      canvasContext.closePath();
  
      
      // render/draw mouse by calling requestAnimationFrame() and passing itself through
      requestAnimationFrame(mouseRender);
    };
  
    
    
    
    // mouseInit function
    var mouseInit = function mouseInit() {
      
      
      // render/draw mouse by calling requestAnimationFrame() and passing mouseRender
      requestAnimationFrame(mouseRender);
  
      
      // on mouse move update coordinates
      window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
  
      
      // update canvas size on window resize
      window.addEventListener("resize", resizeCanvas, false);
  
      
      // style mouse on hover function
      function on() {
        const imageBg = new Image();
        imageBg.src = "./assets/images/bg1.jpg";
        imageBg.classList.add('image-bg');
        // clear canvas so no colours or styles overlap
        canvasContext.drawImage(imageBg, 0, 0, canvasWidth, imageBg.height);
        canvasContext.beginPath();
        canvasContext.arc(
          circle.lastX,
          circle.lastY,
          circle.radius,
          0,
          Math.PI * 2,
          false
        );
        canvasContext.lineWidth = 3;
        canvasContext.strokeStyle = "#7BE524";
        canvasContext.stroke();
        canvasContext.closePath();
        canvasContext.filter = 'none';

        requestAnimationFrame(on);
      }
  
      
      // style mouse off hover
      // should be the same are prior to any hover
      // i noticed if i don't do this then the on styles will stay even after hover
      function off() {
        const imageBg = new Image();
        imageBg.src = "./assets/images/bg1.jpg";
        imageBg.classList.add('image-bg');
        // clear canvas so no colours or styles overlap
        canvasContext.drawImage(imageBg, 0, 0, canvasWidth, imageBg.height);
        canvasContext.beginPath();
        canvasContext.arc(
          circle.lastX,
          circle.lastY,
          circle.radius,
          0,
          Math.PI * 2,
          false
        );
        canvasContext.lineWidth = 3;
        canvasContext.strokeStyle = "black";
        canvasContext.stroke();
        canvasContext.closePath();
        
  
        canvasContext.beginPath();
        canvasContext.arc(
          miniCircle.lastX,
          miniCircle.lastY,
          miniCircle.radius,
          0,
          Math.PI * 2,
          false
        );
        canvasContext.fillStyle = "black";
        canvasContext.fill();
        canvasContext.closePath();

        canvasContext.filter = 'blur(1px)';
  
        requestAnimationFrame(off);
      }
  
      
      // using TweenMax.min.js by GSAP addin easing for radius for circle
    //   https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js
      let tween = TweenMax.to(circle, 0.25, {
        radius: circle.radius * 4.2,
        ease: Power1.easeInOut,
        paused: true
      });
  
      
      // for each hover element add mouseenter and mouseleave actions
      elements.forEach((el) => {
        el.addEventListener( "mouseenter", () => { 
          on();
          el.classList.add('hovered');
          el.classList.add('filter'); 
        }, false);
        el.addEventListener( "mouseleave", () => {
           off(); 
           el.classList.remove('hovered');
           el.classList.remove('filter'); 
          }, false );
        el.addEventListener( "mouseenter", () => { tween.play(); }, false );
        el.addEventListener( "mouseleave", () => { tween.reverse(); }, false );
      });
    };
  
    
    // tbh this is from ReGGae's pen that is added in the html comment at the top
    // from my understanding it does a bunch of math to figure out a smooth position update, including the delay on the mini circle
    // my [very poor] translation of this math:
    // shape.lastX = lerp(shape.lastX, mouseX, delay);
    // above === below
    // return (1 - delay) * shape.lastX + delay * mouseX;
    var lerp = function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    };
  
    
    //init the mouse function
    mouseInit();
}
  
// run fun mouse to have this cursor
funMouse();