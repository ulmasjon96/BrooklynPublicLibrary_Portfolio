const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
	dropdownMenu.classList.toggle('open');
	const isOpen = dropdownMenu.classList.contains('open');
	toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

const dots = document.querySelectorAll('.dot');
const groups = document.querySelectorAll('.slide-group');

dots.forEach(dot => {
	dot.addEventListener('click', () => {
		const targetId = dot.getAttribute('data-target');

		groups.forEach(group => group.classList.remove('active'));

		const targetGroup = document.getElementById(targetId);
		if (targetGroup) {
			targetGroup.classList.add('active');
		}

		dots.forEach(d => d.classList.remove('active'));
		dot.classList.add('active');
	});
});

const mobileDots = document.querySelectorAll('.mobile-dots .dot');
const mobileSlides = document.querySelectorAll('.mobile-slide');

mobileDots.forEach(dot => {
	dot.addEventListener('click', () => {
		const index = parseInt(dot.getAttribute('data-index'));

		// Rasmlarni faqat bittasini ko‘rsatish
		mobileSlides.forEach((slide, i) => {
			slide.classList.toggle('active', i === index);
		});

		// Nuqtalarni yangilash
		mobileDots.forEach(d => d.classList.remove('active'));
		dot.classList.add('active');
	});
});

const radioButtons = document.querySelectorAll('input[name="season"]');
const cards = document.querySelectorAll('.card');

function updateCards() {
	const selected = document.querySelector('input[name="season"]:checked').value;
	cards.forEach(card => {
		card.style.display = card.classList.contains(selected) ? 'block' : 'none';
	});
}

radioButtons.forEach(radio => {
	radio.addEventListener('change', updateCards);
});

document.addEventListener('DOMContentLoaded', updateCards);

// digitalLibraryCards
document.addEventListener('DOMContentLoaded', function () {
	const loginBtn = document.getElementById('loginBtn');

	const sections = document.querySelectorAll('.digitalLibraryCards');

	loginBtn.addEventListener('click', function () {
		// 1-sektsiyani (formani) yashirish
		sections[0].style.display = 'none';

		// 2-sektsiyani (kartani) ko‘rsatish
		sections[1].style.display = 'block';
		sections[1].classList.remove('hidden'); // Agar `hidden` klassni ham olib tashlash kerak bo‘lsa
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const openButtons = document.querySelectorAll('.openBuyCard'); // Barcha Buy tugmalar
	const modal = document.querySelector('.buyaLibraryCard');
	const modalContent = document.querySelector('.cardBuy');
	const closeBtn = document.getElementById('exit');

	// Har bir tugma uchun event listener
	openButtons.forEach(button => {
		button.addEventListener('click', () => {
			modal.classList.add('active');
			modalContent.style.opacity = '1';
			modalContent.style.transform = 'scale(1)';
			modalContent.style.pointerEvents = 'auto';
		});
	});

	// Yopish tugmasi
	closeBtn.addEventListener('click', () => {
		modal.classList.remove('active');
		modalContent.style.opacity = '0';
		modalContent.style.transform = 'scale(0.9)';
		modalContent.style.pointerEvents = 'none';
	});

	// Modal tashqarisiga bosilganda yopish (ixtiyoriy)
	modal.addEventListener('click', e => {
		if (e.target === modal) {
			modal.classList.remove('active');
			modalContent.style.opacity = '0';
			modalContent.style.transform = 'scale(0.9)';
			modalContent.style.pointerEvents = 'none';
		}
	});
});

document.getElementById('buyCardBtn').addEventListener('click', function () {
	alert("To'lov muvaffaqiyatli amalga oshirildi!");
});

const userIcon = document.getElementById('userIcon');


// const userIcon = document.getElementById('userIcon');
const userDropdown = document.getElementById('userDropdown');

// Toggle qilish (ochish/yopish)
userIcon.addEventListener('click', event => {
	event.stopPropagation(); // Tashqariga bosishda yopilmasin
	const isVisible = userDropdown.style.display === 'block';
	userDropdown.style.display = isVisible ? 'none' : 'block';
});

// Sahifa bo‘ylab boshqa joyga bosilganda menyuni yopish
document.addEventListener('click', event => {
	if (!userIcon.contains(event.target)) {
		userDropdown.style.display = 'none';
	}
});
