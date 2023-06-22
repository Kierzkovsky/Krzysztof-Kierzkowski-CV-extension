document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navPanel = document.querySelector('.navbar-collapse')
	const linksAll = document.querySelectorAll('.nav-link')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	linksAll.forEach(item => item.addEventListener('click', () => navPanel.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})
