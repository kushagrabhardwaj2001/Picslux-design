import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import img1 from './Group 16.png'; // Adjust the path to your image
import img2 from './Group 15883.png'; // Adjust the path to your image
import img3 from './Group 15885.png';

function Design() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.100" flexDirection={{ base: 'column', md: 'row' }}>
      <Box p={5} bg="white" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" color="black" m={2} h={{ base: '43vh', md: '23vh', lg: '23vh' }} w={{ base: '99vw', md: '19vw', lg: '19vw' }} display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={{ base: '20px', md: '0' }}>
        <Image src={img1} alt="Centered Image" mb={2} />
        <Text fontFamily="Inter" color="#000000" fontSize="23px" fontWeight="500" textAlign="center">
          Create event and invite Guest
        </Text>
        <Text textAlign="center" fontFamily="Inter" fontSize="20px">
          Create an event, upload photos<br /> and invite all guests
        </Text>
      </Box>
      <Box p={5} bg="white" color="black" m={2} boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" h={{ base: '43vh', md: '23vh', lg: '23vh' }} w={{ base: '99vw', md: '19vw', lg: '19vw' }} display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={{ base: '20px', md: '0' }}>
        <Image src={img2} alt="Centered Image" mb={2} />
        <Text fontFamily="Inter" color="#000000" fontSize="24px" fontWeight="500" textAlign="center">
          Click a selfie to find photos
        </Text>
        <Text textAlign="center" fontFamily="Inter" fontSize="20px">
          Guest opens the link & clicks a<br /> selfie to find their photos
        </Text>
      </Box>
      <Box p={5} bg="white" color="black" m={2} boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" h={{ base: '43vh', md: '23vh', lg: '23vh' }} w={{ base: '99vw', md: '19vw', lg: '19vw' }} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Image src={img3} alt="Centered Image" mb={2} />
        <Text fontFamily="Inter" color="#000000" fontSize="24px" fontWeight="500" textAlign="center">
          Get Your photos
        </Text>
        <Text textAlign="center" fontFamily="Inter" fontSize="20px">
          Guests can view, buy,<br /> download & share photos
        </Text>
      </Box>
    </Box>
  );
}

export default Design;
