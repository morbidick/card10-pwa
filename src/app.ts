import { LitElement, html, css, property } from 'lit-element'
import { connect, Card10, supported } from './bluetooth'
import { InputEvent, hexToRgb } from './utils'
import { card10Face } from './face'

class MyApp extends LitElement {
	@property({ type: String })
	error = ''

	@property({ attribute: false })
	card: Card10 | null

	static get styles() {
		return css`
			* {
				box-sizing: border-box;
			}
			svg {
				color: #888;
				width: 100%;
			}
			svg button,
			svg input {
				width: 100%;
				height: 100%;
				font: inherit;
			}
			button.connect {
				font-size: 2em;
			}
			.rotate {
				display: block;
				transform: rotate(-90deg) translate(-50%);
			}
			label.hidden {
				display: block;
				width: 0;
				height: 0;
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
			${!this.card
				? card10Face({
						screen: html`
							<button class="connect" @click=${this.connect}>
								connect
							</button>
						`,
				  })
				: card10Face({
						screen: html`
							<button
								@click=${() => {
									this.card?.clock.now()
								}}
							>
								Set current time
							</button>
						`,
						topLeftLed: html`
							<label class="hidden" for="topLeftLed">
								set top left led color
							</label>
							<input
								id="topLeftLed"
								type="color"
								@input=${async (e: InputEvent) => {
									if (e.target) {
										const c = hexToRgb(e.target.value)
										await this.card?.topLeftLed.write(c)
									}
								}}
							/>
						`,
						topRightLed: html`
							<label class="hidden" for="topRightLed">
								set top right led color
							</label>
							<input
								id="topRightLed"
								type="color"
								@input=${async (e: InputEvent) => {
									if (e.target) {
										const c = hexToRgb(e.target.value)
										await this.card?.topRightLed.write(c)
									}
								}}
							/>
						`,
						bottomLeftLed: html`
							<label class="hidden" for="bottomLeftLed">
								set bottom left led color
							</label>
							<input
								id="bottomLeftLed"
								type="color"
								@input=${async (e: InputEvent) => {
									if (e.target) {
										const c = hexToRgb(e.target.value)
										await this.card?.bottomLeftLed.write(c)
									}
								}}
							/>
						`,
						bottomRightLed: html`
							<label class="hidden" for="bottomRightLed">
								set bottom right led color
							</label>
							<input
								id="bottomRightLed"
								type="color"
								@input=${async (e: InputEvent) => {
									if (e.target) {
										const c = hexToRgb(e.target.value)
										await this.card?.bottomRightLed.write(c)
									}
								}}
							/>
						`,
						vibrationMotor: html`
							<button
								@click=${() => {
									this.card?.vibrate(1000)
								}}
							>
								<span class="rotate">vibrate</span>
							</button>
						`,
				  })}
		`
	}

	async connect() {
		try {
			this.clearError()
			this.card = await connect(() => (this.card = null))
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
