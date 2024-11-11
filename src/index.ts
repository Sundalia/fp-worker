import {
	FingerprintJsServerApiClient,
	Region,
} from '@fingerprintjs/fingerprintjs-pro-server-api'

const client = new FingerprintJsServerApiClient({
	apiKey: 'SERVER_API_KEY', // Replace with your key
	region: Region.Global, // Replace with your region
})

// Get a specific fingerprinting event
client.getEvent('REQUEST_ID').then((event) => {
	console.log(event)
}
