import type { CSSProperties } from "react";
import qrCode from "../assets/qr-code.png";
import Footer from "../components/Footer";

interface HomePageProps {
	onRegister: () => void;
}

function Hero({ onRegister }: HomePageProps) {
	return (
		<section className="relative overflow-hidden">
			<div
				className="absolute inset-0"
				style={{
					background: "radial-gradient(1000px 520px at 82% -8%, rgba(59,158,255,.10), transparent 60%),radial-gradient(760px 480px at 6% 12%, rgba(0,217,163,.09), transparent 62%)",
				}}
			/>
			<div className="cp-in relative grid grid-cols-[1.02fr_.98fr] gap-10 items-center pt-16 pb-19">
				{/* copy */}
				<div>
					<div className="cp-rise [animation-delay:.02s] inline-flex items-center gap-2.25 bg-[rgba(0,217,163,.12)] text-green-dark font-bold text-[12.5px] px-[14px] py-2 rounded-[30px] mb-[22px]">
						<span className="w-2 h-2 rounded-full bg-green shadow-[0_0_0_4px_rgba(0,217,163,.2)]" />
						Now onboarding print shops near campus
					</div>
					<h1 className="cp-rise [animation-delay:.08s] font-sora font-extrabold text-[56px] leading-[1.04] tracking-[-1.5px] mb-5">
						Turn your printer into a campus{" "}
						<span className="bg-linear-to-br from-[#1b3a6b] to-[#18b8c9] bg-clip-text text-transparent">goldmine.</span>
					</h1>
					<p className="cp-rise [animation-delay:.14s] text-[18.5px] leading-[1.6] text-body max-w-130 mb-8">
						Click Print streams thousands of pre‑paid print jobs straight to your shop. You print, you earn — no new hardware, no chasing
						customers.
					</p>
					<div className="cp-rise [animation-delay:.2s] flex flex-wrap gap-3.5 items-center">
						<button
							onClick={onRegister}
							className="cp-btn-primary border-none cursor-pointer font-manrope font-bold text-base text-white bg-coral px-7.5 py-4 rounded-[14px] animate-[cpPulse_2.6s_ease-in-out_infinite]"
						>
							Register your shop — free →
						</button>
						<a
							href="#how"
							className="cursor-pointer font-manrope font-bold text-base text-ink bg-white border-[1.5px] border-line px-[26px] py-4 rounded-[14px] shadow-[0_2px_8px_rgba(143,155,179,.08)]"
						>
							See how it works
						</a>
					</div>
					<div className="cp-rise [animation-delay:.28s] flex items-center gap-[10px] mt-[26px] text-muted text-[13.5px] font-semibold">
						<div className="flex">
							<span className="w-[30px] h-[30px] rounded-full bg-coral border-[2.5px] border-cloud" />
							<span className="w-[30px] h-[30px] rounded-full bg-blue border-[2.5px] border-cloud -ml-[11px]" />
							<span className="w-[30px] h-[30px] rounded-full bg-green border-[2.5px] border-cloud -ml-[11px]" />
						</div>
						Joined by 600+ shops across 38 campuses
					</div>
				</div>

				{/* animated product flow scene */}
				<div className="cp-rise [animation-delay:.18s] relative h-[480px]">
					{/* background floating doc chips */}
					<div className="absolute inset-0 pointer-events-none">
						<div
							style={{ "--r": "-8deg" } as CSSProperties}
							className="absolute left-[6%] top-[60%] w-[46px] h-[58px] rounded-lg bg-white shadow-[0_8px_20px_rgba(143,155,179,.16)] animate-[cpFloatUp_7s_ease-in_infinite]"
						/>
						<div
							style={{ "--r": "10deg" } as CSSProperties}
							className="absolute left-[44%] top-[78%] w-10 h-[52px] rounded-lg bg-white shadow-[0_8px_20px_rgba(143,155,179,.16)] animate-[cpFloatUp_8.5s_ease-in_1.6s_infinite]"
						/>
						<div
							style={{ "--r": "-5deg" } as CSSProperties}
							className="absolute left-[76%] top-[66%] w-[42px] h-[54px] rounded-lg bg-white shadow-[0_8px_20px_rgba(143,155,179,.16)] animate-[cpFloatUp_7.8s_ease-in_3.1s_infinite]"
						/>
					</div>

					{/* dashed flow path phone -> printer */}
					<svg viewBox="0 0 420 480" className="absolute inset-0 w-full h-full pointer-events-none">
						<path
							d="M150 150 C 250 150, 250 300, 330 320"
							fill="none"
							stroke="#3B9EFF"
							strokeWidth="3"
							strokeLinecap="round"
							strokeDasharray="2 12"
							opacity=".55"
							className="animate-[cpDash_1.1s_linear_infinite]"
						/>
					</svg>

					{/* phone */}
					<div className="absolute left-[2%] top-[26px] w-[214px] h-[428px] bg-navy rounded-[38px] p-[11px] shadow-[0_30px_60px_rgba(18,35,63,.28)] animate-[cpBob_5s_ease-in-out_infinite]">
						<div className="w-full h-full bg-cloud rounded-[29px] overflow-hidden relative">
							{/* notch */}
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[22px] bg-navy rounded-b-2xl z-[3]" />
							{/* app screen */}
							<div className="pt-[34px] px-4">
								<div className="font-sora font-bold text-[15px] text-ink">Upload document</div>
								<div className="text-[11px] text-muted mt-[2px] font-semibold">Nova Print · Main Campus</div>
								{/* doc card */}
								<div className="mt-4 bg-white rounded-2xl p-[14px] shadow-[0_8px_20px_rgba(143,155,179,.12)]">
									<div className="flex gap-[10px] items-center">
										<div className="flex-none w-[38px] h-[46px] rounded-[7px] bg-gradient-to-br from-blue to-[#2A8AEF] relative">
											<div className="absolute left-[7px] right-[7px] top-[11px] h-[3px] rounded-sm bg-white/85" />
											<div className="absolute left-[7px] right-[11px] top-[18px] h-[3px] rounded-sm bg-white/65" />
											<div className="absolute left-[7px] right-[9px] top-[25px] h-[3px] rounded-sm bg-white/65" />
										</div>
										<div className="flex-1">
											<div className="text-xs font-bold text-ink">Thesis_final.pdf</div>
											<div className="text-[10.5px] text-muted font-semibold mt-[2px]">24 pages · Color · A4</div>
										</div>
									</div>
								</div>
								{/* options row */}
								<div className="flex gap-2 mt-3">
									<div className="flex-1 bg-white rounded-[11px] p-[9px] text-center shadow-[0_4px_12px_rgba(143,155,179,.1)]">
										<div className="text-[9px] text-muted font-bold tracking-[.4px]">COPIES</div>
										<div className="text-[13px] font-extrabold text-ink mt-[2px]">2</div>
									</div>
									<div className="flex-1 bg-white rounded-[11px] p-[9px] text-center shadow-[0_4px_12px_rgba(143,155,179,.1)]">
										<div className="text-[9px] text-muted font-bold tracking-[.4px]">SIDES</div>
										<div className="text-[13px] font-extrabold text-ink mt-[2px]">Both</div>
									</div>
								</div>
								{/* pay pill */}
								<div className="mt-[14px] bg-green rounded-[13px] p-3 flex items-center justify-center gap-2 shadow-[0_10px_22px_rgba(0,217,163,.32)] animate-[cpTap_3.2s_ease-in-out_infinite]">
									<span className="text-white font-sora font-bold text-[13.5px]">Pay &amp; send to shop</span>
								</div>
							</div>
						</div>
					</div>

					{/* QR floating badge */}
					<div className="absolute right-[8%] top-[14px] w-28 h-28 bg-white rounded-[20px] p-[11px] shadow-[0_18px_40px_rgba(59,158,255,.25)] overflow-hidden animate-[cpBob_6s_ease-in-out_.5s_infinite]">
						<img src={qrCode} alt="QR" className="w-full h-full object-contain rounded-lg" />
						<div className="absolute left-[11px] right-[11px] h-[3px] rounded-[3px] bg-gradient-to-r from-transparent via-green to-transparent shadow-[0_0_10px_rgba(0,217,163,.8)] animate-[cpScan_2.4s_ease-in-out_infinite]" />
					</div>

					{/* printer */}
					<div className="absolute right-[3%] bottom-5 w-[210px]">
						{/* ejected pages */}
						<div className="absolute left-[26px] right-[26px] -top-[6px] h-20 pointer-events-none overflow-visible">
							<div className="absolute left-0 right-0 top-0 h-[66px] bg-white rounded-[5px] shadow-[0_8px_18px_rgba(143,155,179,.18)] origin-top animate-[cpEject_3s_ease-in_infinite]">
								<div className="absolute left-3 right-3 top-3 h-[3px] bg-line rounded-sm" />
								<div className="absolute left-3 right-[22px] top-[22px] h-[3px] bg-line rounded-sm" />
								<div className="absolute left-3 right-4 top-8 h-[3px] bg-line rounded-sm" />
							</div>
							<div className="absolute left-0 right-0 top-0 h-[66px] bg-white rounded-[5px] shadow-[0_8px_18px_rgba(143,155,179,.18)] origin-top animate-[cpEject_3s_ease-in_1.5s_infinite]">
								<div className="absolute left-3 right-3 top-3 h-[3px] bg-line rounded-sm" />
								<div className="absolute left-3 right-[22px] top-[22px] h-[3px] bg-line rounded-sm" />
							</div>
						</div>
						{/* printer body */}
						<div className="relative z-[2] bg-gradient-to-br from-[#243a63] to-navy rounded-t-[20px] rounded-b-2xl px-4 pt-4 pb-5 shadow-[0_24px_44px_rgba(18,35,63,.3)]">
							<div className="h-[9px] bg-white/[.14] rounded-md mb-3" />
							<div className="flex items-center justify-between">
								<div className="flex gap-[6px]">
									<span className="w-[9px] h-[9px] rounded-full bg-green shadow-[0_0_8px_rgba(0,217,163,.9)] animate-[cpTap_1.8s_ease-in-out_infinite]" />
									<span className="w-[9px] h-[9px] rounded-full bg-white/[.28]" />
								</div>
								<div className="font-sora font-bold text-[11px] text-white/70 tracking-[.5px]">CLICK PRINT</div>
							</div>
							<div className="mt-3 h-[34px] bg-black/[.22] rounded-lg flex items-center justify-center gap-[7px]">
								<span className="w-[13px] h-[13px] border-[2.5px] border-white/35 border-t-green rounded-full animate-[cpSpin_1s_linear_infinite]" />
								<span className="text-white/75 text-[11px] font-bold">Printing job #4821…</span>
							</div>
						</div>
						{/* output tray */}
						<div className="h-[14px] bg-navy-deep rounded-b-[14px] mx-4 shadow-[0_12px_20px_rgba(18,35,63,.22)]" />
					</div>
				</div>
			</div>
		</section>
	);
}

