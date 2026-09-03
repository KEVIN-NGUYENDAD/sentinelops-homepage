const GITHUB_PROFILE = 'https://github.com/KEVIN-NGUYENDAD'

export const profile = {
  name: 'Kevin (Tam) Nguyen',
  handle: 'sentinelops',
  role: 'Cybersecurity Student | SOC | DFIR | AI Security',
  location: 'Based remote-first',
  tagline: 'I build the SOC tooling, detections, and AI-security guardrails I want to work with on a real team.',
  summary:
    "I'm a cybersecurity student focused on SOC operations, DFIR, and AI security, and I learn by building rather than just studying. That means running a self-hosted home-SOC to practice detection engineering and incident response against real traffic, and developing MCP tooling that gives AI agents safe, auditable access to security data — hands-on work, not classroom simulations.",
  email: 'contact@sentinelops.fyi',
  socials: [
    { label: 'GitHub', href: GITHUB_PROFILE, icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kevin-nguyen', icon: 'linkedin' },
    { label: 'Audit Tool', href: 'https://audit.sentinelops.fyi', icon: 'shield' },
  ],
  resumeHref: '/resume.pdf',
}

export const focusAreas = [
  {
    title: 'SOC Operations',
    description: 'Alert triage and detection tuning, practiced hands-on against real home-SOC traffic — building the runbooks I\'d want on a real team.',
    icon: 'radar',
  },
  {
    title: 'DFIR',
    description: 'Timeline reconstruction, memory & disk forensics, and root-cause writeups, run end-to-end in the home-lab.',
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
    links: { repo: GITHUB_PROFILE },
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
    links: { repo: GITHUB_PROFILE },
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
    links: { live: 'https://audit.sentinelops.fyi', repo: GITHUB_PROFILE },
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
    links: { repo: GITHUB_PROFILE },
    accent: 'signal',
  },
  {
    slug: 'the-wall',
    name: 'TheWall',
    tagline: 'A security visualization and attack-monitoring platform for the home-lab perimeter.',
    description:
      'A self-hosted visualization platform that turns raw firewall, IDS, and honeypot logs into a live, browser-based view of the perimeter — geolocated source IPs, MITRE ATT&CK technique tags where applicable, and a running stream of blocked and in-progress activity, so attack surface is something you can watch instead of grep through.',
    stack: ['Python', 'WebSockets', 'React', 'GeoIP', 'Suricata', 'Redis'],
    highlights: [
      'Streams blocked-traffic events to the browser over WebSockets in real time',
      'Geo-tags and ATT&CK-tags every blocked source it can attribute',
      'Built directly on top of the Suricata/Zeek sensors and honeypot cluster',
    ],
    links: { repo: GITHUB_PROFILE },
    accent: 'signal',
  },
  {
    slug: 'sass-ai-app',
    name: 'Sass-ai-app',
    tagline: 'A multi-tenant SaaS platform for AI agents that handle recurring check-in and automation workflows.',
    description:
      'A multi-tenant SaaS built around AI agents that run scheduled check-in workflows — status pings, follow-ups, and light automation — for each tenant. Explores the SaaS side of AI security: tenant isolation, auth, billing, and per-tenant rate-limited agent usage, so one tenant\'s agent context, prompts, or automations can never leak into another\'s.',
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Stripe', 'Claude API', 'Row-Level Security'],
    highlights: [
      'AI agents run per-tenant scheduled check-in and automation workflows',
      'Tenant isolation enforced at the database layer via row-level security, not just app logic',
      'Per-tenant rate limiting and usage metering feeding billing',
    ],
    links: { repo: GITHUB_PROFILE },
    accent: 'signal',
  },
]

export const mcpPortal = {
  eyebrow: 'MCP Portal',
  title: 'MCP Portal',
  subtitle: 'Model Context Protocol Security, AI Agents, SOC Automation, and DFIR Tooling',
  overview:
    'MCP Portal is the hub for everything built on the Model Context Protocol at SentinelOps — the layer that gives AI agents scoped, auditable access to SOC and DFIR tooling instead of unrestricted access to production systems. It centers on mcp-cyber-tools, the MCP server implementation behind kevin-cyber-security-copilot and Sass-ai-app.',
  capabilities: {
    heading: 'Featured Capabilities',
    items: [
      {
        title: 'Threat Intel Enrichment',
        description: 'Scoped MCP tools query VirusTotal, AbuseIPDB, and internal threat intel to enrich IOCs on demand.',
        icon: 'search',
      },
      {
        title: 'Log Parsing & Triage',
        description: 'Agents parse and summarize log bundles to speed up first-pass SOC triage.',
        icon: 'terminal',
      },
      {
        title: 'IOC Pivoting',
        description: 'Pivot across indicators of compromise to build investigation context for an analyst to review.',
        icon: 'radar',
      },
      {
        title: 'Audited Tool Access',
        description: 'Every tool call is scoped to a permission tier and logged — no unsupervised write access to production systems.',
        icon: 'shield',
      },
      {
        title: 'Incident Timeline Drafting',
        description: 'Agents draft DFIR timelines from raw event data for an analyst to verify and finalize.',
        icon: 'clock',
      },
      {
        title: 'Prompt-Injection Guardrails',
        description: 'Defenses validated through an ongoing red-team exercise — see the Labs section below.',
        icon: 'bot',
      },
    ],
  },
  architecture: {
    heading: 'Architecture',
    flow: ['AI Agent', 'MCP Server (mcp-cyber-tools)', 'SOC & DFIR Data Sources'],
    note: 'AI agents never touch SOC systems directly — every request passes through scoped, audited MCP tool tiers.',
  },
  repository: {
    heading: 'GitHub Repository',
    name: 'mcp-cyber-tools',
    url: 'https://github.com/KEVIN-NGUYENDAD/mcp-cyber-tools',
    description: 'Source for the MCP server layer described above.',
  },
  roadmap: {
    heading: 'Roadmap',
    items: [
      'Expand IOC enrichment to additional threat intel sources',
      'Add write-scoped response actions with human-in-the-loop approval',
      'Formalize the prompt-injection test suite from the Labs section',
      'Publish API documentation for the MCP tool schema',
    ],
  },
  status: {
    heading: 'Project Status',
    label: 'Active Development',
    note: 'Under active development as the AI-agent layer for the rest of the SentinelOps tooling.',
  },
}

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
    skills: ['VNetwork WAAP', 'ModSecurity / OWASP CRS', 'Nmap', 'Burp Suite', 'TLS/PKI', 'Nginx Hardening'],
  },
  {
    title: 'AI & Automation',
    skills: ['Model Context Protocol', 'Python', 'FastAPI', 'LLM Threat Modeling', 'Prompt-Injection Testing'],
  },
  {
    title: 'Platform & Cloud',
    skills: ['Docker', 'Linux Administration', 'Render', 'AWS', 'CI/CD', 'Infrastructure as Code'],
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
      description: 'Public network security audit tool, hosted on Render behind VNetwork WAAP with a rate-limited scan endpoint.',
      metric: { label: 'Uptime (30d)', value: '99.9%' },
      link: 'https://audit.sentinelops.fyi',
    },
    {
      name: 'VNetwork WAAP',
      category: 'Perimeter',
      status: 'operational',
      description: 'Managed SSL and custom WAF rules fronting every public-facing service before it reaches the Render origin. Detailed below.',
      metric: { label: 'Requests blocked (7d)', value: '~1.2k' },
    },
    {
      name: 'TheWall',
      category: 'Public Service',
      status: 'operational',
      description: 'Public-facing visualization of blocked attacker traffic, sourced from the sensors below.',
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
      description: 'Multi-tenant AI agent platform for check-in workflows and automation — currently in a private beta.',
      metric: { label: 'Tenants', value: 'Private beta' },
    },
  ],
}

