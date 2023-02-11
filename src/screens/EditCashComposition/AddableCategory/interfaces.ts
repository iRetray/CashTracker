import { ImageSourcePropType } from 'react-native';

export interface AddableCategoryProps {
  imageSource: ImageSourcePropType;
  name: string;
  isFirstRender: boolean;
  onPress: (name: string) => void;
}
