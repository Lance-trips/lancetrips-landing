import type React from "react"
import { Html, Head, Preview, Body, Container, Heading, Text, Section, Row, Column } from "@react-email/components"

interface AdminWaitlistNotificationTemplateProps {
  email: string
  dreamDestination: string
}

const AdminWaitlistNotificationTemplate: React.FC<AdminWaitlistNotificationTemplateProps> = ({
  email,
  dreamDestination,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Waitlist Signup: {email}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Waitlist Signup</Heading>
          <Text style={paragraph}>A new user has joined the Lance waitlist:</Text>
          <Section style={detailsSection}>
            <Row>
              <Column>
                <Text style={label}>Email:</Text>
              </Column>
              <Column>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={label}>Dream Destination:</Text>
              </Column>
              <Column>
                <Text style={value}>{dreamDestination}</Text>
              </Column>
            </Row>
          </Section>
          <Text style={paragraph}>
            Please ensure to follow up with this user and provide any additional information they might need.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default AdminWaitlistNotificationTemplate

const main = {
  backgroundColor: "#f6f9fc",
  padding: "20px",
}

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "16px",
  color: "#333",
}

const detailsSection = {
  backgroundColor: "#f0f4f8",
  borderRadius: "4px",
  padding: "16px",
  marginBottom: "20px",
}

const label = {
  fontWeight: "bold",
  color: "#555",
}

const value = {
  color: "#333",
}

