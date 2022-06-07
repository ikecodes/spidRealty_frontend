import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";
import { AdminState } from "../constants/interfaces";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";

const Blog = () => {
  const { articles } = useSelector((state: AdminState) => state.admin);

  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize  m-0 p-0 mb-5 text-center'>
          latest news and articles
        </h1>
        <div className='row'>
          {articles.length > 0 &&
            articles.map((article: any) => (
              <ArticleCard
                key={article._id}
                id={article._id}
                slug={article.slug}
                title={article.title}
                date={article.createdAt}
                photo={article.photo}
                description={article.description}
              />
            ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;
