import type { ChangeEvent } from "react";
import { useState } from "react";
import Footer from "../components/Footer";

interface RegisterPageProps {
	onHome: () => void;
	onRegister: () => void;
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

export default function RegisterPage({ onHome, onRegister }: RegisterPageProps) {
	const [form, setForm] = useState<FormState>(initialForm);
	const [submitted, setSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");

	const setF = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const value = e.target.value;
		setForm((s) => ({ ...s, [key]: value }));
		setError("");
	};

	const submit = async () => {
		const missing: string[] = [];
		if (!form.ownerName.trim()) missing.push("owner name");
		if (!form.whatsapp.trim()) missing.push("WhatsApp number");
		if (!form.shopName.trim()) missing.push("shop name");
		if (!form.address.trim()) missing.push("address");
		if (missing.length) {
			setError("Please fill in: " + missing.join(", ") + ".");
			return;
		}

		setSubmitting(true);
		setError("");

		const body = new URLSearchParams({
			form: "ClickPrint Registration Form",
			ownerName: form.ownerName.trim(),
			shopName: form.shopName.trim(),
			whatsapp: form.whatsapp.trim(),
			address: form.address.trim(),
		});

		try {
			const res = await fetch("https://contactform.wckdpk.workers.dev", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: body.toString(),
			});
			if (!res.ok) throw new Error("Request failed");
			setSubmitted(true);
			setError("");
			window.scrollTo({ top: 0, behavior: "auto" });
		} catch {
			setError("Something went wrong submitting your registration. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	const ownerFirst = form.ownerName.trim().split(/\s+/)[0] || "there";
	const shopNameOut = form.shopName.trim() || "your shop";

	const label = "block font-bold text-[13.5px] mb-2";
	const required = <span className="text-coral-deep">*</span>;

	return (
		<>
			<main className="min-h-[calc(100vh-74px)]">
			<div className="relative overflow-hidden pt-10">
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
						<div className="cp-rise bg-white rounded-[26px] px-10 py-14 text-center shadow-[0_20px_50px_rgba(143,155,179,.16)] max-w-140 mx-auto my-10">
							<div className="w-21 h-21 rounded-full bg-[rgba(0,217,163,.14)] flex items-center justify-center mx-auto mb-6">
								<div className="w-13 h-13 rounded-full bg-green flex items-center justify-center text-white text-[28px] font-extrabold">
									✓
								</div>
							</div>
							<h2 className="font-sora font-extrabold text-[30px] tracking-[-.8px] mb-3">Application received!</h2>
							<p className="text-body text-base leading-[1.6] max-w-100 mx-auto mb-7">
								Thanks, {ownerFirst}. Our team will verify <b>{shopNameOut}</b> and reach out on WhatsApp within 24 hours to get you
								live.
							</p>
							<button
								onClick={onHome}
								className="cp-btn-primary border-none cursor-pointer font-manrope font-bold text-[15.5px] text-white bg-coral px-8 py-3.75 rounded-[13px]"
							>
								Back to home
							</button>
						</div>
					) : (
						<div className="grid grid-cols-[1fr_320px] gap-8.5 items-start pb-15">
							{/* form card */}
							<div className="bg-white rounded-[26px] p-9 shadow-[0_16px_44px_rgba(143,155,179,.14)]">
								<div className="font-sora font-bold text-[13px] tracking-[.6px] text-coral-deep uppercase">Shop registration</div>
								<h1 className="font-sora font-extrabold text-[32px] tracking-[-1px] mt-2.5 mb-1.5">
									Register your print shop
								</h1>
								<p className="text-muted text-[15px] mb-7">Takes about 2 minutes. All fields marked {required} are required.</p>

								<div className="grid grid-cols-2 gap-4.5">
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
									<div className="col-span-2">
										<label className={label}>Shop name {required}</label>
										<input
											className="cp-inp"
											type="text"
											placeholder="e.g. Jani Print Shop"
											value={form.shopName}
											onChange={setF("shopName")}
										/>
									</div>
									<div className="col-span-2">
										<label className={label}>WhatsApp number {required}</label>
										<div className="flex gap-2">
											<input
												className="cp-inp"
												type="tel"
												placeholder="+92 323 5400291"
												value={form.whatsapp}
												onChange={setF("whatsapp")}
											/>
										</div>
									</div>
									

									{/* address */}
									<div className="col-span-2">
										<label className={label}>Shop address {required}</label>
										<textarea
											className="cp-inp resize-y"
											rows={4}
											placeholder="Street, area, city"
											value={form.address}
											onChange={setF("address")}
										/>
									</div>
								</div>

								{/* error */}
								{error && (
									<div className="mt-5 bg-[rgba(255,139,123,.12)] border border-[rgba(255,139,123,.35)] rounded-xl px-4 py-3.25 text-[#d0432e] text-[13.5px] font-semibold">
										{error}
									</div>
								)}

								<button
									onClick={submit}
									disabled={submitting}
									className="cp-btn-primary mt-6.5 w-full border-none cursor-pointer font-manrope font-extrabold text-[16.5px] text-white bg-coral p-4.25 rounded-[14px] shadow-[0_12px_30px_rgba(255,139,123,.35)] disabled:opacity-60 disabled:cursor-not-allowed"
								>
									{submitting ? "Submitting…" : "Submit registration"}
								</button>
								<div className="text-center text-[12.5px] text-muted mt-3.5">
									By submitting you agree to our terms and services. We&apos;ll contact you soon.
								</div>
							</div>

							{/* aside */}
							<aside className="sticky flex flex-col gap-4.5">
								<div className="bg-navy rounded-[22px] p-6.5 text-white shadow-[0_16px_40px_rgba(18,35,63,.2)]">
									<div className="font-sora font-extrabold text-[19px] mb-4.5">What happens next</div>
									<div className="flex flex-col gap-4">
										<div className="flex gap-3.25">
											<span className="flex-none w-7 h-7 rounded-full bg-[rgba(0,217,163,.2)] text-green font-extrabold text-[13px] flex items-center justify-center">
												1
											</span>
											<div className="text-[13.5px] text-white/82 leading-normal">
												We verify your shop details
											</div>
										</div>
										<div className="flex gap-3.25">
											<span className="flex-none w-7 h-7 rounded-full bg-[rgba(59,158,255,.2)] text-blue font-extrabold text-[13px] flex items-center justify-center">
												2
											</span>
											<div className="text-[13.5px] text-white/82 leading-normal">
												Our represantative contacts you on WhatsApp
											</div>
										</div>
										<div className="flex gap-3.25">
											<span className="flex-none w-7 h-7 rounded-full bg-[rgba(255,139,123,.2)] text-coral font-extrabold text-[13px] flex items-center justify-center">
												3
											</span>
											<div className="text-[13.5px] text-white/82 leading-normal">
												You go live &amp; jobs start flowing in
											</div>
										</div>
									</div>
								</div>
							</aside>
						</div>
					)}
				</div>
			</div>
			</main>
			<Footer onRegister={onRegister} />
		</>
	);
}
