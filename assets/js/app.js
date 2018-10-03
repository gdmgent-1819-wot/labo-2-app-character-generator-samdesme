	var penColour = 'black';
    
  function setPenColour(pen)
  {
    penColour = pen;
  }

  function setPixelColour(pixel)
  {
    pixel.style.backgroundColor = penColour;
    console.log(penColour);

  }

var pixels = document.querySelectorAll('.pixel');
var btnSave = document.querySelector('#btnSave');
var ArrPixel = [];

for(let i = 0; i < pixels.length; i++) {

  ArrPixel.push([255,255,255]);
  var pixel = pixels[i];
  pixel.addEventListener('click', e => {

    switch (penColour) {
      case "red":
        ArrPixel[i] = [255, 0, 0];
        break;
        case "chartreuse":
        ArrPixel[i] = [0, 255, 0];
        break;
        case "blue":
        ArrPixel[i] = [0, 0, 255];       
        break;
        case "black":
        ArrPixel[i] = [0, 0, 0];
        break
        default: 
        ArrPixel[i] = [255, 255, 255];
    }
  });
}

btnSave.addEventListener('click', e => {
  e.preventDefault();
  firebase.database().ref('values').push({'rgb':ArrPixel});
  console.log('success');
})