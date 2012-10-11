%Creating Zotero Translators Using Framework
%Sebastian Karcher
%GSU Atlanta, October 2012

#Some Notes on Zotero Translators
* Each Zotero translator is an individual file, written in javascript
* You cannot break Zotero by fiddling with translators - you can always "reset" from the advanced panel of the preferences
* About 2 years ago, Eric Hetzner of the UC libraries developed a "framework" for wrting translators --> now you don't need any javascript. Just Xpaths and regular expressions. And those are easy!

#Xpaths are "directions" on a website
* xpaths are basically "directions" used to point to a part of a webpage
* A webpage is built up from a number of nested nodes
* This is what the most simple webpage looks like

~~~~~~
<html>
	<head>
		<title>A Basic Webpage</title>
	</head>
	<body>
		<div id="title">The Title of the webpage</div>
		<div id="content" class="text">The Content of the webpage</div>
	</body>
</html>
~~~~~~~~~~

#The most basic Xpath
* Give directions: at every corner/node, tell Zotero where to go:
* Let's say we want to go go to "The Content of the webpage"
* "Take the HTLM road, take a left at "body", then take the "div" street, or in HTML:

		/html/body/div

#Making Xpaths more precise
* But we're still "lost" - which of the two "div" streets do we go down?
* Option 1: Take the second `<div>`
		
		/html/body/div[2]
* Option 2: Take the `<div>` that has "content" as an id
		
		/html/body/div[@id="content"]
		
#Making Xpaths more efficient
* In an actual webpage, an xpath can be *very* long, so we'd like to make them shorter. we can use // to start anywhere in the html tree, e.g "the `<div>` with "content" as an "id" anywhere on the site:
		
		//div[@id="content"]
		
* Sometimes we don't want the precise content of an attribute like id - in those case we can use contains() as in
		
		//div[contains(@id, "cont")]

* We can combine conditions with "and" or "or" (*in lowercase!*)
		
		//div[@id="content" and @class="text"]
		
#A sample Framework Translator - Single item

~~~~~~
/** Articles */
FW.Scraper({
itemType : 'blogPost',
detect : FW.Xpath('//h1[@class="article-title"]'),
title : FW.Xpath('//h1[@class="article-title"]').text().trim(),
attachments : {
  url : FW.Url(),
  title : "voxEU snapshot",
  type : "text/html"
},
creators : FW.Xpath('//div[@class="author"]//span[@class="field-content"]/a').text().cleanAuthor("author"),
abstractNote : FW.Xpath('//div[@class="article-teaser"]').text(),
date : FW.Xpath('//h1[@class="article-title"]/following-sibling::p/text()').text(),
publicationTitle : "VoxEU.org"
});
 
~~~~~~~~~

#A sample Framework Translator - Multiples

~~~~~~
/** Search results */
FW.MultiScraper({
itemType : "multiple",
detect : FW.Xpath('//ul[contains(@class, "search-results")]'),
choices : {
  titles : FW.Xpath('//ul[contains(@class, "search-results")]/li/h2/a').text(),
  urls : FW.Xpath('//ul[contains(@class, "search-results")]/li/h2/a').key('href').text()
}
});
~~~~~~~~~

#Our Tools

* Scaffold - a Firefox extension to write and test the translator
* Firefox "Inspect Element" - to help us understand the structure of a webpage (there are alternatives like "Firebug)
