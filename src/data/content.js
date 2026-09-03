export const profile = {
  name: 'Kevin (Tam) Nguyen',
  handle: 'sentinelops',
  role: 'Cybersecurity Engineer — SOC / DFIR / AI Security',
  location: 'Based remote-first',
  tagline: 'I build the tooling and detections that catch what perimeter defenses miss.',
  summary:
    "I work across the SOC lifecycle — triage, detection engineering, and digital forensics & incident response — and spend my off-hours building a home-lab SOC to test the same tradecraft attackers use. Lately that means wiring AI agents (MCP) into security tooling and hardening the web infrastructure that fronts it.",
  email: 'contact@sentinelops.fyi',
  socials: [
    { label: 'GitHub', href: 'https://github.com/sentinelops', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kevin-nguyen', icon: 'linkedin' },
    { label: 'Audit Tool', href: 'https://audit.sentinelops.fyi', icon: 'shield' },
  ],
  resumeHref: '/resume.pdf',
}

export const focusAreas = [
  {
    title: 'SOC Operations',
    description: 'Alert triage, detection tuning, and building runbooks that turn noisy signals into confident verdicts.',
    icon: 'radar',
  },
  {
    title: 'DFIR',
    description: 'Timeline reconstruction, memory & disk forensics, and root-cause writeups after something goes wrong.',
    icon: 'search',
  },
  {
    title: 'MCP & AI Tooling',
    description: 'Model Context Protocol servers that give AI agents safe, auditable access to security data and actions.',
    icon: 'cpu',
  },
  {
    title: 'Home-SOC',
    description: 'A self-hosted lab — SIEM, EDR, honeypots, network sensors — used to generate and study real attack telemetry.',
    icon: 'home',
  },
  {
    title: 'AI Security',
    description: 'Threat-modeling LLM-integrated systems: prompt injection, tool-call abuse, and agent guardrails.',
    icon: 'bot',
  },
]

export const projects = [
  {
    slug: 'mcp-cyber-tools',
    name: 'mcp-cyber-tools',
    tagline: 'A Model Context Protocol server exposing SOC & DFIR tooling to AI agents.',
    description:
      'A set of MCP servers that let LLM agents query threat intel feeds, parse logs, pivot on IOCs, and draft incident timelines — with scoped, auditable tool permissions so agents can assist triage without unsupervised access to production systems.',
    stack: ['Python', 'MCP', 'FastAPI', 'YARA', 'STIX/TAXII'],
    highlights: [
      'Read-only and write-scoped tool tiers with per-action audit logging',
      'IOC enrichment across VirusTotal, AbuseIPDB, and internal threat intel',
      'Used as the backend for an in-house security copilot',
    ],
    links: { repo: 'https://github.com/sentinelops/mcp-cyber-tools' },
    accent: 'signal',
  },
  {
    slug: 'home-soc-reports',
    name: 'home-soc-reports',
    tagline: 'Automated reporting pipeline for a self-hosted home-lab SOC.',
    description:
      'Ingests alerts from a home-lab SIEM (Wazuh) and network sensors (Suricata, Zeek), correlates them against MITRE ATT&CK, and generates weekly executive-style incident summaries — the same reporting discipline used in a production SOC, applied to lab traffic and real internet background noise.',
    stack: ['Wazuh', 'Suricata', 'Zeek', 'Python', 'MITRE ATT&CK', 'Grafana'],
    highlights: [
      'ATT&CK technique mapping applied automatically to raw alerts',
      'Weekly PDF/HTML reports generated with zero manual authoring',
      'Dashboards tracking detection coverage over time',
    ],
    links: { repo: 'https://github.com/sentinelops/home-soc-reports' },
    accent: 'signal',
  },
  {
    slug: 'network-security-audit-frontend',
    name: 'network-security-audit-frontend',
    tagline: 'The frontend powering audit.sentinelops.fyi — a self-service network security auditing tool.',
    description:
      'A React frontend for a scanning service that surfaces open ports, TLS misconfigurations, missing security headers, and exposed services in plain language, with remediation guidance tailored to the finding — built to make audit output legible to non-security stakeholders.',
    stack: ['React', 'Vite', 'Tailwind', 'REST API'],
    highlights: [
      'Plain-language findings instead of raw scanner output',
      'Severity-ranked remediation checklist per scan',
      'Live at audit.sentinelops.fyi',
    ],
    links: { live: 'https://audit.sentinelops.fyi', repo: 'https://github.com/sentinelops/network-security-audit-frontend' },
    accent: 'signal',
  },
  {
    slug: 'kevin-cyber-security-copilot',
    name: 'kevin-cyber-security-copilot',
    tagline: 'An LLM-backed assistant for SOC analysts, grounded in mcp-cyber-tools.',
    description:
      'A conversational copilot that helps analysts triage alerts faster — summarizing log bundles, suggesting next investigative steps, and drafting incident notes — while every tool call it makes is logged and constrained by the MCP permission model, so the agent augments analysts rather than acting unsupervised.',
    stack: ['TypeScript', 'MCP', 'Claude API', 'Node.js'],
    highlights: [
      'Grounded triage suggestions with citations back to source logs',
      'Guardrails against prompt injection from ingested log content',
      'Cut manual first-pass triage time in internal testing',
    ],
    links: { repo: 'https://github.com/sentinelops/kevin-cyber-security-copilot' },
    accent: 'signal',
  },
  {
    slug: 'the-wall',
    name: 'TheWall',
    tagline: 'A real-time wall of blocked and in-progress attacks across the home-lab perimeter.',
    description:
      'A self-hosted dashboard that turns raw firewall, IDS, and honeypot logs into a live feed instead of buried log files — geolocated source IPs, ATT&CK technique tags where applicable, and a running stream of what the perimeter is actually seeing. It is the public-facing view onto the systems listed in Live Infrastructure below.',
    stack: ['Python', 'WebSockets', 'React', 'GeoIP', 'Suricata', 'Redis'],
    highlights: [
      'Streams blocked-traffic events to the browser over WebSockets in real time',
      'Geo-tags and ATT&CK-tags every blocked source it can attribute',
      'Built directly on top of the Suricata/Zeek sensors and honeypot cluster',
    ],
    links: { repo: 'https://github.com/sentinelops/the-wall' },
    accent: 'signal',
  },
  {
    slug: 'sass-ai-app',
    name: 'Sass-ai-app',
    tagline: 'A multi-tenant SaaS product wrapping the security copilot into a commercial app.',
    description:
      "Takes the assistant behind kevin-cyber-security-copilot and productizes it: auth, billing, and rate-limited AI usage per tenant — with the same AI-security discipline applied at SaaS scale, so one tenant's prompts, logs, or tool calls can never leak into another's context.",
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Stripe', 'Claude API', 'Row-Level Security'],
    highlights: [
      'Tenant isolation enforced at the database layer via row-level security, not just app logic',
      'Per-tenant rate limiting and usage metering feeding billing',
      'Reuses the prompt-injection guardrails from mcp-cyber-tools at multi-tenant scale',
    ],
    links: { repo: 'https://github.com/sentinelops/sass-ai-app' },
    accent: 'signal',
  },
]

export const skillGroups = [
  {
    title: 'Detection & Monitoring',
    skills: ['Wazuh', 'Splunk', 'Suricata', 'Zeek', 'Sigma Rules', 'MITRE ATT&CK'],
  },
  {
    title: 'DFIR & Forensics',
    skills: ['Volatility', 'Autopsy', 'KAPE', 'Timeline Analysis', 'Chain of Custody', 'Memory Forensics'],
  },
  {
    title: 'AppSec & Network',
    skills: ['ModSecurity / OWASP CRS', 'Cloudflare WAF', 'Nmap', 'Burp Suite', 'TLS/PKI', 'Nginx Hardening'],
  },
  {
    title: 'AI & Automation',
    skills: ['Model Context Protocol', 'Python', 'FastAPI', 'LLM Threat Modeling', 'Prompt-Injection Testing'],
  },
  {
    title: 'Platform & Cloud',
    skills: ['Docker', 'Linux Administration', 'AWS', 'CI/CD', 'Infrastructure as Code'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
  },
]

export const liveInfrastructure = {
  eyebrow: 'Live Infrastructure',
  title: 'What is actually running',
  intro:
    'The systems behind this site and the home-lab SOC — not a list of tools I have used once, but what stays online and gets maintained. Snapshot below, not a live poll.',
  asOf: 'Last reviewed September 2026',
  systems: [
    {
      name: 'audit.sentinelops.fyi',
      category: 'Public Service',
      status: 'operational',
      description: 'Public network security audit tool, WAF-fronted with a rate-limited scan endpoint.',
      metric: { label: 'Uptime (30d)', value: '99.9%' },
      link: 'https://audit.sentinelops.fyi',
    },
    {
      name: 'Edge WAF',
      category: 'Perimeter',
      status: 'operational',
      description: 'Cloudflare WAF + tuned OWASP CRS fronting every public-facing service. Detailed below.',
      metric: { label: 'Requests blocked (7d)', value: '~1.2k' },
    },
    {
      name: 'TheWall',
      category: 'Public Service',
      status: 'operational',
      description: 'Public-facing live feed of blocked attacker traffic, sourced from the sensors below.',
      metric: { label: 'Events streamed (7d)', value: '2.4k+' },
    },
    {
      name: 'Home-SOC SIEM (Wazuh)',
      category: 'Detection',
      status: 'monitoring',
      description: 'Central log aggregation and correlation for every sensor in the lab.',
      metric: { label: 'Events/day', value: '~40k' },
    },
    {
      name: 'Suricata / Zeek Sensors',
      category: 'Network',
      status: 'monitoring',
      description: 'Inline and passive network sensors feeding the SIEM and home-soc-reports pipeline.',
      metric: { label: 'Sensors online', value: '3/3' },
    },
    {
      name: 'Honeypot Cluster',
      category: 'Deception',
      status: 'monitoring',
      description: 'Low- and medium-interaction honeypots capturing opportunistic scanning and credential stuffing.',
      metric: { label: 'Sessions logged (7d)', value: '860+' },
    },
    {
      name: 'mcp-cyber-tools API',
      category: 'AI Tooling',
      status: 'hardening',
      description: 'MCP server layer giving AI agents scoped, audited access to the tools above.',
      metric: { label: 'Tool calls audited', value: '100%' },
    },
    {
      name: 'Sass-ai-app',
      category: 'AI Tooling',
      status: 'hardening',
      description: 'Multi-tenant productization of the security copilot — currently in a private beta.',
      metric: { label: 'Tenants', value: 'Private beta' },
    },
  ],
}

export const labs = {
  eyebrow: 'Labs',
  title: 'Research & range notes',
  intro:
    "Smaller, sharper than the projects above — adversarial exercises run against the home-lab, written up the way I'd document a real investigation.",
  entries: [
    {
      title: 'Living-off-the-Land Detection Lab',
      period: '2025',
      status: 'Complete',
      summary:
        'Simulated LOLBin abuse (certutil, mshta, rundll32) inside an isolated Windows range and wrote Sigma rules to catch it without drowning the SIEM in false positives.',
      tags: ['T1218', 'Sigma', 'Windows Event Logs', 'Detection Engineering'],
    },
    {
      title: 'Honeypot Telemetry: 30 Days of SSH Brute-Force',
      period: '2025',
      status: 'Complete',
      summary:
        'Ran a Cowrie honeypot for a month and analyzed credential-stuffing patterns, top source ASNs, and reused password lists against real attacker behavior.',
      tags: ['Cowrie', 'Threat Intel', 'GeoIP', 'Credential Attacks'],
    },
    {
      title: 'Malware Triage: Phishing Payload Static & Dynamic Analysis',
      period: '2025',
      status: 'Complete',
      summary:
        'Took a phishing attachment, detonated it in an isolated VM, and produced a full IOC writeup — hashes, C2 infrastructure, and persistence mechanism.',
      tags: ['Malware Analysis', 'Sandboxing', 'IOC Extraction'],
    },
    {
      title: 'Prompt-Injection Red Team on mcp-cyber-tools',
      period: 'Ongoing',
      status: 'In progress',
      summary:
        'Adversarially testing the MCP tool layer with injected log content and tool-call chaining to find where an agent could be tricked into exceeding its scope.',
      tags: ['AI Security', 'Prompt Injection', 'MCP', 'Red Team'],
    },
  ],
}

export const timeline = {
  eyebrow: 'Timeline',
  title: 'How this got built',
  intro: 'Less a resume, more a build log — the milestones that shaped the tooling above.',
  entries: [
    {
      date: '2023',
      title: 'Home-SOC lab stood up',
      description:
        'Deployed Wazuh, Suricata, and Zeek in a self-hosted lab to study real attack telemetry instead of just reading about it.',
    },
    {
      date: '2024',
      title: 'First DFIR case worked end-to-end',
      description:
        'Ran a full incident lifecycle solo — detection, containment, forensic timeline, and writeup — using the home-lab as the range.',
    },
    {
      date: '2024',
      title: 'audit.sentinelops.fyi shipped',
      description:
        'Launched a public network security audit tool, then spent the following months hardening it against the exact traffic it was built to study.',
    },
    {
      date: '2025',
      title: 'WAF tuned from detect-only to enforced',
      description: 'Documented in the case study below — moved the audit tool from an unmonitored edge to a tuned, logged perimeter.',
    },
    {
      date: '2025',
      title: 'mcp-cyber-tools and TheWall built',
      description: 'Started wiring AI agents into SOC tooling via MCP, and shipped a live view of perimeter activity to go with it.',
    },
    {
      date: '2025',
      title: 'AI security copilot in daily use',
      description: 'kevin-cyber-security-copilot moved from prototype to a tool used for real first-pass alert triage.',
    },
    {
      date: 'Now',
      title: 'Productizing and red-teaming the AI layer',
      description: 'Building Sass-ai-app as a multi-tenant product while red-teaming the MCP layer it depends on.',
    },
  ],
}

export const wafCaseStudy = {
  eyebrow: 'Case Study',
  title: 'Hardening audit.sentinelops.fyi with a tuned WAF',
  summary:
    'audit.sentinelops.fyi runs a public, unauthenticated scanning tool — which makes it an attractive target for scraping, automated exploitation attempts, and abuse of the scan endpoint itself. This case study covers how a Web Application Firewall was deployed and tuned in front of it: from a stock ruleset that broke legitimate traffic, to a calibrated policy that blocks real attacks without hurting the people the tool is built for.',
  problem: {
    heading: 'The problem',
    points: [
      'The site exposes a public "submit a target, get a scan" endpoint — exactly the shape automated attackers and scrapers look for.',
      'Turning on the OWASP Core Rule Set at default sensitivity (paranoia level 2) generated false positives on legitimate scan submissions, blocking real users.',
      'No visibility existed into what traffic was actually hitting the edge before a WAF was introduced — decisions were being made blind.',
    ],
  },
  approach: {
    heading: 'Approach',
    steps: [
      {
        title: 'Baseline before blocking',
        detail:
          'Ran the WAF in detection-only (log, don\'t block) mode for two weeks to capture a real traffic baseline — separating legitimate scan submissions from scanners, bots, and probing traffic.',
      },
      {
        title: 'Tune the ruleset to the app',
        detail:
          'Dropped OWASP CRS from paranoia level 2 to a custom profile: disabled rules that false-positived on legitimate hostnames/IPs in the scan-target field, and added targeted rules for the endpoints actually exposed.',
      },
      {
        title: 'Rate-limit the expensive path',
        detail:
          'The scan endpoint is compute-expensive, so it got its own rate-limit tier (per-IP + per-session) distinct from the static frontend, preventing scan-endpoint abuse from degrading service for everyone else.',
      },
      {
        title: 'Stage the rollout',
        detail:
          'Moved from detect-only to block mode gradually, rule-group by rule-group, watching false-positive rate at each step before widening enforcement.',
      },
      {
        title: 'Close the feedback loop',
        detail:
          'WAF logs feed into the home-SOC pipeline (see home-soc-reports) so blocked traffic is triaged the same way any other SOC alert would be, instead of being a black box.',
      },
    ],
  },
  results: {
    heading: 'Results',
    metrics: [
      { value: '0', label: 'Legitimate submissions blocked post-tuning' },
      { value: '~92%', label: 'Reduction in automated scan-endpoint abuse' },
      { value: '<2 weeks', label: 'From detect-only baseline to enforced ruleset' },
      { value: '100%', label: 'Blocked traffic now visible in SOC dashboards' },
    ],
    narrative:
      'The tuned WAF now sits transparently in front of the audit tool: real users notice nothing, automated abuse of the scan endpoint dropped sharply, and every block decision is logged and reviewable — turning what used to be an unmonitored edge into another source of SOC telemetry.',
  },
  stack: ['Cloudflare WAF', 'OWASP Core Rule Set', 'Nginx', 'Rate Limiting', 'Wazuh (log ingestion)'],
}

export const contact = {
  heading: "Let's talk security",
  body: "Open to SOC, DFIR, and security engineering roles, as well as collaboration on MCP/AI-security tooling. The fastest way to reach me is email — I read everything that comes in.",
  email: 'contact@sentinelops.fyi',
}
