# Publishing Guide

This guide explains how to publish the "Gemini Cite Cleaner" extension to the Chrome Web Store and Microsoft Edge Add-ons.

## 1. Prepare Your Extension

Before publishing, you need to create a ZIP file of your extension.

1.  Ensure you have the following files/folders ready:
    *   `manifest.json` (defines the extension and points to icons)
    *   `content.js` (the cleaning script)
    *   `icons/` (folder containing 16, 32, 48, 128 sizes)
    *   `logo.png` (Keep this handy for Store Listing uploads, but it does not need to be in the zip)
2.  Select `manifest.json`, `content.js`, and the `icons` folder.
3.  Right-click and select **Compress** or **Send to -> Compressed (zipped) folder**.
4.  Name the file `gemini-cite-cleaner.zip`.

---

## 2. Publish to Microsoft Edge Add-ons (Free)

Microsoft Edge Add-ons hosting is free.

1.  **Register as a Developer:**
    *   Go to the [Microsoft Partner Center](https://partner.microsoft.com/en-us/dashboard/microsoftedge/public/login).
    *   Sign in with a Microsoft Account (Outlook, Live, etc.).
    *   Follow the prompts to register. There is **no fee** for Edge extensions.

2.  **Submit Your Extension:**
    *   In the Partner Center, clicking **"Create new extension"**.
    *   Upload the `gemini-cite-cleaner.zip` file you created.
    *   Fill in the store listing details (Description, Logos, Screenshots).
    *   Fill in the store listing details (Description, Logos, Screenshots).
    *   **Note:** Use the `logo.png` file (or `icons/icon128.png`) when asked for an extension logo.
    *   Submit for certification. It usually takes 24-48 hours.

---

## 3. Publish to Chrome Web Store ($5 Fee)

Google charges a **one-time $5 developer registration fee**.

1.  **Register as a Developer:**
    *   Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).
    *   Sign in with your Google Account.
    *   Pay the **$5.00** registration fee.

2.  **Submit Your Extension:**
    *   Click **"New Item"**.
    *   Upload the `gemini-cite-cleaner.zip` file.
    *   Fill in the listing details:
        *   **Description**: Explain what it does clearly.
        *   **Privacy Practices**: You must declare that you are not collecting user data. (This extension runs locally and sends no data).
        *   **Screenshots**: You need at least one screenshot (1280x800 is recommended).
        *   **Icons**: Use `icons/icon128.png` or `logo.png` if a higher resolution is requested.
    *   Submit for review. This can take a few days.

## Tips for Approval

*   **Privacy Policy:** Since this extension does not collect data, you might not strictly need a hosted privacy policy URL for Edge, but it helps. For Chrome, you can declare "No data collected".
*   **Permissions:** We only requested minimal permissions (`activeTab` logic or specific host matching). The manifest uses "matches": ["*://gemini.google.com/*"], which is good and specific.
*   **Description:** Be honest. "Removes specific text artifacts from Gemini responses to improve readability."
