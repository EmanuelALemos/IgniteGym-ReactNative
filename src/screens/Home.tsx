import { ExerciceCard } from '@components/ExerciceCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { VStack, FlatList, HStack, Heading, Text } from 'native-base';
import { useState } from 'react';

export function Home() { 
    const [groups, setGroups] = useState(['Costas', 'Biceps', 'Triceps', 'Ombro'])
    const [groupSelected, setGroupSeleceted] = useState('costa');
    


    return(
        <VStack flex={1}>
            <HomeHeader/>

            <FlatList
                data={groups} 
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group 
                        name={item}   
                        isActive = {groupSelected === item}
                        onPress={() => setGroupSeleceted(item)}
                    />
                )}  
                horizontal
                showsHorizontalScrollIndicator = {false}
                _contentContainerStyle={{ px: 8}}
                my={10}    
                maxH={10}    
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent='space-between' mb={5}>
                    <Heading color='gray.200' fontSize='md'>
                        Exercícios
                    </Heading>
                    <Text color = 'gray.200' fontSize = 'md'>
                        4
                    </Text>
                </HStack>
                <ExerciceCard/>
                <ExerciceCard/>
            </VStack>
        </VStack>
    );
}