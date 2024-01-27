import React, { useEffect, useRef } from "react";
import { Formik, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  HStack
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const form = useRef(null);
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'Freelance project proposal',
      comment: ''
    },
    onSubmit: values => {
      submit(values, form.current).then(() => {
        onOpen(response.type, response.message);
      });
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string()
        .email('Invalid email address').required('Required'),
      type: Yup.string().required('Required'),
      comment: Yup.string().required('Required')
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <Grid minH="100vh" p={3}>
        <HStack w="full" spacing={2} align="flex-start">
          <VStack w={[300, 400, 700]} p={10}align="flex-start" h="full">
            <Heading as="h1" id="contactme-section">
              Contact me
            </Heading>
            <Box p={6} rounded="md" w="100%">
              <form ref={form} onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                    <Select
                      id="type"
                      name="type"
                      {...formik.getFieldProps('type')}
                    >
                      <option value="hireMe">Freelance project proposal</option>
                      <option value="openSource">Open source consultancy session</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <Textarea
                      id="comment"
                      name="comment"
                      height={250}
                      {...formik.getFieldProps('comment')}
                    />
                    {formik.touched.comment && formik.errors.comment ? (
                      <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full" disabled={isLoading}>
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          </VStack>
        </HStack>
      </Grid>
      {/* Set a badged(Insignia LinkedIn) */}
      {/* <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="cristalfloresbo" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://bo.linkedin.com/in/cristalfloresbo?trk=profile-badge">Cristal Flores</a></div> */}
    </FullScreenSection>
  );
};

export default LandingSection;
