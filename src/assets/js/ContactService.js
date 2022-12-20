const API_URL = 'https://bustour-serverless-production.up.railway.app/contact';

function sendEmailService(payload) {
	return fetch(API_URL, {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '*',
		},
	});
}

export { sendEmailService };