export const sentinelOpsInfrastructure = {
  eyebrow: 'Infrastructure',
  title: 'SentinelOps Infrastructure',
  intro: 'The domains and contact points that make up the SentinelOps ecosystem.',
  active: [
    { label: 'sentinelops.fyi', type: 'Main Website', href: 'https://sentinelops.fyi' },
    { label: 'audit.sentinelops.fyi', type: 'Audit Tool', href: 'https://audit.sentinelops.fyi' },
    { label: 'contact@sentinelops.fyi', type: 'General Contact', href: 'mailto:contact@sentinelops.fyi' },
    { label: 'kevin@sentinelops.fyi', type: 'Direct Contact', href: 'mailto:kevin@sentinelops.fyi' },
  ],
  comingSoon: [
    { label: 'soc.sentinelops.fyi', type: 'Home-SOC Dashboard' },
    { label: 'mcp.sentinelops.fyi', type: 'MCP Portal' },
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
        'Launched a public network security audit tool on Render, then spent the following months hardening the perimeter in front of it.',
    },
    {
      date: '2025',
      title: 'VNetwork WAAP put in front of Render',
      description: 'Documented in the case study below — moved the audit tool from an unmonitored origin to a managed, logged perimeter.',
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
      description: 'Building Sass-ai-app as a multi-tenant AI agent platform while red-teaming the MCP layer it depends on.',
    },
  ],
}

