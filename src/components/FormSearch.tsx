import { useState, FormEvent, useEffect } from 'react';
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { updateCity, updateActual, updateLoading } from '../slices/WeatherSlice';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../api/weather';
import { IActual } from '../interfaces/Weather';

function FormSearch() {
    const toast = useToast();
    const dispatch = useDispatch();
    const [content, setContent] = useState(localStorage.getItem('city') || '');
    const [statusInput, setStatusInput] = useState(true);

    useEffect(() => {
        if (content) {
            searchCity();
        }
    },[]);

    function searchCity() {
        const taskText = content.trim();

        if (!taskText) {
            toast({
                title: 'Informe uma cidade!',
                position: 'top',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            setStatusInput(false);
            
            return setContent('');
        }

        localStorage.setItem('city', content);
        dispatch(updateLoading(true));
        fetchWeather(content).then(res => {
            dispatch(updateActual(res.data as IActual));
        }).catch(error => {
            var msg = 'Cidade não encontrada!';

            if(error.response.data.cod != 404) {
                msg = error.response.data.message;
            }

            toast({
                title: msg,
                position: 'top',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            dispatch(updateActual({}));
        }).finally(() => {
            dispatch(updateLoading(false));
        });

        dispatch(updateCity(taskText));
        setContent('');
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        searchCity();
    }

    if (content && !statusInput) {
        setStatusInput(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='4' mb='4'>
                <Input
                    h='46'
                    borderColor={!statusInput ? 'red.300' : 'transparent'}
                    variant='filled'
                    placeholder='Informe a cidade...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                colorScheme='blue'
                px='8'
                pl='10'
                pr='10'
                h='46' 
                type='submit'>Pesquisar</Button>
            </HStack>
        </form>
    );
}

export default FormSearch;