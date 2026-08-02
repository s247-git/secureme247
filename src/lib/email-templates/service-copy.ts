export interface ServiceEmailCopy {
  /** Human readable service name used in subjects and body copy. */
  label: string
  /** Short subject fragment for the visitor confirmation. */
  subject: string
  /** Opening paragraph tailored to what the visitor asked about. */
  intro: string
  /** Agenda items covered on the first call for this service. */
  agenda: string[]
  /** Internal qualifying prompts for the SecureMe247 team. */
  qualify: string[]
}

const DEFAULT_COPY: ServiceEmailCopy = {
  label: 'Managed IT Services',
  subject: 'Your request to SecureMe247 has been received',
  intro:
    'A SecureMe247 IT specialist will review what you sent and reply within one business day to arrange a no cost assessment of your environment. If your systems are down, our helpdesk is available at any time.',
  agenda: [
    'Your current IT setup: users, devices, servers, and cloud (Microsoft 365 or Google Workspace)',
    'Helpdesk response times and where support is falling short today',
    'Backup, disaster recovery, and cybersecurity gaps',
    'A managed IT plan sized to your team',
  ],
  qualify: [
    'User count, servers, and cloud tenant',
    'Current IT provider and contract end date',
    'Most painful issue driving the inquiry',
  ],
}

