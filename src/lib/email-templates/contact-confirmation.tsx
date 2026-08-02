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
import { getServiceEmailCopy } from './service-copy'

interface Props {
  name?: string
  message?: string
  service?: string
}

const Email = ({ name, message, service }: Props) => {
  const copy = getServiceEmailCopy(service)
  return (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`Your ${copy.label} request has been received. A SecureMe247 specialist will reply within one business day.`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>SecureMe247 · {copy.label}</Text>
        <Heading style={h1}>Thanks{name ? `, ${name}` : ''}, we received your request</Heading>
        <Text style={p}>{copy.intro}</Text>
        <Text style={p}>
          <Link href="tel:+17037550014" style={link}>
            (703) 755-0014
          </Link>
        </Text>
        <Hr style={hr} />
        <Text style={labelStyle}>What we cover on the first call</Text>
        <Text style={p}>
          {copy.agenda.map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 ? <br /> : null}· {item}
            </React.Fragment>
          ))}
        </Text>
        {service ? (
          <>
            <Hr style={hr} />
            <Text style={labelStyle}>Service you asked about</Text>
            <Text style={quote}>{copy.label}</Text>
          </>
        ) : null}
        {message ? (
          <>
            <Hr style={hr} />
            <Text style={labelStyle}>What you sent us</Text>
            <Text style={quote}>{message}</Text>
          </>
        ) : null}
        <Hr style={hr} />
        <Text style={footer}>
          SecureMe247 · Managed IT Services, Helpdesk &amp; Cybersecurity · Reston, Virginia ·{' '}
          <Link href="https://secureme247.com" style={link}>
            secureme247.com
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) => getServiceEmailCopy(data['service']).subject,
  displayName: 'IT inquiry confirmation (to visitor)',
  previewData: {
    name: 'Jane',
    service: 'it-support',
    message:
      'We have 42 users across two offices and need a responsive IT partner for day-to-day support.',
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