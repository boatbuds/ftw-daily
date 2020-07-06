import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-destin',
    predictionPlace: {
      address: 'Destin, Florida',
      bounds: new LatLngBounds(new LatLng(30.4207059976164, -86.3967756199359), new LatLng(30.3749996312813, -86.6005560167061)),
    },
  },
  {
    id: 'default-miamibeach',
    predictionPlace: {
      address: 'Miami Beach, Florida',
      bounds: new LatLngBounds(new LatLng(25.8997138370259, -80.1101899961589), new LatLng(25.7476751717557, -80.1870835278838)),
    },
  },
  {
    id: 'default-clearwater',
    predictionPlace: {
      address: 'Clear Water, Florida',
      bounds: new LatLngBounds(new LatLng(28.0501430160811, -82.6267750783731), new LatLng(27.8646949872898, -82.8292269902566)),
    },
  },
  {
    id: 'default-panamacity',
    predictionPlace: {
      address: 'Panama City, Florida',
      bounds: new LatLngBounds(new LatLng(30.4406259261156, -85.709228040665), new LatLng(30.1623474255799, -86.0799209651102)),
    },
  },
  {
    id: 'default-sanibelisland',
    predictionPlace: {
      address: 'Sanibel Island, Florida',
      bounds: new LatLngBounds(new LatLng(26.45602130554143, -82.04469124722297), new LatLng(26.42008869445856, -82.08482075277703)),
    },
  },
];