const COPY: Record<string, ServiceEmailCopy> = {
  'it-support': {
    label: 'IT Support & Help Desk',
    subject: 'Your IT support request is with our helpdesk team',
    intro:
      'Thanks for reaching out about day to day IT support. A SecureMe247 service manager will reply within one business day with helpdesk coverage options, response time targets, and pricing based on your user count.',
    agenda: [
      'Current ticket volume and who handles support today',
      'Response and resolution targets you need (we commit to 30 minute first response)',
      'Onboarding, offboarding, and hardware procurement workflows',
      'On-site dispatch coverage and after hours escalation',
    ],
    qualify: [
      'Number of users, sites, and devices',
      'Current helpdesk arrangement (internal, MSP, none)',
      'Peak ticket pain points and after hours needs',
    ],
  },
  mdr: {
    label: 'Managed Detection & Response',
    subject: 'Your MDR request is with our SOC team',
    intro:
      'Thanks for your interest in Managed Detection and Response. A SecureMe247 security engineer will reply within one business day to walk through our 24/7 SOC coverage, detection stack, and response commitments.',
    agenda: [
      'What you are monitoring today and where the blind spots are',
      'Log sources, SIEM, and endpoint tooling already in place',
      'Alert triage, escalation paths, and who acts on incidents at 2am',
      'Mean time to detect and respond targets',
    ],
    qualify: [
      'Existing EDR/SIEM vendors and log volume',
      'Any recent incidents or audit findings',
      'Compliance driver behind the MDR requirement',
    ],
  },
  endpoint: {
    label: 'Endpoint Protection',
    subject: 'Your endpoint protection request has been received',
    intro:
      'Thanks for reaching out about endpoint protection. A SecureMe247 engineer will reply within one business day to review your device fleet and how we deploy AI driven prevention with ransomware rollback.',
    agenda: [
      'Device inventory: laptops, desktops, servers, mobile, and BYOD',
      'Current antivirus or EDR product and its gaps',
      'Ransomware rollback, device control, and USB policy needs',
      'Deployment and migration plan with zero downtime',
    ],
    qualify: [
      'Endpoint count by OS and current AV/EDR vendor',
      'Any known infections or unmanaged devices',
      'Renewal date of the incumbent tool',
    ],
  },
  cloud: {
    label: 'Cloud Security',
    subject: 'Your cloud security request has been received',
    intro:
      'Thanks for your interest in cloud security. A SecureMe247 cloud engineer will reply within one business day to review your tenant configuration, identity controls, and data protection posture.',
    agenda: [
      'Cloud footprint: Microsoft 365, Azure, AWS, Google Cloud',
      'Identity and privileged access controls, including MFA and conditional access',
      'Misconfiguration and posture findings we typically uncover first',
      'Data loss prevention and cloud native threat detection',
    ],
    qualify: [
      'Cloud platforms and rough workload count',
      'Who administers the tenant today',
      'Any prior cloud security assessment or breach',
    ],
  },
  'backup-dr': {
    label: 'Backup & Disaster Recovery',
    subject: 'Your backup and disaster recovery request has been received',
    intro:
      'Thanks for reaching out about backup and disaster recovery. A SecureMe247 specialist will reply within one business day to review your recovery objectives and how we keep immutable, tested copies of your data.',
    agenda: [
      'What is backed up today and when it was last successfully restored',
      'Recovery point and recovery time objectives per system',
      'Immutable off site storage and ransomware proof snapshots',
      'A written disaster recovery runbook and test schedule',
    ],
    qualify: [
      'Data volume, servers, and SaaS apps in scope',
      'Current backup product and last restore test date',
      'Tolerable downtime and data loss window',
    ],
  },
  compliance: {
    label: 'Compliance & GRC',
    subject: 'Your compliance request has been received',
    intro:
      'Thanks for reaching out about compliance. A SecureMe247 GRC consultant will reply within one business day to map your target framework to a realistic timeline and evidence plan.',
    agenda: [
      'Target framework and deadline: SOC 2, HIPAA, PCI DSS, CMMC, ISO 27001, NIST',
      'Existing policies, evidence, and control ownership',
      'Gap assessment approach and remediation sequencing',
      'Audit readiness support and ongoing evidence collection',
    ],
    qualify: [
      'Framework, audit deadline, and auditor if selected',
      'Prior assessments or open findings',
      'Who owns compliance internally',
    ],
  },
  network: {
    label: 'Network Security',
    subject: 'Your network security request has been received',
    intro:
      'Thanks for reaching out about network security. A SecureMe247 network engineer will reply within one business day to review your perimeter, segmentation, and remote access setup.',
    agenda: [
      'Firewall, VPN, and remote access architecture in place today',
      'Segmentation between users, servers, guest, and OT or IoT',
      'Traffic inspection, intrusion prevention, and DNS filtering',
      'Multi site connectivity and zero trust roadmap',
    ],
    qualify: [
      'Site count, firewall vendor, and circuit types',
      'Remote and hybrid user count',
      'Any recent network incidents or performance issues',
    ],
  },
  pentest: {
    label: 'Penetration Testing',
    subject: 'Your penetration testing request has been received',
    intro:
      'Thanks for your interest in penetration testing. A SecureMe247 offensive security lead will reply within one business day with scope options, timing, and a sample report.',
    agenda: [
      'Scope: external, internal, web application, cloud, or social engineering',
      'Testing window, rules of engagement, and required approvals',
      'Deliverables: findings, risk ratings, remediation guidance, retest',
      'Whether the test is driven by an audit, client request, or internal program',
    ],
    qualify: [
      'Scope size: IPs, apps, and user count',
      'Compliance or customer deadline driving the test',
      'Prior test results and unresolved findings',
    ],
  },
  vciso: {
    label: 'Virtual CISO (vCISO)',
    subject: 'Your vCISO request has been received',
    intro:
      'Thanks for reaching out about virtual CISO services. A SecureMe247 security leader will reply within one business day to discuss program ownership, board reporting, and a security roadmap sized to your business.',
    agenda: [
      'Current security program maturity and who owns it today',
      'Risk register, policy set, and vendor risk management',
      'Board and client reporting expectations',
      'A 12 month roadmap with budget and priorities',
    ],
    qualify: [
      'Company size, industry, and regulatory exposure',
      'Whether a security lead exists internally',
      'Trigger: client questionnaire, audit, incident, or growth',
    ],
  },
}

export function getServiceEmailCopy(service?: string): ServiceEmailCopy {
  if (!service) return DEFAULT_COPY
  const key = service.trim().toLowerCase()
  return COPY[key] ?? { ...DEFAULT_COPY, label: service }
}
