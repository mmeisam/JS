let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let ascii = $.querySelector('#ascii')
let key = $.querySelector('#key')
let keyLocation = $.querySelector('#location')
let keywhich = $.querySelector('#which')
let keycode = $.querySelector('#code')

document.body.addEventListener('keydown', function (event) {
	event.preventDefault();
	console.log(event);
	ascii.innerHTML = event.keyCode;
	key.innerHTML = event.key;
	keyLocation.innerHTML = event.location;
	keywhich.innerHTML = event.which;
	keycode.innerHTML = event.code;
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
})