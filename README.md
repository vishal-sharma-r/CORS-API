# CORS Proxy API

### Production Link
```
https://cors-api-znlf.onrender.com
```


## What is CORS proxy API
A CORS proxy API is a tool or service that acts as an intermediary between a client (such as a web browser) and an external server to bypass Cross-Origin Resource Sharing (CORS) restrictions.

## What is CORS
CORS is a security feature enforced by web browsers to restrict web pages from making requests to a domain other than the one that served the web page.

For example:
A web page from https://example.com cannot directly make a request to https://api.someotherdomain.com unless the API explicitly allows it via its CORS headers
## Why Use a CORS Proxy?
When the external API doesn't include appropriate CORS headers (e.g., Access-Control-Allow-Origin), the browser blocks the request. A CORS proxy bypasses this restriction by:
* Receiving the request from the client.
* Forwarding it to the target server.
* Relaying the response back to the client while adding the necessary CORS headers.

## API Endpoints

GET /: Returns Cors-api is working!
GET /fetch: Fetches data from a provided URL. The URL should be passed as query parameters.

###### Example API

```
http://https://cors-api-znlf.onrender.com/fetch?<Your_API>
```
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

 Clone the repository: 
 
```
git clone https://github.com/vishal-sharma-r/CORS-API.git
```

Install dependencies: 
```
npm install
```

## Running the Server

Run the server using the following command:

```bash
npm start
```
### Authors
Vishal Sharma 


