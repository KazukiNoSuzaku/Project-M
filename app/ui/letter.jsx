import React from 'react';

function Letter(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const title = props.title || "letter";

	return (
		<svg height="500" width="760" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8205ff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4b0194', stopOpacity: 1 }} />
          </linearGradient>
		  <linearGradient id="grad2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#8205ff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#05daff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
	<g fill={fill}>
		<path d="M33.933,37.5a4.006,4.006,0,0,1-3.867,0L2,22.017V51a6.006,6.006,0,0,0,6,6H56a6.006,6.006,0,0,0,6-6V22.017Z" fill="url(#grad1)"/>
		<path d="M56,7H8a6.006,6.006,0,0,0-6,6v5a1,1,0,0,0,.517.876l29,16a1,1,0,0,0,.966,0l29-16A1,1,0,0,0,62,18V13A6.006,6.006,0,0,0,56,7Z" fill="url(#grad2)"/>
	</g>
</svg>
	);
};

export default Letter;