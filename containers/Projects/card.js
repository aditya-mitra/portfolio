import { useState, useEffect, useRef, useMemo } from 'react';

import {
	handleDragStart,
	handleDrag,
	handleDragEnd,
	handleTouchStart,
	handleTouchEnd,
} from './cardMouseMovements';
import {
	LinkButtons,
	StackTags,
	CardItems,
	RadioBullets,
	mountObserverCard,
} from './cardComponents';

import { useColorMode, LightMode, RadioGroup } from '@chakra-ui/react';

import { allStyles } from '@/styles/card';
import { scaleOut as scaleClass } from '@/styles/utils.module.css';

export default function Card({ codex, sourceItems, links, stacks }) {
	const { colorMode } = useColorMode();
	const containerRef = useRef(null);
	const [hasScaledOut, setHasScaledOut] = useState(false);

	const uniqueMark = sourceItems[0].id; // both are same
	const [currentItem, setCurrentItem] = useState(uniqueMark);
	const totalItems = sourceItems.length;

	/**
	 * changes the state of the currentItem of the card
	 * @param {Object} event value of the card content to change into
	 * @param {Object} event.target
	 * @param {String} event.target.value
	 */
	const displayCard = (event) => {
		const container = containerRef.current;
		const preItem = container.querySelector(`#item${currentItem}`);
		preItem.classList.remove('visible');
		const preTap = container.querySelector(`#tap${currentItem}`);
		preTap.classList.remove('checked');
		setCurrentItem(parseInt(event.target.value));
	};

	useEffect(() => {
		const container = containerRef.current;
		const item = container.querySelector(`#item${currentItem}`);
		item.classList.add('visible');
		if (totalItems > 1) {
			const tap = container.querySelector(`#tap${currentItem}`);
			tap.classList.add('checked');
		}
	}, [currentItem]);

	useEffect(() => {
		mountObserverCard(containerRef.current, uniqueMark, totalItems, setHasScaledOut);
	}, []);

	useEffect(() => {
		if (hasScaledOut === true) {
			const container = containerRef.current;
			container.classList.add(scaleClass);
		}
	}, [hasScaledOut, colorMode]);

	const Links = useMemo(() => LinkButtons(links, colorMode), [links, colorMode]);
	const Stacks = useMemo(() => StackTags(stacks), [stacks]);
	const Items = useMemo(
		() => CardItems(codex, sourceItems, colorMode, uniqueMark, hasScaledOut),
		[codex, sourceItems, colorMode, uniqueMark, hasScaledOut]
	);
	const Bullets = useMemo(() => RadioBullets(sourceItems, currentItem, totalItems, displayCard), [
		sourceItems,
		currentItem,
		uniqueMark,
		totalItems,
		displayCard,
	]);

	return (
		<>
			<style jsx>{allStyles}</style>
			<article
				className={`card ${colorMode === 'dark' ? 'dark' : null}`}
				ref={containerRef}
				onMouseDown={(event) => handleDragStart(event, totalItems)}
				onMouseMove={(event) =>
					handleDrag(event, uniqueMark, totalItems, currentItem, displayCard)
				}
				onMouseUp={() => handleDragEnd()}
				onTouchStart={(event) => handleTouchStart(event)}
				onTouchEnd={(event) =>
					handleTouchEnd(event, uniqueMark, totalItems, currentItem, displayCard)
				}>
				{Items}
				<div className="bullets" style={{ top: `calc(100%/${Items.length})` }}>
					<RadioGroup defaultValue="1" value={currentItem}>
						<div className="sliders">{Bullets}</div>
					</RadioGroup>
				</div>
				<LightMode>
					<div className="links">{Links}</div>
					<div className="stacks">{Stacks}</div>
				</LightMode>
			</article>
		</>
	);
}
