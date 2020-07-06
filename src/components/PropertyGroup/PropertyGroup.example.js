import PropertyGroup from './PropertyGroup';

const exampleOptions = [
  {
    key: 'towels',
    label: 'Towels',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'floats_tubes',
    label: 'floats and tubes',
  },
  {
    key: 'own_drinks',
    label: 'Own drinks allowed',
  },
  {
    key: 'life_jacket',
    label: 'Life jacket',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];

export const WithSomeSelected = {
  component: PropertyGroup,
  props: {
    id: 'amenities',
    options: exampleOptions,
    selectedOptions: ['towels', 'bathroom', 'floats'],
    twoColumns: true,
  },
  group: 'misc',
};
