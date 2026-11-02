"use client";

import PiGame from "./components/PiGame";

export default function PiGameApp() {
	return (
		<div className="relative min-h-screen ">
			<main className="relative z-10 min-h-screen py-10" tabIndex={-1}>
				<div className="mx-auto w-full max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
					{/* The former breadcrumb (Home / Tools / Pi Memory Game) pointed at
					    host routes through `next/link`. Inside the standalone
					    iframe those routes do not exist, and `next/link` cannot be
					    bundled outside a Next.js runtime, so the trail is dropped.
					    See Issue #3. */}
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
