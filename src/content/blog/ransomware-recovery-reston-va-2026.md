A Reston law firm called us at 6:40 on a Tuesday morning. Every file on the network had been renamed, the accounting server was displaying a countdown, and the managing partner wanted to know whether to pay. The first hour of a ransomware incident decides most of what happens next.

This is what that hour should look like, what recovery actually takes, and the decisions Reston businesses get wrong under pressure.

## The first sixty minutes

**Isolate, do not power off.** Disconnect affected machines from the network by pulling the cable or disabling the wireless adapter. Powering off destroys memory-resident evidence and can corrupt partially encrypted files. Isolate, then leave them running.

**Protect the backups immediately.** Modern ransomware groups target backups before they encrypt anything, because unrecoverable victims pay more. Disconnect backup repositories from the network and verify that your immutable or offline copy is untouched.

**Disable the affected accounts.** Reset credentials for any account with suspicious activity, and revoke active sessions and tokens rather than just changing passwords.

**Start a written timeline.** Who saw what, at what time, from which machine. Insurers and regulators will ask, and reconstructing it from memory a week later is unreliable.

**Call your cyber insurance carrier before your lawyer or a vendor.** Most policies require notification within a defined window and require the use of approved incident response providers. Engaging the wrong firm first can jeopardize coverage.

## Should you pay

Sometimes it is legal, rarely is it a good outcome, and it is never a recovery plan.

Paying does not guarantee decryption. Decryptors supplied by attackers are frequently slow and imperfect, and restoring from clean backups is often faster than decrypting terabytes file by file. Payment also does not remove the data the attackers already exfiltrated, which is the leverage most modern groups actually rely on. Some payments to sanctioned entities carry legal exposure under OFAC rules, which matters especially for Reston government contractors.

The businesses that recover fastest are the ones that never seriously consider paying, because their backups are immutable and tested.

## What recovery really involves

Restoring files is one step of five.

1. **Containment.** Full scope of compromise established, attacker access removed. Restoring into a still-compromised network gets you encrypted twice.
2. **Forensics.** How they got in, how long they were present, what data left the building. This drives your legal notification obligations.
3. **Rebuild.** Domain controllers and any system where the attacker held administrative access get rebuilt, not cleaned. Credentials across the environment get rotated, including service accounts and the KRBTGT account.
4. **Restore.** Data returns from immutable backups, restored in priority order set by the business, not by IT convenience.
5. **Notification.** Virginia breach notification law, contractual obligations to primes and clients, and any sector regulation such as HIPAA.

Realistic timelines for a thirty to seventy person Reston business with tested backups: one to three days to core operations, one to two weeks to full restoration. Without tested backups, three to six weeks is common and some data never comes back.

## What actually prevents this

Every ransomware case we work traces back to one of four entry points, and each has a straightforward control.

**Stolen credentials without phishing-resistant MFA.** Passkeys or hardware keys for administrators, MFA on every remote access path including remote desktop and legacy protocols.

**Unpatched internet-facing systems.** VPN appliances, firewalls, and remote access gateways. Patch within days of a vendor advisory, not the next maintenance window.

**Email.** Advanced filtering, DMARC at enforcement, and quarterly phishing simulations that produce training rather than blame.

**Slow detection.** Attackers typically spend days inside a network before encrypting. A 24/7 SOC watching endpoint detection telemetry catches lateral movement while it is still preventable. This is the difference between an alert at 2am and a countdown timer at 6:40am.

Backups deserve their own rule. Follow 3-2-1-1-0: three copies, two media types, one offsite, one immutable or offline, and zero errors on a restore test you actually ran this quarter.

## Local response matters in an incident

Ransomware response involves physical work. Machines get imaged, clean hardware gets staged, and rebuild work happens in the building. SecureMe247 operates from 11890 Sunrise Valley Dr, Ste 540 in Reston, with on-site dispatch within four hours across the Dulles Corridor and a SOC running around the clock.

If you are in an active incident right now, call (703) 755-0014. If you are not, this is the right week to test a restore.

## Frequently Asked Questions

What should a Reston business do in the first hour of a ransomware attack?

Isolate affected systems from the network without powering them off, disconnect and verify your backups, disable compromised accounts and revoke their sessions, begin a written timeline of events, and notify your cyber insurance carrier before engaging any outside vendor, since most policies require approved responders.

How long does ransomware recovery take?

With tested immutable backups, core operations typically return within one to three days and full restoration within one to two weeks. Without reliable backups, recovery commonly stretches to three to six weeks, and some data is permanently lost.

Does cyber insurance cover ransomware in Virginia?

Most cyber liability policies cover incident response, forensics, business interruption, and in some cases ransom payment. Coverage increasingly depends on having specific controls in place, such as multifactor authentication, endpoint detection and response, and tested offline backups. Insurers do deny claims when attested controls were not actually in place.

Should we report a ransomware attack to law enforcement?

Yes. Report to the FBI's Internet Crime Complaint Center and coordinate with the Washington Field Office, which handles Northern Virginia. Reporting does not slow recovery, can occasionally provide decryption keys from prior takedowns, and is often expected by insurers and federal contract clauses.

How do we know our backups will survive an attack?

Only immutable or air-gapped backups reliably survive, because attackers actively delete accessible ones. Verify that your backup repository cannot be modified with domain credentials, that retention locks are enabled, and that you have performed a full restore test within the last ninety days. An untested backup is an assumption, not a recovery plan.