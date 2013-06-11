%Creating Zotero Translators Using Framework
%Sebastian Karcher
%Harvard Kennedy School, June 2013

#Why Learn About Translators?
* One-click import from the web perhaps *the* key features that distinguishes Zotero
* In this session we will write a "screen scraper" type translator for Zotero
* Best Case: This will allow you to write translators for sites you or your "clients" need
* Minimal Case: This will give you an understanding on how translators work and what may be possible, even if you're not going to do it yourself 

#Some Notes on Zotero Translators
* Each Zotero translator is an individual file, written in javascript
* There are four types of translators: Web, Import, Search, Export
* Some web translators, like those for many libraries, call on an import translators (e.g. MARC) - we won't learn about those.
* Other web translators "scrape" data from the page - that is what we will do now

# This isn't going to be scary!
* You cannot break Zotero by fiddling with translators - you can always "reset" from the advanced panel of the preferences
* About 2 years ago, Eric Hetzner of the UC libraries developed a "framework" for writing translators --> now you don't need any javascript. Just Xpaths (and maybe regular expressions). And those are easy!

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
		<div id="title">Title</div>
		<div id="content" class="text">Content</div>
	</body>
</html>
~~~~~~~~~~

#The most basic Xpath
* Give directions: at every corner/node, tell Zotero where to go:
* Let's say we want to go go to "The Content of the webpage"
* "Take the HTLM road, take a left at "body", then take the "div" street, or in Xpath:

		/html/body/div

#Making Xpaths more precise
* But we're still "lost" - which of the two "div" streets do we go down?
* Option 1: Take the second `<div>`
		
		/html/body/div[2]
* Option 2: Take the `<div>` that has "content" as an id
		
		/html/body/div[@id="content"]
		
#Making Xpaths more efficient
* In an actual webpage, an xpath can be *very* long, so we'd like to make them shorter. we can use // to start anywhere in the html tree, e.g "the `<div>` with 'content' as an 'id' anywhere on the site":
		
		//div[@id="content"]
		
* Sometimes we don't want the precise content of an attribute like id - in those case we can use contains() as in
		
		//div[contains(@id, "cont")]

* We can combine conditions with "and" or "or" (*in lowercase!*)
		
		//div[@id="content" and @class="text"]
		

#Our Tools

* Scaffold - a Firefox extension to write and test the translator
* Firefox "Inspect Element" - to help us understand the structure of a webpage (there are alternatives like "Firebug")

