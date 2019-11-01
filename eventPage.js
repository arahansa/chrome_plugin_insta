var menuItem = {
    "id": "instaLinkClick",
    "title": "Insta Crawl",
    "contexts": ["link"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    let data = {
        "clickData": clickData
    }
    if (clickData.menuItemId == "instaLinkClick"){
        chrome.storage.sync.set(data, () => chrome.tabs.executeScript({file: 'alert.js'}))
    }
});
