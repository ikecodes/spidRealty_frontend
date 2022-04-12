import React from "react";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Image from "../shared/Image";
import AdvertiseImg from "../assets/images/family.jpg";

const Advertise = () => {
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize m-0 mb-5 text-center'>
          advertise with us
        </h1>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            consequatur est, laudantium, minima nobis explicabo alias modi,
            reiciendis sit ipsum deleniti facilis provident corrupti numquam
            deserunt necessitatibus sint fuga eius? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellat exercitationem unde
            reiciendis inventore, illum eius mollitia nulla voluptate saepe
            eligendi eveniet nobis facere, quam, voluptatem illo cumque
            dignissimos. Dolorem, temporibus? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Vitae consequuntur excepturi fugiat
            numquam quas explicabo ullam. Quod et quo consequuntur saepe fugiat
            expedita accusantium quidem dolorem, earum reiciendis quasi
            voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            consectetur aliquam, nesciunt excepturi architecto suscipit labore
            officia atque repellat impedit sit facilis corrupti a voluptas
            blanditiis dolorem ipsa! Illum, commodi?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officiis saepe consequuntur laboriosam
            itaque minima aperiam, assumenda commodi voluptate nostrum
            repellendus earum eaque alias temporibus hic sequi, iure expedita
            mollitia laudantium!
          </p>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-6'>
            <Image src={AdvertiseImg} alt='about' h={100} unit='%' rounded />
          </div>
          <div className='col-lg-6'>
            <h2 className='my-3 text-capitalize'>fulfilling a legacy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              pariatur odio odit ipsam perspiciatis quisquam iure in qui
              distinctio maxime, voluptates cupiditate tempora consequuntur.
              Deleniti nesciunt perferendis cumque officia ipsam? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ipsum quas maxime
              totam natus animi ratione accusantium illum quo sit quam, nisi
              dolores! Amet rem dolore expedita dolorum libero esse nisi.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              facilis est dignissimos quis ex, aliquid pariatur corrupti
              laudantium fugit unde vel doloremque itaque, minima labore ipsa,
              ad debitis. Hic, eveniet!
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row flex-md-row-reverse'>
          <div className='col-lg-6'>
            <Image src={AdvertiseImg} alt='about' h={100} unit='%' rounded />
          </div>
          <div className='col-lg-6'>
            <h2 className='my-3 text-capitalize'>fulfilling a legacy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              pariatur odio odit ipsam perspiciatis quisquam iure in qui
              distinctio maxime, voluptates cupiditate tempora consequuntur.
              Deleniti nesciunt perferendis cumque officia ipsam? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ipsum quas maxime
              totam natus animi ratione accusantium illum quo sit quam, nisi
              dolores! Amet rem dolore expedita dolorum libero esse nisi.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              facilis est dignissimos quis ex, aliquid pariatur corrupti
              laudantium fugit unde vel doloremque itaque, minima labore ipsa,
              ad debitis. Hic, eveniet!
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Advertise;
