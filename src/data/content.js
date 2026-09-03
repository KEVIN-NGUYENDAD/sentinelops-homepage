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
