Webcam.set({
width:450,
height:450,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");
function picture(){ 
Webcam.snap(function (data_uri){
document.getElementById("captured_image").innerHTML='<img id="result" src="'+data_uri+'"/>';
});
}

console.log("model is loaded",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0qehvre4m/model.json",modelLoaded);
function modelLoaded(){
    console.log("your model is loaded");
}