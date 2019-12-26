import { LitElement, html, css, property } from 'lit-element'
import { connect, Card10, supported } from './bluetooth'
import { InputEvent, hexToRgb } from './utils'
import { card10Face } from './face'

class MyApp extends LitElement {
	@property({ type: String })
	error = ''

	@property({ attribute: false })
	card: Card10

	static get styles() {
		return css`
			svg {
				color: #888;
				width: 100%;
			}
			svg button {
				width: 100%;
				height: 100%;
				font: inherit;
				font-size: 2em;
			}
		`
	}

	render() {
		return html`
			${this.error
				? html`
						<div class="error">${this.error}</div>
				  `
				: ''}
			${this.card
				? html`
						<h1>Lets do awesome things!</h1>
						Set led color
						<input
							type="color"
							@input=${async (e: InputEvent) => {
								if (e.target) {
									const c = hexToRgb(e.target.value)
									await this.card.bottomLeftLed.write(c)
									await this.card.bottomRightLed.write(c)
									await this.card.topLeftLed.write(c)
									await this.card.topRightLed.write(c)
								}
							}}
						/>
						<br />
						Set clock
						<button
							@click=${() => {
								this.card.clock.now()
							}}
						>
							now
						</button>
						<br />
						Vibrate
						<button
							@click=${() => {
								this.card.vibrate(1000)
							}}
						>
							1s
						</button>
				  `
				: card10Face({
						screen: html`
							<button @click=${this.connect}>connect</button>
						`,
				  })}
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

if (supported) {
	customElements.define('my-app', MyApp)
}