function StatsStrip() {
	const stats = [
		{ value: "38", label: "Campuses served", color: "text-white" },
		{ value: "120K+", label: "Active students", color: "text-green" },
		{ value: "2.4M", label: "Pages printed", color: "text-blue" },
		{ value: "600+", label: "Partner shops", color: "text-coral" },
	];
	return (
		<section className="pt-[14px] pb-11">
			<div className="cp-in">
				<div className="bg-navy rounded-[28px] px-[30px] py-[38px] grid grid-cols-4 gap-5 shadow-[0_30px_60px_rgba(18,35,63,.22)] relative overflow-hidden">
					<div
						className="absolute -right-10 -top-10 w-[220px] h-[220px] rounded-full"
						style={{ background: "radial-gradient(circle,rgba(0,217,163,.18),transparent 70%)" }}
					/>
					{stats.map((s) => (
						<div key={s.label} className="relative">
							<div className={`font-sora font-extrabold text-[38px] tracking-[-1px] ${s.color}`}>{s.value}</div>
							<div className="text-white/60 text-[13.5px] font-semibold mt-1">{s.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function HowItWorks() {
	const steps = [
		{
			n: "1",
			badge: "bg-[rgba(59,158,255,.12)] text-blue",
			title: "Register your shop",
			text: "Fill a 2‑minute form. We verify your details and list you to nearby students.",
		},
		{
			n: "2",
			badge: "bg-[rgba(0,217,163,.12)] text-green-dark",
			title: "Receive jobs instantly",
			text: "Students upload and pay in the app. Pre‑paid orders land on your dashboard live.",
		},
		{
			n: "3",
			badge: "bg-[rgba(255,139,123,.14)] text-coral-deep",
			title: "Print & hand over",
			text: "Print the queued docs, tap done, and the student collects with a pickup code.",
		},
		{
			n: "4",
			badge: "bg-[rgba(0,217,163,.12)] text-green-dark",
			title: "Get paid weekly",
			text: "Earnings settle straight to your bank account, every single week. No delays.",
		},
	];
	return (
		<section id="how" className="pt-[60px] pb-5">
			<div className="cp-in">
				<div className="text-center max-w-[640px] mx-auto mb-[46px]">
					<div className="font-sora font-bold text-[13px] tracking-[.6px] text-blue uppercase">Up and running in a day</div>
					<h2 className="font-sora font-extrabold text-[40px] tracking-[-1px] mt-3">How Click Print works for you</h2>
				</div>
				<div className="grid grid-cols-4 gap-5">
					{steps.map((s) => (
						<div key={s.n} className="cp-card-hover bg-white rounded-[22px] px-[22px] py-[26px] shadow-[0_2px_10px_rgba(143,155,179,.1)]">
							<div className={`w-12 h-12 rounded-[14px] font-sora font-extrabold text-xl flex items-center justify-center ${s.badge}`}>
								{s.n}
							</div>
							<h3 className="font-sora font-bold text-lg mt-[18px] mb-2">{s.title}</h3>
							<p className="text-body text-[14.5px] leading-[1.6]">{s.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function WhyPartner() {
	return (
		<section id="why" className="pt-16 pb-5">
			<div className="cp-in">
				<div className="max-w-[640px] mb-11">
					<div className="font-sora font-bold text-[13px] tracking-[.6px] text-green-dark uppercase">Why partner with us</div>
					<h2 className="font-sora font-extrabold text-[40px] tracking-[-1px] mt-3">More income from the printer you already own</h2>
				</div>
				<div className="grid grid-cols-3 gap-[22px]">
					<div className="cp-card-hover bg-coral rounded-3xl p-[30px] text-white shadow-[0_18px_40px_rgba(255,139,123,.32)]">
						<div className="w-[52px] h-[52px] rounded-[15px] bg-white/20 flex items-center justify-center text-2xl">💸</div>
						<h3 className="font-sora font-bold text-[21px] mt-5 mb-[10px]">Earn more, effortlessly</h3>
						<p className="text-[15px] leading-[1.62] text-white/[.92]">
							A steady stream of pre‑paid jobs fills your idle hours — every order is money in the bank before you print a page.
						</p>
					</div>
					<div className="cp-card-hover bg-blue rounded-3xl p-[30px] text-white shadow-[0_18px_40px_rgba(59,158,255,.32)]">
						<div className="w-[52px] h-[52px] rounded-[15px] bg-white/20 flex items-center justify-center text-2xl">🎓</div>
						<h3 className="font-sora font-bold text-[21px] mt-5 mb-[10px]">Reach every student nearby</h3>
						<p className="text-[15px] leading-[1.62] text-white/[.92]">
							Get discovered by thousands of students on nearby campuses — no flyers, no ads, no walk‑in luck required.
						</p>
					</div>
					<div className="cp-card-hover bg-green rounded-3xl p-[30px] text-[#063d31] shadow-[0_18px_40px_rgba(0,217,163,.32)]">
						<div className="w-[52px] h-[52px] rounded-[15px] bg-white/[.28] flex items-center justify-center text-2xl">⚡</div>
						<h3 className="font-sora font-bold text-[21px] mt-5 mb-[10px]">Zero setup cost</h3>
						<p className="text-[15px] leading-[1.62] text-[rgba(6,61,49,.82)]">
							Keep your printer. No new machines, no monthly fee, no commitment. Free to join and free to pause any time.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function DownloadApp() {
	return (
		<section id="download" className="pt-[72px] pb-5">
			<div className="cp-in">
				<div className="bg-gradient-to-br from-[#1b3a6b] to-navy rounded-[30px] p-[52px] grid grid-cols-[1.2fr_.8fr] gap-11 items-center relative overflow-hidden shadow-[0_30px_70px_rgba(18,35,63,.28)]">
					<div
						className="absolute -left-[60px] -bottom-20 w-[280px] h-[280px] rounded-full"
						style={{ background: "radial-gradient(circle,rgba(24,184,201,.22),transparent 70%)" }}
					/>
					<div className="relative">
						<div className="font-sora font-bold text-[13px] tracking-[.6px] text-[#18b8c9] uppercase">The Click Print app</div>
						<h2 className="font-sora font-extrabold text-[38px] tracking-[-1px] text-white mt-3 mb-[14px] leading-[1.08]">
							Manage every job from your pocket
						</h2>
						<p className="text-white/[.72] text-base leading-[1.62] max-w-[440px] mb-7">
							Accept orders, track your print queue, toggle your shop online, and watch your weekly earnings grow — all from one app. Scan
							the code or grab it from your store.
						</p>
						<div className="flex flex-wrap gap-[14px]">
							<a
								href="#download"
								className="cp-storebadge flex items-center gap-[11px] bg-black rounded-[14px] px-[18px] py-[11px] cursor-pointer"
							>
								<span className="text-[22px]"></span>
								<span className="leading-[1.1]">
									<span className="block text-[10px] text-[#b9b9b9] font-semibold">Download on the</span>
									<span className="block font-sora font-bold text-base text-white">App Store</span>
								</span>
							</a>
							<a
								href="#download"
								className="cp-storebadge flex items-center gap-[11px] bg-black rounded-[14px] px-[18px] py-[11px] cursor-pointer"
							>
								<span className="w-5 h-[22px] flex items-center justify-center">
									<span className="w-0 h-0 border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent border-l-[17px] border-l-green" />
								</span>
								<span className="leading-[1.1]">
									<span className="block text-[10px] text-[#b9b9b9] font-semibold">GET IT ON</span>
									<span className="block font-sora font-bold text-base text-white">Google Play</span>
								</span>
							</a>
						</div>
					</div>
					<div className="relative flex justify-center">
						<div className="bg-white rounded-[26px] p-5 shadow-[0_24px_50px_rgba(0,0,0,.3)]">
							<img src={qrCode} alt="Scan to download Click Print" className="w-[196px] h-[196px] block rounded-xl" />
							<div className="text-center mt-3 font-sora font-bold text-[13.5px] text-ink">Scan to download</div>
							<div className="text-center text-[11.5px] text-muted font-semibold mt-[2px]">Point your camera here</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Testimonials() {
	const items = [
		{
			quote: "“My printer used to sit idle till noon. Now I get 40-60 pre‑paid jobs before the first class ends. It's honestly changed my month.”",
			initial: "A",
			avatar: "from-coral to-coral-deep",
			name: "Adeel Q.",
			shop: "Nova Print · City Campus",
		},
		{
			quote: "No arguing over prices, no cash handling, no 'can you rush this'. Orders come in clean and paid. Payouts hit my account every Friday.",
			initial: "S",
			avatar: "from-blue to-[#2A8AEF]",
			name: "Sana R.",
			shop: "Campus Copies · North Gate",
		},
		{
			quote: "“Signing up took me ten minutes and cost nothing. I toggle the shop off when I'm swamped and back on when I'm free. Total control.”",
			initial: "B",
			avatar: "from-green to-[#00C793]",
			name: "Bilal M.",
			shop: "QuickDoc · University Rd",
		},
	];
	return (
		<section className="pt-[72px] pb-5">
			<div className="cp-in">
				<div className="text-center max-w-[640px] mx-auto mb-[46px]">
					<div className="font-sora font-bold text-[13px] tracking-[.6px] text-coral-deep uppercase">Loved by shop owners</div>
					<h2 className="font-sora font-extrabold text-[40px] tracking-[-1px] mt-3">Shops are already cashing in</h2>
				</div>
				<div className="grid grid-cols-3 gap-[22px]">
					{items.map((t) => (
						<div key={t.name} className="cp-card-hover bg-white rounded-[22px] p-7 shadow-[0_2px_12px_rgba(143,155,179,.12)]">
							<div className="text-coral text-[15px] tracking-[2px]">★★★★★</div>
							<p className="text-[15.5px] leading-[1.65] text-[#37405c] mt-[14px] mb-[22px] font-medium">{t.quote}</p>
							<div className="flex items-center gap-3">
								<div
									className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatar} flex items-center justify-center text-white font-sora font-bold text-base`}
								>
									{t.initial}
								</div>
								<div>
									<div className="font-bold text-[14.5px]">{t.name}</div>
									<div className="text-[12.5px] text-muted font-semibold">{t.shop}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Faq() {
	const faqs = [
		{
			q: "Do I need special equipment to join?",
			a: "Not at all. If you have a working printer and internet, you're ready. Jobs arrive on the Click Print app on your phone — no new machine, no software to install on a computer.",
			open: true,
		},
		{
			q: "How and when do I get paid?",
			a: "Every order is pre‑paid by the student, so you never chase money. Your earnings are totalled up and settled straight to your bank account on a weekly cycle.",
		},
		{
			q: "Who sets the printing prices?",
			a: "You do. You set your per‑page rates for black‑and‑white, color, and binding during onboarding, and you can update them any time from the app.",
		},
		{
			q: "What does it cost to join?",
			a: "Joining is completely free — no signup fee and no monthly charge. Click Print takes a small transparent service fee only on completed orders, so we only earn when you do.",
		},
		{
			q: "Can I pause orders when I'm busy?",
			a: "Yes. Flip your shop to “Offline” with one tap whenever you're swamped or closed, and turn it back on when you're ready for more jobs.",
		},
		{
			q: "How do students find my shop?",
			a: "Once verified, your shop appears to students on nearby campuses, ranked by distance and rating. The closer and better‑rated you are, the more jobs you receive.",
		},
	];
	return (
		<section id="faq" className="pt-[72px] pb-5">
			<div className="cp-in max-w-[840px]">
				<div className="text-center mx-auto mb-[34px]">
					<div className="font-sora font-bold text-[13px] tracking-[.6px] text-blue uppercase">Questions from shop owners</div>
					<h2 className="font-sora font-extrabold text-[40px] tracking-[-1px] mt-3">Everything you're wondering</h2>
				</div>
				{faqs.map((f) => (
					<details key={f.q} className="cp-faq" open={f.open}>
						<summary>
							{f.q}
							<span className="cp-plus">+</span>
						</summary>
						<div className="cp-ans">{f.a}</div>
					</details>
				))}
			</div>
		</section>
	);
}

function FinalCta({ onRegister }: HomePageProps) {
	return (
		<section className="pt-[72px] pb-10">
			<div className="cp-in">
				<div className="bg-green rounded-[30px] px-10 py-14 text-center relative overflow-hidden shadow-[0_30px_60px_rgba(0,217,163,.3)]">
					<div className="absolute -right-10 -top-[60px] w-60 h-60 rounded-full bg-white/[.14]" />
					<div className="absolute -left-[50px] -bottom-[70px] w-[200px] h-[200px] rounded-full bg-white/10" />
					<h2 className="relative font-sora font-extrabold text-[42px] tracking-[-1.2px] text-[#053a2e] mb-[14px]">
						Ready to fill your print queue?
					</h2>
					<p className="relative text-[17.5px] text-[rgba(5,58,46,.82)] max-w-[520px] mx-auto mb-[30px] font-semibold">
						Register in two minutes and start receiving pre‑paid student jobs this week.
					</p>
					<button
						onClick={onRegister}
						className="cp-btn-primary relative border-none cursor-pointer font-manrope font-extrabold text-[16.5px] text-white bg-coral px-[38px] py-[17px] rounded-[14px] shadow-[0_14px_34px_rgba(255,123,107,.4)]"
					>
						Register your shop — it's free →
					</button>
				</div>
			</div>
		</section>
	);
}

export default function HomePage({ onRegister }: HomePageProps) {
	return (
		<main>
			<Hero onRegister={onRegister} />
			<StatsStrip />
			<HowItWorks />
			<WhyPartner />
			<DownloadApp />
			<Testimonials />
			<Faq />
			<FinalCta onRegister={onRegister} />
			<Footer onRegister={onRegister} />
		</main>
	);
}
