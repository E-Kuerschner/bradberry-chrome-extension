var audioPlayer = new Audio();

chrome.extension.onRequest.addListener(function(request, sender)
{
    audioPlayer.src = request.audio;
    audioPlayer.play();
});