export const wafCaseStudy = {
  eyebrow: 'Case Study',
  title: 'Hardening audit.sentinelops.fyi with VNetwork WAAP',
  summary:
    'audit.sentinelops.fyi runs a public, unauthenticated scanning tool on Render — which makes it an attractive target for scraping, automated exploitation attempts, and abuse of the scan endpoint itself. This case study covers the actual deployment: VNetwork WAAP sitting in front of the Render origin, handling TLS, custom WAF rules, and blocking the attack classes most relevant to a tool that accepts user-submitted targets and renders scan output back to the browser.',
  architecture: {
    heading: 'Architecture',
    flow: ['audit.sentinelops.fyi', 'VNetwork WAAP', 'Render Origin'],
  },
  problem: {
    heading: 'The problem',
    points: [
      'The site exposes a public "submit a target, get a scan" endpoint on Render — exactly the shape automated attackers and scrapers look for.',
      'Render\'s default origin URL had no request inspection in front of it — anything hitting it directly could bypass whatever protection sat in front of the public domain.',
      'TLS and WAF rules were unmanaged and inconsistent, with no single enforcement point for XSS or path-traversal attempts before requests reached the app.',
    ],
  },
  approach: {
    heading: 'Approach',
    steps: [
      {
        title: 'Baseline before enforcing',
        detail:
          'Ran VNetwork WAAP in monitor mode first to capture a real traffic baseline against Render — separating legitimate scan submissions from scanners, bots, and probing traffic.',
      },
      {
        title: 'Move TLS termination to managed SSL',
        detail:
          'Terminated TLS at VNetwork\'s managed SSL layer in front of the Render origin, removing manual certificate handling and ensuring every request is inspected before decryption reaches the app.',
      },
      {
        title: 'Write custom WAF rules for the scan endpoint',
        detail:
          'Scoped custom WAF rules to the audit tool\'s scan-submission endpoint instead of relying on an untuned generic ruleset, avoiding false positives on legitimate hostnames and IPs submitted as scan targets.',
      },
      {
        title: 'Enable XSS and path-traversal blocking',
        detail:
          'Turned on explicit XSS blocking and path-traversal blocking — the two attack classes most relevant to a tool that accepts user-submitted input and renders scan results back to the browser.',
      },
      {
        title: 'Lock Render down to a pure origin',
        detail:
          'Restricted the Render service to only accept traffic from VNetwork\'s WAAP, so the origin can no longer be reached directly and every request is guaranteed to pass through the WAAP first.',
      },
      {
        title: 'Close the feedback loop',
        detail:
          'WAAP logs feed into the home-SOC pipeline (see home-soc-reports) so blocked traffic is triaged the same way any other SOC alert would be, instead of being a black box.',
      },
    ],
  },
  results: {
    heading: 'Results',
    metrics: [
      { value: '100%', label: 'Public traffic routed through VNetwork WAAP' },
      { value: '0', label: 'Direct-to-origin requests reaching Render' },
      { value: '2', label: 'Attack classes explicitly blocked at the edge (XSS, path traversal)' },
      { value: 'Managed', label: 'TLS/SSL — no manual certificate handling' },
    ],
    narrative:
      'VNetwork WAAP now sits transparently between audit.sentinelops.fyi and its Render origin: TLS is managed, the origin is unreachable directly, and XSS and path-traversal attempts are blocked before they ever reach the app — with every block decision logged and reviewable through the home-SOC pipeline instead of disappearing into a black box.',
  },
  stack: ['VNetwork WAAP', 'Managed SSL', 'Custom WAF Rules', 'XSS Blocking', 'Path Traversal Blocking'],
}

