import React, { ReactNode, useMemo } from "react";
import { useThemeDetection, useReducedMotion } from "../../../hooks/useDarkMode";

interface GradientTextProps {
	children: ReactNode;
	className?: string;
	lightColors?: string[];
	darkColors?: string[];
	animationSpeed?: number;
	showBorder?: boolean;
}

export default function GradientText({
	children,
	className = "",
	lightColors = ["#8B6F47", "#6B7F6B", "#D4C4B0", "#8B6F47"], // Cognac to sage to light cognac
	darkColors = ["#A69080", "#6B7F6B", "#F5F3F0", "#A69080"], // Taupe to sage to warm white
	animationSpeed = 8,
	showBorder = false,
}: GradientTextProps) {
	// Optimized hooks
	const isDarkMode = useThemeDetection();
	const prefersReducedMotion = useReducedMotion();

	// Memoized gradient style calculation
	const gradientStyle = useMemo(() => {
		const colors = isDarkMode ? darkColors : lightColors;
		return {
			backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
			animationDuration: prefersReducedMotion ? '0s' : `${animationSpeed}s`,
		};
	}, [isDarkMode, darkColors, lightColors, animationSpeed, prefersReducedMotion]);

	return (
		<span
			className={`relative inline-block ${className}`}
		>
			{showBorder && (
				<div
					className={`absolute inset-0 bg-cover z-0 pointer-events-none ${prefersReducedMotion ? '' : 'animate-gradient'}`}
					style={{
						...gradientStyle,
						backgroundSize: "300% 100%",
					}}
				>
					<div
						className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
						style={{
							width: "calc(100% - 2px)",
							height: "calc(100% - 2px)",
							left: "50%",
							top: "50%",
							transform: "translate(-50%, -50%)",
						}}
					></div>
				</div>
			)}
			<span
				className={`relative z-2 text-transparent bg-cover ${prefersReducedMotion ? '' : 'animate-gradient'}`}
				style={{
					...gradientStyle,
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					backgroundSize: "300% 100%",
				}}
			>
				{children}
			</span>
		</span>
	);
}