# Steer Me to Beer

**29 August 2016**

**By Bhawani Parajuli, Jim Klein, Leah Nelson and Kyle Helyar**

Search for breweries near you! Results are returned by geolocation or zip code. The Google Maps API is used to obtain the users geolocation and search for breweries through the Foursquare API. Results are then displayed on the map.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Foursquare Client ID and Secret](https://developer.foursquare.com/)
* [Google Developer API key](https://console.developers.google.com/flows/enableapi?apiid=maps_backend&keyType=CLIENT_SIDE&reusekey=true)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* You will need a Client ID and Client Secret for Fourquare. Include both in a .env file in the parent directory.
  * export clientId="Your client ID goes here"
  * export clientSecret="Your client secret goes here"
* You will need a Google developer key.
  * From the terminal, while in the brew-hop folder, run $ curl -o vendor/gmaps.js https://maps.googleapis.com/maps/api/js?key= YOUR API KEY GOES HERE.
* From the terminal, run $ source .env

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## License

MIT License

Copyright (c) 2016 Bhawani Parajuli, Jim Klein, Leah Nelson, Kyle Helyar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
