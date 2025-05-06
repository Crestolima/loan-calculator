import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Divider,
  Box,
} from '@mui/material';


const SectionWrapper = ({ children }) => (
  <Box my={6}>
    {children}
    <Divider sx={{ my: 4 }} />
  </Box>
);

const AboutSection = () => (
  <SectionWrapper>
    <Typography variant="h4" gutterBottom align="left">
      About This App
    </Typography>
    <Typography variant="body1" >
      This Loan Calculator App is a modern, single-page web application built using React JS and Material UI.
      It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule,
      and see real-time currency conversions of their EMI using live exchange rates.
    </Typography>
  </SectionWrapper>
);

const InstructionsSection = () => (
    <SectionWrapper>
      <Typography variant="h5" gutterBottom>
        Instructions for Candidates
      </Typography>
      <Typography variant="body1" paragraph>
        Please follow these instructions to complete and submit your project:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }} disablePadding>
        {[
          "Push the entire project to a public <b>GitHub</b> repository.",
          "Make sure to commit regularly with clear messages after completing each feature.",
          "Use the provided EMI formula to perform calculations.",
          "Use Context API for global state management (e.g., theme, currency).",
          "Create custom React hooks for reusable logic (e.g., EMI calculation, fetching exchange rates).",
          "Integrate the ExchangeRate-API for live currency conversion.",
          "Ensure the app is fully responsive on all screen sizes.",
          "Implement both light and dark modes using Material UI's theming system.",
          "Add a 404 Not Found page for unmatched routes.",
          "Handle runtime errors gracefully by showing an Error Page.",
          "Once deployed, add the live deployment link in the About section of your GitHub repo.",
          "Deploy the project on any platform (e.g., Vercel, Netlify, GitHub Pages).",
        ].map((text, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </SectionWrapper>
  );

  const FeaturesSection = () => (
    <SectionWrapper>
      <Typography variant="h5" gutterBottom>
        Features
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }} disablePadding>
        {[
          "Loan EMI calculation using standard financial formulas",
          "Dynamic amortization schedule table with monthly breakdown",
          "Real-time currency conversion of EMI using a live exchange rate API",
          "Paginated exchange rate table for 160+ currencies",
          "Dark/Light mode toggle for a customizable experience",
          "Collapsible/responsive navigation on mobile screens",
          "Fully responsive UI built with Material UI",
        ].map((feature, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
    </SectionWrapper>
  );
  
  const TechnologiesUsedSection = () => (
    <SectionWrapper>
      <Typography variant="h6" gutterBottom>
        🛠️ Technologies Used
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }} disablePadding>
        {[
          "React (Hooks, Routing, Context API)",
          "Material UI for styling and responsive components",
          "Axios for API calls",
          "Exchange Rate API for real-time currency conversion",
        ].map((tech, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            <ListItemText primary={tech} />
          </ListItem>
        ))}
      </List>
    </SectionWrapper>
  );

  const EMIFormulaSection = () => (
    <SectionWrapper>
      <Typography variant="h6" gutterBottom>
        📊 EMI Formula Used
      </Typography>
      <Typography variant="body1" paragraph>
        The EMI (Equated Monthly Installment) is calculated using the standard formula:
      </Typography>
      <Typography variant="body2" fontFamily="monospace">
        EMI = P × r × (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> - 1)
      </Typography>
      <Typography variant="body1" paragraph>
        Where:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }} disablePadding>
        {[
          "P = Principal loan amount",
          "R = Monthly interest rate (annual rate / 12 / 100)",
          "N = Loan duration in months",
        ].map((item, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </SectionWrapper>
  );




const CurrencyConversionAPISection = () => (
  <SectionWrapper>
    <Typography variant="h6" gutterBottom>
      🌍 Currency Conversion API
    </Typography>
    <Typography variant="body1" paragraph>
      This app integrates with the free tier of the{' '}
      <a href="https://www.exchangerate-api.com/" target="_blank" rel="noopener noreferrer">
        ExchangeRate-API
      </a>{' '}
      to fetch live exchange rates.
    </Typography>
    <Typography variant="subtitle2">API Endpoint Example:</Typography>
    <Typography variant="body2" style={{ wordBreak: 'break-word' }}>
      https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
    </Typography>
    <Typography variant="body1">
      You must register and obtain a free API key to use this endpoint. Then, replace{' '}
      <code>YOUR_API_KEY</code> in the code with your actual key.
    </Typography>
  </SectionWrapper>
);

const PurposeOfAppSection = () => (
    <SectionWrapper>
      <Typography variant="h6" gutterBottom>
        🎯 Purpose Of This App
      </Typography>
      <Typography variant="body1" paragraph>
        This project is designed to assess a candidate's React development skills, including:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }} disablePadding>
        {[
          "React fundamentals (state, props, hooks)",
          "Component structure and code reusability",
          "Third-party API integration and live data rendering",
          "Working with tables, lists, and navigation",
          "Theme customization (dark/light mode toggle)",
          "Error handling and graceful UI fallbacks",
          "Responsive design and collapsible mobile header navigation (for Mobile view)",
        ].map((point, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            <ListItemText primary={point} />
          </ListItem>
        ))}
      </List>
      <Typography variant="caption" color="text.secondary">
        * For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
      </Typography>
    </SectionWrapper>
  );

const About = () => {
  return (
    <Container maxWidth="md">
      <AboutSection />
      <InstructionsSection />
      <FeaturesSection />
      <TechnologiesUsedSection />
      <EMIFormulaSection />
      <CurrencyConversionAPISection />
      <PurposeOfAppSection />
    </Container>
  );
};

export default About;
