import {
	FingerprintJsServerApiClient,
	Region,
} from '@fingerprintjs/fingerprintjs-pro-server-api'

const client = new FingerprintJsServerApiClient({
	apiKey: 'rDjdxFyHEJWUe0PWi5LA', // Replace with your key
	region: Region.Global, // Replace with your region
})

// Get a specific fingerprinting event
client.getEvent('REQUEST_ID').then((event) => {
	console.log(event + " Q ")
})
