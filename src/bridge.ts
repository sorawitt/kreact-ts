/**
 * Open a URL using the platform's preferred mechanism (native bridge or browser).
 *
 * Tries an iOS WebKit message handler (`window.webkit.messageHandlers.openExternalWebFromUrl`) first,
 * then an Android bridge (`window.AndroidApp.openExternalWebFromUrl`), and falls back to opening
 * the URL in a new browser tab (`window.open(url, "_blank")`) if no native bridge is available.
 *
 * Errors during the attempt are caught and logged to the console.
 *
 * @param url - The destination URL to open.
 */
export default function openExternalWebFromUrl(url: string) {
  try {

    if ((window as any)?.webkit?.messageHandlers?.openExternalWebFromUrl) {
      (window as any).webkit.messageHandlers.openExternalWebFromUrl.postMessage(url)
      return
    }

    if ((window as any)?.AndroidApp?.openExternalWebFromUrl) {
      (window as any).AndroidApp.openExternalWebFromUrl(url)
      return
    }

    window.open(url, "_blank")
  } catch (e) {
    console.error("openExternalWebFromUrl failed:", e)
  }
}
