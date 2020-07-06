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

import css from './HelpPage.css';

const HelpPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="How it works"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HelpPage',
        description: 'Boatbuds',
        name: 'Help page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>How it works.</h1>

          <div className={css.contentWrapper}>
          <div className={css.contentSide}>
              <p>Become a captain in few simple steps</p>
            </div>

            <div className={css.contentMain}>
            <h2>How it works?</h2>
            <p>We connect strangers on the water. Whether you want to go out for an evening float on a pontoon boat or go for a cruise at a new lake, we bring together the people who have the boats and the people who want to go out. Either select or create a float plan that outlines your trip desire and book a plan!</p>
            
            <h2>If you own a boat...</h2>
            <p>If you are a boat captain and want to invite mates to partake in your boating adventure, go the captain's menu to create a float plan.  Be sure to add pictures and location. </p>

            <h2>Here are a few tips when listing your boats on The Boat Buds</h2>
            <ol>
                <li>Be as descriptive and thorough as possible! The more detailed and thorough your listing is, the more interest and rental requests it will generate.</li>
                <li>Use the highest quality images you have and you can also add a stock image as the cover if you'd like. Keep in mind the better the images, the more rental requests you'll likely receive. </li>
                <li> If you would like to see an example listing, you can view this one for reference.</li>
                <li>Please mention and identify any logistical specifics,  and/or booking agreement(s) that you might require of users to accept and comply with in your listing.</li>
                <li>Need some help with your listings or still have questions? Reach out to us here and we're always here to help!</li>
            </ol>

            <h2>Fees, Payments, and Disputes</h2>
            <h2>Fees</h2>
            <p>To cover our costs for payment processing + marketplace operations, we charge a 10% transaction fee + the PayPal fee. The PayPal fee is based on your account's fees and is usually around 2.9%.</p>
            <p>In the event that there is a dispute, you are covered by PayPal's Buyer and Seller Protection. For this reason, we use PayPal as the form of payment for all transactions.</p>
            
            
            <h2>Community Guidelines</h2>
            <p>We take the safety of our community seriously, so our team will review all listings and remove any that are suspicious and/or violate our community rules (see below).</p>

            <ol>
                <li>Respect all other members and do not send spam, offensive, or threatening messages, leave comments, or engage in any other form of offensive communication.</li>
                <li>Only create listings for boats you own, are authorized to rent, and are in safe condition to use. </li>
                <li>Try to answer all messages in a timely fashion.  </li>
                <li>The Boat Buds is a third-party marketplace and by using it, you must also comply with any and all local laws, regulations, safety measures, and/or booking agreement(s) by listing owners that are applicable. </li>
                <li>We do not allow contact information or external links (URL's) on listings and/or in images that are added to listings.  This includes emails, websites, and phone numbers.</li>
                <li>For the safety and security of our community, we do not allow contact information to be sent through our messaging prior to a confirmed booking. Sending messages containing your personal information, contact information, or taking transactions off our platform is against our policies and can result in being removed from our community. </li>
            </ol>

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

export default HelpPage;
