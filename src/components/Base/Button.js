import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  position,
  space,
  flexbox,
  margin,
  border,
  padding,
  shadow,
  background,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(
    color,
    size,
    position,
    space,
    flexbox,
    margin,
    border,
    padding,
    shadow,
    background,
    borderRadius,
  ),
);

export default Button;
