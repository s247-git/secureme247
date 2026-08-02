export type ServiceStat = { value: string; label: string };
export type ServiceStep = { title: string; body: string };
export type ServiceDetail = { title: string; body: string };
export type ServiceFaq = { question: string; answer: string };

export type ServiceContent = {
  h1Support: string;
  overview: string[];
  stats: ServiceStat[];
  signsHeading: string;
  signs: string[];
  process: ServiceStep[];
  deepDive: { heading: string; intro: string; items: ServiceDetail[] };
  mistakes: { heading: string; intro: string; items: ServiceDetail[] };
  faqs: ServiceFaq[];
};

export const serviceContent: Record<string, ServiceContent> = {
  mdr: {
    h1Support:
      "Most breaches are not discovered by the company that got breached. They are reported by a customer, a bank, or a ransom note. Managed Detection and Response closes that gap.",
    overview: [
      "Here is the uncomfortable math behind most incidents. Attackers move from first access to domain-wide control in under an hour in the fastest observed intrusions, while the average small business takes weeks to notice anything happened at all. Tools alone do not close that gap. Someone has to be watching, and that someone has to be awake at 2:47 a.m. on a Sunday.",
      "That is what Managed Detection and Response does. We collect telemetry from your endpoints, servers, cloud tenants, firewalls, and identity provider, correlate it in a SIEM, and put a live analyst behind every alert that matters. When something real happens, we do not send you a ticket and wait. We isolate the host, disable the account, kill the process, and then call you.",
      "The difference between MDR and the antivirus console you already own is simple: antivirus tells you a file was blocked. MDR tells you that a legitimate admin account logged in from a new country, created a scheduled task, and started touching your file server, none of which triggers a single malware signature.",
      "SecureMe247 runs MDR for over 500 businesses from our Reston, Virginia operations center. Our median containment time is under 30 minutes from first detection, and every client gets the same coverage regardless of size. There is no bronze tier where you get monitored only during business hours.",
    ],
    stats: [
      { value: "24/7/365", label: "Live SOC coverage" },
      { value: "<30 min", label: "Median containment time" },
      { value: "500+", label: "Businesses monitored" },
      { value: "0", label: "Extra headcount you hire" },
    ],
    signsHeading: "Signs your business needs MDR right now",
    signs: [
      "Nobody is reviewing security alerts after 5 p.m. or on weekends",
      "Your cyber insurance application asks about 24/7 monitoring and you had to answer no",
      "You have endpoint protection but no one investigates what it flags",
      "A client, prime contractor, or auditor asked for evidence of continuous monitoring",
      "You handle regulated data under HIPAA, CMMC, PCI DSS, or SOC 2",
      "Your team found out about the last incident from an end user, not a tool",
    ],
    process: [
      {
        title: "1. Telemetry onboarding",
        body: "We deploy sensors to endpoints and servers, connect Microsoft 365 or Google Workspace, ingest firewall and identity logs, and validate that data is flowing. Most environments are fully onboarded in five to ten business days with no downtime.",
      },
      {
        title: "2. Baseline and tuning",
        body: "For the first two weeks we learn what normal looks like in your environment: who logs in from where, which admin tools are legitimate, what your backup jobs do at night. Tuning against that baseline is why our clients get real alerts instead of noise.",
      },
      {
        title: "3. Detection and triage",
        body: "Correlation rules mapped to MITRE ATT&CK run continuously against your telemetry. Every alert that survives automated triage lands in front of a human analyst, not a queue that gets reviewed tomorrow.",
      },
      {
        title: "4. Containment",
        body: "Confirmed threats get contained first and discussed second. We isolate the endpoint from the network, revoke sessions, disable the compromised account, and block the indicator across every other client we protect.",
      },
      {
        title: "5. Investigation and recovery",
        body: "We establish root cause, scope of access, and whether data left the building. You get a written timeline, the remediation steps, and the evidence package your insurer or regulator will ask for.",
      },
      {
        title: "6. Continuous hardening",
        body: "Every incident feeds back into your configuration. Monthly reporting shows detections, response times, and the specific gaps we closed so the same path cannot be used twice.",
      },
    ],
    deepDive: {
      heading: "What you actually get with SecureMe247 MDR",
      intro:
        "Every item below is included in the base engagement. No add-on modules, no per-incident fees.",
      items: [
        {
          title: "24/7 SOC monitoring",
          body: "Analysts on shift around the clock, including holidays. Attackers pick Friday at 6 p.m. on purpose, so that is exactly when we are staffed.",
        },
        {
          title: "SIEM and SOAR integration",
          body: "Centralized log correlation across endpoints, identity, cloud, and network, with automated playbooks that execute containment steps in seconds rather than minutes.",
        },
        {
          title: "Automated threat containment",
          body: "Host isolation, session revocation, and account disablement fire automatically for high-confidence detections, then an analyst verifies and continues the investigation.",
        },
        {
          title: "Incident response and forensics",
          body: "Full root cause analysis, attacker timeline, and scope of compromise. Included in the retainer instead of billed at emergency rates while your business is down.",
        },
        {
          title: "Threat hunting",
          body: "Proactive hypothesis-driven hunts across your telemetry looking for the quiet activity that never fires an alert, such as credential reuse or dormant persistence.",
        },
        {
          title: "Monthly threat reports",
          body: "A plain-language summary for leadership plus the technical detail your auditors want, including detection counts, response times, and remediation status.",
        },
      ],
    },
    mistakes: {
      heading: "Mistakes we see before companies call us",
      intro: "These are the patterns behind most of the incidents we clean up.",
      items: [
        {
          title: "Buying tools instead of outcomes",
          body: "A licensed EDR platform nobody monitors is a very expensive log file. The product is not the control. The response is.",
        },
        {
          title: "Assuming Microsoft 365 covers it",
          body: "Microsoft protects the platform. It does not investigate why your controller's account is forwarding mail to an external address at midnight.",
        },
        {
          title: "Treating business hours as coverage",
          body: "Roughly three quarters of ransomware deployment happens outside normal working hours. Coverage that ends at 5 p.m. covers the wrong hours.",
        },
        {
          title: "No tested containment path",
          body: "Knowing an endpoint is compromised does not help if no one has the authority or access to pull it off the network at 3 a.m.",
        },
      ],
    },
    faqs: [
      {
        question: "What is the difference between MDR, EDR, and a SIEM?",
        answer:
          "EDR is the sensor on the endpoint. A SIEM is the database that correlates logs. MDR is the service that operates both and takes action when something is wrong. You can own EDR and a SIEM and still have nobody watching them, which is the situation most businesses are actually in.",
      },
      {
        question: "How fast do you respond to a confirmed threat?",
        answer:
          "Our median containment time is under 30 minutes from first detection. High-confidence detections trigger automated isolation in seconds, and an analyst picks up the investigation immediately after.",
      },
      {
        question: "Do I have to replace my current security tools?",
        answer:
          "Usually not. We integrate with the major EDR, firewall, and identity platforms. If a tool cannot produce usable telemetry we will tell you plainly, but we do not force a rip and replace to start monitoring.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Most environments are fully instrumented in five to ten business days. Monitoring begins as soon as the first data sources are live, so you are not unprotected during rollout.",
      },
      {
        question: "Does MDR satisfy compliance requirements?",
        answer:
          "It supports the continuous monitoring, logging, and incident response requirements in SOC 2, HIPAA, PCI DSS, NIST 800-171, and CMMC. We provide the evidence artifacts auditors ask for, including alert histories and response timelines.",
      },
      {
        question: "What does MDR cost for a small business?",
        answer:
          "Pricing is per protected endpoint and identity, with no separate incident response fees. A typical 40-person company pays far less than a single junior security analyst salary and gets round the clock coverage instead of 40 hours a week.",
      },
    ],
  },

  endpoint: {
    h1Support:
      "Laptops are where the breach starts. Endpoint protection decides whether it also ends there.",
    overview: [
      "Ask any incident responder where intrusions begin and you will hear the same answer: a user opened something. A resume attachment, a fake invoice, a browser download that looked like a Zoom update. The endpoint is the front door, and signature-based antivirus stopped being a lock years ago.",
      "Modern endpoint protection works differently. Instead of asking whether a file matches a known bad hash, it watches behavior. Why is Word spawning PowerShell? Why is a process enumerating every share on the network? Why did something just start encrypting files in alphabetical order? Those questions catch attacks that have never been seen before, including the AI-generated variants that are now trivially cheap to produce.",
      "We deploy AI-driven prevention across every workstation, laptop, and server you own, then wrap it in device control, encryption enforcement, and ransomware rollback. If something does execute, we can roll the machine back to its pre-attack state rather than rebuilding it from scratch.",
      "The part most providers skip: someone has to manage the console. Policies drift, agents fall off machines, exclusions get added and never removed. We own that maintenance so your coverage on day 300 matches your coverage on day one.",
    ],
    stats: [
      { value: "<30 min", label: "Threat response time" },
      { value: "100%", label: "Devices under policy" },
      { value: "1-click", label: "Ransomware rollback" },
      { value: "24/7", label: "Console monitoring" },
    ],
    signsHeading: "Signs your endpoint security is behind",
    signs: [
      "You are still running the antivirus that came bundled with the operating system",
      "Nobody can tell you how many devices are actually reporting in today",
      "Personal laptops and phones touch company data with no controls",
      "Users have local administrator rights on their own machines",
      "USB drives work on every workstation with no restrictions",
      "You have no way to recover a machine after ransomware except a full rebuild",
    ],
    process: [
      {
        title: "1. Device inventory",
        body: "We discover every endpoint touching your network and identity provider, including the machines nobody remembered. You cannot protect what is not on the list.",
      },
      {
        title: "2. Agent deployment",
        body: "Silent installation through your existing management tooling or our RMM, with no user disruption and no reboot storm during business hours.",
      },
      {
        title: "3. Policy hardening",
        body: "Application control, script blocking, USB and peripheral rules, disk encryption enforcement, and local admin removal, phased in so nothing breaks the business.",
      },
      {
        title: "4. Monitoring and response",
        body: "Detections route into our SOC. Confirmed threats trigger isolation and rollback rather than a notification you read the next morning.",
      },
      {
        title: "5. Ongoing hygiene",
        body: "Monthly agent health audits, exclusion reviews, and patch verification so protection does not silently decay over time.",
      },
    ],
    deepDive: {
      heading: "What is included in endpoint protection",
      intro: "Full coverage across workstations, laptops, and servers, managed by us.",
      items: [
        {
          title: "AI-powered malware prevention",
          body: "Behavioral and machine learning detection that stops never-before-seen payloads, fileless attacks, and living-off-the-land techniques that abuse built-in Windows tools.",
        },
        {
          title: "Ransomware rollback",
          body: "Automatic journaling of file changes so an encrypted machine can be restored to its pre-attack state in minutes instead of rebuilt over a weekend.",
        },
        {
          title: "Device control and DLP",
          body: "Rules governing what data can leave an endpoint, through which channel, and by whom, with logging for compliance evidence.",
        },
        {
          title: "USB and peripheral control",
          body: "Block, allow, or read-only policies for removable media, enforced per user group rather than as a blanket rule that breaks legitimate work.",
        },
        {
          title: "Disk encryption management",
          body: "BitLocker and FileVault enforcement with escrowed recovery keys, which is the control that turns a lost laptop into a non-event instead of a breach notification.",
        },
        {
          title: "Centralized management console",
          body: "One place to see every device, its patch level, its policy state, and its detection history, monitored by our team and reported to you monthly.",
        },
      ],
    },
    mistakes: {
      heading: "Endpoint mistakes that cause incidents",
      intro: "Each of these shows up repeatedly in the environments we take over.",
      items: [
        {
          title: "Broad exclusions nobody reviews",
          body: "A vendor asks for an exclusion during a support call, it gets added, and three years later it is the folder the attacker stages payloads in.",
        },
        {
          title: "Local admin rights for convenience",
          body: "Most endpoint attacks escalate through the rights the user already has. Removing local admin blocks a large share of them outright.",
        },
        {
          title: "Servers left out of scope",
          body: "Protection often stops at laptops, but the file server is what actually gets encrypted. Servers need agents too.",
        },
        {
          title: "No coverage verification",
          body: "Agents fall off during imaging, migrations, and hardware refreshes. Without a monthly audit your real coverage is a guess.",
        },
      ],
    },
    faqs: [
      {
        question: "Is endpoint protection the same as antivirus?",
        answer:
          "No. Traditional antivirus matches known signatures. Modern endpoint protection analyzes behavior, which is what catches new ransomware strains, fileless attacks, and abuse of legitimate Windows tools. The difference matters because most successful attacks today use no malware file at all.",
      },
      {
        question: "Will it slow down our computers?",
        answer:
          "Modern agents run at a fraction of a percent of CPU during normal operation. If a machine is already struggling, we usually find the cause is an old disk or a second legacy antivirus that should have been removed.",
      },
      {
        question: "Does this cover Macs and mobile devices?",
        answer:
          "Yes. We cover Windows, macOS, and Linux servers, and manage mobile device policies through Intune or your existing MDM for phones and tablets that access company data.",
      },
      {
        question: "What happens when a threat is detected?",
        answer:
          "High-confidence detections isolate the machine from the network automatically, then a SOC analyst investigates, rolls back any damage, and contacts you with what happened and what we did about it.",
      },
      {
        question: "How does ransomware rollback actually work?",
        answer:
          "The agent journals file system changes continuously. If encryption is detected, it reverses those changes on the affected machine. It complements backups rather than replacing them, because rollback is measured in minutes and a full restore is measured in hours.",
      },
    ],
  },

  cloud: {
    h1Support:
      "Cloud breaches are almost never a cloud provider failure. They are a configuration and identity failure on the customer side.",
    overview: [
      "AWS, Azure, and Google Cloud secure the infrastructure. Everything you put on top of it is yours to secure. That split is called the shared responsibility model, and misunderstanding it is behind nearly every headline cloud breach: a public storage bucket, an over-permissioned service account, an access key committed to a repository.",
      "The problem is speed. A developer can spin up a database in ninety seconds. Governance never keeps pace with that, so drift accumulates quietly until someone scans your external footprint and finds it. Point-in-time audits do not help, because your environment on Friday does not resemble your environment from Monday's review.",
      "Cloud security posture management fixes that by running continuously. We monitor every account, subscription, and project against CIS benchmarks and your own policy, flag drift the moment it appears, and either remediate it automatically or hand your team an exact fix.",
      "Identity gets equal attention. In cloud environments, permissions are the perimeter. We map effective access, find the privilege escalation paths that are not obvious from any single policy document, and cut standing access down to what each role genuinely needs.",
    ],
    stats: [
      { value: "<30 min", label: "Alert triage" },
      { value: "Continuous", label: "Posture scanning" },
      { value: "3 clouds", label: "AWS, Azure, and GCP" },
      { value: "CIS", label: "Benchmark aligned" },
    ],
    signsHeading: "Signs your cloud environment needs attention",
    signs: [
      "You cannot list every cloud account or subscription your company owns",
      "Access keys and secrets live in code, config files, or shared documents",
      "Nobody reviews IAM permissions after the initial setup",
      "Storage buckets, databases, or admin ports are reachable from the internet",
      "Cloud logs are enabled but nothing reads them",
      "Your last cloud review was a spreadsheet completed for an audit",
    ],
    process: [
      {
        title: "1. Discovery and inventory",
        body: "We enumerate every account, subscription, project, and workload, including the shadow environments created on a corporate card during a proof of concept.",
      },
      {
        title: "2. Posture assessment",
        body: "A full scan against CIS benchmarks and framework requirements, ranked by exploitability rather than raw severity, so the internet-facing issues get fixed first.",
      },
      {
        title: "3. Identity mapping",
        body: "We calculate effective permissions across roles, groups, and inherited policies, then surface the escalation paths that let a low-privilege identity reach admin.",
      },
      {
        title: "4. Remediation",
        body: "Critical misconfigurations get fixed with your team, with infrastructure as code changes where possible so the fix survives the next deployment.",
      },
      {
        title: "5. Continuous monitoring",
        body: "Drift detection, runtime threat detection, and anomalous API activity monitoring feed into our SOC around the clock.",
      },
      {
        title: "6. Governance",
        body: "Guardrails, tagging policy, and preventive controls so the next resource is created correctly instead of found later during a scan.",
      },
    ],
    deepDive: {
      heading: "What is included in cloud security",
      intro: "Coverage across configuration, identity, workloads, and data.",
      items: [
        {
          title: "Cloud security posture management",
          body: "Continuous scanning of every account against CIS benchmarks and your internal policy, with prioritized findings and remediation guidance rather than a raw 900-item export.",
        },
        {
          title: "Container and Kubernetes security",
          body: "Image scanning in the pipeline, runtime protection, cluster configuration review, and network policy enforcement for containerized workloads.",
        },
        {
          title: "IAM and privilege escalation monitoring",
          body: "Effective permission analysis, detection of unused standing access, and alerting when a role gains a path to administrative control.",
        },
        {
          title: "Data loss prevention",
          body: "Discovery and classification of sensitive data in cloud storage, with policy enforcement on where it can move and who can reach it.",
        },
        {
          title: "Cloud-native threat detection",
          body: "Monitoring of control plane activity, anomalous API calls, impossible travel logins, and credential abuse across all connected clouds.",
        },
        {
          title: "Multi-cloud visibility",
          body: "AWS, Azure, and GCP in a single view with consistent policy, so you are not reconciling three different consoles and three different vocabularies.",
        },
      ],
    },
    mistakes: {
      heading: "Cloud security mistakes that cause breaches",
      intro: "The recurring patterns behind cloud incidents we investigate.",
      items: [
        {
          title: "Long-lived access keys",
          body: "Static credentials that never rotate end up in repositories, laptops, and third-party tools. Short-lived federated access removes the whole category of risk.",
        },
        {
          title: "Wildcard permissions",
          body: "Policies granting broad access get written during troubleshooting and never tightened. They are the single most common escalation path we find.",
        },
        {
          title: "Logging enabled but unmonitored",
          body: "Cloud audit logs are excellent forensic evidence and useless prevention if nothing is reading them in real time.",
        },
        {
          title: "Ignoring the identity provider",
          body: "Cloud security that stops at infrastructure misses the Microsoft 365 or Google Workspace tenant, which is where most business data and most account takeovers actually live.",
        },
      ],
    },
    faqs: [
      {
        question: "Is my data not already secure because it is in AWS or Azure?",
        answer:
          "The provider secures the physical infrastructure and hypervisor. You are responsible for configuration, identity, network rules, and data. Nearly all publicized cloud breaches trace back to something on the customer side of that line.",
      },
      {
        question: "Can you secure a multi-cloud environment?",
        answer:
          "Yes. We apply consistent policy across AWS, Azure, and GCP and present findings in one view, which matters because inconsistent policy between clouds is where gaps usually hide.",
      },
      {
        question: "Will security controls slow down our developers?",
        answer:
          "Good guardrails do the opposite. Preventive policy and pipeline scanning catch issues at commit time rather than in a post-deployment audit that forces rework weeks later.",
      },
      {
        question: "Do you cover Microsoft 365 and Google Workspace?",
        answer:
          "Yes. Those tenants are treated as first-class cloud environments, with configuration hardening, identity monitoring, and alerting on mailbox rule abuse and anomalous logins.",
      },
      {
        question: "How quickly can you assess our cloud environment?",
        answer:
          "An initial posture assessment for a typical environment takes about a week from read-only access to a prioritized findings report with remediation steps.",
      },
    ],
  },

  network: {
    h1Support:
      "Flat networks turn one compromised laptop into a company-wide outage. Segmentation and monitoring change the blast radius.",
    overview: [
      "Every network has an inside and an outside, and most small businesses have spent all their budget on the boundary between them. That made sense when everyone worked in one office. It stopped making sense when half your staff went remote, your servers moved to the cloud, and your conference room television started talking to the internet on its own.",
      "The single highest-value change most companies can make is segmentation. When your guest Wi-Fi, security cameras, point of sale terminals, and finance workstations all share one flat network, an intrusion anywhere becomes an intrusion everywhere. Separating them turns a full-company ransomware event into a contained incident on one segment.",
      "We manage next-generation firewalls, enforce segmentation, run intrusion detection and prevention, and monitor traffic for the patterns that indicate something is wrong: internal port scanning, unusual outbound volume, connections to newly registered domains, or a workstation suddenly talking to every share on the network.",
      "Secure remote access is part of the same job. VPN with enforced multi-factor authentication, or a zero trust access model where users reach specific applications rather than being dropped onto the whole network.",
    ],
    stats: [
      { value: "<30 min", label: "Detection time" },
      { value: "24/7", label: "Traffic monitoring" },
      { value: "Managed", label: "Firewall and IDS/IPS" },
      { value: "MFA", label: "Enforced remote access" },
    ],
    signsHeading: "Signs your network needs work",
    signs: [
      "Everything from printers to cameras to finance PCs sits on one flat network",
      "Firewall rules have accumulated for years and nobody knows what half of them do",
      "Remote access runs over VPN with a password and no second factor",
      "Firewall firmware is more than a few months behind",
      "There is no alerting on unusual internal or outbound traffic",
      "Guest Wi-Fi and staff Wi-Fi share the same underlying network",
    ],
    process: [
      {
        title: "1. Network discovery",
        body: "Full mapping of subnets, VLANs, connected devices, and traffic flows, including the equipment nobody documented when it was installed.",
      },
      {
        title: "2. Rule and exposure audit",
        body: "Review of every firewall rule for necessity and scope, plus an external scan to confirm what is actually reachable from the internet today.",
      },
      {
        title: "3. Segmentation design",
        body: "Separation of user devices, servers, guest access, operational technology, and IoT into distinct zones with explicit rules governing traffic between them.",
      },
      {
        title: "4. Deployment and hardening",
        body: "Next-generation firewall policy, IDS/IPS tuning, DNS filtering, and secure remote access with multi-factor authentication enforced.",
      },
      {
        title: "5. Continuous monitoring",
        body: "Traffic analysis and anomaly detection routed into our SOC, so lateral movement and data exfiltration are caught while they are happening.",
      },
      {
        title: "6. Change management",
        body: "Every rule change is documented, reviewed, and reversible. Firmware and signatures stay current on a scheduled cadence rather than an annual scramble.",
      },
    ],
    deepDive: {
      heading: "What is included in network security",
      intro: "Design, deployment, and ongoing management of your network defenses.",
      items: [
        {
          title: "Next-gen firewall management",
          body: "Policy design, rule lifecycle management, application-aware filtering, and firmware maintenance on Fortinet, Palo Alto, Meraki, and SonicWall platforms.",
        },
        {
          title: "IDS/IPS monitoring",
          body: "Tuned intrusion detection and prevention with signatures kept current, monitored by analysts so alerts turn into action rather than dashboard decoration.",
        },
        {
          title: "Network segmentation",
          body: "VLAN and zone design that isolates critical systems, guest traffic, and unmanaged IoT devices, which is the control that limits blast radius during an incident.",
        },
        {
          title: "VPN and secure remote access",
          body: "Encrypted remote access with mandatory multi-factor authentication, device posture checks, and least-privilege access to applications rather than the entire network.",
        },
        {
          title: "Traffic analysis and anomaly detection",
          body: "Baseline modeling of normal traffic so internal scanning, beaconing to command and control infrastructure, and unusual data egress stand out immediately.",
        },
        {
          title: "DNS and content filtering",
          body: "Blocking of known malicious, newly registered, and category-restricted domains at the resolver, which stops a meaningful share of phishing before a page ever loads.",
        },
      ],
    },
    mistakes: {
      heading: "Network mistakes that widen a breach",
      intro: "These decisions rarely cause an incident, but they turn a small one into a large one.",
      items: [
        {
          title: "Any-any rules left in place",
          body: "Temporary permissive rules created during troubleshooting become permanent. They are the first thing we look for in a rule audit.",
        },
        {
          title: "IoT on the production network",
          body: "Cameras, thermostats, and televisions rarely receive patches and frequently ship with default credentials. They belong on an isolated segment.",
        },
        {
          title: "VPN without multi-factor",
          body: "A stolen password becomes full internal network access. This remains one of the most common initial access vectors in ransomware cases.",
        },
        {
          title: "No east-west visibility",
          body: "Monitoring only traffic crossing the perimeter misses lateral movement entirely, which is where attackers spend most of their time.",
        },
      ],
    },
    faqs: [
      {
        question: "Do we still need network security if we moved to the cloud?",
        answer:
          "Yes. Your offices, remote workers, and any remaining on-premises equipment still need controlled access, and the connection between users and cloud services is exactly where session hijacking and credential theft occur.",
      },
      {
        question: "What is network segmentation and why does it matter?",
        answer:
          "Segmentation divides your network into zones with controlled traffic between them. It is the difference between ransomware encrypting one department and ransomware encrypting the company. It is also a stated requirement in PCI DSS and CMMC.",
      },
      {
        question: "Can you manage the firewall we already own?",
        answer:
          "In most cases yes. We manage the major enterprise platforms. If your hardware is end of life or no longer receiving security updates we will say so and give you replacement options with real numbers.",
      },
      {
        question: "How is this different from what our internet provider gives us?",
        answer:
          "An ISP router provides basic address translation and a default firewall. It does not perform application-aware inspection, intrusion prevention, segmentation, or produce logs anyone monitors.",
      },
      {
        question: "Will segmentation disrupt our operations?",
        answer:
          "We design and stage segmentation in phases, validate traffic flows before enforcing them, and schedule cutover outside business hours. Disruption is measured in minutes, not days.",
      },
    ],
  },

  compliance: {
    h1Support:
      "Compliance frameworks are not the goal. Passing the audit without rebuilding your security program every year is the goal.",
    overview: [
      "Most companies meet compliance the same way: a deal stalls because a customer demands SOC 2, and suddenly there is a six-month scramble involving spreadsheets, a consultant, and a lot of weekend work. Twelve months later the evidence has gone stale and the scramble repeats.",
      "The fix is treating compliance as an operating state rather than a project. The controls in SOC 2, HIPAA, PCI DSS, NIST 800-171, ISO 27001, and CMMC overlap heavily. Implement them once, instrument them so evidence collects itself, and each additional framework becomes an incremental effort instead of a fresh start.",
      "We start with a gap assessment mapped to your target framework, then build the remediation plan in priority order: the controls that block certification first, the ones that reduce actual risk next. You get the policies, the technical controls, and the evidence workflow, not a binder of templates with your logo dropped in.",
      "For federal contractors this is existential. CMMC assessments are now a condition of award on defense contracts, and self-attestation without the underlying controls carries real legal exposure under the False Claims Act. We take that work seriously because the consequences are not theoretical.",
    ],
    stats: [
      { value: "24/7", label: "Compliance monitoring" },
      { value: "12", label: "Frameworks supported" },
      { value: "Audit-ready", label: "Evidence collection" },
      { value: "vCISO", label: "Included leadership" },
    ],
    signsHeading: "Signs you need compliance help now",
    signs: [
      "A customer or prime contractor is asking for SOC 2, HIPAA, or CMMC evidence",
      "Your policies exist as documents nobody follows or reviews",
      "Evidence gathering means chasing screenshots the week before an audit",
      "You submitted an SPRS score you are not certain you can defend",
      "Your last assessment produced findings that were never closed",
      "You are handling regulated data without a documented control set",
    ],
    process: [
      {
        title: "1. Scoping",
        body: "We define which systems, data, and people fall inside the boundary. Getting scope right is the single biggest lever on both cost and timeline.",
      },
      {
        title: "2. Gap assessment",
        body: "Every control in your target framework is assessed against current reality, producing a findings register with owners, effort estimates, and evidence requirements.",
      },
      {
        title: "3. Remediation roadmap",
        body: "Prioritized by certification impact and risk reduction, with realistic dates. You see exactly what has to change and what it will take.",
      },
      {
        title: "4. Control implementation",
        body: "Policies written to your actual operations, technical controls deployed and verified, and staff training delivered so the controls survive contact with daily work.",
      },
      {
        title: "5. Evidence automation",
        body: "Continuous collection of logs, configuration snapshots, access reviews, and training records so the audit package assembles itself throughout the year.",
      },
      {
        title: "6. Audit support and maintenance",
        body: "We prepare your team, respond to auditor requests, and keep controls current through change, growth, and framework updates.",
      },
    ],
    deepDive: {
      heading: "Frameworks we support",
      intro: "One control program, mapped across every framework that applies to you.",
      items: [
        {
          title: "SOC 2 Type I and II",
          body: "Readiness through observation window and audit, covering security, availability, confidentiality, processing integrity, and privacy criteria as scoped to your business.",
        },
        {
          title: "HIPAA and HITRUST",
          body: "Security Rule and Privacy Rule implementation, risk analysis, business associate management, and the documentation that holds up under an OCR inquiry.",
        },
        {
          title: "PCI DSS",
          body: "Cardholder data scoping and reduction, segmentation validation, quarterly scanning, and self-assessment questionnaire or on-site assessment support.",
        },
        {
          title: "NIST CSF and 800-171",
          body: "Control implementation, system security plan and plan of action development, and defensible SPRS scoring for federal contractors and subcontractors.",
        },
        {
          title: "ISO 27001",
          body: "Information security management system design, risk treatment planning, statement of applicability, and internal audit preparation.",
        },
        {
          title: "CMMC preparation",
          body: "Level 1 and Level 2 readiness, evidence packaging, and assessor coordination so a required certification does not cost you the contract.",
        },
      ],
    },
    mistakes: {
      heading: "Compliance mistakes that cost time and money",
      intro: "Avoiding these four saves most companies months.",
      items: [
        {
          title: "Scoping too broadly",
          body: "Every extra system inside the boundary adds controls, evidence, and audit hours. Deliberate scope reduction is usually the cheapest win available.",
        },
        {
          title: "Buying policy templates",
          body: "Auditors test whether you follow the policy, not whether you have one. A generic template you do not follow is worse than no policy at all.",
        },
        {
          title: "Leaving evidence until audit season",
          body: "Type II audits require evidence spanning the whole observation window. You cannot retroactively produce access reviews that never happened.",
        },
        {
          title: "Treating compliance as security",
          body: "Passing an audit is a floor, not a ceiling. We build the control program so it does both jobs instead of only the paperwork one.",
        },
      ],
    },
    faqs: [
      {
        question: "How long does SOC 2 certification take?",
        answer:
          "Type I typically takes three to four months from gap assessment to report. Type II adds an observation window of three to twelve months, so most companies reach a Type II report nine to twelve months after starting.",
      },
      {
        question: "Does compliance actually make us secure?",
        answer:
          "Compliance sets a baseline. It is possible to be compliant and still be breached, which is why we implement controls for effect and then map them to the framework rather than the other way around.",
      },
      {
        question: "Can one program cover multiple frameworks?",
        answer:
          "Yes, and it should. SOC 2, ISO 27001, HIPAA, and NIST 800-171 share a large portion of their controls. We build once and map across, so a second framework is incremental work rather than a new project.",
      },
      {
        question: "What does CMMC mean for our defense contracts?",
        answer:
          "CMMC certification is now a condition of award for contracts involving controlled unclassified information. Level 2 requires the 110 controls in NIST 800-171 with third-party assessment. Starting late is the most expensive way to do it.",
      },
      {
        question: "Do you provide the auditor as well?",
        answer:
          "No, and that is deliberate. Independence requires separation between the party implementing controls and the party attesting to them. We prepare you, coordinate with your chosen assessor, and handle evidence requests.",
      },
    ],
  },

  pentest: {
    h1Support:
      "A vulnerability scan tells you what might be exploitable. A penetration test proves what actually is.",
    overview: [
      "There is a meaningful difference between a scanner report and a penetration test, and vendors blur it constantly. A scanner produces a list of potential issues ranked by a generic severity score. A penetration test has a human being chain those issues together to see how far they can actually get inside your business.",
      "That chaining is the whole point. Three medium-severity findings that look unremarkable in isolation frequently combine into full domain administrator access. No automated tool reports that path, because reasoning about it is the part that requires a person.",
      "Our engagements cover external perimeter, internal network, web and API applications, cloud environments, wireless, and social engineering. On a typical first assessment we identify around 200 findings, and the report is ordered by real business impact rather than by raw CVSS score.",
      "You also get something most reports omit: specific remediation steps written for your environment, and a free retest after you have fixed things. A finding you cannot act on is not a finding, it is trivia.",
    ],
    stats: [
      { value: "200+", label: "Avg findings per first test" },
      { value: "Free", label: "Remediation retest" },
      { value: "OSCP", label: "Certified testers" },
      { value: "2-3 wks", label: "Typical engagement" },
    ],
    signsHeading: "When you should schedule a penetration test",
    signs: [
      "A customer, insurer, or auditor requires annual testing",
      "You are pursuing SOC 2, PCI DSS, HIPAA, or CMMC certification",
      "You launched or significantly changed a public-facing application",
      "You completed a cloud migration or major infrastructure change",
      "You have never validated your defenses against an actual attacker",
      "You went through a merger, acquisition, or office consolidation",
    ],
    process: [
      {
        title: "1. Scoping and rules of engagement",
        body: "We agree on targets, testing windows, escalation contacts, and what is off limits. Written authorization protects both sides before any traffic is sent.",
      },
      {
        title: "2. Reconnaissance",
        body: "Attack surface mapping, credential exposure checks against breach data, and open source intelligence gathering, exactly as an actual attacker would begin.",
      },
      {
        title: "3. Vulnerability identification",
        body: "Automated scanning combined with manual analysis, because the findings that matter most are usually logic flaws no scanner can recognize.",
      },
      {
        title: "4. Exploitation",
        body: "Controlled exploitation to prove real impact, with strict care around availability. We demonstrate access rather than causing damage.",
      },
      {
        title: "5. Post-exploitation and lateral movement",
        body: "We establish how far an initial foothold reaches: which systems, which data, and how quickly a determined attacker gets to your crown jewels.",
      },
      {
        title: "6. Reporting and retest",
        body: "An executive summary, technical detail with reproduction steps, prioritized remediation guidance, and a complimentary retest to verify your fixes worked.",
      },
    ],
    deepDive: {
      heading: "Types of testing we perform",
      intro: "Scoped to your environment, your compliance requirements, and your risk.",
      items: [
        {
          title: "External penetration testing",
          body: "Internet-facing systems, exposed services, VPN endpoints, and remote access portals tested from an outside attacker's perspective with no internal access.",
        },
        {
          title: "Internal penetration testing",
          body: "Simulation of a compromised workstation or malicious insider, focused on lateral movement, privilege escalation, and reachability of sensitive data.",
        },
        {
          title: "Web application testing",
          body: "Manual testing against the OWASP Top 10 plus business logic abuse, authentication bypass, access control flaws, and API security.",
        },
        {
          title: "Social engineering assessments",
          body: "Phishing, pretexting, and physical access attempts that measure how your people and processes hold up, with training built from the actual results.",
        },
        {
          title: "Red team operations",
          body: "Objective-based adversary simulation over a longer window that tests detection and response, not just whether a vulnerability exists.",
        },
        {
          title: "Detailed remediation reports",
          body: "Findings ranked by exploitability and business impact, with reproduction steps, evidence, and specific fixes your team can execute.",
        },
      ],
    },
    mistakes: {
      heading: "How companies waste money on penetration tests",
      intro: "If any of these describe your last test, you paid for a scan.",
      items: [
        {
          title: "Accepting a scanner report as a pen test",
          body: "If the deliverable is an unedited tool export with no exploitation narrative, no human tested anything.",
        },
        {
          title: "Scoping out the real risk",
          body: "Excluding the systems you are most worried about produces a clean report and no useful information.",
        },
        {
          title: "Never remediating the findings",
          body: "A report filed away for the auditor leaves the vulnerabilities in place. Remediation tracking and retest is where the value lands.",
        },
        {
          title: "Testing once and stopping",
          body: "Environments change constantly. Annual testing plus testing after major changes is the minimum useful cadence.",
        },
      ],
    },
    faqs: [
      {
        question: "What is the difference between a vulnerability scan and a penetration test?",
        answer:
          "A scan is automated and identifies known issues. A penetration test uses skilled humans to exploit and chain those issues to demonstrate real business impact. Scans are a monthly hygiene activity. Tests are a periodic validation of your defenses.",
      },
      {
        question: "How often should we get tested?",
        answer:
          "At least annually, plus after any significant infrastructure change, application launch, or cloud migration. Most compliance frameworks require annual testing at minimum.",
      },
      {
        question: "Will testing break our production systems?",
        answer:
          "We scope explicitly for availability, avoid destructive techniques on production, coordinate testing windows, and maintain an escalation contact throughout. Disruption is rare and planned for.",
      },
      {
        question: "How long does an engagement take?",
        answer:
          "A typical external and internal assessment runs two to three weeks including reporting. Larger scopes and red team engagements run longer, and we give you a firm timeline during scoping.",
      },
      {
        question: "What do we receive at the end?",
        answer:
          "An executive summary for leadership, a technical report with reproduction steps and evidence, a prioritized remediation plan, and a free retest once you have addressed the findings.",
      },
    ],
  },

  "backup-dr": {
    h1Support:
      "Backups are not a recovery plan. An untested backup is a hypothesis, and ransomware operators specifically target the ones you can reach.",
    overview: [
      "Every company we onboard tells us they have backups. A meaningful share of them cannot actually restore. The backup job has been failing silently for months, the retention window is shorter than anyone assumed, or the backup target is a network share the same ransomware payload will encrypt on its way through.",
      "That last one deserves emphasis. Modern ransomware crews hunt for backups before they encrypt anything. They delete snapshots, wipe the backup server, and destroy shadow copies, because a company that can restore does not pay. Immutability is what breaks that plan: storage that cannot be altered or deleted within the retention window, even by an administrator with valid credentials.",
      "We design around two numbers. Recovery time objective is how long you can be down. Recovery point objective is how much data you can afford to lose. Those numbers drive the architecture, not the other way around, and they belong in a conversation with your leadership rather than in an IT assumption.",
      "Then we test. Quarterly restore drills against real systems, documented, timed, and reported. If a restore takes eleven hours and your plan assumed four, that is far better learned during a drill than during an incident.",
    ],
    stats: [
      { value: "<4 hr", label: "Server RTO" },
      { value: "Immutable", label: "Off-site storage" },
      { value: "Quarterly", label: "Tested restores" },
      { value: "Daily", label: "Automated backups" },
    ],
    signsHeading: "Signs your backup strategy will fail you",
    signs: [
      "Nobody has performed a full restore test in the last twelve months",
      "Backups write to a network share or drive that domain accounts can reach",
      "You have no documented recovery time or recovery point objectives",
      "Microsoft 365 and Google Workspace data is not backed up separately",
      "Backup job failures are emailed to an inbox nobody reads",
      "Your disaster recovery plan is knowledge in one person's head",
    ],
    process: [
      {
        title: "1. Business impact analysis",
        body: "We identify critical systems and data and establish real recovery objectives with your leadership, because the right architecture depends entirely on those numbers.",
      },
      {
        title: "2. Architecture design",
        body: "Backup topology built to the 3-2-1-1-0 principle: three copies, two media types, one off-site, one immutable, and zero errors on verification.",
      },
      {
        title: "3. Deployment",
        body: "Automated backup of servers, workstations, cloud workloads, and SaaS data including Microsoft 365, with encryption in transit and at rest.",
      },
      {
        title: "4. Immutability and isolation",
        body: "Off-site copies written to storage that cannot be modified or deleted during retention, with credentials fully separated from your production domain.",
      },
      {
        title: "5. Recovery testing",
        body: "Quarterly restore drills with documented timings against your stated objectives, plus annual full disaster recovery exercises for critical systems.",
      },
      {
        title: "6. Monitoring and reporting",
        body: "Daily job verification, alerting on any failure, and monthly reporting so a silent failure never runs for months undetected.",
      },
    ],
    deepDive: {
      heading: "What is included in backup and disaster recovery",
      intro: "Protection, isolation, and proven recovery for everything that matters.",
      items: [
        {
          title: "Automated daily backups",
          body: "Scheduled protection of servers, workstations, virtual machines, databases, and cloud workloads with verification on every job rather than an assumption of success.",
        },
        {
          title: "Immutable off-site storage",
          body: "Write-once copies in geographically separate storage that cannot be deleted within the retention window, even with stolen administrator credentials.",
        },
        {
          title: "Ransomware-proof snapshots",
          body: "Air-gapped or logically isolated recovery points with separate authentication, so the credentials used to encrypt your network cannot reach your recovery data.",
        },
        {
          title: "Microsoft 365 and SaaS backup",
          body: "Independent protection for Exchange Online, SharePoint, OneDrive, and Teams. Microsoft replicates your data but does not protect you from deletion, corruption, or a malicious insider.",
        },
        {
          title: "Disaster recovery planning",
          body: "Documented runbooks with recovery order, dependencies, named responsibilities, and communication procedures, written so a competent engineer can execute them under pressure.",
        },
        {
          title: "Tested recovery SLAs",
          body: "Contractual recovery time commitments backed by quarterly drills that prove the numbers instead of estimating them.",
        },
      ],
    },
    mistakes: {
      heading: "Backup mistakes that end in permanent data loss",
      intro: "Each of these has caused a real recovery failure we were called in to handle.",
      items: [
        {
          title: "Backups reachable from the production domain",
          body: "If a domain administrator account can delete your backups, so can the attacker who stole one. Credential separation is non-negotiable.",
        },
        {
          title: "Assuming Microsoft 365 is backed up",
          body: "Microsoft guarantees service availability, not recovery of data you or an attacker deleted. Retention periods are shorter than most people expect.",
        },
        {
          title: "Never testing a restore",
          body: "Backup success messages mean the job ran, not that the data is usable. Only a restore test proves recoverability.",
        },
        {
          title: "No documented recovery order",
          body: "Restoring applications before domain controllers and databases wastes hours during the exact window when hours are most expensive.",
        },
      ],
    },
    faqs: [
      {
        question: "How fast can you restore after ransomware?",
        answer:
          "Critical servers typically come back within four hours, and individual files or mailboxes within minutes. Actual timing depends on data volume and the objectives we set during design, which is precisely why we test quarterly.",
      },
      {
        question: "What does immutable backup mean?",
        answer:
          "Storage that cannot be modified or deleted for a defined retention period, regardless of credentials. It is the control that guarantees a recovery point survives even when an attacker has full administrative access to your network.",
      },
      {
        question: "Do we need to back up Microsoft 365 separately?",
        answer:
          "Yes. Microsoft operates under a shared responsibility model where they keep the service running and you remain responsible for your data. Accidental deletion, malicious insiders, and ransomware syncing into OneDrive are all your problem to solve.",
      },
      {
        question: "How often do you test restores?",
        answer:
          "Quarterly for critical systems, with annual full disaster recovery exercises. Every test is documented with actual timings measured against your stated recovery objectives.",
      },
      {
        question: "What is the difference between backup and disaster recovery?",
        answer:
          "Backup is a copy of your data. Disaster recovery is the documented, tested ability to resume operations, including the order of restoration, dependencies, staffing, and communications. Most companies have the first and not the second.",
      },
    ],
  },

  "it-support": {
    h1Support:
      "The cost of bad IT support is not the invoice. It is the hour your team loses waiting on a callback.",
    overview: [
      "Do the arithmetic on a slow help desk. Forty employees, each losing thirty minutes a week to a technology problem that never gets properly fixed, is roughly twenty hours of lost productivity every week. That number dwarfs the price difference between a cheap provider and a good one.",
      "Our model is built to eliminate that waste. Thirty-minute response on help desk tickets, no phone trees, and a real technician on the first contact rather than a scripted level-one reading a checklist back to you. On-site dispatch within four hours anywhere in Northern Virginia from our Reston office.",
      "The bigger difference is proactive work. Reactive support waits for something to break. We monitor systems continuously, apply patches on a tested schedule, track hardware health, and address issues before anyone opens a ticket. Ticket volume dropping quarter over quarter is the honest metric for whether managed IT is working.",
      "Everything runs on documentation. Your environment, your accounts, your vendors, and your procedures are recorded so support does not depend on which technician happens to answer, and so you are never held hostage by knowledge nobody else has.",
    ],
    stats: [
      { value: "<30 min", label: "Average response time" },
      { value: "4 hr", label: "On-site dispatch" },
      { value: "24/7", label: "Emergency support" },
      { value: "500+", label: "Businesses supported" },
    ],
    signsHeading: "Signs your current IT support is not working",
    signs: [
      "Tickets sit for hours or days before anyone responds",
      "The same problems keep recurring with no root cause fix",
      "Your provider only shows up when something breaks",
      "New employee setup takes days instead of being ready on day one",
      "Nobody can produce documentation of your environment",
      "Your only technical person is a single point of failure",
    ],
    process: [
      {
        title: "1. Discovery and documentation",
        body: "Full inventory of hardware, software, licenses, vendors, and accounts, documented in a system your team can access rather than trapped in someone's memory.",
      },
      {
        title: "2. Stabilization",
        body: "We fix the recurring issues first: failing hardware, unpatched systems, license problems, and the workarounds everyone quietly tolerates.",
      },
      {
        title: "3. Monitoring and automation",
        body: "Agents on every endpoint and server providing health, patch, and performance visibility, with automated remediation for common issues.",
      },
      {
        title: "4. Day-to-day support",
        body: "Help desk by phone, email, and portal with a thirty-minute response target, on-site dispatch within four hours, and 24/7 coverage for critical outages.",
      },
      {
        title: "5. Lifecycle management",
        body: "Onboarding and offboarding runbooks, hardware procurement at wholesale pricing, warranty tracking, and planned refresh cycles instead of emergency replacements.",
      },
      {
        title: "6. Strategic reviews",
        body: "Quarterly business reviews covering ticket trends, upcoming needs, budget planning, and the security posture of everything we manage.",
      },
    ],
    deepDive: {
      heading: "What is included in managed IT support",
      intro: "Flat monthly pricing per user. No hourly surprises, no incident upcharges.",
      items: [
        {
          title: "30-minute help desk response",
          body: "Phone, email, and portal access to real technicians who know your environment, with a thirty-minute response target measured and reported every month.",
        },
        {
          title: "On-site dispatch within 4 hours",
          body: "Engineers dispatched from Reston to anywhere in Northern Virginia for the problems that cannot be solved remotely, such as hardware failures and network faults.",
        },
        {
          title: "Onboarding and offboarding",
          body: "Documented runbooks so a new hire has a configured laptop, accounts, and access on day one, and a departing employee loses all access the hour they leave.",
        },
        {
          title: "Hardware procurement and setup",
          body: "Workstations, servers, and networking sourced at wholesale pricing, imaged, secured, and delivered ready to use with warranty tracking handled for you.",
        },
        {
          title: "Patch and update management",
          body: "Tested patch deployment on a defined schedule across operating systems and third-party applications, which closes the vulnerability window attackers rely on most.",
        },
        {
          title: "24/7 emergency support",
          body: "Around the clock coverage for outages and critical incidents, because a failed server at 11 p.m. on Saturday still stops Monday morning.",
        },
      ],
    },
    mistakes: {
      heading: "Where IT support relationships go wrong",
      intro: "Four patterns that quietly cost businesses far more than they save.",
      items: [
        {
          title: "Buying hourly break-fix",
          body: "Hourly billing rewards the provider when things break. Flat-rate managed support aligns the incentive with keeping your systems stable.",
        },
        {
          title: "No documentation handover",
          body: "If nobody outside your provider knows how your environment is built, switching providers becomes a hostage negotiation. Documentation should be yours.",
        },
        {
          title: "Security treated as an upsell",
          body: "Patching, endpoint protection, and multi-factor authentication are baseline IT hygiene, not premium add-ons in a higher tier.",
        },
        {
          title: "No strategic planning",
          body: "Without lifecycle planning and budget forecasting, every hardware refresh and license renewal arrives as an emergency expense.",
        },
      ],
    },
    faqs: [
      {
        question: "How fast do you respond to support requests?",
        answer:
          "Our target is thirty minutes for help desk tickets during business hours and immediate response for critical outages at any hour. On-site dispatch is within four hours anywhere in Northern Virginia.",
      },
      {
        question: "How is managed IT priced?",
        answer:
          "A flat monthly fee per supported user that includes help desk, monitoring, patching, and security baseline. Predictable budgeting matters more to most businesses than shaving a few dollars off an hourly rate.",
      },
      {
        question: "Can you work alongside our internal IT person?",
        answer:
          "Yes. Co-managed IT is common. We typically take the help desk, monitoring, patching, and after-hours load so your internal person can focus on projects and business systems.",
      },
      {
        question: "Do you support remote and hybrid teams?",
        answer:
          "Yes. Remote support, cloud-managed device policies, secure remote access, and shipping preconfigured equipment directly to remote staff are all standard.",
      },
      {
        question: "What happens if we want to leave?",
        answer:
          "You take your documentation, your licenses, and your accounts. Everything we build is recorded in a system you own, and we support an orderly transition. Lock-in is not a retention strategy we use.",
      },
    ],
  },

  vciso: {
    h1Support:
      "You may not need a full-time security executive. You almost certainly need security decisions made by someone who has made them before.",
    overview: [
      "A full-time chief information security officer in the Washington DC region costs well north of 250,000 dollars a year before benefits. For a company of 30 to 300 people that is difficult to justify, and yet the work still needs doing: risk decisions, board reporting, framework strategy, vendor evaluation, and incident command.",
      "A virtual CISO fills exactly that gap. You get an experienced security executive on a defined schedule, accountable for the security program rather than for closing tickets. The output is a roadmap tied to your business objectives, a risk register leadership actually reviews, and someone who can sit in front of your board or your largest customer and answer hard questions credibly.",
      "The engagement typically starts with an honest assessment of where you are. Not a scan, an evaluation of program maturity: governance, policy, technical controls, third-party risk, and incident readiness. From there we build a prioritized twelve-month roadmap with budget attached, so security spending becomes a plan instead of a series of reactions.",
      "The most immediate value for most clients is procurement leverage. Enterprise customers, insurers, and prime contractors increasingly require a named security leader and a documented program. Having one unblocks deals that would otherwise stall in review.",
    ],
    stats: [
      { value: "100%", label: "Strategy-first approach" },
      { value: "Fractional", label: "Executive cost model" },
      { value: "Board-ready", label: "Reporting cadence" },
      { value: "24/7", label: "Incident command access" },
    ],
    signsHeading: "Signs you need a virtual CISO",
    signs: [
      "Security decisions are being made by whoever has time that week",
      "Your board or investors are asking questions nobody can answer confidently",
      "A large customer requires a named security leader and documented program",
      "You are pursuing SOC 2, CMMC, or ISO 27001 with no internal owner",
      "Security spending happens reactively with no roadmap or budget",
      "You have no incident response plan or nobody has ever rehearsed it",
    ],
    process: [
      {
        title: "1. Program assessment",
        body: "Maturity evaluation across governance, policy, technical controls, third-party risk, and incident readiness, benchmarked against peers in your industry.",
      },
      {
        title: "2. Risk register",
        body: "Business risks documented in financial terms rather than technical ones, so leadership can make informed decisions about what to accept, mitigate, or transfer.",
      },
      {
        title: "3. Strategic roadmap",
        body: "A prioritized twelve to twenty-four month plan with budget, sequencing, and owners, tied directly to business goals and contractual obligations.",
      },
      {
        title: "4. Policy and governance",
        body: "A policy set written for how your business actually operates, plus the review cadence and approval structure that keeps it current.",
      },
      {
        title: "5. Execution oversight",
        body: "We drive implementation with your team and vendors, evaluate tooling, negotiate with providers, and hold projects to their dates.",
      },
      {
        title: "6. Board and customer reporting",
        body: "Regular reporting in the language executives and auditors use, plus direct participation in customer security reviews and questionnaires.",
      },
    ],
    deepDive: {
      heading: "What a SecureMe247 vCISO delivers",
      intro: "Executive security leadership on a fractional schedule.",
      items: [
        {
          title: "Security program strategy",
          body: "A documented program with objectives, metrics, and a funded roadmap, replacing ad hoc decisions with a plan you can defend to any stakeholder.",
        },
        {
          title: "Risk management and assessments",
          body: "Formal risk assessments, quantified business impact, and a maintained register that drives budget decisions rather than sitting in a folder.",
        },
        {
          title: "Compliance roadmap and oversight",
          body: "Framework selection, gap remediation planning, and audit ownership across SOC 2, HIPAA, PCI DSS, NIST, ISO 27001, and CMMC.",
        },
        {
          title: "Board and executive reporting",
          body: "Quarterly reporting that translates technical posture into business risk, budget impact, and trend lines your board can act on.",
        },
        {
          title: "Vendor and third-party risk",
          body: "Security review of your vendors, contract language for security obligations, and a repeatable process for evaluating the next one.",
        },
        {
          title: "Incident command leadership",
          body: "A named executive who runs the room during a serious incident, coordinating technical response, legal, insurance, and customer communication.",
        },
      ],
    },
    mistakes: {
      heading: "What goes wrong without security leadership",
      intro: "The predictable results of leaving the seat empty.",
      items: [
        {
          title: "Tool sprawl without strategy",
          body: "Overlapping products purchased reactively, each solving part of a problem, none fully deployed, and all of them billed monthly.",
        },
        {
          title: "Risk decisions made by default",
          body: "When nobody owns risk acceptance, it happens implicitly through inaction, and the business never knowingly agreed to the exposure.",
        },
        {
          title: "Stalled enterprise deals",
          body: "Security questionnaires and customer reviews stall in procurement when there is no credible owner to answer them.",
        },
        {
          title: "Improvised incident response",
          body: "The first hour of an incident determines the cost of the next month. Improvising it is the most expensive option available.",
        },
      ],
    },
    faqs: [
      {
        question: "What does a vCISO actually do day to day?",
        answer:
          "Strategy, risk management, policy governance, compliance oversight, vendor evaluation, board reporting, and incident command. It is executive work. Implementation is carried out by your team or ours under that direction.",
      },
      {
        question: "How much time do we get?",
        answer:
          "Engagements are scoped by need, commonly a set number of days per month with additional availability for incidents and customer reviews. Most companies of 30 to 300 people find a few days a month sufficient once the program is established.",
      },
      {
        question: "How is this different from hiring a consultant?",
        answer:
          "A consultant delivers a report and leaves. A vCISO is accountable for the program over time, attends your leadership meetings, owns the roadmap, and is reachable when something goes wrong at midnight.",
      },
      {
        question: "Can a vCISO satisfy compliance requirements for a named security officer?",
        answer:
          "Yes. HIPAA, PCI DSS, and most customer contracts require a designated security officer, and a fractional executive satisfies that requirement in the same way a fractional CFO satisfies financial oversight.",
      },
      {
        question: "What if we already have an IT manager?",
        answer:
          "That usually works well. Your IT manager runs operations, and the vCISO sets security direction, handles governance and reporting, and provides the executive air cover that makes prioritization possible.",
      },
    ],
  },
};
