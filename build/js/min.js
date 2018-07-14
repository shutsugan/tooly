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
		const top = this._element.getBoundingClientRect().top - height - 15 + document.documentElement.scrollTop;
		let left = this._element.offsetWidth / 2 - width / 2 + this._element.getBoundingClientRect().left + document.documentElement.scrollLeft;
	
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
				if (this._tooltip === null) return;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9vbHRpcCB7XG5cdC8qKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG5cdFx0dGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cblx0XHRjb25zdCB0b29sdGlwX3RhcmdldCA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnKTtcblxuXHRcdGlmICh0b29sdGlwX3RhcmdldCkgdGhpcy5fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvb2x0aXBfdGFyZ2V0KS5pbm5lckhUTUw7XG5cdFx0ZWxzZSB0aGlzLl90aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXHRcdFxuXHRcdHRoaXMuX3Rvb2x0aXAgPSBudWxsO1xuXG5cdFx0dGhpcy5fYWRkRXZlbnRMaXN0ZW5lcigpO1xuXHR9XG5cblx0X2FkZEV2ZW50TGlzdGVuZXIoKSB7XG5cdFx0dGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBfID0+IHRoaXMuX292ZXIoKSk7XG5cdFx0dGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIF8gPT4gdGhpcy5fb3V0KCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhbmQgaW5qZWN0IHRoZSB0b29sdGlwIGluIHRoZSBIVE1MXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdF9jcmVhdGVUb29sdGlwKCkge1xuXHRcdGlmICh0aGlzLl90b29sdGlwID09PSBudWxsKSB7XG5cdFx0XHRsZXQgdG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dG9vbHRpcC5pbm5lckhUTUwgPSB0aGlzLl90aXRsZTtcblx0XHRcdHRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndG9vbHknKTtcblxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b29sdGlwKTtcblx0XHRcdHRoaXMuX3Rvb2x0aXAgPSB0b29sdGlwO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9vbHRpcCBhbmQgc2hvdy5cblx0ICovXG5cdF9vdmVyKCkge1xuXHRcdGNvbnN0IHRvb2x0aXAgPSB0aGlzLl9jcmVhdGVUb29sdGlwKCk7XG5cdFx0Y29uc3Qgd2lkdGggPSB0b29sdGlwLm9mZnNldFdpZHRoO1xuXHRcdGNvbnN0IGhlaWdodCA9IHRvb2x0aXAub2Zmc2V0SGVpZ2h0O1xuXHRcdGNvbnN0IHRvcCA9IHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gaGVpZ2h0IC0gMTUgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdGxldCBsZWZ0ID0gdGhpcy5fZWxlbWVudC5vZmZzZXRXaWR0aCAvIDIgLSB3aWR0aCAvIDIgKyB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcblx0XG5cdFx0aWYgKGxlZnQgPCAyMCkgbGVmdCA9IDIwO1xuXG5cdFx0dG9vbHRpcC5zdHlsZS5sZWZ0ID0gIGAke2xlZnR9cHhgO1xuXHRcdHRvb2x0aXAuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcblx0XHR0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlIHRoZSB0b29wdGlwIHdpdGggYSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0X291dCgpIHtcblx0XHRpZiAodGhpcy5fdG9vbHRpcCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG5cblx0XHRcdHRoaXMuX3Rvb2x0aXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF8gPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5fdG9vbHRpcCA9PT0gbnVsbCkgcmV0dXJuO1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuX3Rvb2x0aXApO1xuXHRcdFx0XHR0aGlzLl90b29sdGlwID0gbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBseSB0aGUgdG9vbHRpcCB0byB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG5cdCAqL1xuXHRzdGF0aWMgYmluZCAoc2VsZWN0b3IpIHtcblx0XHRBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5mb3JFYWNoKGVsZW1lbnQgPT4gbmV3IFRvb2x0aXAoZWxlbWVudCkpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7Il19
