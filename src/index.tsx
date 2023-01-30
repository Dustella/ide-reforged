/* @refresh reload */
import { render } from 'solid-js/web'
import '@unocss/reset/tailwind.css'
// Import daisyUI **BEFORE** UnoCSS
import '@kidonng/daisyui/index.css'
import 'uno.css'
import App from './App'

render(
  () => (
        <App />
  ),
  document.getElementById('root') as HTMLElement,
)
