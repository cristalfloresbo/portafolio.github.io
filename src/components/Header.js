import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const ScrollDirection = Object.freeze({
  UP: 'UP',
  DOWN: 'DOWN',
});

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: cristalflores.bo@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/cristalft",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/cristalfloresbo/",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/cristalflores.bo/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/CristalfloresBo",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const Header = () => {
  const boxRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let prevScrollYPosition = window.scrollY;
    const handleScroll = () => window.requestAnimationFrame(() => {
      let actualScrollYPosition = window.scrollY;
      let direction = actualScrollYPosition > prevScrollYPosition
      ? ScrollDirection.DOWN: ScrollDirection.UP;
      if (boxRef.current.style) {
        if (direction == ScrollDirection.UP) {
          boxRef.current.style.transform = 'translateY(0)';
        } else {
          boxRef.current.style.transform = 'translateY(-200px)';
        }
      }
      prevScrollYPosition = actualScrollYPosition;
    });
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <Box
      ref={boxRef}
      zIndex={100}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {
              <HStack
                justifyContent="space-between"
                alignItems="center"
              >
                {
                  socials.map(item =>
                  <a key={item.url} href={item.url} target="_blank">
                    <FontAwesomeIcon icon={item.icon} size='2x' />
                  </a>)
                }
              </HStack>
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a url='/#projects' onClick={handleClick('projects')}>
                Projects
              </a>
              <a url='/#contact-me' onClick={handleClick('contactme')}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
