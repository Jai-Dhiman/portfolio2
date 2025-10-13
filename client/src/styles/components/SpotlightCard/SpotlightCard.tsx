/*
	Installed from https://reactbits.dev/ts/tailwind/
	Modified for theme-aware colors and improved visibility
	Optimized with shared hooks and accessibility support
*/

import React, { useRef, useState, useCallback } from "react";
import { useThemeDetection, useReducedMotion } from "../../../hooks/useDarkMode";

interface SpotlightCardProps extends React.PropsWithChildren {
	className?: string;
	spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
	children,
	className = "",
	spotlightColor,
}) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState<number>(0);

	// Optimized hooks
	const isDarkMode = useThemeDetection();
	const prefersReducedMotion = useReducedMotion();

	// Dynamic spotlight color based on theme if not provided
	const getSpotlightColor = () => {
		if (spotlightColor) return spotlightColor;
		return isDarkMode
			? "rgba(107, 127, 107, 0.15)" // Muted sage green for dark mode
			: "rgba(139, 111, 71, 0.25)"; // Cognac brown for light mode
	};

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = useCallback((e) => {
		if (!divRef.current || isFocused || prefersReducedMotion) return;

		// Throttle mouse move events for better performance
		requestAnimationFrame(() => {
			if (!divRef.current) return;
			const rect = divRef.current.getBoundingClientRect();
			setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
		});
	}, [isFocused, prefersReducedMotion]);

	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(0.6);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};

	const handleMouseEnter = () => {
		setOpacity(0.6);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`relative rounded-xl border border-gray-200 dark:border-dark-300 bg-white dark:bg-dark-400 overflow-hidden p-6 transition-all ${prefersReducedMotion ? 'duration-0' : 'duration-300'} hover:border-accent-sage dark:hover:border-accent-coral ${className}`}
		>
			<div
				className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity ease-in-out ${prefersReducedMotion ? 'duration-0' : 'duration-500'}`}
				style={{
					opacity: prefersReducedMotion ? 0 : opacity,
					background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${getSpotlightColor()}, transparent 80%)`,
				}}
			/>
			{children}
		</div>
	);
};

export default SpotlightCard;
