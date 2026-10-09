(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});
	
	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
		}	
	
		$(window).on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header .header-sticky').outerHeight()
			$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	// Auto close mobile menu upon clicking any navigation link
	$(document).on('click', '.slicknav_nav a', function() {
		$('#menu').slicknav('close');
	});

	if($("a[href='#top']").length){
		$("a[href='#top']").click(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}
	
	/* Image Coparision JS */
	if ($('.transformation_image').length) {
		$(".transformation_image").twentytwenty({
			no_overlay: true,
		});
	}

	/* Hero Slider Layout JS */
	const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.hero-pagination',
			clickable: true,
		},
	})
	
	/* testimonial Slider JS */
	if ($('.testimonial-slider').length) {
		const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			},
			breakpoints: {
				768:{
				  	slidesPerView: 1,
				},
				991:{
				  	slidesPerView: 1,
				}
			}
		});
	}

	/* Service Single Image Carousel JS */
	if ($('.service-single-slider').length) {
		const service_single_slider = new Swiper('.service-single-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.service-single-button-next',
				prevEl: '.service-single-button-prev',
			},
		});
	}

	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '50%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 3000 });
	}

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.03,
			 translateXValue	= 20,
			 delayValue 		= 0.1,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Ajax call to submit form */
		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: $contactform.serialize(),
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-success";
		} else {
			var msgClasses = "h3 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Appointment form direct WhatsApp booking */
	var $appointmentForm = $("#appointmentForm");
	if ($appointmentForm.length) {
		$appointmentForm.on("submit", function (event) {
			event.preventDefault();
			
			var name = $("#name").val() ? $("#name").val().trim() : "";
			var phone = $("#phone").val() ? $("#phone").val().trim() : "";
			var location = $("#location").val() ? $("#location").val().trim() : "";
			var email = $("#email").val() ? $("#email").val().trim() : "";
			var date = $("#date").val() ? $("#date").val() : "";
			var time = $("#time").val() ? $("#time").val() : "";
			var reason = $('input[name="reason"]:checked').val() || "Dental Consultation";

			if (!name || !phone) {
				alert("Please enter your Full Name and Phone Number to book via WhatsApp.");
				return false;
			}

			// Format structured clinical WhatsApp message
			var message = "Hello Dr. Saawan Satpathy, I would like to book a dental appointment at Mahashakti Dental Clinic:\n\n";
			message += "• Patient Name: " + name + "\n";
			message += "• Phone Number: " + phone + "\n";
			if (location) {
				message += "• Location/Area: " + location + "\n";
			}
			if (email) {
				message += "• Email: " + email + "\n";
			}
			if (date) {
				message += "• Preferred Date: " + date + "\n";
			}
			if (time) {
				message += "• Preferred Time: " + time + "\n";
			}
			message += "• Treatment Required: " + reason + "\n\n";
			message += "Please confirm my appointment slot. Thank you!";

			var whatsappUrl = "https://wa.me/917008963520?text=" + encodeURIComponent(message);
			
			var $status = $("#appointmentStatus");
			if ($status.length) {
				$status.removeClass("d-none alert-danger").addClass("alert alert-success").html(
					'<i class="fa-brands fa-whatsapp me-2"></i> Connecting to Dr. Saawan Satpathy via WhatsApp... If not opened, <a href="' + whatsappUrl + '" target="_blank" class="fw-bold text-decoration-underline text-success">tap here to open WhatsApp</a>.'
				);
			}

			if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
				window.location.href = whatsappUrl;
			} else {
				var openedWindow = window.open(whatsappUrl, "_blank");
				if (!openedWindow || openedWindow.closed || typeof openedWindow.closed === "undefined") {
					window.location.href = whatsappUrl;
				}
			}
		});
	}

	/* Animated Wow Js */	
	new WOW().init();
			
})(jQuery);