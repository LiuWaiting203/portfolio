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
    })
  },
}).mount("#app");


