import { useEffect } from "react";

export default function Home() {
	useEffect(function () {
		document.title = "Home Dwi";
	}, []);
	return (
		<section>
			<h2 className="section-title">Selamat datang di websiteku, kaka!</h2>
			<p className="section-description">
				Kamu bisa mengetahui informasi tentangku di sini! Biar apa?
			</p>
			<p>Biar keren dong!</p>
		</section>
	);
}
