export type Framework = (typeof complianceFrameworks)[number];
export const complianceFrameworks = [
  {
    "slug": "cmmc",
    "title": "CMMC",
    "eyebrow": "Compliance Framework",
    "tagline": "Cybersecurity Maturity Model Certification - The DoD Mandatory Cybersecurity Standard for Defense Contractors",
    "description": "CMMC compliance services from SecureMe247. Cybersecurity Maturity Model Certification - The DoD Mandatory Cybersecurity Standard for Defense Contractors",
    "intro": "CMMC is the Department of Defense unified cybersecurity standard for defense contractors. Unlike previous self-attestation models, CMMC requires certification by independent third-party assessment organizations (C3PAOs). The program has evolved through multiple versions, with CMMC 2.0 streamlining the original five levels into three: Level 1 (Foundational), Level 2 (Advanced), and Level 3 (Expert). CMMC is mandatory for all DoD contractors and subcontractors, with requirements flowing down through prime contracts. Non-compliance means ineligibility for DoD contracts, making CMMC the single most important compliance requirement for defense contractors across Northern Virginia and the nation.",
    "sections": [
      {
        "heading": "CMMC Requirements",
        "intro": "What you need to know about CMMC compliance.",
        "items": [
          {
            "title": "CMMC Level 1: 17 basic security requirements aligned with FAR Clause 52.204-21 for protection of Federal Contract Information",
            "body": "CMMC Level 2: 110 security requirements from NIST SP 800-171 plus maturity process requirements for documentation and repeatability"
          },
          {
            "title": "CMMC Level 3: 110+ security requirements extending NIST SP 800-171 with additional controls from NIST SP 800-172 for Advanced Persistent Threat protection",
            "body": "Third-party assessment by a C3PAO (Certified Third-Party Assessment Organization) for Levels 2 and 3 certification"
          },
          {
            "title": "Demonstration of mature cybersecurity processes including planning, documentation, implementation, and continuous improvement",
            "body": "Implementation of all applicable NIST SP 800-171 controls across 14 families including access control, audit, awareness, and incident response"
          },
          {
            "title": "Maintenance of a current System Security Plan (SSP), Plan of Action and Milestones (POA&M), and all supporting evidence documentation",
            "body": "Annual affirmation of continued compliance with self-assessment for Level 1, triennial recertification for Level 2 and 3"
          }
        ]
      }
    ]
  },
  {
    "slug": "dfars",
    "title": "DFARS",
    "eyebrow": "Compliance Framework",
    "tagline": "Defense Federal Acquisition Regulation Supplement - The Cybersecurity Contractual Mandates for DoD Supply Chain Partners",
    "description": "DFARS compliance services from SecureMe247. Defense Federal Acquisition Regulation Supplement - The Cybersecurity Contractual Mandates for DoD Supply Chain Partners",
    "intro": "DFARS is the Defense Federal Acquisition Regulation Supplement, the set of regulations that governs Department of Defense procurement. Of particular relevance to cybersecurity, DFARS 252.204-7012 (Safeguarding Covered Defense Information and Cyber Incident Reporting) mandates that DoD contractors implement NIST SP 800-171 security controls to protect Covered Defense Information (CDI) and Controlled Unclassified Information (CUI). DFARS 252.204-7019 and 7020 add requirements for contractor self-assessment and NIST SP 800-171 score submission via the Supplier Performance Risk System (SPRS). Non-compliance with DFARS cybersecurity clauses can result in contract termination, suspension of payments, and debarment from future DoD contracts.",
    "sections": [
      {
        "heading": "DFARS Requirements",
        "intro": "What you need to know about DFARS compliance.",
        "items": [
          {
            "title": "Implement NIST SP 800-171 security requirements across all 14 control families with proper documentation",
            "body": "Submit NIST SP 800-171 self-assessment score to the Supplier Performance Risk System (SPRS) as required by DFARS 7019"
          },
          {
            "title": "Conduct annual NIST SP 800-171 self-assessments with documented evidence for each control (DFARS 7020)",
            "body": "Report cyber incidents affecting Covered Defense Information to DoD within 72 hours of discovery"
          },
          {
            "title": "Preserve and provide forensic evidence and damage assessment information to DoD upon request following an incident",
            "body": "Flow down DFARS 7012 requirements to subcontractors that will receive CDI or CUI"
          },
          {
            "title": "Maintain a current System Security Plan (SSP) and Plan of Action and Milestones (POA&M) for all applicable NIST 800-171 controls",
            "body": "Prepare for transition from self-assessment to C3PAO assessment as CMMC requirements are phased in"
          }
        ]
      }
    ]
  },
  {
    "slug": "fedramp",
    "title": "FedRAMP",
    "eyebrow": "Compliance Framework",
    "tagline": "Federal Risk and Authorization Management Program - The Standardized Security Assessment for Cloud Services Used by Federal Agencies",
    "description": "FedRAMP compliance services from SecureMe247. Federal Risk and Authorization Management Program - The Standardized Security Assessment for Cloud Services Used by Federal Agencies",
    "intro": "FedRAMP is a US government program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services used by federal agencies. Developed in collaboration with the General Services Administration (GSA), Department of Homeland Security (DHS), and Department of Defense (DoD), FedRAMP replaces the previous practice of each agency conducting its own security assessment with a unified, reusable authorization process. FedRAMP offers three impact levels (Low, Moderate, High) corresponding to the sensitivity of data processed. Federal agencies are required to use FedRAMP-authorized cloud services wherever possible, making FedRAMP authorization a prerequisite for selling cloud services to the federal government.",
    "sections": [
      {
        "heading": "FedRAMP Requirements",
        "intro": "What you need to know about FedRAMP compliance.",
        "items": [
          {
            "title": "Implementation of NIST SP 800-53 security controls at the appropriate impact level (Low, Moderate, or High)",
            "body": "Development of a comprehensive System Security Plan (SSP) with control implementation narratives and artifacts"
          },
          {
            "title": "Engagement with a FedRAMP-accredited Third Party Assessment Organization (3PAO) for independent evaluation",
            "body": "Establish continuous monitoring program with monthly and quarterly reporting to the FedRAMP PMO"
          },
          {
            "title": "One year of operating evidence demonstrating effective control operation before authorization",
            "body": "Implementation of FedRAMP-specific requirements including incident response coordination, configuration management, and vulnerability scanning"
          },
          {
            "title": "Maintenance of an authorization package including SSP, SAP, SAR, POA&M, and all supporting evidence documents",
            "body": "Annual assessment and continuous monitoring throughout the authorization lifecycle"
          }
        ]
      }
    ]
  },
  {
    "slug": "gdpr",
    "title": "GDPR",
    "eyebrow": "Compliance Framework",
    "tagline": "General Data Protection Regulation - The European Union Landmark Data Privacy and Security Regulation",
    "description": "GDPR compliance services from SecureMe247. General Data Protection Regulation - The European Union Landmark Data Privacy and Security Regulation",
    "intro": "GDPR is the European Union comprehensive data protection regulation that governs how organizations collect, process, store, and transfer personal data of EU residents. While it is an EU regulation, GDPR has extraterritorial reach, applying to any organization anywhere in the world that offers goods or services to EU residents or monitors their behavior. With penalties reaching the higher of 20 million euros or 4% of global annual revenue, GDPR carries some of the most severe fines in data protection law. GDPR has also become a model for data protection laws worldwide, including California CCPA/CPRA, Brazil LGPD, and other emerging regulations, making GDPR compliance a strategic investment for global businesses.",
    "sections": [
      {
        "heading": "GDPR Requirements",
        "intro": "What you need to know about GDPR compliance.",
        "items": [
          {
            "title": "Establish lawful bases for processing personal data with consent, legitimate interest, contract necessity, or other valid legal bases",
            "body": "Implement data subject rights including right of access, rectification, erasure (right to be forgotten), restriction, portability, and objection"
          },
          {
            "title": "Conduct Data Protection Impact Assessments (DPIAs) for processing activities that present high risk to individuals rights and freedoms",
            "body": "Maintain a Record of Processing Activities (ROPA) documenting all personal data processing across the organization"
          },
          {
            "title": "Implement data protection by design and by default across all systems, processes, and products handling personal data",
            "body": "Establish breach notification procedures with 72-hour notification requirement to supervisory authorities"
          },
          {
            "title": "Appoint a Data Protection Officer (DPO) if required based on processing volume and sensitivity of data",
            "body": "Implement appropriate technical and organizational measures including pseudonymization, encryption, access controls, and data minimization"
          }
        ]
      }
    ]
  },
  {
    "slug": "glba-ffiec",
    "title": "GLBA & FFIEC",
    "eyebrow": "Compliance Framework",
    "tagline": "Gramm-Leach-Bliley Act and Federal Financial Institutions Examination Council - The Regulatory Backbone of Financial Services Cybersecurity",
    "description": "GLBA & FFIEC compliance services from SecureMe247. Gramm-Leach-Bliley Act and Federal Financial Institutions Examination Council - The Regulatory Backbone of Financial Services Cybersecurity",
    "intro": "GLBA (Gramm-Leach-Bliley Act) requires financial institutions to explain their information-sharing practices and protect sensitive customer data. The Safeguards Rule requires financial institutions to implement a comprehensive written information security program. FFIEC (Federal Financial Institutions Examination Council) provides the examination framework that federal and state regulators use to evaluate cybersecurity programs at banks, credit unions, and other financial institutions. Together, GLBA and FFIEC create the regulatory foundation for financial services cybersecurity. The FTC Safeguards Rule, updated in 2021 and effective 2023, expands GLBA requirements to a broader range of financial institutions, including mortgage brokers, auto dealers, tax preparers, and other non-bank financial entities.",
    "sections": [
      {
        "heading": "GLBA & FFIEC Requirements",
        "intro": "What you need to know about GLBA & FFIEC compliance.",
        "items": [
          {
            "title": "Develop, implement, and maintain a comprehensive written information security program (WISP) approved by the board or governing body",
            "body": "Designate a qualified individual (e.g., CISO) responsible for information security program oversight and implementation"
          },
          {
            "title": "Conduct periodic risk assessments that identify internal and external risks to customer information security, confidentiality, and integrity",
            "body": "Design and implement safeguards to control risks identified in risk assessments, including access controls, encryption, and monitoring"
          },
          {
            "title": "Oversee service providers to ensure they implement appropriate safeguards for customer information through contract requirements and assessment",
            "body": "Monitor, test, and update the information security program regularly, including penetration testing at least annually and vulnerability scanning at least quarterly"
          },
          {
            "title": "Establish incident response procedures that include incident detection, response, and notification to affected individuals and regulators",
            "body": "Require annual board or governing body reporting on the information security program including risk assessment results, testing, and incidents"
          }
        ]
      }
    ]
  },
  {
    "slug": "hipaa",
    "title": "HIPAA",
    "eyebrow": "Compliance Framework",
    "tagline": "Health Insurance Portability and Accountability Act - Protecting Patient Data Privacy and Security",
    "description": "HIPAA compliance services from SecureMe247. Health Insurance Portability and Accountability Act - Protecting Patient Data Privacy and Security",
    "intro": "HIPAA establishes national standards for protecting sensitive patient health information from being disclosed without the patient consent or knowledge. The HIPAA Security Rule requires covered entities and business associates to implement administrative, physical, and technical safeguards for electronic Protected Health Information (ePHI). The Privacy Rule governs how PHI can be used and disclosed. With HIPAA enforcement at an all-time high and penalties reaching $1.9 million per violation category per year, compliance is not optional for any organization handling patient data. The HITECH Act expanded HIPAA requirements and increased penalties for violations.",
    "sections": [
      {
        "heading": "HIPAA Requirements",
        "intro": "What you need to know about HIPAA compliance.",
        "items": [
          {
            "title": "Conduct and document a comprehensive HIPAA risk assessment covering all ePHI creation, receipt, maintenance, and transmission",
            "body": "Implement administrative safeguards including a security management process, workforce training, and contingency planning"
          },
          {
            "title": "Deploy physical safeguards including facility access controls, workstation security, and device and media controls",
            "body": "Implement technical safeguards including access controls, audit controls, integrity controls, and transmission security"
          },
          {
            "title": "Establish policies and procedures for HIPAA Privacy Rule compliance including Notice of Privacy Practices and patient rights",
            "body": "Maintain business associate agreements with all vendors that create, receive, maintain, or transmit PHI"
          },
          {
            "title": "Document breach notification procedures and conduct annual workforce training on HIPAA requirements",
            "body": "Perform periodic security evaluations and update documentation in response to environmental or operational changes"
          }
        ]
      }
    ]
  },
  {
    "slug": "hitrust",
    "title": "HITRUST CSF",
    "eyebrow": "Compliance Framework",
    "tagline": "Health Information Trust Alliance Common Security Framework - The Most Comprehensive Healthcare Security Certification",
    "description": "HITRUST CSF compliance services from SecureMe247. Health Information Trust Alliance Common Security Framework - The Most Comprehensive Healthcare Security Certification",
    "intro": "HITRUST CSF is a certifiable framework that integrates multiple security, privacy, and regulatory standards into a single comprehensive assessment and certification process. Initially developed for the healthcare industry, HITRUST has expanded across regulated industries including financial services, insurance, and technology. The framework incorporates controls from HIPAA, ISO 27001, NIST, PCI DSS, and other standards into a unified control set. HITRUST certification provides organizations with a single, comprehensive assessment that satisfies multiple compliance requirements, reducing the burden of responding to separate audit requests from customers, partners, and regulators.",
    "sections": [
      {
        "heading": "HITRUST CSF Requirements",
        "intro": "What you need to know about HITRUST CSF compliance.",
        "items": [
          {
            "title": "Implementation of HITRUST CSF controls across 19 domains including information security management, access control, and incident management",
            "body": "Risk assessment and risk management processes aligned with the HITRUST risk management framework"
          },
          {
            "title": "Data protection controls for ePHI including encryption, access controls, audit logging, and transmission security",
            "body": "Third-party assurance through assessment by an accredited HITRUST CSF Assessor organization"
          },
          {
            "title": "Implementation of controls mapped from HIPAA Security Rule, Privacy Rule, and Breach Notification Rule requirements",
            "body": "Integration of NIST CSF, ISO 27001, and PCI DSS controls where applicable to your organization scope"
          },
          {
            "title": "Maintenance of a HITRUST CSF compliance program with annual certification or interim assessment",
            "body": "Continuous monitoring and evidence collection across all evaluated controls"
          }
        ]
      }
    ]
  },
  {
    "slug": "iso-27001",
    "title": "ISO 27001",
    "eyebrow": "Compliance Framework",
    "tagline": "International Information Security Management Standard - The Global Benchmark for Information Security Management Systems",
    "description": "ISO 27001 compliance services from SecureMe247. International Information Security Management Standard - The Global Benchmark for Information Security Management Systems",
    "intro": "ISO 27001 is the internationally recognized standard for Information Security Management Systems (ISMS). It provides a systematic approach to managing sensitive company information, ensuring its confidentiality, integrity, and availability. Unlike technical security standards, ISO 27001 focuses on the management system itself, requiring organizations to establish, implement, maintain, and continually improve their ISMS. Certification to ISO 27001 demonstrates to customers, partners, and regulators that your organization has a comprehensive, audited information security program. With global recognition across 170+ countries, it is the standard of choice for multinational organizations and companies serving international markets.",
    "sections": [
      {
        "heading": "ISO 27001 Requirements",
        "intro": "What you need to know about ISO 27001 compliance.",
        "items": [
          {
            "title": "Establish the context of the organization including interested parties, scope, and information security objectives",
            "body": "Demonstrate leadership commitment with an information security policy, roles and responsibilities, and management review"
          },
          {
            "title": "Plan the ISMS with risk assessment, risk treatment, and Statement of Applicability (SoA) documentation",
            "body": "Implement and operate the ISMS with necessary resources, competence, awareness, communication, and documented information"
          },
          {
            "title": "Perform performance evaluation including monitoring, measurement, analysis, evaluation, internal audit, and management review",
            "body": "Drive continual improvement through corrective actions, preventive actions, and ISMS improvements"
          },
          {
            "title": "Implement Annex A controls across 14 domains including access control, cryptography, physical security, operations security, and business continuity",
            "body": "Maintain a risk treatment plan that addresses all identified risks with appropriate controls, timelines, and ownership"
          }
        ]
      }
    ]
  },
  {
    "slug": "itar",
    "title": "ITAR",
    "eyebrow": "Compliance Framework",
    "tagline": "International Traffic in Arms Regulations - Protecting Defense Articles and Technical Data from Unauthorized Access",
    "description": "ITAR compliance services from SecureMe247. International Traffic in Arms Regulations - Protecting Defense Articles and Technical Data from Unauthorized Access",
    "intro": "ITAR is a set of United States government regulations that control the export and import of defense-related articles and services on the United States Munitions List (USML). Administered by the Department of State Directorate of Defense Trade Controls (DDTC), ITAR requires that defense articles, technical data, and defense services are protected from access by foreign persons without authorization. For defense contractors and manufacturers, ITAR compliance requires strict controls over who can access ITAR-controlled technical data, where it can be stored and transmitted, and how it is shared with partners and suppliers. Violations can result in criminal penalties, fines up to $1 million per violation, debarment from defense contracting, and even imprisonment.",
    "sections": [
      {
        "heading": "ITAR Requirements",
        "intro": "What you need to know about ITAR compliance.",
        "items": [
          {
            "title": "Register with the Directorate of Defense Trade Controls (DDTC) if manufacturing or exporting defense articles",
            "body": "Implement secure facility controls including physical access control, visitor management, and secure storage for ITAR-controlled data"
          },
          {
            "title": "Deploy IT controls that prevent unauthorized access by foreign persons including network segmentation, access controls, and data classification",
            "body": "Maintain employee screening procedures to verify U.S. person status for all employees accessing ITAR-controlled technical data"
          },
          {
            "title": "Implement export control procedures for sharing technical data with partners, suppliers, and foreign persons",
            "body": "Maintain records of all ITAR-controlled data access, technical data releases, and export authorizations"
          },
          {
            "title": "Conduct regular internal compliance audits and maintain an ITAR compliance manual and procedures",
            "body": "Report potential violations to DDTC within 60 days and implement corrective actions"
          }
        ]
      }
    ]
  },
  {
    "slug": "nist-csf",
    "title": "NIST CSF & NIST 800-171",
    "eyebrow": "Compliance Framework",
    "tagline": "National Institute of Standards and Technology Frameworks - The Cybersecurity Standards that Underpin U.S. Government and Critical Infrastructure Security",
    "description": "NIST CSF & NIST 800-171 compliance services from SecureMe247. National Institute of Standards and Technology Frameworks - The Cybersecurity Standards that Underpin U.S. Government and Critical Infrastru",
    "intro": "NIST CSF (Cybersecurity Framework) and NIST SP 800-171 are among the most widely adopted cybersecurity frameworks in the United States. NIST CSF provides a comprehensive, risk-based approach to cybersecurity organized around five core functions: Identify, Protect, Detect, Respond, and Recover. NIST SP 800-171 provides specific security requirements for protecting Controlled Unclassified Information (CUI) in non-federal systems, and is the foundation for CMMC and DFARS compliance. Together, these frameworks form the backbone of U.S. cybersecurity policy and are referenced in virtually every major regulation and compliance standard.",
    "sections": [
      {
        "heading": "NIST CSF & NIST 800-171 Requirements",
        "intro": "What you need to know about NIST CSF & NIST 800-171 compliance.",
        "items": [
          {
            "title": "Establish governance and risk management processes including a risk management strategy and organizational risk appetite",
            "body": "Implement asset management to identify, inventory, and classify hardware, software, and data assets by criticality"
          },
          {
            "title": "Deploy access control measures including least privilege, role-based access, MFA, and remote access controls (NIST 800-171 3.1)",
            "body": "Implement awareness and training programs including security awareness training and role-based cybersecurity training (3.2)"
          },
          {
            "title": "Establish audit and accountability mechanisms including audit logging, monitoring, and log protection (3.3)",
            "body": "Implement configuration management including baseline configurations, change control, and configuration monitoring (3.4)"
          },
          {
            "title": "Deploy identification and authentication controls including unique user IDs, multi-factor authentication, and password management (3.5)",
            "body": "Implement incident response procedures including training, testing, and reporting (3.6) - also a core NIST CSF function"
          }
        ]
      }
    ]
  },
  {
    "slug": "pci-dss",
    "title": "PCI DSS",
    "eyebrow": "Compliance Framework",
    "tagline": "Payment Card Industry Data Security Standard - Securing Cardholder Data and Payment Systems",
    "description": "PCI DSS compliance services from SecureMe247. Payment Card Industry Data Security Standard - Securing Cardholder Data and Payment Systems",
    "intro": "PCI DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment. Developed by the Payment Card Industry Security Standards Council (PCI SSC), the standard applies to any organization that handles cardholder data. PCI DSS v4.0, the current version, introduces increased flexibility with customized and defined approaches, but maintaining compliance remains a significant operational challenge for organizations of all sizes. Non-compliance can result in fines, increased transaction fees, and loss of card acceptance privileges.",
    "sections": [
      {
        "heading": "PCI DSS Requirements",
        "intro": "What you need to know about PCI DSS compliance.",
        "items": [
          {
            "title": "Build and maintain a secure network with firewalls, secure configurations, and network segmentation of cardholder data environments",
            "body": "Protect cardholder data with encryption at rest and in transit, tokenization, and data retention policies that minimize stored data"
          },
          {
            "title": "Maintain a vulnerability management program with anti-malware, secure coding practices, and quarterly vulnerability scans by an ASV",
            "body": "Implement strong access control measures including unique IDs, least privilege, MFA, and physical security for cardholder data"
          },
          {
            "title": "Monitor and test networks with logging, file integrity monitoring, penetration testing annually and after significant changes",
            "body": "Maintain an information security policy that addresses personnel security, incident response, and service provider oversight"
          },
          {
            "title": "Complete a self-assessment questionnaire (SAQ) or on-site assessment annually based on transaction volume and processing method",
            "body": ""
          }
        ]
      }
    ]
  },
  {
    "slug": "soc-2",
    "title": "SOC 2",
    "eyebrow": "Compliance Framework",
    "tagline": "System and Organization Controls 2 - The Gold Standard for SaaS and Technology Companies",
    "description": "SOC 2 compliance services from SecureMe247. System and Organization Controls 2 - The Gold Standard for SaaS and Technology Companies",
    "intro": "SOC 2 is an auditing framework developed by the AICPA that evaluates an organization controls around security, availability, processing integrity, confidentiality, and privacy. Unlike prescriptive standards, SOC 2 gives organizations flexibility to define controls specific to their operations, verified by an independent CPA firm. For technology companies and SaaS providers, SOC 2 has become the de facto trust standard that enterprise customers and partners demand before signing contracts. A SOC 2 report demonstrates that your organization has implemented controls that meet the five Trust Service Criteria (TSC), with Security being mandatory and the remaining four optional depending on your services.",
    "sections": [
      {
        "heading": "SOC 2 Requirements",
        "intro": "What you need to know about SOC 2 compliance.",
        "items": [
          {
            "title": "Establish and maintain a system of internal controls mapped to the selected Trust Service Criteria",
            "body": "Implement a formal risk assessment and risk management program reviewed at least annually"
          },
          {
            "title": "Deploy and maintain logical and physical access controls including MFA, least privilege, and access reviews",
            "body": "Monitor system operations with logging, alerting, and regular review of security events and anomalies"
          },
          {
            "title": "Implement software development lifecycle controls including code review, testing, and change management",
            "body": "Maintain vendor management and third-party risk assessment programs covering all critical service providers"
          },
          {
            "title": "Conduct annual or more frequent penetration testing and vulnerability scanning",
            "body": "Document security incident response procedures and conduct tabletop exercises at least annually"
          }
        ]
      }
    ]
  }
] as const;
