document.addEventListener('DOMContentLoaded', function () {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    videoWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('.video');
        wrapper.addEventListener('mouseenter', () => {
            video.play();
        });
        wrapper.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});
