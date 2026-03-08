'use client';

import { useEffect, useState } from 'react';

export default function Home() {
	const [activeSection, setActiveSection] = useState('about');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const sections = document.querySelectorAll('section[id]');
		sections.forEach((section) => observer.observe(section));

		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	return (
		<main className="min-h-screen px-6 pb-16 pt-28">
			<nav className="fixed inset-x-0 top-4 z-50">
				<div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-background/90 p-1 shadow-sm backdrop-blur dark:border-zinc-800">
					<a
						href="#about"
						className={`rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
							activeSection === 'about'
								? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
								: 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'
						}`}
					>
						About
					</a>
					<a
						href="#work"
						className={`rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
							activeSection === 'work'
								? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
								: 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'
						}`}
					>
						Work
					</a>
					<a
						href="#projects"
						className={`rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
							activeSection === 'projects'
								? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
								: 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'
						}`}
					>
						Projects
					</a>
					<a
						href="#extracurriculars"
						className={`rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
							activeSection === 'extracurriculars'
								? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
								: 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'
						}`}
					>
						Extracurriculars
					</a>
				</div>
			</nav>

<section id="about" className="mx-auto flex min-h-screen w-full max-w-3xl scroll-mt-20 items-center">
			<div className="flex w-full flex-col items-center gap-6 text-center">
				<img
					src="/me.jpg"
					alt="José"
					className="h-40 w-40 shrink-0 rounded-full object-cover sm:h-48 sm:w-48"
				/>
				<div>
					<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
						José Sousa
					</h1>
					<p className="mt-2 text-base font-medium text-zinc-600 dark:text-zinc-400">
						Computer Engineering Student @ FEUP
					</p>
					<p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
						Passionate about using tech to solve real world problems and make life easier.
						</p>
					</div>
				</div>
			</section>

			<section id="work" className="mx-auto flex min-h-screen w-full max-w-4xl scroll-mt-20 flex-col justify-center py-16">
				<h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Work</h2>
				<div className="space-y-5">
					<div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
						<div>
							<h3 className="text-lg font-semibold">Intern</h3>
							<p className="text-sm text-zinc-600 dark:text-zinc-400">RAPDM · Summer 2025</p>
						</div>
						<ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
							<li>• Built a platform for Amazon sellers to track reviews, ratings, and finances</li>
							<li>• Developed the backend with Django and integrated the Amazon SP-API</li>
							<li>• Created a responsive frontend using React</li>
						</ul>
						<div className="mt-3 flex flex-wrap gap-1.5">
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Django</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">React</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Coolify</span>
						</div>
					</div>

					<div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
						<div>
							<h3 className="text-lg font-semibold">Intern</h3>
							<p className="text-sm text-zinc-600 dark:text-zinc-400">Altice Labs · Summer 2024</p>
						</div>
						<ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
							<li>• Developed a web app to manage JIRA projects across multiple instances</li>
							<li>• Implemented an API proxy for seamless cross-instance integration</li>
							<li>• Automated version-closure checks to reduce manual work</li>
						</ul>
						<div className="mt-3 flex flex-wrap gap-1.5">
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Go</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">React</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Tailwind CSS</span>
						</div>
					</div>
				</div>
			</section>

			<section id="projects" className="mx-auto flex min-h-screen w-full max-w-4xl scroll-mt-20 flex-col justify-center py-16">
				<h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
				<div className="space-y-5">
					<div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
						<div className="flex items-start justify-between">
							<h3 className="text-lg font-semibold">Compiler for a Subset of Java</h3>
							<span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
								99.3%
							</span>
						</div>
						<ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
							<li>• Developed a compiler with optimizations including constant folding, constant propagation, dead code elimination, and register allocation</li>
							<li>• Achieved a 99.3% pass rate on the test suite</li>
						</ul>
						<div className="mt-3 flex flex-wrap gap-1.5">
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">ANTLR</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Java</span>
						</div>
					</div>

					<div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
						<div className="flex items-start justify-between">
							<h3 className="text-lg font-semibold">ProGram</h3>
							<span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
								19.2/20
							</span>
						</div>
						<p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
							Developed a social media platform for programmers
						</p>
						<div className="mt-3 flex flex-wrap gap-1.5">
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Laravel</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">JavaScript</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Blade</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Tailwind CSS</span>
						</div>
					</div>

					<div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
						<div className="flex items-start justify-between">
							<h3 className="text-lg font-semibold">UFC Fight Prediction</h3>
							<span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
								20/20
							</span>
						</div>
						<ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
							<li>• Trained, evaluated, and compared multiple machine learning models to predict outcomes of UFC fights</li>
							<li>• Achieved a prediction accuracy of 71%</li>
						</ul>
						<div className="mt-3 flex flex-wrap gap-1.5">
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Python</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Pandas</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Scikit-learn</span>
						</div>
					</div>
				</div>
			</section>

			<section id="extracurriculars" className="mx-auto flex min-h-screen w-full max-w-4xl scroll-mt-20 flex-col justify-center py-16">
				<h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Extracurriculars</h2>
				<div className="space-y-5">
					<div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
						<div>
							<h3 className="text-lg font-semibold">Telemetry Team Member</h3>
							<p className="text-sm text-zinc-600 dark:text-zinc-400">Porto Space Team · Aug 2025 - Present</p>
						</div>
					</div>

					<div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
						<div>
							<h3 className="text-lg font-semibold">Member</h3>
							<p className="text-sm text-zinc-600 dark:text-zinc-400">NIAEFEUP · 2023 - Present</p>
						</div>
						<p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
							Contributed to projects like TTS, NIJOBS, and ENEI 2025 website
						</p>
						<div className="mt-3 flex flex-wrap gap-1.5">
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">React</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Node.js</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Tailwind CSS</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">MongoDB</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">PostgreSQL</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Django</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Adonis.js</span>
							<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium dark:bg-zinc-800">Shadcn</span>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
