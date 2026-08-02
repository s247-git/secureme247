import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  company?: string
  phone?: string
  service?: string
  message?: string
  source?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={labelStyle}>{label}: </span>
      {value}
    </Text>
  ) : null

const Email = ({ name, email, company, phone, service, message, source }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New inquiry from ${name || 'a website visitor'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact request</Heading>
        <Text style={intro}>A new inquiry was submitted on secureme247.com.</Text>
        <Hr style={hr} />
        <Row label="Name" value={name} />
        <Row label="Email" value={email} />
        <Row label="Company" value={company} />
        <Row label="Phone" value={phone} />
        <Row label="Service" value={service} />
        <Row label="Page" value={source} />
        <Hr style={hr} />
        <Text style={labelStyle}>Message</Text>
        <Text style={row}>{message || '(no message provided)'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New contact request${data['name'] ? ` from ${data['name']}` : ''} — SecureMe247`,
  displayName: 'Contact request (internal notification)',
  to: 'info@secureme247.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@acme.com',
    company: 'Acme Corp',
    phone: '(703) 555-0100',
    service: 'Managed Detection & Response',
    message: 'We need SOC 2 readiness support before our audit in Q3.',
    source: '/contact',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px' }
const h1 = { fontSize: '20px', color: '#0b1a12', margin: '0 0 8px' }
const intro = { fontSize: '14px', color: '#4b5563', margin: '0 0 8px' }
const row = { fontSize: '14px', color: '#111827', margin: '4px 0', lineHeight: '20px' }
const labelStyle = { fontSize: '13px', color: '#166534', fontWeight: 700 }
const hr = { borderColor: '#e5e7eb', margin: '16px 0' }