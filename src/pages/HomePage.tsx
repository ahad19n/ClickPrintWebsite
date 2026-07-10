import type { CSSProperties } from "react";
import qrCode from "../assets/qr-code.png";
import Footer from "../components/Footer";

interface HomePageProps {
	onRegister: () => void;
}

function DownloadButton({ label, openUp = false }: { label: string; openUp?: boolean }) {
	return (
		<div className="relative group">
			<a
				href="https://github.com/WeCodePK/ClickPrintDesktop/releases/download/builds/Click.Print.Desktop.Installer.exe"
				download
				className="cp-btn-primary inline-flex items-center gap-2 cursor-pointer font-manrope font-bold text-[15px] sm:text-base text-white bg-blue px-5 sm:px-6.5 py-3.5 sm:py-4 rounded-[14px] shadow-[0_8px_22px_rgba(59,158,255,.32)]"
			>
				{label}
				<svg
					viewBox="0 0 16 16"
					className="w-4 h-4 flex-none transition-transform duration-200 group-hover:rotate-180"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M3.5 6 8 10.5 12.5 6" />
				</svg>
			</a>
			{/* hover dropdown */}
			<div
				className={`absolute left-0 ${openUp ? "bottom-full pb-2 translate-y-1" : "top-full pt-2 translate-y-1"} w-full min-w-65 z-20 invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0`}
			>
				<div className="bg-white border-[1.5px] border-line rounded-[14px] shadow-[0_16px_40px_rgba(18,35,63,.14)] overflow-hidden text-left">
					<a
						href="https://github.com/WeCodePK/ClickPrintDesktop/releases/download/builds/Click.Print.Desktop.Installer.exe"
						download
						className="flex items-center gap-3 px-4.5 py-3.5 transition-colors hover:bg-[rgba(59,158,255,.08)]"
					>
						<span className="flex-none w-9 h-9 rounded-[10px] bg-[rgba(59,158,255,.12)] text-blue flex items-center justify-center text-base">⬇</span>
						<span>
							<span className="block font-bold text-[14px] text-ink">Installer (.exe)</span>
							<span className="block text-[12px] text-muted font-semibold">Recommended · installs on your PC</span>
						</span>
					</a>
					<a
						href="https://github.com/WeCodePK/ClickPrintDesktop/releases/download/builds/Click.Print.Desktop.Portable.exe"
						download
						className="flex items-center gap-3 px-4.5 py-3.5 border-t border-line/70 transition-colors hover:bg-[rgba(59,158,255,.08)]"
					>
						<span className="flex-none w-9 h-9 rounded-[10px] bg-[rgba(0,217,163,.12)] text-green-dark flex items-center justify-center text-base">⚡</span>
						<span>
							<span className="block font-bold text-[14px] text-ink">Portable (.exe)</span>
							<span className="block text-[12px] text-muted font-semibold">No install needed · run anywhere</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

function Hero({ onRegister }: HomePageProps) {
	return (
		<section className="relative z-30 overflow-hidden flex items-center min-h-[calc(100svh-64px)] sm:min-h-[calc(100svh-74px)]">
			<div
				className="absolute inset-0"
				style={{
					background: "radial-gradient(1000px 520px at 82% -8%, rgba(59,158,255,.10), transparent 60%),radial-gradient(760px 480px at 6% 12%, rgba(0,217,163,.09), transparent 62%)",
				}}
			/>
			<div className="cp-in relative grid grid-cols-1 lg:grid-cols-[1.02fr_.98fr] gap-8 lg:gap-10 items-center py-10 sm:py-14">
				{/* copy */}
				<div className="text-center lg:text-left">
					<h1 className="cp-rise [animation-delay:.08s] font-sora font-extrabold text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.08] lg:leading-[1.04] tracking-[-1px] lg:tracking-[-1.5px] mb-4 sm:mb-5">
						Turn your printer into a {" "}
						<span className="bg-linear-to-br from-[#1b3a6b] to-[#18b8c9] bg-clip-text text-transparent">goldmine.</span>
					</h1>
					<p className="cp-rise [animation-delay:.14s] text-[15.5px] sm:text-[18.5px] leading-[1.6] text-body max-w-130 mx-auto lg:mx-0 mb-6 sm:mb-8">
						ClickPrint streams thousands of pre-paid print jobs straight to your shop. You print, you earn - no new hardware, no chasing
						customers.
					</p>
					<div className="cp-rise [animation-delay:.2s] relative z-40 flex flex-wrap gap-3 sm:gap-3.5 items-start justify-center lg:justify-start">
						<button
							onClick={onRegister}
							className="cp-btn-primary border-none cursor-pointer font-manrope font-bold text-[15px] sm:text-base text-white bg-coral px-6 sm:px-7.5 py-3.5 sm:py-4 rounded-[14px] animate-[cpPulse_2.6s_ease-in-out_infinite]"
						>
							Register your shop
						</button>
						{/* download dropdown */}
						<DownloadButton label="Download ClickPrint Desktop App" />
					</div>
					<div className="cp-rise [animation-delay:.24s] text-[11.5px] sm:text-[12px] text-muted font-semibold mt-3 text-center lg:text-left">
						Available for Windows only, as of now
					</div>
					<div className="cp-rise [animation-delay:.28s] flex items-center gap-2.5 mt-4 sm:mt-5 text-muted text-[13px] sm:text-[13.5px] font-semibold justify-center lg:justify-start">
						Joined by 600+ shops with 1000 users
					</div>
				</div>

				{/* animated product flow scene */}
				<div className="cp-rise [animation-delay:.18s] relative h-80 sm:h-96 lg:h-120 mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
					{/* background floating doc chips */}
					<div className="absolute inset-0 pointer-events-none">
						<div
							style={{ "--r": "-8deg" } as CSSProperties}
							className="absolute left-[6%] top-[60%] w-9 sm:w-11.5 h-11 sm:h-14.5 rounded-lg bg-white shadow-[0_8px_20px_rgba(143,155,179,.16)] animate-[cpFloatUp_7s_ease-in_infinite]"
						/>
						<div
							style={{ "--r": "10deg" } as CSSProperties}
							className="absolute left-[44%] top-[78%] w-8 sm:w-10 h-10 sm:h-13 rounded-lg bg-white shadow-[0_8px_20px_rgba(143,155,179,.16)] animate-[cpFloatUp_8.5s_ease-in_1.6s_infinite]"
						/>
						<div
							style={{ "--r": "-5deg" } as CSSProperties}
							className="absolute left-[76%] top-[66%] w-8.5 sm:w-10.5 h-10.5 sm:h-13.5 rounded-lg bg-white shadow-[0_8px_20px_rgba(143,155,179,.16)] animate-[cpFloatUp_7.8s_ease-in_3.1s_infinite]"
						/>
					</div>

					{/* dashed flow path phone -> printer */}
					<svg viewBox="0 0 420 480" className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block">
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
					<div className="absolute left-[2%] top-4 sm:top-6.5 w-36 sm:w-44 lg:w-53.5 h-72 sm:h-88 lg:h-107 bg-navy rounded-[26px] sm:rounded-4xl lg:rounded-[38px] p-2 sm:p-2.75 shadow-[0_30px_60px_rgba(18,35,63,.28)] animate-[cpBob_5s_ease-in-out_infinite]">
						<div className="w-full h-full bg-cloud rounded-[20px] sm:rounded-3xl lg:rounded-[29px] overflow-hidden relative">
							{/* notch */}
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-4 sm:h-5 lg:h-5.5 bg-navy rounded-b-xl sm:rounded-b-2xl z-3" />
							{/* app screen */}
							<div className="pt-6 sm:pt-7 lg:pt-8.5 px-2.5 sm:px-3 lg:px-4">
								<div className="font-sora font-bold text-[11px] sm:text-[13px] lg:text-[15px] text-ink">Upload document</div>
								<div className="text-[9px] sm:text-[10px] lg:text-[11px] text-muted mt-0.5 font-semibold">Jani Print Shop · COMSATS</div>
								{/* doc card */}
								<div className="mt-2.5 sm:mt-3 lg:mt-4 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 lg:p-3.5 shadow-[0_8px_20px_rgba(143,155,179,.12)]">
									<div className="flex gap-2 sm:gap-2.5 items-center">
										<div className="flex-none w-7 sm:w-8 lg:w-9.5 h-9 sm:h-10 lg:h-11.5 rounded-[5px] sm:rounded-[7px] bg-linear-to-br from-blue to-[#2A8AEF] relative">
											<div className="absolute left-1.5 right-1.5 top-2 sm:top-2.75 h-0.5 sm:h-0.75 rounded-sm bg-white/85" />
											<div className="absolute left-1.5 right-2 top-3.5 sm:top-4.5 h-0.5 sm:h-0.75 rounded-sm bg-white/65" />
											<div className="absolute left-1.5 right-1.75 top-5 sm:top-6.25 h-0.5 sm:h-0.75 rounded-sm bg-white/65" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="text-[10px] sm:text-[11px] lg:text-xs font-bold text-ink truncate">Thesis.pdf</div>
											<div className="text-[8.5px] sm:text-[9.5px] lg:text-[10.5px] text-muted font-semibold mt-0.5">24 pages · Color · A4</div>
										</div>
									</div>
								</div>
								{/* options row */}
								<div className="flex gap-1.5 sm:gap-2 mt-2 sm:mt-3">
									<div className="flex-1 bg-white rounded-lg sm:rounded-[11px] p-1.5 sm:p-2.25 text-center shadow-[0_4px_12px_rgba(143,155,179,.1)]">
										<div className="text-[7.5px] sm:text-[8px] lg:text-[9px] text-muted font-bold tracking-[.4px]">COPIES</div>
										<div className="text-[11px] sm:text-[12px] lg:text-[13px] font-extrabold text-ink mt-0.5">2</div>
									</div>
									<div className="flex-1 bg-white rounded-lg sm:rounded-[11px] p-1.5 sm:p-2.25 text-center shadow-[0_4px_12px_rgba(143,155,179,.1)]">
										<div className="text-[7.5px] sm:text-[8px] lg:text-[9px] text-muted font-bold tracking-[.4px]">SIDES</div>
										<div className="text-[11px] sm:text-[12px] lg:text-[13px] font-extrabold text-ink mt-0.5">Both</div>
									</div>
								</div>
								{/* pay pill */}
								<div className="mt-2.5 sm:mt-3.5 bg-green rounded-[10px] sm:rounded-[13px] p-2 sm:p-3 flex items-center justify-center gap-2 shadow-[0_10px_22px_rgba(0,217,163,.32)] animate-[cpTap_3.2s_ease-in-out_infinite]">
									<span className="text-white font-sora font-bold text-[10px] sm:text-[12px] lg:text-[13.5px]">Pay &amp; send to shop</span>
								</div>
							</div>
						</div>
					</div>

					{/* QR floating badge */}
					<div className="absolute right-[4%] sm:right-[8%] top-2 sm:top-3.5 w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-white rounded-[14px] sm:rounded-[18px] lg:rounded-[20px] p-2 sm:p-2.75 shadow-[0_18px_40px_rgba(59,158,255,.25)] overflow-hidden animate-[cpBob_6s_ease-in-out_.5s_infinite]">
						<img src={qrCode} alt="QR" className="w-full h-full object-contain rounded-md sm:rounded-lg" />
						<div className="absolute left-2 sm:left-2.75 right-2 sm:right-2.75 h-0.5 sm:h-0.75 rounded-[3px] bg-linear-to-r from-transparent via-green to-transparent shadow-[0_0_10px_rgba(0,217,163,.8)] animate-[cpScan_2.4s_ease-in-out_infinite]" />
					</div>

					{/* printer */}
					<div className="absolute right-[1%] sm:right-[3%] bottom-2 sm:bottom-5 w-32.5 sm:w-42.5 lg:w-52.5">
						{/* ejected pages */}
						<div className="absolute left-5 sm:left-6.5 right-5 sm:right-6.5 -top-1.5 sm:-top-2 h-14 sm:h-20 pointer-events-none overflow-visible">
							<div className="absolute left-0 right-0 top-0 h-11 sm:h-14 lg:h-16.5 bg-white rounded-[5px] shadow-[0_8px_18px_rgba(143,155,179,.18)] origin-top animate-[cpEject_3s_ease-in_infinite]">
								<div className="absolute left-2 sm:left-3 right-2 sm:right-3 top-2 sm:top-3 h-0.5 sm:h-0.75 bg-line rounded-sm" />
								<div className="absolute left-2 sm:left-3 right-4 sm:right-5.5 top-3.5 sm:top-5.5 h-0.5 sm:h-0.75 bg-line rounded-sm" />
								<div className="absolute left-2 sm:left-3 right-3 sm:right-4 top-5.5 sm:top-8 h-0.5 sm:h-0.75 bg-line rounded-sm" />
							</div>
							<div className="absolute left-0 right-0 top-0 h-11 sm:h-14 lg:h-16.5 bg-white rounded-[5px] shadow-[0_8px_18px_rgba(143,155,179,.18)] origin-top animate-[cpEject_3s_ease-in_1.5s_infinite]">
								<div className="absolute left-2 sm:left-3 right-2 sm:right-3 top-2 sm:top-3 h-0.5 sm:h-0.75 bg-line rounded-sm" />
								<div className="absolute left-2 sm:left-3 right-4 sm:right-5.5 top-3.5 sm:top-5.5 h-0.5 sm:h-0.75 bg-line rounded-sm" />
							</div>
						</div>
						{/* printer body */}
						<div className="relative z-2 bg-linear-to-br from-[#243a63] to-navy rounded-t-[14px] sm:rounded-t-[18px] lg:rounded-t-[20px] rounded-b-xl sm:rounded-b-2xl px-3 sm:px-4 pt-3 sm:pt-4 pb-3.5 sm:pb-5 shadow-[0_24px_44px_rgba(18,35,63,.3)]">
							<div className="h-1.5 sm:h-2.25 bg-white/[.14] rounded-md mb-2 sm:mb-3" />
							<div className="flex items-center justify-between">
								<div className="flex gap-1 sm:gap-1.5">
									<span className="w-1.5 sm:w-2.25 h-1.5 sm:h-2.25 rounded-full bg-green shadow-[0_0_8px_rgba(0,217,163,.9)] animate-[cpTap_1.8s_ease-in-out_infinite]" />
									<span className="w-1.5 sm:w-2.25 h-1.5 sm:h-2.25 rounded-full bg-white/[.28]" />
								</div>
								<div className="font-sora font-bold text-[8px] sm:text-[10px] lg:text-[11px] text-white/70 tracking-[.5px]">CLICKPRINT</div>
							</div>
							<div className="mt-2 sm:mt-3 h-6 sm:h-7.5 lg:h-8.5 bg-black/22 rounded-md sm:rounded-lg flex items-center justify-center gap-1.25 sm:gap-1.75">
								<span className="w-2.25 sm:w-2.75 lg:w-3.25 h-2.25 sm:h-2.75 lg:h-3.25 border-2 sm:border-[2.5px] border-white/35 border-t-green rounded-full animate-[cpSpin_1s_linear_infinite]" />
								<span className="text-white/75 text-[8px] sm:text-[10px] lg:text-[11px] font-bold">Printing job #4821…</span>
							</div>
						</div>
						{/* output tray */}
						<div className="h-2.5 sm:h-3.5 bg-navy-deep rounded-b-[10px] sm:rounded-b-[14px] mx-3 sm:mx-4 shadow-[0_12px_20px_rgba(18,35,63,.22)]" />
					</div>
				</div>
			</div>
			{/* scroll-down hint */}
			<a
				href="#how"
				aria-label="Scroll down to see how it works"
				className="absolute bottom-8 sm:bottom-11 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-muted hover:text-ink transition-colors"
			>
				<span className="text-[10.5px] font-bold tracking-[1.5px] uppercase">Scroll</span>
				<span className="w-10 h-10 rounded-full bg-white border-[1.5px] border-line shadow-[0_6px_18px_rgba(143,155,179,.22)] flex items-center justify-center animate-[cpScrollHint_1.8s_ease-in-out_infinite]">
					<svg viewBox="0 0 16 16" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
					</svg>
				</span>
			</a>
		</section>
	);
}

function StatsStrip() {
	const stats = [
		{ value: "38", label: "HEIs served", color: "text-white" },
		{ value: "120K+", label: "Active users", color: "text-green" },
		{ value: "2.4M", label: "Pages printed", color: "text-blue" },
		{ value: "600+", label: "Partner shops", color: "text-coral" },
	];
	return (
		<section className="pt-3.5 pb-8 sm:pb-11">
			<div className="cp-in">
				<div className="bg-navy rounded-[20px] sm:rounded-[28px] px-5 sm:px-7.5 py-7 sm:py-9.5 grid grid-cols-2 sm:grid-cols-4 gap-5 shadow-[0_30px_60px_rgba(18,35,63,.22)] relative overflow-hidden">
					<div
						className="absolute -right-10 -top-10 w-55 h-55 rounded-full"
						style={{ background: "radial-gradient(circle,rgba(0,217,163,.18),transparent 70%)" }}
					/>
					{stats.map((s) => (
						<div key={s.label} className="relative text-center sm:text-left">
							<div className={`font-sora font-extrabold text-[28px] sm:text-[32px] lg:text-[38px] tracking-[-1px] ${s.color}`}>{s.value}</div>
							<div className="text-white/60 text-[12px] sm:text-[13.5px] font-semibold mt-1">{s.label}</div>
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
			text: "Fill a 2-minute form. We verify your details and list you to nearby users.",
		},
		{
			n: "2",
			badge: "bg-[rgba(0,217,163,.12)] text-green-dark",
			title: "Receive jobs instantly",
			text: "Users upload and pay in the app. Pre-paid orders land on your dashboard live.",
		},
		{
			n: "3",
			badge: "bg-[rgba(255,139,123,.14)] text-coral-deep",
			title: "Print & hand over",
			text: "Print the queued docs, tap done, and the users collect by themselves.",
		},
		{
			n: "4",
			badge: "bg-[rgba(0,217,163,.12)] text-green-dark",
			title: "Get paid daily",
			text: "Earnings settle straight to your bank account, every single day. No delays.",
		},
	];
	return (
		<section id="how" className="pt-10 sm:pt-15 pb-5">
			<div className="cp-in">
				<div className="text-center max-w-160 mx-auto mb-8 sm:mb-11.5">
					<div className="font-sora font-bold text-[12px] sm:text-[13px] tracking-[.6px] text-blue uppercase">Up and running in a day</div>
					<h2 className="font-sora font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] tracking-[-1px] mt-3">How ClickPrint works for you</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
					{steps.map((s) => (
						<div key={s.n} className="cp-card-hover bg-white rounded-[22px] px-5.5 py-6.5 shadow-[0_2px_10px_rgba(143,155,179,.1)]">
							<div className={`w-12 h-12 rounded-[14px] font-sora font-extrabold text-xl flex items-center justify-center ${s.badge}`}>
								{s.n}
							</div>
							<h3 className="font-sora font-bold text-lg mt-4.5 mb-2">{s.title}</h3>
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
		<section id="why" className="pt-12 sm:pt-16 pb-5 scroll-mt-10">
			<div className="cp-in">
				<div className="max-w-160 mb-8 sm:mb-11 text-center sm:text-left">
					<div className="font-sora font-bold text-[12px] sm:text-[13px] tracking-[.6px] text-green-dark uppercase">Why partner with us</div>
					<h2 className="font-sora font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] tracking-[-1px] mt-3">More income from the printer you already own.</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5.5">
					<div className="cp-card-hover bg-coral rounded-3xl p-6 sm:p-7.5 text-white shadow-[0_18px_40px_rgba(255,139,123,.32)]">
						<div className="w-12 sm:w-13 h-12 sm:h-13 rounded-[15px] bg-white/20 flex items-center justify-center text-xl sm:text-2xl">💸</div>
						<h3 className="font-sora font-bold text-[19px] sm:text-[21px] mt-4 sm:mt-5 mb-2.5">Earn more, effortlessly</h3>
						<p className="text-[14px] sm:text-[15px] leading-[1.62] text-white/92">
							A steady stream of pre-paid jobs fills your idle hours — every order is money in the bank before you print a page.
						</p>
					</div>
					<div className="cp-card-hover bg-blue rounded-3xl p-6 sm:p-7.5 text-white shadow-[0_18px_40px_rgba(59,158,255,.32)]">
						<div className="w-12 sm:w-13 h-12 sm:h-13 rounded-[15px] bg-white/20 flex items-center justify-center text-xl sm:text-2xl">🎓</div>
						<h3 className="font-sora font-bold text-[19px] sm:text-[21px] mt-4 sm:mt-5 mb-2.5">Reach every user nearby</h3>
						<p className="text-[14px] sm:text-[15px] leading-[1.62] text-white/92">
							Get discovered by thousands of users around you — no flyers, no ads, no walk-in luck required.
						</p>
					</div>
					<div className="cp-card-hover bg-green rounded-3xl p-6 sm:p-7.5 text-[#063d31] shadow-[0_18px_40px_rgba(0,217,163,.32)] sm:col-span-2 lg:col-span-1">
						<div className="w-12 sm:w-13 h-12 sm:h-13 rounded-[15px] bg-white/[.28] flex items-center justify-center text-xl sm:text-2xl">⚡</div>
						<h3 className="font-sora font-bold text-[19px] sm:text-[21px] mt-4 sm:mt-5 mb-2.5">Zero setup cost</h3>
						<p className="text-[14px] sm:text-[15px] leading-[1.62] text-[rgba(6,61,49,.82)]">
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
		<section id="download" className="pt-12 sm:pt-18 pb-5 scroll-mt-10">
			<div className="cp-in">
				<div className="bg-linear-to-br from-[#1b3a6b] to-navy rounded-[22px] sm:rounded-[30px] p-7 sm:p-10 lg:p-13 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-8 sm:gap-11 items-center relative overflow-hidden shadow-[0_30px_70px_rgba(18,35,63,.28)]">
					<div
						className="absolute -left-15 -bottom-20 w-70 h-70 rounded-full"
						style={{ background: "radial-gradient(circle,rgba(24,184,201,.22),transparent 70%)" }}
					/>
					<div className="relative text-center md:text-left">
						<div className="font-sora font-bold text-[12px] sm:text-[13px] tracking-[.6px] text-[#18b8c9] uppercase">The ClickPrint Desktop app</div>
						<h2 className="font-sora font-extrabold text-[26px] sm:text-[32px] lg:text-[38px] tracking-[-1px] text-white mt-3 mb-3 sm:mb-3.5 leading-[1.1] sm:leading-[1.08]">
							Manage every job from your desktop.
						</h2>
						<p className="text-white/72 text-[14.5px] sm:text-base leading-[1.62] max-w-110 mx-auto md:mx-0 mb-6 sm:mb-7">
							Accept orders, track your print queue, toggle your shop online, and watch your earnings grow — all from one app.
							Click below to get started.
						</p>
						<div className="flex flex-wrap gap-3.5 justify-center md:justify-start">
							<DownloadButton label="Download Now" openUp />
						</div>
						<div className="text-[11.5px] sm:text-[12px] text-white/55 font-semibold mt-3">
							Available for Windows only, as of now
						</div>
					</div>
					{/* desktop app mockup */}
					<div className="relative flex justify-center">
						<div className="w-full max-w-85">
							{/* monitor */}
							<div className="bg-white/10 border border-white/15 rounded-2xl sm:rounded-[20px] p-2 sm:p-2.5 shadow-[0_24px_50px_rgba(0,0,0,.3)]">
								<div className="bg-navy-deep rounded-[10px] sm:rounded-[14px] overflow-hidden">
									{/* title bar */}
									<div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-white/10">
										<span className="w-2.5 h-2.5 rounded-full bg-coral" />
										<span className="w-2.5 h-2.5 rounded-full bg-[#f5c644]" />
										<span className="w-2.5 h-2.5 rounded-full bg-green" />
										<span className="ml-auto font-sora font-bold text-[9.5px] text-white/50 tracking-[.5px]">CLICKPRINT DESKTOP</span>
									</div>
									{/* queue */}
									<div className="p-3.5 sm:p-4">
										<div className="flex items-center justify-between mb-3">
											<div className="font-sora font-bold text-[12.5px] sm:text-[13.5px] text-white">Print queue</div>
											<div className="flex items-center gap-1.5 text-[10px] font-bold text-green">
												<span className="w-1.75 h-1.75 rounded-full bg-green animate-[cpTap_1.8s_ease-in-out_infinite]" />
												Online
											</div>
										</div>
										{[
											{ name: "Thesis.pdf", meta: "24 pages · Color", status: "printing" },
											{ name: "Slides_final.pdf", meta: "48 pages · B&W", status: "ready" },
											{ name: "Lab_report.docx", meta: "12 pages · B&W", status: "ready" },
										].map((job) => (
											<div key={job.name} className="flex items-center gap-2.5 bg-white/8 rounded-[10px] px-3 py-2.5 mb-2 last:mb-0">
												<span className="flex-none w-6.5 h-8 rounded-[5px] bg-linear-to-br from-blue to-[#2A8AEF]" />
												<span className="flex-1 min-w-0">
													<span className="block text-[11px] sm:text-[11.5px] font-bold text-white truncate">{job.name}</span>
													<span className="block text-[9.5px] text-white/50 font-semibold">{job.meta}</span>
												</span>
												{job.status === "printing" ? (
													<span className="flex-none flex items-center gap-1.5 text-[9.5px] font-bold text-white/70">
														<span className="w-3 h-3 border-2 border-white/30 border-t-green rounded-full animate-[cpSpin_1s_linear_infinite]" />
														Printing
													</span>
												) : (
													<span className="flex-none text-[9.5px] font-bold text-green bg-green/15 rounded-full px-2 py-1">Ready</span>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
							{/* stand */}
							<div className="w-16 h-4 bg-white/12 mx-auto" />
							<div className="w-32 h-1.5 rounded-full bg-white/18 mx-auto" />
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
			quote: "\u201cMy printer used to sit idle till noon. Now I get 40-60 pre-paid jobs before the first class ends. It's honestly changed my month.\u201d",
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
			quote: "\u201cSigning up took me ten minutes and cost nothing. I toggle the shop off when I'm swamped and back on when I'm free. Total control.\u201d",
			initial: "B",
			avatar: "from-green to-[#00C793]",
			name: "Bilal M.",
			shop: "QuickDoc · University Rd",
		},
	];
	return (
		<section className="pt-12 sm:pt-18 pb-5">
			<div className="cp-in">
				<div className="text-center max-w-160 mx-auto mb-8 sm:mb-11.5">
					<div className="font-sora font-bold text-[12px] sm:text-[13px] tracking-[.6px] text-coral-deep uppercase">Loved by shop owners</div>
					<h2 className="font-sora font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] tracking-[-1px] mt-3">Shops are already cashing in</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5.5">
					{items.map((t) => (
						<div key={t.name} className="cp-card-hover bg-white rounded-[22px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(143,155,179,.12)]">
							<div className="text-coral text-[15px] tracking-[2px]">★★★★★</div>
							<p className="text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#37405c] mt-3 sm:mt-3.5 mb-5 sm:mb-5.5 font-medium">{t.quote}</p>
							<div className="flex items-center gap-3">
								<div
									className={`w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-linear-to-br ${t.avatar} flex items-center justify-center text-white font-sora font-bold text-[15px] sm:text-base`}
								>
									{t.initial}
								</div>
								<div>
									<div className="font-bold text-[14px] sm:text-[14.5px]">{t.name}</div>
									<div className="text-[12px] sm:text-[12.5px] text-muted font-semibold">{t.shop}</div>
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
			a: "Not at all. If you have a working printer and internet, you're ready. Jobs arrive on the ClickPrint app on your phone — no new machine, no software to install on a computer.",
			open: true,
		},
		{
			q: "How and when do I get paid?",
			a: "Every order is pre-paid by the student, so you never chase money. Your earnings are totalled up and settled straight to your bank account on a weekly cycle.",
		},
		{
			q: "Who sets the printing prices?",
			a: "You do. You set your per-page rates for black-and-white, color, and binding during onboarding, and you can update them any time from the app.",
		},
		{
			q: "What does it cost to join?",
			a: "Joining is completely free — no signup fee and no monthly charge. ClickPrint takes a small transparent service fee only on completed orders, so we only earn when you do.",
		},
		{
			q: "Can I pause orders when I'm busy?",
			a: "Yes. Flip your shop to \u201cOffline\u201d with one tap whenever you're swamped or closed, and turn it back on when you're ready for more jobs.",
		},
		{
			q: "How do students find my shop?",
			a: "Once verified, your shop appears to students on nearby campuses, ranked by distance and rating. The closer and better-rated you are, the more jobs you receive.",
		},
	];
	return (
		<section id="faq" className="pt-12 sm:pt-18 pb-5 scroll-mt-10">
			<div className="cp-in max-w-210">
				<div className="text-center mx-auto mb-6 sm:mb-8.5">
					<div className="font-sora font-bold text-[12px] sm:text-[13px] tracking-[.6px] text-blue uppercase">Questions from shop owners</div>
					<h2 className="font-sora font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] tracking-[-1px] mt-3">Everything you're wondering</h2>
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
		<section className="pt-12 sm:pt-18 pb-10">
			<div className="cp-in">
				<div className="bg-green rounded-[22px] sm:rounded-[30px] px-6 sm:px-10 py-10 sm:py-14 text-center relative overflow-hidden shadow-[0_30px_60px_rgba(0,217,163,.3)]">
					<div className="absolute -right-10 -top-15 w-40 sm:w-60 h-40 sm:h-60 rounded-full bg-white/[.14]" />
					<div className="absolute -left-12.5 -bottom-17.5 w-37.5 sm:w-50 h-37.5 sm:h-50 rounded-full bg-white/10" />
					<h2 className="relative font-sora font-extrabold text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-1px] sm:tracking-[-1.2px] text-[#053a2e] mb-3 sm:mb-3.5">
						Ready to fill your print queue?
					</h2>
					<p className="relative text-[15px] sm:text-[17.5px] text-[rgba(5,58,46,.82)] max-w-130 mx-auto mb-6 sm:mb-7.5 font-semibold">
						Register in two minutes and start receiving pre-paid jobs.
					</p>
					<button
						onClick={onRegister}
						className="cp-btn-primary relative border-none cursor-pointer font-manrope font-extrabold text-[15px] sm:text-[16.5px] text-white bg-coral px-7 sm:px-9.5 py-4 sm:py-4.25 rounded-[14px] shadow-[0_14px_34px_rgba(255,123,107,.4)]"
					>
						Register your shop
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
