import NewsAPI from "newsapi";
import dotenv from "dotenv";

dotenv.config();

const newsapi = new NewsAPI(process.env.NEWS_API);

const GetNews = async (req, res) => {
  try {
    const response = await newsapi.v2.everything({
      q: "Machine Learning OR OpenAI OR data OR Tesla OR EV OR Data Science OR JavaScript OR egypt OR AI OR Salesforce OR Python OR R programming OR Mathematics",
      language: "en",
      sortBy: "publishedAt",
    });

    res.status(200).json(response.articles);
  } catch (error) {
    res.status(500).json({ message: `Server Error` });
  }
};

export default GetNews;
