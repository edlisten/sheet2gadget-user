# sheet2gadget-user

This will take a google sheet and allow you to publish it as a google site gadget, or webpage (google web app scripts do not allow embidding via iframe).
This is designed to be a free alternative to Awesome Tables.

Here is a google document template you can use:  Sheet2Gadget looks for a s2g_Data sheet and s2g_Template sheet.  The document must be made public.
https://docs.google.com/spreadsheets/d/1VKC1hg1u9BLHzWxcr-gS4J3dGbi2MW-M0uj5YaEJj24/copy

Once you have the sheet set up create a new Stand Alone App Script, and copy and past the code.gs and s2g.html file into the project.
in the code.gs file there is a place. to put the project Id of the google doc that you made a copy of.   Once that is done publish the script as a web app and copy the url.

On your google site click insert then app script, and paste the URL provided to you in the previous step.

This is currently being used to distribute the Weekly Slate Bullitins on the http://www.fhuhs.org webpage.

I hopt to at some point turn this into an add-on, however App script is not very accomodating.  Many of my add-ons can be found at scripts.edlisten.com.   

