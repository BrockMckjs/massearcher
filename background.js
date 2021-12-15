chrome.action.onClicked.addListener(function(){
    chrome.tabs.create({'url':"chrome://newtab"})
})