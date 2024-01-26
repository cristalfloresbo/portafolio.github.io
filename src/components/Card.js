import { Image, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box maxW='max'  bg='white' borderRadius='lg' overflow='hidden' color="transparent">
      <Image src={imageSrc} />

      <Box p='6'>
        <VStack
          spacing={4}
          align='stretch'
        >
          <Box
            as='h4'
            mt='1'
            fontWeight='semibold'
            lineHeight='tight'
            color='black'
            >
            {title}
          </Box>

          <Box color='gray.500'>
            {description}
          </Box>
          <Box as='span'  fontSize='sm'>
            <Box as='a'color='black' href='#' fontWeight='bold'>
              See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
    );
};

export default Card;
