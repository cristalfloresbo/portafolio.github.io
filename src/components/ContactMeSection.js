import React, {useEffect} from "react";
import { Formik, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: values => {
      submit("localhost:3000", values).then(() => {
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
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <Formik
            initialValues={formik.initialValues}
            onSubmit={formik.handleSubmit}
            validationSchema={formik.validateForm}
          >
            <form onSubmit={formik.handleSubmit}>
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
                    <option value="openSource">
                      Open source consultancy session
                    </option>
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
          </Formik>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
