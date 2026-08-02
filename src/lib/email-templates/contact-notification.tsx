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
import { getServiceEmailCopy } from './service-copy'

interface Props {
  name?: string
  email?: string
  company?: string
  phone?: string
  service?: string
  message?: string
  source?: string
}

const Row = ({ label, value }: { label: string; value?: string | undefined }) =>
  value ? (
    <Text style={row}>
      <span style={labelStyle}>{label}: </span>
      {value}
    </Text>
  ) : null

const Email = ({ name, email, company, phone, service, message, source }: Props) => {
  const copy = getServiceEmailCopy(service)
  return (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New ${copy.label} inquiry from ${name || 'a website visitor'}${company ? ` at ${company}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>SecureMe247 · {copy.label}</Text>
        <Heading style={h1}>New {copy.label} inquiry</Heading>
        <Text style={intro}>
          A prospective client submitted the contact form on secureme247.com. Reply directly to
          this email to reach them. Reply-to is set to their address.
        </Text>
        <Hr style={hr} />
        <Row label="Name" value={name} />
        <Row label="Work email" value={email} />
        <Row label="Company" value={company} />
        <Row label="Phone" value={phone} />
        <Row label="Service interest" value={copy.label} />
        <Row label="Submitted from" value={source} />
        <Hr style={hr} />
        <Text style={labelStyle}>What they need</Text>
        <Text style={row}>{message || '(no message provided)'}</Text>
        <Hr style={hr} />
        <Text style={labelStyle}>Qualify on the first call</Text>
        <Text style={row}>
          {copy.qualify.map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 ? <br /> : null}· {item}
            </React.Fragment>
          ))}
        </Text>
      </Container>
    </Body>
  </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `${getServiceEmailCopy(data['service']).label} inquiry${data['name'] ? ` from ${data['name']}` : ''}${data['company'] ? ` (${data['company']})` : ''}`,
  displayName: 'IT services inquiry (internal notification)',
  to: 'info@secureme247.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@acme.com',
    company: 'Acme Corp',
    phone: '(703) 555-0100',
    service: 'it-support',
    message:
      'We have 42 users across two offices, Microsoft 365, and one on-prem file server. Our current IT provider is slow to respond and we want to move to a fully managed plan.',
    source: '/contact',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px' }
const brand = { fontSize: '11px', letterSpacing: '2px', color: '#166534', fontWeight: 700, margin: '0 0 10px' }
const h1 = { fontSize: '20px', color: '#0b1a12', margin: '0 0 8px' }
const intro = { fontSize: '14px', color: '#4b5563', margin: '0 0 8px' }
const row = { fontSize: '14px', color: '#111827', margin: '4px 0', lineHeight: '20px' }
const labelStyle = { fontSize: '13px', color: '#166534', fontWeight: 700 }
const hr = { borderColor: '#e5e7eb', margin: '16px 0' }