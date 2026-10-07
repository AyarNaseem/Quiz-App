const paths = {
spark:'M12 2v5m0 10v5M2 12h5m10 0h5M5 5l3 3m8 8 3 3M5 19l3-3m8-8 3-3',
grid:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
chart:'M4 20V10m8 10V4m8 16v-7',
bulb:'M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2',
globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c-5 5-5 13 0 18 5-5 5-13 0-18Z',
moon:'M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z',
sun:'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1',
arrow:'M5 12h14m-5-5 5 5-5 5', clock:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 7v5l3 2',
layers:'m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5',
bolt:'m13 2-9 12h7l-1 8 10-12h-7Z',
trophy:'M8 3h8v8a4 4 0 0 1-8 0ZM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 15v5m-4 1h8',
target:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
book:'M12 5C8 2 3 4 3 4v16s5-2 9 1c4-3 9-1 9-1V4s-5-2-9 1Zm0 0v16',
search:'M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-2 5 6 6', close:'m6 6 12 12M6 18 18 6',check:'m5 12 4 4L19 6',
sliders:'M4 7h6m4 0h6M4 17h10m4 0h2M10 4v6m4 4v6', science:'M9 3h6m-5 0v7L4 20h16l-6-10V3M7 15h10',
tech:'M7 7h10v10H7zM9 3v4m6-4v4M9 17v4m6-4v4M3 9h4m-4 6h4m10-6h4m-4 6h4',
culture:'m3 9 9-6 9 6ZM5 10v8m7-8v8m7-8v8M3 21h18M3 18h18',math:'M5 6h6M8 3v6M15 6h6M5 15l6 6m-6 0 6-6M15 16h6m-6 4h6',
sports:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 7l5 4-2 6H9l-2-6ZM12 3v4m9 2-4 2m-2 6 2 3M9 17l-2 3M3 9l4 2',
}
export default function Icon({name, ...props}) {
return <svg data-icon={name} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name] || paths.spark}/></svg>
}
