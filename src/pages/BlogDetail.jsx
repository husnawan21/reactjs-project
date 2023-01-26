import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
	const params = useParams();
	const [article, setArticle] = useState({});
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(function () {
		async function getArticle() {
			const request = await fetch(
				`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
			);
			if (!request.ok) {
				return setNotFound(true);
			}

			const response = await request.json();

			document.title = response.title;
			setArticle(response);
			setLoading(false);
		}

		getArticle();
	}, []);

	if (notFound) {
		return <h2>Artikel tidak ditemukan :(</h2>;
	}

	return (
		<section>
			{loading ? (
				<p className="article-loading">Loading article ...</p>
			) : (
				<article className="article">
					<h2 className="article-title">{article.title}</h2>
					<p>
						<time className="article-time">
							{new Date(article.publishedAt).toLocaleDateString()}
						</time>
					</p>
					<img src={article.imageUrl} alt={article.title} />
					<p className="article-summary">{article.summary}</p>
					<p className="article-source">
						Source:{" "}
						<a href={article.url} target="_blank">
							{article.newsSite}
						</a>
					</p>
				</article>
			)}
		</section>
	);
}
