import { LitElement, html, css, property, customElement } from 'lit-element'
import {connect, Card10} from './bluetooth'
import { InputEvent, hexToRgb } from './utils';

@customElement('my-app')
class MyApp extends LitElement {
	@property({ type: Object })
	error = ''

	@property()
	card: Card10

	render() {
		return html`
			${this.error
				? html`
						<div class="error">${this.error}</div>
				  `
				: ''}
			${this.card
				? html`
						Lets do awesome things!
						<input type="color" @input=${(e: InputEvent) => {
							if (e.target) {
								this.card.bottomLeftLed.write(hexToRgb(e.target.value))
							}
						}} />
				  `
				: html`
						<button @click=${this.connect}>connect</button>
				  `}
		`
	}

	async connect() {
		try {
			this.clearError()
			this.card = await connect()
		} catch (e) {
			this.error = e
		}
	}

	clearError() {
		this.error = ''
	}
}
