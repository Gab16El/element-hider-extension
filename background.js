chrome.action.onClicked.addListener((tab) => {
    const url = tab.url || '';

    if (url.startsWith('chrome://') || url.startsWith('edge://') || url.startsWith('chrome-extension://')) {
        console.warn('No se puede ejecutar en esta página.');
        return;
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});
