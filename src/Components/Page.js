import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import img1 from './Rectangle 17.png';

function Page() {
  return (
    <Box
      w="100vw"
      h="85vh"
      border="1px solid black"
      bgImg={img1}
      bgSize="cover"
      bgPosition="center"
    >
      <Box  
      bgColor={'black'}
      opacity={0.7}
        position="absolute"
       mt="38%"
        left="50%"
        transform="translateX(-50%)"
        border="4px solid black"
        w="100vw"
        h="17vh"
       
        color="white"       
        >
            <Text textAlign={'center'} mt={'20px'} fontFamily={'Italiana'} fontSize={'50px'}>"Forever Starts Now: Two Hearts, One Journey!"</Text>       
      </Box>
    </Box>
  );
}
export default Page;