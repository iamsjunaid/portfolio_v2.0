import ReactGA from "react-ga4";

// Read GA ID from environment variable
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || "";

export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  } else {
    console.error("Google Analytics Measurement ID is missing!");
  }
};

export const logPageView = () => {
  ReactGA.send("pageview");
};
