{
	"translatorID": "c10105ac-c523-4a32-9d2b-8713aa2ce87e",
	"label": "UKData",
	"creator": "Sebastian Karcher",
	"target": "^https?://discover\\.ukdataservice\\.ac\\.uk/",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "g",
	"lastUpdated": "2016-05-10 13:55:05"
}

function detectWeb(doc, url) {
    if (url.indexOf('catalogue/?sn=')>-1) {
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
	//get EndnoteXML link from page
	var endnoteXmlUrl = ZU.xpathText(doc, '//a[@title="Get full EndNote XML"]/@href');
	//get DOI from page
	var DOI = ZU.xpathText(doc, '//div[@class="result datacatalogue"]//a[contains(@title, "http://dx.doi.org/10.")]')
	ZU.doGet(endnoteXmlUrl, function(text) {
        var translator = Zotero.loadTranslator("import");
        translator.setTranslator("eb7059a4-35ec-4961-a915-3cf58eb9784b");
        translator.setString(text);
        translator.setHandler("itemDone", function(obj, item) {
           	item.itemType = "journalArticle";
           	item.DOI = DOI;
           	item.tags=[];
           	item.notes =[];
           	item.archive = item.institution;
            item.complete();
        })
        translator.translate();
    })
}
