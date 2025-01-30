import React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Button } from '@react-email/components';

export function JoinWaitlistEmailTemplate(dreamDestination: string, tripPlan: string) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Lance - Your Dream Trip Awaits!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Welcome to Lance - Your Dream Trip Awaits!</Heading>
          <Text style={paragraph}>Thank you for joining the Lance waitlist!</Text>
          <Text style={paragraph}>
            We're excited to help you plan your dream trip to <strong>{dreamDestination}</strong>. Here's a sample 3-day itinerary to get you started:
          </Text>
          <Text style={paragraph}>{tripPlan}</Text>
          <Text style={paragraph}>
            This is just a taste of what Lance can offer. We'll be in touch soon with more personalized recommendations and updates on our launch.
          </Text>
          <Text style={paragraph}>Best regards,</Text>
          <Text style={paragraph}>The Lance Team</Text>
          <Button style={button} href="https://lancetrips.com">
            Visit Our Website
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default JoinWaitlistEmailTemplate;

const main = {
  backgroundColor: '#f6f9fc',
  padding: '20px',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '16px',
};

const button = {
  backgroundColor: '#007bff',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-block',
  marginTop: '20px',
};