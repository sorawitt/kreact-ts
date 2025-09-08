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
