If your company sits along the Dulles Technology Corridor and holds a Department of Defense contract, CMMC is no longer a future problem. Primes in Reston are already writing flow-down requirements into subcontracts, and a missing assessment score is now a reason to lose a recompete.

This guide walks through what CMMC actually requires, how Reston contractors typically fall short, and a realistic timeline to get from "we have not started" to a defensible score.

## What CMMC means for a Reston contractor

CMMC is the Department of Defense program that verifies contractors protect Federal Contract Information and Controlled Unclassified Information. It does not invent new security requirements. It verifies the ones already written into NIST SP 800-171 and DFARS 252.204-7012.

Three levels apply:

- **Level 1** covers Federal Contract Information only. Fifteen basic safeguards, annual self-assessment.
- **Level 2** covers Controlled Unclassified Information. All 110 NIST SP 800-171 controls, with a third party assessment for most contracts.
- **Level 3** adds advanced controls for the highest priority programs and is assessed by the government.

Most Reston subcontractors working under Leidos, Booz Allen, General Dynamics IT, or an SAIC prime land at Level 2. If CUI touches your email, your file shares, or an engineer's laptop, that is your target.

## The four artifacts every assessment starts with

Assessors do not begin with your firewall. They begin with paperwork, and this is where most local firms lose weeks.

1. **A scoped system boundary.** A written definition of which systems, cloud tenants, and people handle CUI. Narrow scope is the single biggest cost lever in the whole program.
2. **A System Security Plan.** One document describing how each of the 110 controls is met, by which system, and who owns it.
3. **A Plan of Action and Milestones.** Every gap, with an owner and a date. Some gaps are allowed to remain open at assessment. Others are not.
4. **An SPRS score.** Your self-assessed score posted to the Supplier Performance Risk System. Primes check it. An empty score reads as an unmanaged supplier.

## Where Reston contractors usually fall short

After running assessments for firms between Sunrise Valley Drive and Reston Town Center, the same gaps repeat.

**Commercial Microsoft 365 instead of GCC High.** Standard M365 does not meet the requirements for storing CUI under DFARS. Firms discover this after CUI has been sitting in SharePoint for two years. Migration to GCC High or GCC takes six to twelve weeks and needs planning, not panic.

**Unmanaged personal devices.** Engineers checking work email from a personal phone puts that phone in scope. Either enroll it in management or block access entirely.

**No audit log retention.** Controls require logging, review, and retention. Many small contractors have logs that roll off in seven days. Assessors ask for evidence covering the assessment period.

**Multifactor gaps on legacy access.** VPN and email are usually covered. Remote desktop, on-prem admin accounts, and vendor access frequently are not.

**Subcontractor flow-down ignored.** If you pass CUI to a smaller shop, you are responsible for their compliance too. Written flow-down clauses and evidence collection belong in your vendor process.

## A twelve month path that actually finishes

**Months 1 and 2: scope and gap assessment.** Map CUI data flows, define the boundary, and score all 110 controls honestly. Post the initial SPRS score even if it is negative. A low honest score with a credible plan reads better to a prime than silence.

**Months 3 through 5: enclave and identity.** Move CUI into a defined enclave, whether that is GCC High, a separate Azure environment, or a virtual desktop. Enforce phishing-resistant MFA, least privilege, and unique accounts everywhere in the boundary.

**Months 6 through 8: endpoint, logging, and monitoring.** Managed EDR on every in-scope endpoint, centralized logging with the required retention, and documented review. This is where a 24/7 SOC does the work most small teams cannot staff.

**Months 9 and 10: documentation and evidence.** Finish the System Security Plan, write the required policies, and start collecting evidence artifacts continuously rather than reconstructing them the week before assessment.

## What it costs

Budget in three buckets. Remediation technology, typically fifteen to sixty thousand dollars for a twenty to fifty person contractor. Ongoing managed security and compliance support, commonly two to six thousand dollars per month. The C3PAO assessment itself, usually thirty to eighty thousand dollars depending on scope.

Scope discipline is what keeps these numbers reasonable. A contractor who confines CUI to a fifteen user enclave pays a fraction of one who leaves it spread across the whole company.

## Why local matters here

CMMC evidence collection is hands on. Device inventories, physical security controls, and media handling all require someone in the building. SecureMe247 works from 11890 Sunrise Valley Dr, Ste 540, minutes from Reston Town Center and the Wiehle-Reston East Metro, so on-site work happens the same week rather than the next quarter.

If you are staring at a flow-down clause with a deadline attached, start with a gap assessment. Call (703) 755-0014 and we will tell you honestly where you stand.

## Frequently Asked Questions

Does my Reston company need CMMC if we are only a subcontractor?

Yes. CMMC requirements flow down through the contract chain. If your prime handles Controlled Unclassified Information and passes any of it to you, your contract will carry the same level requirement. Many Reston subcontractors learn this when a prime requests their SPRS score during a recompete.

How long does CMMC Level 2 certification take?

For a company starting with no formal program, plan on nine to fifteen months from gap assessment to a completed third party assessment. Companies already running Microsoft 365 GCC High with managed endpoint protection and centralized logging can often reach assessment readiness in six to nine months.

Can we use commercial Microsoft 365 for CUI?

No. Storing or processing Controlled Unclassified Information generally requires Microsoft 365 GCC High or an equivalent environment that meets FedRAMP Moderate and DFARS 252.204-7012 requirements. Commercial tenants do not meet the data sovereignty and support screening requirements.

What is an SPRS score and why does it matter?

SPRS is the Supplier Performance Risk System where DoD contractors post their NIST SP 800-171 self-assessment score. Scores range from negative 203 to 110. Contracting officers and primes review it before award. An outdated or missing score is a common reason a bid gets set aside.

Do we need a C3PAO assessment or is self-assessment enough?

It depends on the contract. Level 1 and a subset of Level 2 contracts allow annual self-assessment. Most Level 2 contracts involving CUI require a certified third party assessment organization. Read the clause in your specific contract, because the requirement is set per award.