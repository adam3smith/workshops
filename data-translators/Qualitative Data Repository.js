{
	"translatorID": "502f46f6-f258-4b5b-9a6b-6eb56fef866c",
	"label": "Qualitative Data Repository",
	"creator": "Sebastian Karcher",
	"target": "^https?://qdr\\.syr\\.edu/discover/browse/QDR",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "g",
	"lastUpdated": "2016-05-10 14:13:57"
}

function detectWeb(doc, url) {
    if (url.indexOf('/browse/QDR:')>-1) {
        return "journalArticle";
    } else if (getSearchResults(doc, true)) {
        return "multiple";
    }
}

function getSearchResults(doc, checkOnly) {
    var items = {};
    var found = false;
    //TODO: adjust the xpath
    var rows = ZU.xpath(doc, '//a[contains(@href, "/article/")]');
    for (var i=0; i<rows.length; i++) {
        //TODO: check and maybe adjust
        var href = rows[i].href;
        //TODO: check and maybe adjust
        var title = ZU.trimInternal(rows[i].textContent);
        if (!href || !title) continue;
        if (checkOnly) return true;
        found = true;
        items[href] = title;
    }
    return found ? items : false;
}


function doWeb(doc, url) {
    if (detectWeb(doc, url) == "multiple") {
        Zotero.selectItems(getSearchResults(doc, false), function (items) {
            if (!items) {
                return true;
            }
            var articles = new Array();
            for (var i in items) {
                articles.push(i);
            }
            ZU.processDocuments(articles, scrape);
        });
    } else {
        scrape(doc, url);
    }
}

function scrape (doc, url) {
	//get DOI from page
	var DOI = ZU.xpathText(doc, '//table[@class="qdr_browse_object_details_table"]/tbody/tr/td[contains(text(), "DOI")]/following-sibling::td');
	Z.debug(DOI);
		var translate = Zotero.loadTranslator("search");
		//Use DataCite translator
		translate.setTranslator("9f1fb86b-92c8-4db7-b8ee-0b481d456428");
		var item = {"itemType":"journalArticle", "DOI": DOI};
		translate.setSearch(item);
		translate.setHandler("itemDone", function(obj, item) {
			//adjust data
			item.itemType = "journalArticle";
			item.DOI = DOI;
			item.archive = item.publisher;
			item.complete();
		});
		translate.translate();
	
}