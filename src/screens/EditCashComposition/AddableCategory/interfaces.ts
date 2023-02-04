import { ImageSourcePropType } from 'react-native';

export interface AddableCategoryProps {
  imageSource: ImageSourcePropType;
  name: string;
  onPress: (name: string) => void;
}
