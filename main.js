//https://teachablemachine.withgoogle.com/models/I6EeWQLap/

var img = document.getElementById("img");

function startClassify() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/I6EeWQLap/model.json",
    modelReady
  );
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    var result = results[0].label;
    var confidence = results[0].confidence;
    document.getElementById("result_label").innerHTML =
      "I can hear - " + result;
    document.getElementById("confidence").innerHTML =
      "Accuracy - " + confidence;
    document.getElementById("result_label").style.color =
      "rgb(" + r + ", " + g + ", " + b + ")";
    document.getElementById("confidence").style.color =
      "rgb(" + r + "," + g + ", " + b + ")";
    if (results[0].label == "Dog Fight") {
      document.getElementById("img").src = "fight-2.png";
      img.style.maxWidth = '230px';
    }
    else if (results[0].label == "Cat Fight") {
      document.getElementById("img").src = "fight-3.png";
      img.style.maxWidth = '230px';
    }
    else if (results[0].label == "Gun Fight") {
      document.getElementById("img").src = "fight-4.png";
      img.style.maxWidth = '230px';
    }
    else {
      document.getElementById("img").src = "fight-1.png";
      img.style.maxWidth = '230px';
    }
  }
}
