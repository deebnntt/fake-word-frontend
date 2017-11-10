export function fetchWords() {
	return fetch('http://localhost:3000/api/v1/words').then(res => res.json());
}

export function fetchDefinitions() {
	return fetch('http://localhost:3000/api/v1/definitions').then(res =>
		res.json()
	);
}
