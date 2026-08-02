import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  message?: string
}

const Email = ({ name, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We received your request — a SecureMe247 analyst will be in touch</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>SecureMe247</Text>
        <Heading style={h1}>Thanks{name ? `, ${name}` : ''} — we got your request</Heading>
        <Text style={p}>
          A SecureMe247 security analyst will review your request and reach out within one
          business day. If your situation is urgent, call us any time — our SOC operates 24/7.
        </Text>
        <Text style={p}>
          <Link href="tel:+17037550014" style={link}>
            (703) 755-0014
          </Link>
        </Text>
        {message ? (
          <>
            <Hr style={hr} />
            <Text style={labelStyle}>What you sent us</Text>
            <Text style={quote}>{message}</Text>
          </>
        ) : null}
        <Hr style={hr} />
        <Text style={footer}>
          SecureMe247 · Reston, Virginia ·{' '}
          <Link href="https://secureme247.com" style={link}>
            secureme247.com
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'We received your request — SecureMe247',
  displayName: 'Contact confirmation (to visitor)',
  previewData: {
    name: 'Jane',
    message: 'We need SOC 2 readiness support before our audit in Q3.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px' }
const brand = { fontSize: '13px', letterSpacing: '2px', color: '#166534', fontWeight: 700, margin: '0 0 12px' }
const h1 = { fontSize: '22px', color: '#0b1a12', margin: '0 0 12px', lineHeight: '30px' }
const p = { fontSize: '15px', color: '#374151', lineHeight: '23px', margin: '0 0 12px' }
const labelStyle = { fontSize: '13px', color: '#166534', fontWeight: 700, margin: '0 0 4px' }
const quote = { fontSize: '14px', color: '#4b5563', lineHeight: '21px', margin: '0', whiteSpace: 'pre-wrap' as const }
const link = { color: '#15803d', textDecoration: 'none', fontWeight: 700 }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#6b7280', margin: 0 }