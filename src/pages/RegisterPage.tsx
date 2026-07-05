import type { ChangeEvent } from "react";
import { useState } from "react";

interface RegisterPageProps {
	onHome: () => void;
}

interface FormState {
	ownerName: string;
	code: string;
	whatsapp: string;
	secondary: string;
	email: string;
	shopName: string;
	address: string;
	mapsLink: string;
	photo: string;
}

const initialForm: FormState = {
	ownerName: "",
	code: "+92",
	whatsapp: "",
	secondary: "",
	email: "",
	shopName: "",
	address: "",
	mapsLink: "",
	photo: "",
};

export default function RegisterPage({ onHome }: RegisterPageProps) {
	const [form, setForm] = useState<FormState>(initialForm);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const setF = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const value = e.target.value;
		setForm((s) => ({ ...s, [key]: value }));
		setError("");
	};

	const onPhoto = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			setForm((s) => ({ ...s, photo: reader.result as string }));
			setError("");
		};
		reader.readAsDataURL(file);
	};

	const submit = () => {
		const missing: string[] = [];
		if (!form.ownerName.trim()) missing.push("owner name");
		if (!form.whatsapp.trim()) missing.push("WhatsApp number");
		if (!form.email.trim()) missing.push("email");
		if (!form.shopName.trim()) missing.push("shop name");
		if (!form.photo) missing.push("shop photo");
		if (!form.address.trim()) missing.push("address");
		if (!form.mapsLink.trim()) missing.push("Google Maps link");
		if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
			setError("Please enter a valid email address.");
			return;
		}
		if (missing.length) {
			setError("Please fill in: " + missing.join(", ") + ".");
			return;
		}
		setSubmitted(true);
		setError("");
		window.scrollTo({ top: 0, behavior: "auto" });
	};

	const openMaps = () => {
		window.open("https://www.google.com/maps", "_blank");
	};

	const ownerFirst = form.ownerName.trim().split(/\s+/)[0] || "there";
	const shopNameOut = form.shopName.trim() || "your shop";

	const label = "block font-bold text-[13.5px] mb-2";
	const required = <span className="text-coral-deep">*</span>;

	return (
		<main className="min-h-[calc(100vh-74px)]">
			<div className="relative overflow-hidden">
				<div
					className="absolute inset-0"
					style={{
						background: "radial-gradient(800px 400px at 85% -10%, rgba(59,158,255,.1), transparent 60%),radial-gradient(700px 400px at 0% 6%, rgba(0,217,163,.08), transparent 60%)",
					}}
				/>
				<div className="cp-in relative max-w-240 pt-11 pb-20">
					<a onClick={onHome} className="cursor-pointer inline-flex items-center gap-1.75 text-muted font-bold text-sm mb-5.5">
						← Back to home
					</a>

					{submitted ? (
						/* success */
						<div className="cp-rise bg-white rounded-[26px] px-10 py-14 text-center shadow-[0_20px_50px_rgba(143,155,179,.16)] max-w-[560px] mx-auto my-10">
							<div className="w-21 h-21 rounded-full bg-[rgba(0,217,163,.14)] flex items-center justify-center mx-auto mb-6">
								<div className="w-13 h-13 rounded-full bg-green flex items-center justify-center text-white text-[28px] font-extrabold">
									✓
								</div>
							</div>
							<h2 className="font-sora font-extrabold text-[30px] tracking-[-.8px] mb-3">Application received!</h2>
							<p className="text-body text-base leading-[1.6] max-w-[400px] mx-auto mb-7">
								Thanks, {ownerFirst}. Our team will verify <b>{shopNameOut}</b> and reach out on WhatsApp within 24 hours to get you
								live.
							</p>
							<button
								onClick={onHome}
								className="cp-btn-primary border-none cursor-pointer font-manrope font-bold text-[15.5px] text-white bg-coral px-8 py-[15px] rounded-[13px]"
							>
								Back to home
							</button>
						</div>
					) : (
						<div className="grid grid-cols-[1fr_320px] gap-[34px] items-start">
							{/* form card */}
							<div className="bg-white rounded-[26px] p-9 shadow-[0_16px_44px_rgba(143,155,179,.14)]">
								<div className="font-sora font-bold text-[13px] tracking-[.6px] text-coral-deep uppercase">Shop registration</div>
								<h1 className="font-sora font-extrabold text-[32px] tracking-[-1px] mt-[10px] mb-[6px]">
									Register your print shop
								</h1>
								<p className="text-muted text-[15px] mb-7">Takes about 2 minutes. All fields marked {required} are required.</p>

								<div className="grid grid-cols-2 gap-[18px]">
									<div className="col-span-2">
										<label className={label}>Owner name {required}</label>
										<input
											className="cp-inp"
											type="text"
											placeholder="e.g. Adeel Qureshi"
											value={form.ownerName}
											onChange={setF("ownerName")}
										/>
									</div>
									<div>
										<label className={label}>WhatsApp number {required}</label>
										<div className="flex gap-2">
											<select className="cp-inp w-[104px] flex-none" value={form.code} onChange={setF("code")}>
												<option value="+92">🇵🇰 +92</option>
												<option value="+91">🇮🇳 +91</option>
												<option value="+880">🇧🇩 +880</option>
												<option value="+971">🇦🇪 +971</option>
												<option value="+44">🇬🇧 +44</option>
												<option value="+1">🇺🇸 +1</option>
											</select>
											<input
												className="cp-inp"
												type="tel"
												placeholder="300 1234567"
												value={form.whatsapp}
												onChange={setF("whatsapp")}
											/>
										</div>
									</div>
									<div>
										<label className={label}>Secondary contact</label>
										<input
											className="cp-inp"
											type="tel"
											placeholder="Landline or alternate number"
											value={form.secondary}
											onChange={setF("secondary")}
										/>
									</div>
									<div>
										<label className={label}>Email address {required}</label>
										<input
											className="cp-inp"
											type="email"
											placeholder="you@example.com"
											value={form.email}
											onChange={setF("email")}
										/>
									</div>
									<div>
										<label className={label}>Shop name {required}</label>
										<input
											className="cp-inp"
											type="text"
											placeholder="e.g. Nova Print & Copies"
											value={form.shopName}
											onChange={setF("shopName")}
										/>
									</div>

									{/* photo upload */}
									<div className="col-span-2">
										<label className={label}>Photo of your shop {required}</label>
										<label className="cursor-pointer block">
											<input type="file" accept="image/*" onChange={onPhoto} className="hidden" />
											{form.photo ? (
												<div className="relative rounded-2xl overflow-hidden border-[1.5px] border-line">
													<img
														src={form.photo}
														alt="Shop preview"
														className="w-full h-[220px] object-cover block"
													/>
													<div className="absolute bottom-3 right-3 bg-[rgba(18,35,63,.82)] text-white text-[12.5px] font-bold px-[14px] py-2 rounded-[10px] backdrop-blur-[6px]">
														Change photo
													</div>
												</div>
											) : (
												<div className="border-2 border-dashed border-[rgba(143,155,179,.4)] rounded-2xl p-[34px] text-center bg-cloud transition-[.2s]">
													<div className="w-[52px] h-[52px] rounded-[15px] bg-[rgba(59,158,255,.12)] flex items-center justify-center mx-auto mb-[14px] text-2xl">
														📷
													</div>
													<div className="font-bold text-[15px] text-ink">Tap to upload a photo</div>
													<div className="text-[13px] text-muted mt-1">
														A clear shot of your shopfront · JPG or PNG
													</div>
												</div>
											)}
										</label>
									</div>

									{/* address */}
									<div className="col-span-2">
										<label className={label}>Shop address {required}</label>
										<textarea
											className="cp-inp resize-y"
											rows={2}
											placeholder="Street, area, city"
											value={form.address}
											onChange={setF("address")}
										/>
									</div>

									{/* maps link */}
									<div className="col-span-2">
										<label className={label}>Google Maps location link {required}</label>
										<div className="flex gap-2">
											<input
												className="cp-inp"
												type="url"
												placeholder="Paste your Google Maps link here"
												value={form.mapsLink}
												onChange={setF("mapsLink")}
											/>
											<button
												onClick={openMaps}
												type="button"
												className="flex-none cursor-pointer font-manrope font-bold text-[13.5px] text-blue bg-[rgba(59,158,255,.1)] border-[1.5px] border-[rgba(59,158,255,.25)] rounded-xl px-4 flex items-center gap-[7px] whitespace-nowrap"
											>
												📍 Open Maps
											</button>
										</div>
										<div className="text-[12.5px] text-muted mt-2 leading-[1.5]">
											Tap <b>Open Maps</b>, find your shop, hit <b>Share → Copy link</b>, then paste it above so
											students get exact directions.
										</div>
									</div>
								</div>

								{/* error */}
								{error && (
									<div className="mt-5 bg-[rgba(255,139,123,.12)] border border-[rgba(255,139,123,.35)] rounded-xl px-4 py-[13px] text-[#d0432e] text-[13.5px] font-semibold">
										{error}
									</div>
								)}

								<button
									onClick={submit}
									className="cp-btn-primary mt-[26px] w-full border-none cursor-pointer font-manrope font-extrabold text-[16.5px] text-white bg-coral p-[17px] rounded-[14px] shadow-[0_12px_30px_rgba(255,139,123,.35)]"
								>
									Submit registration →
								</button>
								<div className="text-center text-[12.5px] text-muted mt-[14px]">
									By submitting you agree to Click Print&apos;s partner terms. We&apos;ll verify and call you on WhatsApp.
								</div>
							</div>

							{/* aside */}
							<aside className="sticky top-24 flex flex-col gap-[18px]">
								<div className="bg-navy rounded-[22px] p-[26px] text-white shadow-[0_16px_40px_rgba(18,35,63,.2)]">
									<div className="font-sora font-extrabold text-[19px] mb-[18px]">What happens next</div>
									<div className="flex flex-col gap-4">
										<div className="flex gap-[13px]">
											<span className="flex-none w-7 h-7 rounded-full bg-[rgba(0,217,163,.2)] text-green font-extrabold text-[13px] flex items-center justify-center">
												1
											</span>
											<div className="text-[13.5px] text-white/[.82] leading-[1.5]">
												We verify your shop details &amp; photo
											</div>
										</div>
										<div className="flex gap-[13px]">
											<span className="flex-none w-7 h-7 rounded-full bg-[rgba(59,158,255,.2)] text-blue font-extrabold text-[13px] flex items-center justify-center">
												2
											</span>
											<div className="text-[13.5px] text-white/[.82] leading-[1.5]">
												A partner rep calls you on WhatsApp
											</div>
										</div>
										<div className="flex gap-[13px]">
											<span className="flex-none w-7 h-7 rounded-full bg-[rgba(255,139,123,.2)] text-coral font-extrabold text-[13px] flex items-center justify-center">
												3
											</span>
											<div className="text-[13.5px] text-white/[.82] leading-[1.5]">
												You go live &amp; jobs start flowing in
											</div>
										</div>
									</div>
								</div>
								<div className="bg-[rgba(0,217,163,.1)] border border-[rgba(0,217,163,.25)] rounded-[18px] p-5">
									<div className="font-sora font-extrabold text-[15px] text-[#00916f] mb-[6px]">Free to join</div>
									<div className="text-[13.5px] text-[#3b7a67] leading-[1.55]">
										No signup fee, no monthly cost. You only ever pay a small fee on completed orders.
									</div>
								</div>
							</aside>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
