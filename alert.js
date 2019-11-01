chrome.storage.sync.get(['clickData'], function (items) {
    console.log('clickData??? :', items)
    alert(`clickData : ${items.clickData}`);
})

