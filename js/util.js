const createLayoutComponents = () => {
	const createCardEl = () => {
		const cardEl = document.createElement('article');
		cardEl.className = 'card';

		/* card image */
		const cardImageWrapperEl = document.createElement('div');
		cardImageWrapperEl.className = 'card__image';

		const cardImageInnerEl = document.createElement('div');
		cardImageInnerEl.className = 'card__image-inner';

		const cardImageEl = document.createElement('img');
		cardImageEl.src = './images/meeting.jpg';
		cardImageEl.alt = 'People at a meeting';

		cardImageInnerEl.appendChild(cardImageEl);

		cardImageWrapperEl.appendChild(cardImageInnerEl);

		/* card content */
		const cardContentEl = document.createElement('div');
		cardContentEl.className = 'card__content';

		/* card title */
		const cardTitleEl = document.createElement('h2');
		cardTitleEl.className = 'card__title';
		cardTitleEl.textContent = 'Get ';

		const cardTitleSpanEl = document.createElement('mark');
		cardTitleSpanEl.textContent = 'insight';

		cardTitleEl.append(cardTitleSpanEl, ' that help your business grow.');

		/* card description */
		const cardDescriptionEl = document.createElement('p');
		cardDescriptionEl.className = 'card__desc';
		cardDescriptionEl.textContent =
			'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.';

		/* card statuses */
		const cardStatusListEl = document.createElement('ul');
		cardStatusListEl.className = 'card__stats-list';

		const cardStatuses = [
			{
				label: 'Companies',
				amount: '10K+',
			},
			{
				label: 'Templates',
				amount: '314',
			},
			{
				label: 'Queries',
				amount: '12M+',
			},
		];

		for (const status of cardStatuses) {
			const cardStatusItemEl = document.createElement('li');
			cardStatusItemEl.className = 'card__stats-list-item';

			const cardStatusItemAmountEl = document.createElement('span');
			cardStatusItemAmountEl.className = 'num';
			cardStatusItemAmountEl.textContent = status.amount;

			const cardStatusItemTextEl = document.createElement('span');
			cardStatusItemTextEl.className = 'label';
			cardStatusItemTextEl.textContent = status.label;

			cardStatusItemEl.appendChild(cardStatusItemAmountEl);
			cardStatusItemEl.appendChild(cardStatusItemTextEl);

			cardStatusListEl.appendChild(cardStatusItemEl);
		}

		cardContentEl.appendChild(cardTitleEl);
		cardContentEl.appendChild(cardDescriptionEl);
		cardContentEl.appendChild(cardStatusListEl);

		cardEl.appendChild(cardImageWrapperEl);
		cardEl.appendChild(cardContentEl);

		return cardEl;
	};

	/* header */
	const headerEl = document.createElement('header');

	const headerTitleEl = document.createElement('h1');
	headerTitleEl.className = 'sr-only';
	headerTitleEl.textContent = 'Stats preview card component';

	headerEl.appendChild(headerTitleEl);

	/* main */
	const mainEl = document.createElement('main');

	const mainContainerEl = document.createElement('div');
	mainContainerEl.className = 'container';

	const cardEl = createCardEl();

	mainContainerEl.appendChild(cardEl);

	mainEl.appendChild(mainContainerEl);

	/* footer */
	const footerEl = document.createElement('footer');

	const footerContainerEl = document.createElement('div');
	footerContainerEl.className = 'container';

	const footerTextEl = document.createElement('p');
	footerTextEl.textContent = 'Challenge by ';

	const footerTextLinkCreatorEl = document.createElement('a');
	footerTextLinkCreatorEl.href =
		'https://www.frontendmentor.io?ref=challenge';
	footerTextLinkCreatorEl.className = 'btn btn--link';
	footerTextLinkCreatorEl.textContent = 'Frontend Mentor';
	footerTextLinkCreatorEl.rel = 'noopener';
	footerTextLinkCreatorEl.target = '_blank';

	const footerTextLinkCoderEl = document.createElement('a');
	footerTextLinkCoderEl.href = 'https://github.com/al3xback';
	footerTextLinkCoderEl.className = 'btn btn--link';
	footerTextLinkCoderEl.textContent = 'al3xback';
	footerTextLinkCoderEl.rel = 'noopener';
	footerTextLinkCoderEl.target = '_blank';

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return {
		headerEl,
		cardEl,
		mainEl,
		footerEl,
	};
};

export default createLayoutComponents;
