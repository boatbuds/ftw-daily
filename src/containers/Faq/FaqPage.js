import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './FaqPage.css';

const FaqPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Faq"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FaqPage',
        description: 'Boatbuds',
        name: 'Faq page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Frequently Asked Questions.</h1>

          <div className={css.contentWrapper}>
          <div className={css.contentSide}>
              <p>Have questions? We're here to help!</p>
            </div>

            <div className={css.contentMain}>
            <h2>General Questions</h2>
            <p><strong>What does boatbuds do?</strong></p>
            <p>Our marketplace is a platform that allows anyone to create an account in minutes, discover boats, request a time, book, and receive confirmation without any hassles. For captains, we make it easy to add your boat, manage booking requests, message directly with mates, and accept booking requests. As a company, we operate the online platform, market boats, support our community, and ensure that both sides have the best experience possible.</p>

            <h2>boats</h2>
            <p><strong>Is a booking request binding?</strong></p>
            <p>A booking request is not a contractual agreement or binding, it is simply a message and request letting a boat owner know you intend to book their boat.If you sent a request by mistake, need to modify it, or cancel, we encourage you to immediately notify the captain using our messaging. Each listing enforces their own cancellation policy identified on their listing, so please keep this in mind. If you require assistance with a booking request, you can send us a message at any time at contact@boatbuds.com.</p>
            
            <h2>Captains</h2>
            <p><strong>How can I be safe and cautious when using boatbuds</strong></p>
            <p>While we do everything that we can to build the most trusted community of boatbuds to book, we rely on our community of users to help us by being proactive and always reporting any suspicious activity on our platform. We also have Community Guidelines in that outlines this in more detail.</p>

            <h2>Legal and Insurance</h2>
            <p><strong>Does Boatbuds offer insurance?</strong></p>
            <p>No, Boatbuds does not offer marketplace insurance for bookings and instead suggest that all boat captains adequately ensure their boat, equipment, and premises prior to listing it on Boatbuds.</p>
            
            <h2>My account</h2>
            <p><strong>How do I report users acting against Boatbuds policies?</strong></p>
            <p>Please report any suspicious activity or users immediately by sending us an email at contact@boatbuds.com</p>

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

export default FaqPage;
