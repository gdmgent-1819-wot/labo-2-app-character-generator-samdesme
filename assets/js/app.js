	var penColour = '';
    
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

  ArrPixel.push("0");
  var pixel = pixels[i];
  pixel.addEventListener('click', e => {

    switch (penColour) {
      case "red":
        ArrPixel[i] = "rd";
        break;
        case "chartreuse":
        ArrPixel[i] = "gr";
        break;
        case "blue":
        ArrPixel[i] = "bl";       
        break;
        case "black":
        ArrPixel[i] = "blk";
        break
        default: 
        ArrPixel[i] = "0";
    }
  });
}

btnSave.addEventListener('click', e => {
  e.preventDefault();
  firebase.database().ref('values').push({'rgb':ArrPixel});
  console.log('success');
})