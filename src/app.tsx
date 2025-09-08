import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import openExternalWebFromUrl from './bridge'

/**
 * Root UI component for the app.
 *
 * Renders Vite and Preact logo links, a heading, a card containing a button that opens
 * an external Krungsri card URL, and links to the Preact + Vite starter guide.
 *
 * @returns The component's JSX element.
 */
export function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => openExternalWebFromUrl('https://www.krungsri.com/th/personal/card/krungsri-boarding-card')}>
          กดฉันสิ กดฉันสิ
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
