import React, { useEffect } from "react";
import {
  BsCalendarDate,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsClock,
} from "react-icons/bs";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Loader from "../shared/Loader";
import Image from "../shared/Image";
import SimilarPostCard from "../components/SimilarPostCard";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../constants/interfaces";
import { useLocation } from "react-router-dom";
import { getArticle } from "../slices/adminSlice";
import moment from "moment";

const BlogView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading, article } = useSelector((state: AdminState) => state.admin);

  useEffect(() => {
    dispatch(getArticle(location.state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) return <Loader />;
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize mb-3 text-center'>{article?.title}</h1>
        <div className='text-dark  d-flex justify-content-around mb-3  flex-wrap bg-light gap-3 py-2'>
          <div className='d-flex align-items-center '>
            {/* <BsShare size={15} className='me-1' />
            <span className='me-3 mt-1'>Share</span> */}
            <BsFacebook color='#3b5998' size={20} className='me-3' />
            <BsTwitter color='#00acee' size={20} className='me-3' />
            <BsLinkedin color='#0e76a8' size={20} className='me-3' />
          </div>
          <div className='d-flex align-items-center'>
            <BsCalendarDate size={17} className='me-1' />
            <span className='mt-1 m-0 m-0'>
              {moment(article?.createdAt).format("L")}
            </span>
          </div>
          <div className='d-flex align-items-center'>
            <BsClock size={15} className='me-1' />
            <span className='m-0 p-0'>{article?.readingTime?.text}</span>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-8'>
            <Image src={article?.photo} h={25} unit='rem' alt='blog' />
            <div
              className='my-3'
              dangerouslySetInnerHTML={{ __html: article?.body }}
            />
          </div>
          <div className='col-lg-4'>
            <h4 className='text-capitalize text dark'>similar posts</h4>
            <div>
              <SimilarPostCard />
              <SimilarPostCard />
              <SimilarPostCard />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default BlogView;
