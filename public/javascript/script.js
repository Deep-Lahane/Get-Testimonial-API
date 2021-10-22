const t1_btn = document.getElementById("t1_btn");
const t2_btn = document.getElementById("t2_btn");
const audio_1 = document.getElementById("audio_1");
const audio_2 = document.getElementById("audio_2");
const t1_btn_svg = document.getElementById("t1_btn_svg");
const t2_btn_svg = document.getElementById("t2_btn_svg");

function handle_play_pause(targetElement, target_audio, targetElement_svg) {
	if (targetElement.classList.contains("play")) {
		target_audio.play();
		targetElement.classList.remove("play");
		targetElement.classList.add("pause");
		targetElement.childNodes[1].innerText = "Pause Audio";
		targetElement_svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>`;
	} else {
		target_audio.pause();
		targetElement.classList.remove("pause");
		targetElement.classList.add("play");
		targetElement.childNodes[1].innerText = "Play Audio";
		targetElement_svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="t2_btn_svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>`;
	}
}

t1_btn.addEventListener("click", () => {
	handle_play_pause(t1_btn, audio_1, t1_btn_svg);
});

t2_btn.addEventListener("click", () => {
	handle_play_pause(t2_btn, audio_2, t2_btn_svg);
});