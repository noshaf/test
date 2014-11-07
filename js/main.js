// This is a hacky work around for not using a server to get access to the whole folder and sending it to the client
function video_simulation (i) {       
   setTimeout(function () {   
    	var img = new Image(),
			canvas = document.getElementById('canvas').getContext('2d'),
			srcNumber = i;

		if (i < 10) {
			srcNumber = "0"+i;
		}

		img.onload = function(){
			canvas.drawImage(img, 45, 0);
		};
		img.src = "frames/ball0"+srcNumber+".jpg";

      	if (i != 30){
			if (i != 29) i++;
      		video_simulation(i);
      	}
   	}, 100)
}

document.getElementById('button').onclick=function(){video_simulation(0);} 
