export default function navigateToFeature(url: string) {
  try {

    if ((window as any)?.webkit?.messageHandlers?.navigateToFeature) {
      (window as any).webkit.messageHandlers.navigateToFeature.postMessage(url)
      return
    }

    if ((window as any)?.AndroidApp?.navigateToFeature) {
      (window as any).AndroidApp.navigateToFeature(url)
      return
    }

    window.open(url, "_blank")
  } catch (e) {
    console.error("navigateToFeature failed:", e)
  }
}
