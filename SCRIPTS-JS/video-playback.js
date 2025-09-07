 
  const videos = document.querySelectorAll(".my-video");

  videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      // Optional: Reset video to the beginning on mouseout
      video.currentTime = 0; 
    });
  });