# Generic Webhook Listener

## Background

This is a brutally simple code that simply listens for POST requests at the `/listen` route and logs the contents of the request to the console. This is meant to be a building block component for larger projects, but Github serves as a nice place to store it future use. The main use case is when developing programs for services that require a Webhook / Callback URL when signing up or debugging. Throw this up on Heroku, and you have a functioning listener to find out what the service sends you.