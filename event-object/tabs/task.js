const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab) => {
	tab.addEventListener('click', function() {
		tab.closest('.tab__navigation').querySelector('.tab_active').classList.remove('tab_active');

		tab.classList.add('tab_active');

		tab.closest('.tabs').querySelector('.tab__contents .tab__content_active').classList.remove('tab__content_active');
		
		contents[tabs.indexOf(tab)].classList.add('tab__content_active');
	});
})
