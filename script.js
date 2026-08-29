document.getElementById("startButton").addEventListener("click", function () {

    document.querySelector(".page").innerHTML = `
        <h1>Wait... 👀</h1>
        <p>Do you want to see your surprise?</p>

        <button onclick="showSurprise()">
            YES 💗
        </button>

        <button onclick="noClicked()">
    NO 😭
</button>
    `;

});

function showSurprise() {

    document.querySelector(".page").innerHTML = `
        <h1>🎁 Your Surprise 🎁</h1>

        <p>Something special is waiting for you...</p>

        <div class="gift" onclick="openGift()">
            🎁
        </div>

        <p>Tap the gift! 👆</p>
    `;

}

function noClicked() {

    document.querySelector(".page").innerHTML = `
        <h1>NOOO 😭</h1>

        <p>You've to click YES! 😤💗</p>

        <p>Waapas jao and click YES! 😂</p>

        <button onclick="goBack()">
            ⬅️ Go Back
        </button>
    `;

}

function goBack() {

    document.querySelector(".page").innerHTML = `
        <h1>Wait... 👀</h1>

        <p>Do you want to see your surprise?</p>

        <button onclick="showSurprise()">
            YES 💗
        </button>

        <button onclick="noClicked()">
            NO 😭
        </button>
    `;

}

function openGift() {

    document.querySelector(".page").innerHTML = `
       <h1 class="birthday-title">🎉 HAPPY BIRTHDAY DARSHANA 🎉</h1>


<h2 class="best-friend">MY BESTESTTTTT FRIEND 💗</h2>

<p>Today is your special day! ❤️</p>

        <div class="cake">
            🎂
        </div>

        <p>There's still more waiting for you...</p>

        <button onclick="showMemories()">
            Continue 💗
        </button>
    `;

}

function openGift() {

    document.querySelector(".page").innerHTML = `
        <h1 class="birthday-title">🎉 HAPPY BIRTHDAY DARSHANA 🎉</h1>

        <h2 class="best-friend">MY BESTESTTTTT FRIEND 💗</h2>

        <div class="cake">
            🎂
        </div>

        <p>There's still more waiting for you...</p>

        <button onclick="showMemories()">
            Continue 💗
        </button>
    `;

}

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);

function showMemories() {

    document.querySelector(".page").innerHTML = `
    
        <h1 class="memories-title">Our Memories 📸💕</h1>

        <p class="memories-subtitle">
            Some of my favourite clicks with you ✨
        </p>

        <div class="slider">

            <button class="prev" onclick="prevSlide()">❮</button>

            <div class="slides">

            <img src="./photo1.jpg" class="active">
            <img src="./photo2.jpg">
            <img src="./photo3.jpg">
            <img src="./photo4.jpg">
            <img src="./photo5.jpg">

            </div>

            <button class="next" onclick="nextSlide()">❯</button>

        </div>

        <button class="next-btn" onclick="showMessage()">
            Next 💌
        </button>

    `;

    currentIndex = 0;
    showSlide(currentIndex);
}


let currentIndex = 0;


function showSlide(index) {

    const slides = document.querySelectorAll(".slides img");

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}


function nextSlide() {

    const slides = document.querySelectorAll(".slides img");

    currentIndex = (currentIndex + 1) % slides.length;

    showSlide(currentIndex);
}


function prevSlide() {

    const slides = document.querySelectorAll(".slides img");

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    showSlide(currentIndex);
}

function showMessage() {

    document.querySelector(".page").innerHTML = `
    
        <div class="letter">

            <h1>💌 A Little Message For You</h1>

            <p class="message">
                To my bestesttttt friend,
            </p>

            <p class="message">
                I don't even know where to start because
                there are so many things I want to say to you.
                From all our stupid conversations to the
                memories that somehow became my favourites,
                I'm genuinely so lucky to have you in my life. ❤️
            </p>

            <p class="message">
                I hope this birthday brings you everything
                you've ever wished for and so much more.
                Keep smiling, keep being the amazing person
                you are, and never forget how special you are. ✨
            </p>

            <p class="message">
                Happy Birthday once again, Darshana! 🎂💕
            </p>

            <p class="signature">
                — Your best friend 💗
            </p>

            <button onclick="showFinal()">
                One Last Thing 👀
            </button>

        </div>
    `;
}

function showFinal() {

    document.querySelector(".page").innerHTML = `
    
        <h1>🥹💗</h1>

        <h1>Thank You For Being You</h1>

        <p>
            Here's to many more birthdays,
            countless memories and
            endless stupid moments together. 😂
        </p>

        <div class="big-heart">
            ❤️
        </div>

        <h2>HAPPY BIRTHDAY DARSHANA 🎂</h2>

        <p>Love you, bestie! 💕</p>

    `;
}