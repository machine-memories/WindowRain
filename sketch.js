

let n = 300
let dot;
let dots = Array(n)
let wind = 0
let ruido = 0
let ruido2 = 0
let noiseInc = 0
let m = 0
let slider

let anchoP = screen.width
let ancho


function setup() {
  if(anchoP < 500){
    ancho = 350
    m = 75
    slider = createSlider(45,120,m,1)
  }
  else{
    ancho = 600
    m = 150
    slider = createSlider(90,240,m,1)
  }
  createCanvas(ancho, ancho)
  colorMode(360,100,100)
  for(let i = 0; i < n; i++){
    dots[i] = new Dot()
  }
  noFill()
  slider.class('slider')
}

function draw() {
  m = slider.value()
  background('#E8E3C5')
  strokeWeight(1)
  square(m,m,width-2*m)

  for(let i = 0; i < n; i++){
    dots[i].render()
    dots[i].move()
  }

  ruido = noise(noiseInc)
  noiseInc += 0.005
  ruido2 = ruido*10

  //CAPTURE VIDEO
  // if(frameCount == 1){
  //   capturer.start()
  // }

  // if(frameCount < 1200){
  //   capturer.capture(canvas)
  // } else if(frameCount == 1200){
  //   capturer.save()
  //   capturer.stop()
  // }
}

function keyPressed(){
  if(key == 's'){
    saveFrames('rain','png')
  }
}


