import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from'@expo-google-fonts/inter';

import { Home } from './src/screens/home';
import { Background } from './src/Componentes/Background';
import { Loading } from './src/Componentes/Loading';

export default function App() {
  const [fonstAreLoeaded] =useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    <Background>
      <StatusBar
      barStyle ="light-content"
      backgroundColor = "transparent"
      translucent
      />
      {fonstAreLoeaded ? <Home/> : <Loading/>}
    </Background>
  );
};

//antes de importar pelo expo para a aplicacao
//react native navigation - install react-native-safe-area-context
//expo install expo-linear-gradient