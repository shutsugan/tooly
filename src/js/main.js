class Tooltip {
	/**
	 * @param {HTMLElement} element
	 */
	constructor(element) {
		this._element = element;

		const tooltip_target = this._element.getAttribute('data-tooltip');
		if (tooltip_target) this._title = document.querySelector(tooltip_target).innerHTML;
		else this._title = this._element.getAttribute('title');
		
		this._tooltip = null;

		this._addEventListener();
	}

	_addEventListener() {
		this._element.addEventListener('mouseover', _ => this._over());
		this._element.addEventListener('mouseout', _ => this._out());
	}

	/**
	 * Create and inject the tooltip in the HTML
	 * @returns {HTMLElement}
	 */
	_createTooltip() {
		if (this._tooltip === null) {
			let tooltip = document.createElement('div');
			tooltip.innerHTML = this._title;
			tooltip.classList.add('tooly');

			document.body.appendChild(tooltip);
			this._tooltip = tooltip;

		}

		return this._tooltip;
	}

	/**
	 * Calculate the position of the tooltip and show.
	 */
	_over() {
		const tooltip = this._createTooltip();
		const width = tooltip.offsetWidth;
		const height = tooltip.offsetHeight;
		const left = this._element.offsetWidth / 2 - width / 2 + this._element.getBoundingClientRect().left + document.documentElement.scrollLeft;
		const top = this._element.getBoundingClientRect().top - height - 15 + document.documentElement.scrollTop;
	
		if (left < 20) left = 20;

		tooltip.style.left =  `${left}px`;
		tooltip.style.top = `${top}px`;
		tooltip.classList.add('visible');
	}

	/**
	 * Hide the tooptip with a transition.
	 */
	_out() {
		if (this._tooltip !== null) {
			this._tooltip.classList.remove('visible');

			this._tooltip.addEventListener('transitionend', _ => {
				document.body.removeChild(this._tooltip);
				this._tooltip = null;
			});
		}
	}

	/**
	 * Apply the tooltip to the selected element.
	 * @param {string} selector
	 */
	static bind (selector) {
		Array.from(document.querySelectorAll(selector)).forEach(element => new Tooltip(element));
	}
}

export default Tooltip;