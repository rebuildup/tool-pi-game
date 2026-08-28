"use client";

import Link from "next/link";
import PiGame from "./components/PiGame";

export default function PiGameApp() {
	return (
		<div className="relative min-h-screen ">
			<main className="relative z-10 min-h-screen py-10" tabIndex={-1}>
				<div className="mx-auto w-full max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
					<nav
						aria-label="Breadcrumb"
						className="text-xs md:text-sm mb-4 pt-4"
					>
						<ol className="flex items-baseline space-x-1 md:space-x-2 noto-sans-jp-light p-0 list-none m-0">
							<li className="flex items-baseline">
								<Link
									href="/"
									className=" transition-colors duration-200 hover:underline leading-none"
								>
									Home
								</Link>
							</li>
							<li className="flex items-baseline">
								<span className="mx-2 select-none leading-none">/</span>
								<Link
									href="/tools"
									className=" transition-colors duration-200 hover:underline leading-none"
								>
									Tools
								</Link>
							</li>
							<li className="flex items-baseline">
								<span className="mx-2 select-none leading-none">/</span>
								<span className=" leading-none" aria-current="page">
									Pi Memory Game
								</span>
							</li>
						</ol>
					</nav>

					<header className="space-y-6">
						<h1 className="neue-haas-grotesk-display text-4xl sm:text-5xl lg:text-6xl">
							Pi Memory Game
						</h1>
						<p className="noto-sans-jp-light text-sm leading-relaxed max-w-2xl">
							円周率の桁を記憶して入力するゲームです.
							<br />
							テンキーインターフェースで楽しく学習できます.
						</p>
					</header>

					<section className="space-y-6">
						<PiGame />
					</section>
				</div>
			</main>
		</div>
	);
}
