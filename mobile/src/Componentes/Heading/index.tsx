import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

//extende todas as propriedades de ViewProps e implementa mais duas que serao dinamicas
interface Props extends ViewProps {
  title : string;
  subtitle : string;
}

//passo as propriedades de props e todas as outras de viewprops com ...rest
export function Heading({title, subtitle, ...rest} : Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}