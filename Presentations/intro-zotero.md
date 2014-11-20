% Introduction to Zotero
% Sebastian Karcher
% Cornell University Library, November 2014

#Installing Zotero

##Zotero for Firefox vs. Standalone

--------------------------------------------------------------------------
 Zotero for Firefox									Zotero Standalone
 ---------------------------         ---------------------------
 More reliable import 						  No need for Firefox Browser 
 from web 

 Proxy support								 			Program starts up faster
							
 Supports direct import							Faster performance
 of RIS/Refer from web	

  								Busy Zotero 
 							  	doesn't render browser unresponsive
-------------------------------------------------------------------------------------
Remember it's possible to install both!

##Zotero in an Institutional Environment

Three Scenarios:

1. **Personal Computers or Roaming Profiles:** Ideal case, batch-install like any other Firefox add-on or software.

2. **Public computers with log-in, wiped on every log-out:** Will need to sync entire library on every log-in: slow for large libraries, but doable. Since 4.0: Attachment download on demand

3. **Public computers, no log-in:** Do not install Zotero. Basic import/edit functionality via bookmarklet/connectors and zotero.org. No CWYW. 


#Getting Items into Zotero

##Six ways of importing to Zotero
* Web Translators (URL bar icon)
* Manual Input or Edit
* From a bibliographic format (RIS, BibTeX, MARC, etc.)
* Add by identifier (DOI, ISBN, PMID)
* Add PDF then Retrieve Metadata
* Get any Webpage with basic data

##Data Quality Matters

* Things to look for:
   	+ Completeness
   	+ Full text attachments
   	+ Full first names
   	+ Titles in Sentence case

* For articles: Full Text Database/Publisher>>Google Scholar
* For books: Most library catalogs > Worldcat > Google Books> Amazon

#Syncing

##Two types of Syncing

Data Syncing:

* Bibliographical data, notes, links (everything that's in zotero.sqlite file)
* Free without data limit (in practice works with up to about 30k items)
* Always with Zotero Server

File Syncing

* Attachments (PDFs, snapshots, anything else)
* Free up to 300MB
* Can be to Zotero Storage or WebDAV server

##Zotero Storage vs. WebDAV

* WebDAV services can be supplied by university IT; a PHP script is available. Also available via 3rd party provider, often for much lower price.
* Zotero Works smoothly with WebDAV, but many free/cheap commercial WebDAVs aren't following specifications or impose limits
* Some functionality is only available with Zotero Storage: File access at zotero.org and file sharing in (closed) groups

*Under no circumstances should the Zotero database be placed on a network drive or on a synced Dropbox folder. However...*

##Using Dropbox et al with Zotero attachments

* Use "links" not "attachments" in Zotero (automate via Zotfile)
* Place linked files in Dropbox
* Zotero's relative paths make this work across machines