export const threatReport = {
  eyebrow: 'Threat Intelligence',
  reportId: 'Report #001',
  title: 'SentinelOps Threat Report #001',
  date: '2026-09-03',
  status: 'Resolved',
  summary:
    'VNetwork WAAP identified and blocked 6 malicious HTTP requests originating from a United States-based source. All 6 requests were classified as injection attempts and were blocked at the edge before reaching the Render origin application. No origin-level remediation was required.',
  stats: [
    { label: 'Malicious Requests Detected', value: '6', icon: 'radar', tone: 'alert' },
    { label: 'Attack Type', value: 'Injection', icon: 'terminal', tone: 'alert' },
    { label: 'Source Region', value: 'United States', icon: 'flag', tone: 'neutral' },
    { label: 'Requests Blocked', value: '6 / 6', icon: 'shield', tone: 'signal' },
  ],
  triggeredPaths: [
    { path: '/admin', description: 'Targeted by an automated admin-panel discovery scan.' },
    { path: '/test123', description: 'Probed as a generic reconnaissance path.' },
    { path: '/thewall-demo', description: 'Received an injection payload targeting the TheWall demo endpoint.' },
  ],
  securityControls: [
    {
      name: 'Block-Admin-Scan',
      target: '/admin',
      description: 'Blocks automated scanning of admin and admin-panel paths.',
    },
    {
      name: 'Block-Test123',
      target: '/test123',
      description: 'Blocks requests to common throwaway recon paths.',
    },
    {
      name: 'TheWall-Demo',
      target: '/thewall-demo',
      description: 'Custom rule protecting the TheWall demo endpoint from injection payloads.',
    },
  ],
  timeline: [
    {
      step: 'Step 1',
      title: 'Scan activity detected',
      description: 'VNetwork WAAP flagged inbound scanning activity against audit.sentinelops.fyi from a United States-based source.',
      status: 'detected',
    },
    {
      step: 'Step 2',
      title: 'Injection attempt blocked — /thewall-demo',
      description: 'An injection payload submitted to /thewall-demo was blocked by the TheWall-Demo rule.',
      status: 'blocked',
    },
    {
      step: 'Step 3',
      title: 'Admin scan blocked — /admin',
      description: 'A request to /admin was blocked by the Block-Admin-Scan rule.',
      status: 'blocked',
    },
    {
      step: 'Step 4',
      title: 'Recon probe blocked — /test123',
      description: 'A request to /test123 was blocked by the Block-Test123 rule.',
      status: 'blocked',
    },
    {
      step: 'Step 5',
      title: 'Incident resolved',
      description: 'All 6 requests were blocked at the edge. No requests reached the Render origin application.',
      status: 'resolved',
    },
  ],
  architecture: {
    heading: 'Before / After',
    before: {
      label: 'Before',
      flow: ['Public Internet', 'audit.sentinelops.fyi', 'Render Origin'],
      note: 'No inspection layer in front of the origin — malicious requests would reach the app directly.',
    },
    after: {
      label: 'After',
      flow: ['Public Internet', 'VNetwork WAAP', 'Render Origin'],
      note: 'All 6 requests inspected and blocked at the WAAP — zero reached the Render origin.',
    },
  },
}

export const contact = {
  heading: "Let's talk security",
  body: "I'm building projects across SOC, DFIR, MCP, AI Security, and Security Automation through the SentinelOps ecosystem.\n\nIf you're interested in any project on this website, would like to discuss ideas, or explore a potential collaboration, feel free to reach out.\n\nI read every email that comes in.",
  email: 'contact@sentinelops.fyi',
}
