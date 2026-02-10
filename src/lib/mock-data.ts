export type LeadStatus = 'cold' | 'active' | 'interested' | 'qualified' | 'dead';
export type CampaignType = 'website' | 'outbound' | 'inbound' | 'referral';

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  campaign_type: CampaignType;
  context: string;
  status: LeadStatus;
  current_email: number;
  last_sent: string;
  created_at: string;
}

export interface Campaign {
  id: string;
  name: string;
  campaign_type: CampaignType;
  total_leads: number;
  qualified: number;
  created_at: string;
}

export const MOCK_LEADS: Lead[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@company.com",
    company: "Acme Inc",
    campaign_type: "website",
    context: "No online presence, just got funding",
    status: "active",
    current_email: 2,
    last_sent: "2025-01-17",
    created_at: "2025-01-15"
  },
  {
    id: "2",
    name: "Sarah Smith",
    email: "sarah@techflow.io",
    company: "TechFlow",
    campaign_type: "outbound",
    context: "Growing engineering team, outdated stack",
    status: "interested",
    current_email: 3,
    last_sent: "2025-01-18",
    created_at: "2025-01-10"
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "m.chen@gigacorp.com",
    company: "GigaCorp",
    campaign_type: "website",
    context: "Legacy SEO issues detected",
    status: "qualified",
    current_email: 5,
    last_sent: "2025-01-16",
    created_at: "2025-01-05"
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma@creative.agency",
    company: "Creative Agency",
    campaign_type: "referral",
    context: "Looking for automation tools",
    status: "cold",
    current_email: 0,
    last_sent: "-",
    created_at: "2025-01-19"
  },
  {
    id: "5",
    name: "David Brown",
    email: "david@saas-startup.com",
    company: "SaaS Startup",
    campaign_type: "outbound",
    context: "Seed round closed recently",
    status: "dead",
    current_email: 2,
    last_sent: "2025-01-12",
    created_at: "2025-01-08"
  }
];

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: "1",
    name: "Website Build - Q1 2025",
    campaign_type: "website",
    total_leads: 45,
    qualified: 8,
    created_at: "2025-01-10"
  },
  {
    id: "2",
    name: "Outbound SaaS - Global",
    campaign_type: "outbound",
    total_leads: 120,
    qualified: 15,
    created_at: "2025-01-05"
  },
  {
    id: "3",
    name: "Referral Network",
    campaign_type: "referral",
    total_leads: 12,
    qualified: 4,
    created_at: "2025-01-12"
  }
];
