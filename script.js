function answerResponse() {
  var message = document.getElementById("Message").value;
	var totalCountWords = 1;
	var totalCountSentences = 0;
	var totalCountSpaces = 0;
  for (i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      totalCountWords += 1;
      totalCountSpaces +=1;
    }
    if (message[i] == "." || message[i] == "?" || message[i] == "!") {
      totalCountSentences += 1;
    }
  }
    console.log(totalCountWords);
    console.log(totalCountSpaces);
    console.log(totalCountSentences);
  	var averageWords = totalCountWords / totalCountSentences;
    console.log(averageWords);
  document.getElementById("answer1").innerHTML = "Word Count " + totalCountWords;
  document.getElementById("answer2").innerHTML = "Sentence Count " + totalCountSentences;
  document.getElementById("answer3").innerHTML = "Average Words Per Sentence " + averageWords;
  document.getElementById("answer4").innerHTML = "Space Count " + totalCountSpaces;
}