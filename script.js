
var typed = new Typed(".auto-type", {
    strings:["Student .","Web-Developer .","Problem-Solver(DSA)"],
    typeSpeed:150,
    backSpeed:150,
    loop: true
  })
  gsap.from("#logo",{
    x:-100,
    duration:1,
    delay:.5,
    opacity:0
  })
  gsap.from("#element li",{
    y:-100,
    delay:.7,
    stagger:.3,
    yoyo:true
  })
  gsap.from(".helo",{
    x:-100,
    duration:1,
    delay:.3,
    opacity:0
  })
  gsap.from(".col",{
    x:-100,
    duration:1,
    delay:.3,
    opacity:0
  })
  gsap.from(".typing",{
    x:100,
    duration:1,
    delay:.3,
    opacity:0
  })
  gsap.from(".image",{
    scale:0,
    duration:1,
    opacity:0,
    delay:1
   })
  gsap.from("#aboutimage",{
   scale:0,
   opacity:0,
   delay:.4,
   scrollTrigger:{
   trigger:"#aboutimage",
   scroller:"body",
   start:"top 80%",
   end:"top 70%",
   scrub:2

   }
  })
 gsap.from(".skill-im",{
  scale:0,
  duration:1,
  rotate:360,
  scrollTrigger:{
     trigger:".skill-im",
     scroller:"body",
     start:"top 45%",
     end:"top 30%",
     scrub:2
  }
 })
 gsap.from(".icon1,.icon3,.icon4",{
  x:100,
  scale:0,
  duration:2,
  rotate:360,
  scrollTrigger:{
    trigger:".icon1",
    scroller:"body",
    start:"top 80%",
    end:"top 40%",
    scrub:2
  }
 })
 gsap.from(".icon2,.icon5",{
  x:-70,
  scale:0,
  duration:2,
  rotate:360,
  scrollTrigger:{
    trigger:".icon1",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"top 55%",
    scrub:2
  }
 })
 gsap.from(".xproject div",{
  y:-100,
  scale:0,
  delay:.7,
  stagger:.3,
  yoyo:true,
  scrollTrigger:{
    trigger:".xproject",
    scroller:"body",
    // markers:true,
    start:"top 59%",
    end:"top 61%",
    scrub:2
  }
})
gsap.from(".con-section",{
scale:0,
duration:2,
rotate:360,
scrollTrigger:{
  trigger:".con-section",
  scroller:"body",
  start:"top 80%",
  end:"top 60%",
  scrub:2
}
})