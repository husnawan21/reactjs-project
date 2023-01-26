import { useEffect } from "react";

export default function Contact() {
	useEffect(function () {
		document.title = "Contact";
	}, []);
	return (
		<section>
			<h2 className="section-title">Boleh kenalan dong!</h2>
			<p className="section-description">
				Kamu bisa menghubungiku, mudah bgt, chat aja kontak di bawah, ya!
			</p>
			<ul>
				<li>Email: dwikeren@gmail.com</li>
				<li>WhatsApp: 081234567890</li>
			</ul>
			<p className="section-description">
				Atau, kamu bisa melihatku pansos di medsos
			</p>
			<ul>
				<li>
					<a href="https://facebook.com">Facebook</a>
				</li>
				<li>
					<a href="https://facebook.com">Twitter</a>
				</li>
				<li>
					<a href="https://facebook.com">Instagram</a>
				</li>
			</ul>
		</section>
	);
}
