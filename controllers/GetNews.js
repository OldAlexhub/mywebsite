import NewsAPI from "newsapi";
import dotenv from "dotenv";

dotenv.config();

const newsapi = new NewsAPI(process.env.NEWS_API);

const GetNews = async (req, res) => {
  try {
    const response = await newsapi.v2.everything({
      q: "technology OR transportation OR data OR stock market OR ev OR data analysis OR javascript OR egypt OR Data Science OR stocks OR tesla OR R programming OR Python",
      language: "en",
      sortBy: "publishedAt",
    });

    res.status(200).json(response.articles);
  } catch (error) {
    res.status(500).json({ message: `Server Error` });
  }
};

export default GetNews;
