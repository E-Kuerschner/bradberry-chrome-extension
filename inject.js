var audioClipMap = {
    0: "ethan.wav",
    1: "ethan_bradberry.wav",
    2: "im_ethan_bradberry.wav"
};

document.body.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * (3 - 0) + 0);
    var audioPath = "./audio/" + audioClipMap[randomIndex];
    chrome.extension.sendRequest({audio: audioPath});
}, true);