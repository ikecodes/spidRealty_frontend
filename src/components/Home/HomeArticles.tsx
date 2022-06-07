import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../constants/colors";
import { AdminState } from "../../constants/interfaces";
import Section from "../../layouts/Section";
import ArticleCard from "../ArticleCard";
const HomeArticles = () => {
  const { articles } = useSelector((state: AdminState) => state.admin);

  const featuredArticles = articles
    .filter((article: any) => article.isFeatured === true)
    .slice(0, 3);
  useEffect(() => {}, []);
  return (
    <Section>
      <div className='container'>
        {featuredArticles.length > 0 && (
          <h1 className='text-capitalize my-5'>featured articles & updates</h1>
        )}

        <div className='row'>
          {featuredArticles.length > 0 &&
            featuredArticles.map((article: any) => (
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
        <div className='text-center my-3'>
          <Link to='/blog'>
            <Button>explore all</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

const Button = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  background: ${colors.white};
  border-radius: 5rem;

  transform-origin: bottom;
  transition: all 0.3s linear;

  &:hover {
    color: ${colors.tertiary};
    border: 1px solid ${colors.tertiary};
  }
`;
export default HomeArticles;
