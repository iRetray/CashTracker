import { ImageSourcePropType } from 'react-native';

export interface EditableCategoryProps {
  imageSource: ImageSourcePropType;
  isFirstRender: boolean;
  name: string;
  initialValue: number;
  onUpdate: (name: string, updatedValue: number) => void;
  onDelete: (name: string) => void;
}
