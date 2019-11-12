import { LitElement, html, css, property, customElement } from 'lit-element'
import * as bt from './bluetooth'

@customElement('my-app')
class MyApp extends LitElement {
	@property({ type: Object })
	error = ''

	@property()
	connected = false

	render() {
		return html`
			${this.error
				? html`
						<div class="error">${this.error}</div>
				  `
				: ''}
			${this.connected
				? `Lets do awesome things!`
				: html`
						<button @click=${this.connect}>connect</button>
				  `}
		`
	}

	async connect() {
		try {
			this.clearError()
			await bt.connect()
			this.connected = true
		} catch (e) {
			this.error = e
		}
	}

	clearError() {
		this.error = ''
	}
}
