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
    <Typography variant="body1">
      This Loan Calculator App is a modern, single-page web application built using <b>React JS</b> and <b>Material UI</b>. 
      It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, 
      and see real-time currency conversions of their EMI using live exchange rates.
    </Typography>
  </SectionWrapper>
);

const InstructionsSection = () => (
  <SectionWrapper>
    <Typography variant="h5" gutterBottom>
      📋 Instructions for Candidates
    </Typography>
    <Typography variant="body1" paragraph>
      Please follow these instructions to complete and submit your project:
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary={<Typography>• Push the entire project to a public <b>GitHub repository</b>.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Make sure to <b>commit regularly</b> with clear messages after completing each feature.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Use the provided EMI formula to perform calculations." />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Use <b>Context API</b> for global state management (e.g., theme, currency).</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Create <b>custom React hooks</b> for reusable logic (e.g., EMI calculation, fetching exchange rates).</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Integrate the <b>ExchangeRate API</b> for live currency conversion.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Ensure the app is fully <b>responsive</b> on all screen sizes.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Implement both <b>light and dark modes</b> using Material UI's theming system.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Add a <b>404 Not Found</b> page for unmatched routes.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Handle runtime errors gracefully by showing an <b>Error Page</b>.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography>• Once deployed, add the live deployment <b>link in the About section</b> of your GitHub repo.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Deploy the project on any platform (e.g., Vercel, Netlify, GitHub Pages)." />
      </ListItem>
    </List>
    <Typography variant="body2" paragraph>
      ✅ Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.
    </Typography>
  </SectionWrapper>
);

const FeaturesSection = () => (
  <SectionWrapper>
    <Typography variant="h5" gutterBottom>
      🔧 Features
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary="• Loan EMI calculation using standard financial formulas" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Dynamic amortization schedule table with monthly breakdown" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Real-time currency conversion of EMI using a live exchange rate API" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Paginated exchange rate table for 160+ currencies" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Dark/Light mode toggle for a customizable experience" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Collapsible header navigation on mobile screens" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Fully responsive UI built with Material UI" />
      </ListItem>
    </List>
  </SectionWrapper>
);

const TechnologiesUsedSection = () => (
  <SectionWrapper>
    <Typography variant="h6" gutterBottom>
      📦 Technologies Used
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary={<Typography><strong>• React </strong>(Hooks, Routing, Context API)</Typography>}/>
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography><strong>• Material UI </strong>for styling and responsive components</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography><strong>•  Axios </strong>for API calls</Typography>}/>
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography><strong>•  Exchange Rate API </strong>for real-time currency conversion</Typography>} />
      </ListItem>
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
      EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
    </Typography>
    <Typography variant="body1" paragraph>
      Where:
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary={<Typography><strong>• P</strong> = Principal loan amount</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography><strong>• R</strong> = Monthly interest rate (annual rate / 12 / 100)</Typography>}/>
      </ListItem>
      <ListItem>
        <ListItemText primary={<Typography><strong>• N</strong> = Loan duration in months</Typography>} />
      </ListItem>
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
      <code>YOUR_API_KEY</code> in the app code with your actual key.
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
    <List>
      <ListItem>
        <ListItemText primary="• React fundamentals (state, props, hooks)" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Component structure and code reusability" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Third-party API integration and live data rendering" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Working with tables, lists, and pagination" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Theme customization (dark/light mode toggle)" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Error handling and graceful UI fallbacks" />
      </ListItem>
      <ListItem>
        <ListItemText primary="• Responsive design and collapsible mobile header navigation (In Mobile view)" />
      </ListItem>
    </List>
    <Typography variant="caption" color="text.secondary">
      ✨ For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
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