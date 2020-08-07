

const sections = gsap.utils.toArray(".section")
console.log(sections)


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

// page 0
gsap.set(face,{xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"})
gsap.to(face, {duration: 10, motionPath:{
    path: facePath,
    align:facePath,
    start: 0.2,
    end:1.2},
    ease: "power1.inOut",
    
})
gsap.to(".caption", 5, {y: "-20px", opacity: "100%"})



//page1

function loadPage1(){
const tl1 = gsap.timeline()
tl1.from('.photo1',1, {opacity: '0%', ease: 'power1.inOut'})
	.to('.photo1',1, {rotation: -5, ease: 'power1.inOut'})
	.to(".text1", 2, {opacity: '100%'}, '-=1')
}

//page3



function loadPage3(){

	const tl3 = gsap.timeline();
	tl3.from("#paper2",1.3, {opacity: 0,yPercent: 50}, '-=1.3')
	.from('#photo1',1, {opacity: 0, xPercent: -30})
	.from('#clip1',1, {yPercent: -10, opacity: 0})
	.from('#photo2',1, {opacity: 0,xPercent: 30})
	.from('#clip2',1, {opacity: 0,yPercent: -10})
	.from('#tab1', 1, {opacity: 0,xPercent: 10})
	.from('#text2',1, {opacity: '0%'})
	.from('#green1',{opacity: 0,yPercent: 5})
	.from('#green2',{opacity: 0,yPercent: 5})
	.from('#green3',{opacity: 0,yPercent: 5})
	.from('#tape1', 1,{opacity: 0,xPercent: 5})
	.from('#note1',1.3, {opacity: 0,yPercent: 10})
	.from('#tape2', 1,{opacity: '0%'})
	.from('#text1',1.3, {opacity: '0%'});
	ScrollTrigger.create({
		animation: tl3,
		trigger: '#page3',
		toggleActions: "restart none none none",
	})
}

// Scroll Snapping
function goToSection(i, anim) {
	gsap.to(window, {
	  scrollTo: {y: i*innerHeight, autoKill: false},
	  duration: 1
	});
	
	if(anim) {
	  anim.restart();
	}
  }
  
  gsap.utils.toArray(".section").forEach((panel, i) => {

	if(i == 0){
		loadPage1();
	}
	
	if(i == 2){
		loadPage3()
	}
	ScrollTrigger.create({
	  trigger: panel,
	  onEnter: () => goToSection(i)
	});
	
	ScrollTrigger.create({
	  trigger: panel,
	  start: "bottom bottom",
	  onEnterBack: () => goToSection(i),
	});
  });
