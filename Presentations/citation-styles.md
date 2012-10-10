%Intro to the Citation Style Language
%Sebastian Karcher
%GSU Atlanta, October 2012

#Brief History of CSL
* Developed by Bruce D'Arcus 
* First Included in Zotero in 2006
* Major Update to CSL 1.0 in 2010
* Since then, adopted by Mendeley, Papers2, Quiqqa and other
* Several Open Source processors for CSL, including citeproc-js, used in Zotero and Mendeley, written & maintained by Frank Bennett
* Project hosted at citationstyles.org, maintained principally by Rintze Zelle

#Advantages of CSL
* Open source
* Seamless switching between citation formats
* \<group\> feature for complex formatting and missing fields
* \<macro\> for efficient coding
* \<choose\> conditionals
* Multilingual

#Currently not supported in CSL
* Alphanumerical styles used in Math and Computer Science

	\[LaCh87\] 

	LaCh87. Shui Fong Lam und K. Hung Chan. Computer Capacity Planning: Theory
	and Practice. Academic Press, Inc., Orlando, Florida, USA. 1987.
* Compound numerical styles used in Chemistry

	[1] a) B. M. Trost, Chem. Eur. J. 1998, 4, 2405–2412; b) H. J. Ache, Angew. Chem. 1989, 101, 1–21; 	Angew. Chem. Int. Ed. Engl. 1989, 28, 1–20; c) H. Frey, Angew. Chem. 1998, 110, 2313–2318; Angew. 	Chem. Int. Ed. 1998, 37, 2193–2197.

* Limited support for journal abbreviations

#Basic Structure of a CSL style
* CSL is an XML language - it looks a lot like html. Like webpages, CSL styles are built up of nested nodes.
* `<style>` The parent of all other nodes. contains basic info and "global" options such as default language
* `<info>` section contains name of style and other identifiers
* `<macro>` multiple macros that define recurring parts of the style (optional but useful)
* `<citation>` defines the format for the in-text citation (required)
* `<bibliography>` defines the bibliography (optional, but almos always required).

#Key CSL elements
* `<text>` prints something - a variable, a macro, etc.
* `<choose>` begins a conditional: if --> then. Requires `<if>` as a child
* `<names>` and `<date>` get special treatment
* `<group>` groups several elements together.
* `<label>` prints a label - such as "pp." for a variable
* prefix, suffix, delimiter - determine what happens between items.

#Using the Visual Editor#
* The core idea of the visual editor is that you do as little editing as possible
* Use the "search by example" function, especially the "book chapter" function.

#Let's write some citation styles!!! 
