/*
	Installed from https://reactbits.dev/ts/tailwind/
	Optimized with theme awareness and static rendering for performance
*/

import { useRef, useEffect } from "react";
import { useThemeDetection } from "../../../hooks/useDarkMode";

const LetterGlitch = ({
	glitchColors,
}: {
	glitchColors?: string[];
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const context = useRef<CanvasRenderingContext2D | null>(null);

	// Optimized hooks
	const isDarkMode = useThemeDetection();

	// Theme-aware colors
	const getThemeColors = () => {
		if (glitchColors) return glitchColors;

		return isDarkMode
			? ["#FFD93D", "#FF6B6B", "#4F9D9D"] // accent colors for dark mode
			: ["#4338CA", "#6366F1", "#312E81", "#1E1B4B"]; // stronger primary colors for light mode
	};

	const fontSize = 16;
	const charWidth = 10;
	const charHeight = 20;

	const lettersAndSymbols = [
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
		"!", "@", "#", "$", "&", "*", "(", ")", "-", "_", "+", "=", "/", "[", "]", "{", "}", ";", ":", "<", ">", ",",
		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
	];

	const getRandomChar = () => {
		return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
	};

	const getRandomColor = () => {
		return getThemeColors()[Math.floor(Math.random() * getThemeColors().length)];
	};

	const calculateGrid = (width: number, height: number) => {
		const columns = Math.ceil(width / charWidth);
		const rows = Math.ceil(height / charHeight);
		return { columns, rows };
	};

	const generateStaticLetters = (columns: number, rows: number) => {
		const totalLetters = columns * rows;
		return Array.from({ length: totalLetters }, () => ({
			char: getRandomChar(),
			color: getRandomColor(),
		}));
	};

	const resizeCanvas = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const parent = canvas.parentElement;
		if (!parent) return;

		const dpr = window.devicePixelRatio || 1;
		const rect = parent.getBoundingClientRect();

		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;

		canvas.style.width = `${rect.width}px`;
		canvas.style.height = `${rect.height}px`;

		if (context.current) {
			context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
		}

		const { columns, rows } = calculateGrid(rect.width, rect.height);
		const letters = generateStaticLetters(columns, rows);
		drawStaticLetters(letters, columns);
	};

	const drawStaticLetters = (letters: Array<{ char: string, color: string }>, columns: number) => {
		if (!context.current || letters.length === 0) return;
		const ctx = context.current;
		const { width, height } = canvasRef.current!.getBoundingClientRect();
		ctx.clearRect(0, 0, width, height);
		ctx.font = `${fontSize}px monospace`;
		ctx.textBaseline = "top";

		letters.forEach((letter, index) => {
			const x = (index % columns) * charWidth;
			const y = Math.floor(index / columns) * charHeight;
			ctx.fillStyle = letter.color;
			ctx.fillText(letter.char, x, y);
		});
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		context.current = canvas.getContext("2d");
		resizeCanvas();

		let resizeTimeout: number;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				resizeCanvas();
			}, 100);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isDarkMode]); // Re-render when theme changes

	// Theme-aware background and vignette
	const getVignetteStyles = () => {
		if (isDarkMode) {
			return {
				background: "bg-black",
				outerVignette: "bg-[radial-gradient(circle,_rgba(0,0,0,0)_60%,_rgba(0,0,0,1)_100%)]",
			};
		} else {
			return {
				background: "bg-gray-50",
				outerVignette: "bg-[radial-gradient(circle,_rgba(249,250,251,0)_60%,_rgba(249,250,251,1)_100%)]",
			};
		}
	};

	const vignetteStyles = getVignetteStyles();

	return (
		<div className={`relative w-full h-full ${vignetteStyles.background} overflow-hidden`}>
			<canvas ref={canvasRef} className="block w-full h-full" />
			<div className={`absolute top-0 left-0 w-full h-full pointer-events-none ${vignetteStyles.outerVignette}`}></div>
		</div>
	);
};

export default LetterGlitch;
