    const fortunes =[
        "大吉💖素敵な出会いがあるかも！",
        "中吉😃少し有機を出すと良いことが起きる",
        "小吉　今日はゆっくり過ごそう",
        "凶　無理せず慎重に行動しよう",
        "大凶　今日は何もしないようにしよう"
    ];

    const button =document.getElementById("omikuji-bt");
    const omikujiimg = document.getElementById("omikuji-img");
    const result = document.getElementById("result");
    const advise = document.getElementById("advise");

    

    button.addEventListener("click", function () {
        const randomNumber = Math.floor(Math.random() * fortunes.length)
const resultText = fortunes[(randomNumber)]

result.textContent = fortunes[(randomNumber)];

if (resultText.includes("大吉")){
    result.style.color = "red";
    omikujiimg.innerHTML = "<img src='happy01.png'>";
advise.textContent = "今日は積極的に行動しよう";
}else if (resultText.includes("大凶")) {
    result.style.color="green"
    omikujiimg.innerHTML = "<img src='happy大凶.png'>";
}else {
    result.style.color ="black"
    advise.textContent=""
    omikujiimg.innerHTML = "";
}
    });