import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import destinImage from './images/location_destin.jpg';
import miamiImage from './images/location_miamibeach.jpg';
import clearwaterImage from './images/location_clearwater.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Destin',
          destinImage,
          '?address=Destin%2C%20Florida&bounds=30.3982093%2C-86.5265382%2C30.3935337%2C-86.4957833'
        )}
        {locationLink(
          'Miami Beach',
          miamiImage,
          '?address=Miami%20Beach%2C%20Florida%2C%20United%20States%20of%20America&bounds=25.8997138370259%2C-80.1101899961589%2C25.7476751717557%2C-80.1870835278838'
        )}
        {locationLink(
          'Clear Water',
          clearwaterImage,
          '?address=Florida%2C%20United%20States%20of%20America&bounds=31.000968999989%2C-79.9313803005511%2C24.4303400087635%2C-87.6348969887475'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
