import { Heading, IconButton, VStack, useColorMode, Link, Flex } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { store } from "./app/store";
import FormSearch from './components/FormSearch';
import CardWeather from './components/CardWeather';
import { useSelector } from "react-redux";
import { IWeatherState } from './interfaces/Weather';
import CardSkeleton from './components/CardSkeleton';

function App() {
  const loading = useSelector(
    (state : IWeatherState) => state.weatherWatch.loading
  );
  const actual = useSelector(
    (state : IWeatherState) => state.weatherWatch.actual
  );

  const { colorMode, toggleColorMode } = useColorMode();
    store.subscribe(() => {
        localStorage.setItem('city', store.getState().weatherWatch.city);
  });

  function getBody() {
    const eCity = Object.keys(actual).length > 0; 
    if(loading) {
      return <CardSkeleton />;
    } else {
      if(eCity) {
        return <CardWeather previsao={actual} />;
      } else {
        return null;
      }
    }
  }

  return (
    <VStack p={4} minH='100vh' pb={28}>
      <IconButton 
        aria-label='Trocar tema'
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound={true} 
        size='md'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />

      <Heading
        p='5'
        fontWeight='extrabold'
        size='xl'
        bgGradient='linear(to-l, teal.300, blue.500)'
        bgClip='text'
      >
        Previsão do Tempo
      </Heading>

      <FormSearch />
      {getBody()}
    
      <Flex position='absolute' bottom='5'>
        <Link href='https://github.com/linhous' target='_blank' >
            <IconButton 
            aria-label='Github'
            icon={<FaGithub/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
        <Link href='https://www.linkedin.com/in/paulo-vitor-nascimento-656b0145/' target='_blank'>
            <IconButton 
            aria-label='Linkedin'
            icon={<FaLinkedin/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
        <Link href='https://www.instagram.com/linhous/' target='_blank'>
            <IconButton 
            aria-label='Instagram'
            icon={<FaInstagram/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
        <Link href='https://twitter.com/paulinho_nas' target='_blank'>
            <IconButton 
            aria-label='Twitter'
            icon={<FaTwitter/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
        <Link href='https://www.facebook.com/nascimento.paulo.vitor' target='_blank'>
            <IconButton
            aria-label='Facebook' 
            icon={<FaFacebook/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
      </Flex>
    </VStack>
  );
}

export default App;
