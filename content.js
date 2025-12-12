// Gemini Cite Cleaner Content Script

console.log("Gemini Cite Cleaner: Active and monitoring for [cite_start]...");

// Function to clean text nodes
function cleanTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes('[cite_start]')) {
    console.log("Gemini Cite Cleaner: Found and removed [cite_start]");
    // Simple replace. If the pattern is complex, we might need regex, but the user specified exactly "[cite_start]"
    // Note: Sometimes these might be part of a larger string.
    node.nodeValue = node.nodeValue.replace(/\[cite_start\]/g, '');
  }
}

// Function to traverse and clean a node and its children
function recursiveClean(node) {
  cleanTextNode(node);
  node.childNodes.forEach(recursiveClean);
}

// Clean the entire document initially
recursiveClean(document.body);

// Observer to handle dynamic updates (streaming responses)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      recursiveClean(node);
    });
    // also check characterData changes for text nodes that update in-place
    if (mutation.type === 'characterData') {
      cleanTextNode(mutation.target);
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});
