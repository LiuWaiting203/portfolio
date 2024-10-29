const { createApp, ref, onMounted } = Vue;
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.bg-scroll-fade',
    start: 'top top',
    end: 'bottom bottom',
    toggleActions: 'play none none reverse',
    scrub: 1,
  }
})

createApp({
  setup() {
    onMounted(() => {
      loadlive2d("live2d", "./model/Kobayaxi/Kobayaxi.model.json");

      tl.to('.bg-scroll-fade', {
        y: -10,
        backgroundColor: 'rgba(0,0,0)',
        duration: 2
      })

      gsap.from("#scroll-about-me", {
        opacity: 0,
        y: -70,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#scroll-about-me",
          start: "top 40%",
          end: "bottom 50%",
          toggleActions: "restart none none none",
          // markers: true
        }
      })

      const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: true,
        loop: true,
        audio: [{
          name: 'TOMO - 鹿',
          artist: 'TOMO',
          url: '../assests/TOMO - 鹿.mp3',
          cover: '../assests/deer.png',
        }]
      })
    })
  },
}).mount("#app");


