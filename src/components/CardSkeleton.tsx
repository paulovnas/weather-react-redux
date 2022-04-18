import { 
    Stack,
    Box, 
    SkeletonCircle, 
    SkeletonText,
    Skeleton,
    Center,
    Wrap
     } from '@chakra-ui/react';


function CardSkeleton() {
  return (
    <>
        <Stack spacing={2} direction='row'>
          <Wrap spacing='10px' justify='center'>
            <Box minW='xs' maxW='lg' padding='6' boxShadow='lg'>
              <Center mt='2' mb='6'>
                <Skeleton width='140px' height='60px' />
              </Center>
              <Center mb='8'>
                <SkeletonCircle size='16' />
              </Center>
              <Center mb='2'>
                <SkeletonText w='150px' noOfLines={1} spacing='4' />
              </Center>
            </Box>
            <Box minW='xs' maxW='lg' padding='6' boxShadow='lg'>
              <Center mt='2'>
                <Skeleton width='100%' height='34px' />
              </Center>
              <Center mt='2' mb='8'>
                <Skeleton width='100%' height='15px' />
              </Center>
              <Center mb='8'>
                <SkeletonText width='100%' noOfLines={2} spacing='2' />
              </Center>
              <Center mb='2'>
                <Skeleton width='90%' height='42px' />
              </Center>
            </Box>
          </Wrap>
        </Stack>
    </>
  );
}

export default CardSkeleton;