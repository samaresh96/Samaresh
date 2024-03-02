document.addEventListener("DOMContentLoaded", () => {
  let likeCounter = 0;
  let isLiked = false;
  const likebtn = document.getElementById("likebtn");
  const likeCounterElement = document.getElementById("LikeCounter");

  likebtn.addEventListener("click", () => {
    if (isLiked) {
      likeCounter--;
      likeCounterElement.textContent = likeCounter.toString();
      likebtn.innerHTML = '<i class="ri-thumb-up-line"></i>';
    } else {
      likeCounter++;
      likeCounterElement.textContent = likeCounter.toString();
      likebtn.innerHTML = '<i class="ri-thumb-up-fill"></i>';
    }

    isLiked = !isLiked;
  });
});
