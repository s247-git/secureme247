Someone can send email that says it is from your CEO right now, from a laptop anywhere in the world, and your customers' inboxes will show your company name. That is not a vulnerability in your mail server. It is how SMTP has worked since 1982. DMARC is the layer that fixes it, and most businesses have it configured in a way that does exactly nothing.

Here is how email authentication actually works, how to reach enforcement without losing legitimate mail, and how to read the reports once you get there.

## The three records and what each one does

**SPF** publishes which servers may send mail for your domain. A receiving server checks the sending IP against your SPF record. It authenticates the envelope sender, which is not the address the recipient sees, and it breaks when mail is forwarded.

**DKIM** attaches a cryptographic signature to the message, verified against a public key in your DNS. It proves the message was sent by an authorized system and was not modified in transit. It survives forwarding in most cases.

**DMARC** ties SPF and DKIM to the visible From address through a concept called alignment, tells receivers what to do when neither passes, and, critically, sends you reports about who is sending mail as your domain.

Without DMARC, SPF and DKIM are two locks with no instructions about what to do when the key does not fit. Receivers guess, and most guess in favor of delivery.

## Alignment is the part that trips people up

A message passes DMARC when SPF or DKIM passes and the authenticated domain aligns with the domain in the visible From header.

This is why a marketing platform can pass SPF and still fail DMARC. Their servers are authorized under their own domain, but the recipient sees yours. The fix is either DKIM signing with your domain, using a subdomain you delegate, or a custom return path. Every serious platform supports at least one of these, and the setup is usually a handful of DNS records they generate for you.

## Reaching p=reject without breaking mail

Enforcement is the goal. Getting there carelessly bounces your own invoices, so work in stages.

**Stage 1: monitor.** Publish a DMARC record at policy none with a reporting address:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com; fo=1
```

This changes nothing about delivery. It starts the flow of aggregate reports from Google, Microsoft, Yahoo, and others.

**Stage 2: inventory, two to four weeks.** Reports arrive as XML, so use a DMARC reporting service to make them readable. Build a list of every source sending as your domain. Expect surprises: the payroll provider, the appointment reminder tool, the ticketing system, an old marketing platform nobody canceled, and a copier that emails scans.

**Stage 3: authenticate every legitimate source.** For each one, get DKIM signing aligned to your domain and add it to SPF if needed. Keep SPF under the ten DNS lookup limit, because exceeding it makes the record fail entirely. Use subdomains for bulk and transactional mail so your corporate domain reputation stays separate.

**Stage 4: quarantine at a percentage.** Move to p=quarantine with pct=25, watch reports for a week, then 50, then 100. This is where you catch the source you missed without sending everything to junk at once.

**Stage 5: reject.** Publish p=reject. Unauthenticated mail claiming your domain is refused outright rather than landing in a junk folder where a curious employee can still find it.

Most organizations complete this in six to ten weeks. The pace is set by how many sending systems you have and how quickly vendors respond.

## What to publish alongside DMARC

- **A restrictive SPF record ending in -all,** not ~all, once you are confident in the inventory.
- **DKIM with 2048 bit keys,** rotated at least annually.
- **A null SPF and DMARC reject on domains you never send from,** including parked domains and lookalike domains you registered defensively. Attackers love an unprotected parked domain.
- **MTA-STS and TLS-RPT** to require encrypted delivery and get reports on failures.
- **BIMI, once at p=reject,** which displays your verified logo in supporting inboxes. It is a trust signal customers notice, and it requires a verified mark certificate.

## Reading aggregate reports without drowning

Aggregate reports answer three questions per sending source: how many messages, did they pass, and did they align.

- **Passing and aligned:** legitimate, correctly configured, no action.
- **Failing but recognizable:** your own system missing DKIM or SPF. Fix the configuration.
- **Failing and unrecognized:** either shadow IT that bought a tool without telling anyone, or an actual spoofing attempt. Both are worth knowing about.
- **Volume spikes from unfamiliar IP space:** a spoofing campaign in progress, and the strongest argument for finishing enforcement.

Forwarded mail routinely fails SPF and passes DKIM. Mailing lists often break both. Neither means your setup is wrong, which is why you read the pattern rather than reacting to individual failures.

## Mistakes that keep domains stuck at p=none

- **Publishing p=none and calling it done.** Policy none provides visibility only. Roughly half the domains with DMARC records never move past it, which means they get reports nobody reads and zero protection.
- **Multiple SPF records.** Only one TXT record starting with v=spf1 is allowed. Two records mean permanent failure. Merge them.
- **Blowing the ten lookup limit.** Every include costs lookups. Flatten or consolidate senders.
- **Forgetting subdomains.** Without an sp policy, subdomain handling inherits the domain policy, and attackers target subdomains specifically. Set sp=reject explicitly.
- **No monitoring after enforcement.** New vendors get added constantly. Keep the reporting flow alive and review it monthly, or your next marketing tool will silently fail.
- **Ignoring the parked domains.** They have no mail flow and no protection, which makes them the easiest spoofing target you own.

## What this actually prevents

DMARC at enforcement stops exact domain spoofing, the attack where a fake invoice or a wire request appears to come from your own domain. That is a meaningful chunk of business email compromise attempts.

It does not stop lookalike domains, display name spoofing from a free mail account, or a genuine compromise of one of your accounts. Those need mailbox monitoring, phishing-resistant MFA, and user training. DMARC removes the easiest path, then the remaining attacks get harder and more visible.

Google and Yahoo now require DMARC for bulk senders, and enforcement thresholds keep tightening. Deliverability alone justifies the project even before you count the fraud prevention.

## Frequently Asked Questions

### How long does it take to get to DMARC enforcement?

Six to ten weeks for a typical business with five to fifteen sending systems. The technical DNS changes take minutes. The time is spent inventorying senders from reports and waiting on vendors to configure aligned DKIM signing.

### Will DMARC stop all phishing against my company?

No. It stops mail that forges your exact domain, which is a significant category, particularly for invoice fraud and wire requests aimed at your customers and partners. It does not stop lookalike domains, free mail accounts using your executive's display name, or a compromised legitimate mailbox.

### What happens if I publish p=reject too early?

Legitimate mail from any source you have not authenticated gets rejected outright. That can mean invoices, appointment reminders, or password resets silently failing. This is why the staged rollout through monitoring and percentage based quarantine exists.

### Do I need DMARC if I use Microsoft 365 or Google Workspace?

Yes. Both platforms handle DKIM signing for mail sent through them, but neither publishes a DMARC policy for you, and neither covers the third party systems sending as your domain. Without a DMARC record, anyone can still forge your From address.

### Is DMARC required for compliance?

It is referenced in CMMC and NIST guidance, expected under many cyber insurance questionnaires, and effectively mandatory for bulk senders under Google and Yahoo requirements. Even where it is not named explicitly, auditors treat email authentication as a baseline control.

SecureMe247 takes businesses across Northern Virginia from unprotected domains to full DMARC enforcement, including Reston, Herndon, Arlington, and Alexandria. If you want to see who is currently sending mail as your domain, a monitoring record and two weeks of reports will tell you, with no risk to delivery.
