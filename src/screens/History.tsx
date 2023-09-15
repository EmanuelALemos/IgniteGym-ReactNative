import { useState } from 'react';
import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { VStack, Heading, SectionList } from 'native-base';

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: '13.09.23',
            data: ['Puxada frontal', 'Remada unilateral']
        },
        {
            title: '12.09.23',
            data: ['Remada unilateral']
        },
    ])
    
    return(
        <VStack flex={1}>
            <ScreenHeader title='Hisótico de exercicios'/>

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <HistoryCard/>
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color='gray.200' fontSize='md' mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
            />
        </VStack>
    );
}