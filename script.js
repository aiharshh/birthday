// Click to reveal the birthday message
document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('birthday-screen').classList.remove('hidden');
});

// Click the balloon to start music, confetti, fireworks, and slideshow
document.getElementById('balloonBtn').addEventListener('click', function() {
    document.getElementById('bg-music').play();

    // Confetti effect
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    // Show fireworks effect
    let fireworks = document.getElementById('fireworks-container');
    fireworks.classList.remove('hidden');
    fireworks.style.opacity = 1;
    
    // Hide fireworks after 5 seconds
    setTimeout(() => {
        fireworks.style.opacity = 0;
    }, 5000);

    // Start slideshow
    let images = ["assets/images/img1.jpg", "assets/images/img2.jpg", "assets/images/img3.jpg"];
    let index = 0;
    let imgElement = document.getElementById("slideshow-img");

    document.getElementById('slideshow').classList.remove('hidden');

    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 3000); // Change image every 3 seconds
});
