import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience the unique Finnish home sauna.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Boats don't run on thanks!</p>
            </div>

            <div className={css.contentMain}>
        

              <p>
              My girlfriend and I had made plans one warm summer day with a buddy who owned a boat. 
              We spent the night before getting everything ready to go and our excitement was building. 
              That morning we woke up early, swung by the corner coffee stand to get us through the hour drive, and headed down the road. 
              Just as we were pulling up to the lake, our friends cancelled on us. 
              </p>
              <p>
              There we were, ready to have some fun in the sun but stranded without options. 
              Stuck at the dock, we somberly watched the boats pull in and smiles float away. 
              We decided to salvage what we could of the day and hike around to a popular point. 
              After sun bathing for a few hours, my girlfriend received a text from her friend saying they were out on their boat and would swing by and grab us. 
              As we were climbing on, they explained they had been there all day without any company and that they wish they had known we were there earlier.
              Knowing boats don’t run on ‘thank yous’, I apologized I didn’t have any cash or brews to compensate for their good deed. 
              They cruised us around for about an hour and dropped us back off, we instantly felt better. 
              As we sat back on the beach watching the boats float by with a new perspective, it hit me; why aren’t we connected on the water?
              </p>

              <p>
              The idea of Boat Buds was born out of a need on the lake that day. 
              It would be a peer to peer network that would join the people who owned boats to people who wanted to go out on them. 
              This wouldn’t be a rental scheme, rather a way for people to broaden their network and a platform that would facilitate a fair exchange in 
              order for both parties to have a good time. Not only does Boat Buds link friends who are going out together on a boat, we make 
              it possible to make plans on any body of water by connecting strangers with the same goal—to have some fun in the sun. 
              It would be a tool that I wish I had many other times that same summer. 
              The more people the idea spread to, the more positive momentum grew and that idea on the lake that day slowly turned into a community.
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href="https://www.facebook.com/theboatbuds">Facebook</ExternalLink> and{' '}
                <ExternalLink href="https://www.instagram.com/theboatbuds">Twitter</ExternalLink>.
              </p>
              <strong>Capt. Jake</strong>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
