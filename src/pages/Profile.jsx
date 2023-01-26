import { useEffect } from "react";

export default function () {
	useEffect(function () {
		document.title = "Profile";
	}, []);

	return (
		<section>
			<h2 className="section-title">Namaku Dwi</h2>
			<p className="section-description">
				Aku adalah seorang kapiten, nenek moyangku seorang pelaut!
			</p>
		</section>
	);
}
