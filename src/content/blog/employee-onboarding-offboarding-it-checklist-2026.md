Ask most businesses how they offboard an employee and you get a shrug and a mention of disabling the email account. Then a departed salesperson still has the CRM on a personal phone, a contractor's VPN certificate stays valid for two years, and the file share nobody audited holds a folder owned by someone who left in 2023.

Onboarding and offboarding are where IT hygiene either holds or quietly collapses. This is the checklist we run for clients, plus the parts that usually go wrong.

## Why this process is a security control, not paperwork

Former employee accounts are among the most reliable ways into a business. They are rarely monitored, often still hold privileged access, and nobody notices unusual behavior because nobody expects any behavior at all. The same account often skips MFA enforcement because it predates the policy.

The onboarding side matters just as much. Access granted by copying another employee's permissions is how one person ends up with the combined rights of three roles, none of which they need. Do this for four years and your least privileged principle is fiction.

## Before day one: the pre-arrival checklist

Kick this off the moment the offer is signed, not the morning the person walks in.

- **Confirm role, department, manager, and start date in writing.** Access is derived from role, so an ambiguous role means guesswork.
- **Assign a hardware profile.** Laptop specification, monitor, dock, headset, and phone if applicable. Order early since supply timelines still slip.
- **Enroll the device before shipping.** Autopilot, Intune, or your MDM should own the machine before it leaves your hands. Disk encryption, EDR agent, patch policy, and browser configuration all applied.
- **Create the account from a role template.** Group based licensing and group based access, never a copy of an existing user.
- **Prepare the credential.** A temporary access pass or first login passkey registration flow, not a password sent over text message.
- **Stage the mailbox and calendar.** Signature block, distribution lists, shared calendars, and the correct display name.
- **Draft the first week access list.** Anything beyond the role baseline gets a named approver and a written reason.

## Day one and week one

Day one is about a working device and a person who knows who to call. Week one is about training and verification.

1. **Guided first login.** Passkey or MFA registration completed with a human present, so it is done correctly and once.
2. **Security orientation in under 30 minutes.** How to report a suspicious email, how the help desk reaches out, what the company will never ask for by phone, and where data is allowed to live.
3. **Acceptable use and data handling acknowledgment.** Signed and stored, because you will need it later.
4. **Application walkthrough.** Line of business systems, file locations, and the ticket process.
5. **Day five access review.** Confirm what they actually needed versus what was provisioned. Remove the excess now while it is easy.

## During employment: the part with no owner

Most access sprawl accumulates between onboarding and offboarding, during role changes.

- **Treat a promotion or transfer as an offboard plus an onboard.** Remove the old role's access before adding the new. Additive only role changes are the root cause of overprivileged accounts.
- **Run a quarterly access review.** Managers certify who on their team has access to what. Fifteen minutes per manager per quarter is enough.
- **Recertify privileged access monthly.** Domain admins, global admins, financial system approvers, and anyone who can move money or change permissions.
- **Track hardware continuously.** Assets assigned but not seen by your management console in 30 days need an explanation.

## Offboarding: the first four hours matter most

For a planned departure, run these steps at the effective time. For a termination, run them during the conversation, not after.

**Immediate, within the first hour**

1. Disable the account, do not delete it. Deleting destroys evidence and orphan permissions.
2. Revoke all active sessions and refresh tokens. Disabling an account leaves live sessions working for hours otherwise.
3. Reset the password and remove registered MFA methods and passkeys.
4. Remove from VPN, remote access, and any conditional access exception groups.
5. Suspend building access, phone extension, and voicemail.

**Same day**

6. Convert the mailbox to shared or delegate it to the manager, and set an internal forwarding rule with a defined end date.
7. Transfer file and document ownership. OneDrive and personal Google Drive contents move to the manager before any retention timer starts.
8. Reassign licenses once data is transferred, not before.
9. Rotate any shared or service credentials the person knew. This is the step most often skipped and the one that matters most.
10. Remove from SaaS applications outside your identity provider. Every business has a handful, and they are invisible to automated deprovisioning.

**Within one week**

11. Collect and wipe hardware. Verify the device checked in and confirm the remote wipe or reimage completed.
12. Remove from distribution lists, shared mailboxes, ticket queues, and on call rotations.
13. Update documentation, vendor contacts, and any account listed with them as the technical contact.
14. Confirm the exit checklist is signed off and archived. Auditors ask for exactly this.

## Special cases people get wrong

**Contractors and temporary staff.** Set an account expiration date at creation. If the engagement extends, extend the date deliberately. Never leave an open ended contractor account.

**Departures where the person had admin rights.** Assume knowledge of shared credentials. Rotate service accounts, break glass accounts, network device passwords, and any API keys they could reach. Review their recent activity logs before disabling, since disabling first can complicate the log picture.

**Leadership and finance roles.** Coordinate with your bank, payment platforms, and vendors. Wire fraud attempts frequently follow a known finance departure, because the attacker knows the process is in flux.

**Long leave and sabbatical.** Disable rather than leave dormant. An unused active account is a target, and reenabling takes two minutes.

## Automate what you can, document the rest

The realistic automation target for a mid sized business is HR system to identity provider synchronization driving group membership, licensing, and disablement. That covers the bulk of provisioning and the critical first hour of offboarding.

What stays manual is the judgment: shadow SaaS applications, shared credential rotation, hardware collection, and data ownership transfer. Write those as a numbered runbook with a named owner for each step and a place to record completion. A runbook nobody signs is a suggestion.

Measure two numbers. Time from departure to full deprovisioning, which should be under four hours. And orphaned accounts found per quarterly review, which should trend toward zero.

## Frequently Asked Questions

### How fast should an account be disabled after someone leaves?

Immediately at the effective termination time, and simultaneously with the conversation for involuntary departures. Session revocation must happen alongside disablement, otherwise existing tokens keep working for hours on some platforms.

### Should we delete or keep a former employee's account?

Disable and retain it for the length of your retention policy, commonly 30 to 90 days, then convert the mailbox to shared and remove the license. Deleting immediately destroys audit evidence, breaks shared file permissions, and can cause problems in litigation or an insurance claim.

### What is the most commonly missed offboarding step?

Rotating shared and service credentials the person had access to. Second place goes to SaaS applications purchased by a department outside IT, which never appear in automated deprovisioning because the identity provider does not know they exist.

### Do small businesses really need a formal process for this?

Yes, and arguably more so, because small teams rely on informal knowledge that disappears with the person. A one page checklist with named owners removes the risk without adding bureaucracy, and it is the first document a cyber insurer or auditor asks to see.

### Can a managed IT provider handle onboarding and offboarding for us?

That is a standard part of a managed service. HR sends a form or the request comes through a ticket, and provisioning or deprovisioning runs against a documented checklist with a completion record. Most clients see day one readiness improve and offboarding time drop from days to hours.

SecureMe247 manages employee lifecycle IT for businesses across Northern Virginia, including Reston, Herndon, McLean, and Tysons. If you are not sure how many former employee accounts are still active in your environment, that audit is a short engagement and usually an eye opener.
