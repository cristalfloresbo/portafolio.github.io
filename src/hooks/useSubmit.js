import {useState} from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_5op6tfk";
const TEMPLATE_ID = "template_diiqx1p";
const PUBLIC_KEY = "kmZXUpb4FcJW2dcUt";

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data, email) => {
    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, email, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setResponse({
            type: 'success',
            message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
          })
      }).catch((error) => {
        console.log(error);
        throw new Error("Something went wrong");
      });
    } catch (error) {
      console.log(error);
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
