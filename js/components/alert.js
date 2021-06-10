function showAlert(
	message = 'This is a default message',
	classType = 'Info'
) {
	return `<div class="${classType}">${message}</div>`;
}