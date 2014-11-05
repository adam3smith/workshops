#Zotero Workshop Notes \& links:

##Slides
PDFs: http://www.slideshare.net/adam3smith (old)
Markdown: https://github.com/adam3smith/zotero-workshops/Presentations
##Installing

http://www.zotero.org/download/

Linux Install Script:
PPA: http://forums.zotero.org/discussion/25317/install-zotero-standalone-from-ubuntu-linux-mint-ppa/%5D

http://www.cogsci.nl/software/qnotero#ppa


##Importing Data:

Zotero Bookmarklet:https://www.zotero.org/bookmarklet/bookmarklet.html

ISBN: 
9780807752623
9781409411109
9780465030545

PMID: 22289095

DOI: 10.1093/ser/mwq022

@book{smith_theory_2000, 
	address = {Amherst, {NY}}, 
	title = {A Theory of Moral Sentiments}, 
	publisher = {Prometheus Books}, 
	author = {Smith, Adam}, 
	year = {2000} 
}

RTF-ODF-Scan Documentation: http://zotero-odf-scan.github.io/zotero-odf-scan/

Importing from Endnote: http://www.zotero.org/support/kb/importing_records_from_endnote

#Sync
WebDAV PHP: http://forums.zotero.org/discussion/4736
List of WebDavs:http://www.zotero.org/support/kb/webdav_services 
Dropbox/Symlink: https://zotpad.uservoice.com/knowledgebase/articles/103395-what-is-a-symbolic-link-and-why-should-i-use-one-w
Relative links: http://zoteromusings.wordpress.com/2013/04/11/whats-new-in-zotero-4-0-part-2/


#Interface
Hidden Preferences: http://www.zotero.org/support/preferences/hidden_preferences


##Documentation:
Zotero's Documentation: http://www.zotero.org/support/

**Libguides:**

Washington University St. Louis: http://libguides.wustl.edu/zotero

MIT: http://libguides.mit.edu/zotero

Jason Puckett at  Georgia State: http://research.library.gsu.edu/zotero

Comparison Chart - Wisconsin: http://www.library.wisc.edu/citation-managers/comparison.html

HKS: http://www.hks.harvard.edu/library/zotero/index.htm

Oregon State in depth tutorial: http://ica.library.oregonstate.edu/tutorials/626--Introduction-to-Zotero

**Listservs**
Zotero Evangelist listserv: https://groups.google.com/forum/?fromgroups#!forum/zotero-evangelists

Zotero dev listserv: http://groups.google.com/group/zotero-dev

##Citation Styles

GUI Editor: http://editor.citationstyles.org/about/

Field Mappings: http://aurimasv.github.com/z2csl/typeMap.xml

Full Specifications: http://citationstyles.org/downloads/specification.html

Sample Style Request: http://journals.cambridge.org/images/fileUpload/images/ALR-InstructionsApr13.pdf

http://dx.doi.org/10.1051/alr/2012012


##Plugins & Infrastructure

List of Zotero plugins: http://www.zotero.org/support/plugins

Papermachine: http://web.library.emory.edu/blog/supercharge-your-zotero-library-using-paper-machines-part-i

Zotfile: http://www.columbia.edu/~jpl2136/zotfile.html

Zotero Quicklook: https://addons.mozilla.org/en-US/firefox/addon/zoteroquicklook/

Multi-Lingual Zotero: http://www.citationstylist.org http://www.amazon.com/Citations-Out-Box-Adapting-multilingual/dp/147934771X/

Qnotero: http://www.cogsci.nl/software/qnotero

Zutilo:https://github.com/willsALMANJ/Zutilo

Keyconfig:http://forums.mozillazine.org/viewtopic.php?t=72994

Translator testing: http://zotero-translator-tests.s3-website-us-east-1.amazonaws.com/

ZotPad: http://www.zotpad.com/

Zotero Reader: https://secure.zoteroreader.com/



##Users
Trevor's Slides: http://www.slideshare.net/tjowens/zotero-workshop-slides

Use cases:

OSU provides it's students with 500mb of Zotero storage
http://osulibrary.oregonstate.edu/500-mb-free-zotero-storage-space

Lewis & Clark's Environmental Studies Program uses a large Zotero group including all its students
https://sge.lclark.edu/2011/10/26/linking-to-zotero-in-your-posting/

A write-up of teaching using a Zotero group:
http://www.briancroxall.net/2010/01/18/final-annotated-zotero-group-bibliography-assignment/

An example of a collaborative bibliography using a group:
http://www.zotero.org/groups/digital_humanities_education

An example of a curated subject bibliography:
http://ancientbiblio.wordpress.com/

https://www.zotero.org/groups/ancient_world_open_bibliographies


Two online exhibition systems that integrate with Zotero

Omeka (developed by CHNM): http://omeka.org

And more heavily focused on annotating: http://editorsnotes.org/

##Support

http://www.zotero.org/support/reporting_bugs


##Translators
Scaffold Download: http://www.zotero.org/support/dev/translators/scaffold

Xpath Bookmarklet: http://dl.dropbox.com/u/848981/it/xp/xp.html

Framework Documentation: http://www.zotero.org/support/dev/translators/framework

Field Names: http://aurimasv.github.com/z2csl/typeMap.xml

sample site: 	

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


