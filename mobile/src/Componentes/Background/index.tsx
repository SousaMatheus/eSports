//rnbc estrutura react native
import { ImageBackground } from 'react-native';

import { styles } from './styles';
import backGroundImg from '../../assets/background-galaxy.png';

interface Props {
  children : React.ReactNode;
}

export function Background({children} : Props) {
  return (
    <ImageBackground 
      source = {backGroundImg} //carrega varias vezes, o default nao, isso acelera o carregamento
      defaultSource = {backGroundImg}
      style={styles.container}
    > 
      {children}
    </ImageBackground>
  );
}