import { GoMarkGithub } from 'react-icons/go';
import { BiLink } from 'react-icons/bi';
import { FaPenNib } from 'react-icons/fa';
import {
	SiReact,
	SiNextDotJs,
	SiPostgresql,
	SiMongodb,
	SiRedux,
	SiReactrouter,
	SiMarkdown,
	SiHtml5,
	SiNetlify,
	SiDjango,
	SiFirebase,
} from 'react-icons/si';
import { GrTechnology, GrCss3, GrNode } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';
import { IoLogoJavascript } from 'react-icons/io';
import { ImCodepen } from 'react-icons/im';
import { BsFillTriangleFill } from 'react-icons/bs';

export const glossIcon = {
	// links
	github: GoMarkGithub,
	app: BiLink,
	blog: FaPenNib,
	netlify: SiNetlify,
	firebase: SiFirebase,
	codepen: ImCodepen,
	vercel: BsFillTriangleFill,

	// stacks
	html: SiHtml5,
	css: GrCss3,
	javascript: IoLogoJavascript,

	nodejs: GrNode,
	expressjs: GrNode,
	reactjs: SiReact,
	redux: SiRedux,
	nextjs: SiNextDotJs,
	'react router': SiReactrouter,

	django: SiDjango,
	postgresql: SiPostgresql,
	mongodb: SiMongodb,

	website: CgWebsite,
	markdown: SiMarkdown,

	other: GrTechnology,
};

export const glossColour = {
	// links
	github: '#C4F1F9',
	app: '#9ae6b4',
	blog: '#feb2b2',
	netlify: '#00b3b3',
	firebase: '#ff6600',
	codepen: '#001a4d',
	vercel: '#000099',

	// stacks
	html: 'green',
	css: 'blue',
	javascript: 'orange',

	nodejs: 'orange',
	expressjs: 'orange',
	reactjs: 'red',
	redux: 'cyan',
	nextjs: 'cyan',
	'react router': 'purple',

	django: 'purple',
	postgresql: 'blue',
	mongodb: 'teal',

	website: 'yellow',
	markdown: 'pink',
};

export default [
	{
		codex: 'cr',
		items: [
			{
                title: 'Code Rush',
				description:
					'This was the runner-up project (2nd) for a hackathon conducted in my college during the pandemic lockdown.',
				imgSrc:
					'https://res.cloudinary.com/gamersinstinct7/image/upload/c_scale,h_300,q_100,w_300/v1604304531/portfolio/Code%20Rush/cr-1_pd3aak.webp',
			},
			{
				title: 'I was the Lead Developer',
				description:
					'A competive coding platform featuring live submission feedbacks, leaderboard, a powerful code editor, supporting 6 languages, admin panel, discussions, plus some more integrations.',
				imgSrc:
					'https://res.cloudinary.com/gamersinstinct7/image/upload/c_scale,h_300,q_100,w_300/v1604304531/portfolio/Code%20Rush/cr-3_mct9ev.webp',
			},
		],
		links: [
			{
				provider: 'github',
				link: 'https://github.com/aditya-mitra/code-rush',
			},
			{
				provider: 'vercel',
				link: 'https://code-rush.vercel.app/',
				darkModeColour: 'gray.600',
			},
		],
		stacks: ['nextjs', 'nodejs', 'mongodb', 'markdown'],
	},
	
	{
		codex: 'whatster',
		items: [
			{
				title: 'Whatster',
				description:
					"WhatsTer is a Chat bot created using Twilio's Messaging API for Whatsapp. If you would like to store messages from your chats in whatsapp itself, this bot can come very handy.",
				imgSrc:
					'https://res.cloudinary.com/gamersinstinct7/image/upload/c_scale,h_300,q_100,w_300/v1604068045/portfolio/Whatster/Whatster_chats_1_dy9iv5.webp',
			},
			{
				title: 'Whatster',
				description:
					'It has a lot of features integrated into it. It has chat based mail service, image recognition, content saving feature all built to a single app, yet this bot is very simple to use.',
				imgSrc:
					'https://res.cloudinary.com/gamersinstinct7/image/upload/c_scale,h_300,q_100,w_300/v1604067858/portfolio/Whatster/Whatster_login_lskciw.webp',
			},
			{
				title: 'Whatster',
				description:
					'Whatster will save your messages on its database and let you secure them with your account. It will send you an OTP for you to login into its webapp.',
				imgSrc:
					'https://res.cloudinary.com/gamersinstinct7/image/upload/c_scale,h_300,q_100,w_300/v1604067858/portfolio/Whatster/Whatster_website_og7dmd.webp',
			},
		],
		links: [
			{
				provider: 'github',
				link: 'https://github.com/aditya-mitra/whatster',
			},
			{
				provider: 'firebase',
				link: 'https://whatster.web.app/',
			},
			{
				provider: 'blog',
				link: 'https://dev.to/adityamitra/whatster-the-chatbot-i-built-for-twilio-9ok',
			},
		],
		stacks: ['expressjs', 'reactjs', 'twilio', 'mongodb', 'react router'],
	},
    {
        codex: 'ccb',
        items: [
            {
                title: 'Character Card Builder',
                description:
                    'Character Card Builder is a web app that lets you make awesome looking cards on the site.',
                imgSrc:
                    'https://res.cloudinary.com/gamersinstinct7/image/upload/c_scale,h_300,q_100,w_300/c_scale,h_300,q_100,w_300/v1604062891/portfolio/Character%20Card%20Builder/CCB_create_1_hzcd34.webp',
            },
            {
                title: 'Character Card Builder',
                description:
                    'It has a ton of features such as an awesome SEARCH feature and a fabulous DARK mode built and integrated into it.',
                imgSrc:
                    'https://res.cloudinary.com/gamersinstinct7/image/upload/c_scale,h_300,q_100,w_300/v1604261385/portfolio/Character%20Card%20Builder/CCB_Search_3_wgxikr.webp',
            },
            {
                title: 'Character Card Builder',
                description:
                    'It also has a LIVE card creator that lets you see the card you as soon as you type. It was my first project that utilized postgresql and redux.',
                imgSrc:
                    'https://res.cloudinary.com/gamersinstinct7/image/upload/c_scale,h_300,q_100,w_300/v1604062660/portfolio/Character%20Card%20Builder/CCB_chars_2_w32zn9.webp',
            },
        ],
        links: [
            {
                provider: 'github',
                link: 'https://github.com/aditya-mitra/card_builder',
            },
            {
                provider: 'netlify',
                link: 'https://charactercardbuilder.netlify.app',
            },
        ],
        stacks: ['nodejs', 'reactjs', 'postgresql', 'redux'],
    },
];
