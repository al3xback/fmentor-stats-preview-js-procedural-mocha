import assert from 'assert';
import jsdom from 'jsdom';

import createLayoutComponents from '../js/util.js';

const { JSDOM } = jsdom;

describe('DOM', () => {
	beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	it('should have a header element', () => {
		const { headerEl } = createLayoutComponents();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	it('should have a card element', () => {
		const { cardEl } = createLayoutComponents();
		document.body.appendChild(cardEl);

		const isCardElExist = !!document.querySelector('.card');
		assert.ok(isCardElExist);
	});

	it('should have a main element', () => {
		const { mainEl } = createLayoutComponents();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	it('should have a footer element', () => {
		const { footerEl } = createLayoutComponents();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
