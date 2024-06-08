import React from 'react';
import {Box,Flex, Text, Image} from '@chakra-ui/react';
import img1 from './Rectangle 19.png';
import img2 from './Rectangle 20.png';
import img3 from './Rectangle 21.png'
 
function Box1 (){
    return(
        <div>
        <Flex justify="center" mt={'8%'} >
<Box  w="34vw"  h="31vh" mr={32} fontWeight={'400'} >
    <Text fontSize={'3.5rem'} fontFamily={'DM Sans'} textAlign={'center'}>
    Capture Every Moment
    </Text >
<Text>Weddings are filled with countless precious moments, and capturing each one is essential for preserving the memories of your special day. Our website allows wedding event managers to effortlessly upload all the photos from the wedding, ensuring that nothing is missed. From the bride’s walk down the aisle to the heartfelt toasts, every smile and tear is documented and available to share with guests. With a simple and user-friendly interface, preserving these moments has never been easier.</Text>
</Box>
<Box  w="24vw"  h="31vh" >
   <Image src={img1}/>
</Box>
</Flex>
<br/>
<Flex justify="center" mt={'8%'} >

<Box  w="24vw"  h="31vh" mr={36}>
   <Image src={img2}/>
</Box>
<Box  w="22vw"  h="31vh"  fontWeight={'400'} >
    <Text fontSize={'3.5rem'} fontFamily={'DM Sans'} textAlign={'center'}>
    Share with ease
    </Text >
<Text>After the wedding, sharing photos with all your guests can be a daunting task. Our platform simplifies this process by creating a unique link for your event. Simply share this link with your guests, and they will have access to all the photos from the wedding. No more cumbersome emails with large attachments or the hassle of printing and mailing photos. With just one click, your guests can relive the magic of your wedding day from the comfort of their own homes.
</Text>
</Box>
</Flex>
<br/>
<Flex justify="center" mt={'8%'} >
<Box  w="27vw"  h="31vh" mr={32} fontWeight={'400'} >
    <Text fontSize={'3.5rem'} fontFamily={'DM Sans'} >
    Personalize Your Experience
    </Text >
<Text>Our website offers a personalized experience for both the event manager and the guests. Event managers can organize photos into albums or sections, such as “Ceremony,” “Reception,” and “Candid Moments,” making it easy for guests to find their favorite memories. Guests can also download high-resolution images or order prints directly from the site. This customizable approach ensures that every aspect of your wedding photo sharing is tailored to your needs and preferences.
</Text>
</Box>
<Box  w="24vw"  h="31vh" >
   <Image src={img3}/>
</Box>
</Flex>
</div>
    );
}
export default Box1;