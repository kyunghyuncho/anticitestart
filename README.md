# Gemini Cite Cleaner

A browser extension to automatically remove the spurious `[cite_start]` text that sometimes appears in Gemini responses.

## Installation Instructions (Microsoft Edge / Chrome)

1.  Clone this repository or download the files to a local folder.
2.  Open your browser (Edge or Chrome).
3.  Navigate to the extensions management page:
    *   **Edge**: `edge://extensions`
    *   **Chrome**: `chrome://extensions`
4.  Enable **Developer Mode** (usually a toggle switch).
5.  Click the **"Load unpacked"** button.
6.  Select the directory containing this repository (where `manifest.json` is located).
7.  The extension "Gemini Cite Cleaner" should now appear in your list of extensions.

## Usage

1.  Go to [gemini.google.com](https://gemini.google.com).
2.  Use Gemini as usual.
3.  The extension will automatically monitor the page and remove any instances of `[cite_start]` that appear in the text.
4.  You can open the Developer Console (F12) to see logs when the extension cleans a tag.

## Files

*   `manifest.json`: Extension configuration.
*   `content.js`: The script that runs on the page to clean the text.