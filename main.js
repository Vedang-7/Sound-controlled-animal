function start_Classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kfdVahG17/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    
    random_number_r=Math.floor(Math.random()+255)+1;
    random_number_g=Math.floor(Math.random()+255)+1;
    random_number_b=Math.floor(Math.random()+255)+1;
    document.getElementById("result_label").innerHTML='I can here:- '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy:- '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img=document.getElementById('Image_1');
    img1=document.getElementById('Image_2');
    img2=document.getElementById('Image_3');
    img3=document.getElementById('Image_4');
    
    if(results[0].label=="clap"){
        img.src='Image_1.jpg';
        img1.src='Image_2.gif';
        img2.src='';
        img3.src='';
    }
    else if(results[0].label=="Bell"){
        img.src='Image_1.jpg';
        img1.src='Image_2.gif';
        img2.src='';
        img3.src='';
    }
    else if(results[0].label=="Snap"){
        img.src='Image_1.jpg';
        img1.src='Image_2.gif';
        img2.src='';
        img3.src='';
    }
    else {
        img.src='Image_1.jpg';
        img1.src='Image_2.png';
        img2.src='';
        img3.src='';
    }
}
}
