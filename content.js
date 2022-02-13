const titles = document.querySelectorAll(".tabtitle");
titles.forEach(e => {
	if (e.innerText.toUpperCase() === "C++") return;
	e.nextSibling.remove();
	e.remove();
});
