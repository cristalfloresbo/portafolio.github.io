import React from "react";
import { Avatar, Heading, Image, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Cristal!";
const bio1 = "A FullStack Developer";
const bio2 = "Specialised in Java and React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
      <Image borderRadius='full' boxSize='150px' alt='Cristal Flores'src={require("../images/profile-photo.jpeg")} />
      <Heading as='h6' size='xs'>{greeting}</Heading>
    <VStack
      spacing={2}
    >
    </VStack>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
