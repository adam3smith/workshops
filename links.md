#Zotero Workshop Notes \& links:

#Yesterday's Links:

Zutilo:https://github.com/willsALMANJ/Zutilo

Keyconfig:http://forums.mozillazine.org/viewtopic.php?t=72994

WebDAV PHP:http://forums.zotero.org/discussion/4736

Importing from Endnote: http://www.zotero.org/support/kb/importing_records_from_endnote


Linux Install Script:
PPA: http://forums.zotero.org/discussion/25317/install-zotero-standalone-from-ubuntu-linux-mint-ppa/%5D
http://www.cogsci.nl/software/qnotero#ppa

Hidden Preferences: http://www.zotero.org/support/preferences/hidden_preferences


##Importing Data:

Zotero Download Page:http://www.zotero.org/support/3.0

Zotero Bookmarklet:https://www.zotero.org/bookmarklet/bookmarklet.html


ISBN: 9780807752623
PMID: 22289095
DOI: 10.1093/ser/mwq022

@book{smith_theory_2000, 
	address = {Amherst, {NY}}, 
	title = {A Theory of Moral Sentiments}, 
	publisher = {Prometheus Books}, 
	author = {Smith, Adam}, 
	year = {2000} 
}

RTF-Scan Documentation: http://www.zotero.org/support/rtf_scan

##Documentation:
Zotero's Documentation: http://www.zotero.org/support/

Libguides:
Washington University St. Louis: http://libguides.wustl.edu/zotero

MIT: http://libguides.mit.edu/zotero

Jason Puckett at  Georgia State: http://research.library.gsu.edu/zotero

Comparison Chart - Wisconsin: http://www.library.wisc.edu/citation-managers/comparison.html

Oregon State in depth tutorial: http://ica.library.oregonstate.edu/tutorials/626--Introduction-to-Zotero


##Citation Styles

GUI Editor: http://steveridout.com/csl/about/

Field Mappings: http://aurimasv.github.com/z2csl/typeMap.xml

Full Specifications: http://citationstyles.org/downloads/specification.html

Sample Style Request: http://forums.zotero.org/discussion/25271/style-request-can-j-dietetic-practice-research/#Item_4

http://forums.zotero.org/discussion/26011/style-request-journal-of-antimicrobial-chemotherapy/#Item_1


##Plugins & Infrastructure
List of Zotero plugins: http://www.zotero.org/support/plugins

Papermachine: http://web.library.emory.edu/blog/supercharge-your-zotero-library-using-paper-machines-part-i

Zotfile: http://www.columbia.edu/~jpl2136/zotfile.html

Zotero Quicklook: https://addons.mozilla.org/en-US/firefox/addon/zoteroquicklook/

Multi-Lingual Zotero: http://www.citationstylist.org

Qnotero: http://www.cogsci.nl/software/qnotero

Translator testing: http://zotero-translator-tests.s3-website-us-east-1.amazonaws.com/

##Users
Trevor's Slides: http://www.slideshare.net/tjowens/zotero-workshop-slides

##Translators
Scaffold Download: http://www.zotero.org/support/dev/translators/scaffold

Framework Documentation: http://www.zotero.org/support/dev/translators/framework

Field Names: http://aurimasv.github.com/z2csl/typeMap.xml

How to write a translator (outdated but useful): http://niche-canada.org/member-projects/zotero-guide/chapter5.html

Basic Translator code:

~~~~~
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
 
/** Search results */
FW.MultiScraper({
itemType : "multiple",
detect : FW.Xpath('//ul[contains(@class, "search-results")]'),
choices : {
  titles : FW.Xpath('//ul[contains(@class, "search-results")]/li/h2/a').text(),
  urls : FW.Xpath('//ul[contains(@class, "search-results")]/li/h2/a').key('href').text()
}
});
~~~~~~~~
