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
      bounds: new LatLngBounds(new LatLng(30.3982093, -86.5265382), new LatLng(30.3935337, -86.4957833)),
    },
  },
  {
    id: 'default-miamibeach',
    predictionPlace: {
      address: 'Miami Beach, Florida',
      bounds: new LatLngBounds(new LatLng(25.8102246, -80.2103539), new LatLng(25.790654, -80.1300455)),
    },
  },
  {
    id: 'default-clearwater',
    predictionPlace: {
      address: 'Clear Water, Florida',
      bounds: new LatLngBounds(new LatLng(27.9925827, -82.8176108), new LatLng(27.9658533, -82.8001026)),
    },
  },
  {
    id: 'default-panamacity',
    predictionPlace: {
      address: 'Panama City, Florida',
      bounds: new LatLngBounds(new LatLng(30.2309048, -85.9423013), new LatLng(30.1765914, -85.8054879)),
    },
  },
  {
    id: 'default-sanibelisland',
    predictionPlace: {
      address: 'Sanibel Island, Florida',
      bounds: new LatLngBounds(new LatLng(26.4866158, -82.1773239), new LatLng(26.4433972, -82.1115119)),
    },
  },
];
