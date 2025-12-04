
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonaContent {
  id: string;
  title: string;
  scenario: string;
  bullets: string[];
}

export interface Platform {
  name: string;
  status: 'Synced' | 'Paused' | 'Error';
  iconName: string; // Used to map to actual icons
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

// Dashboard Types
export type DashboardView = 'overview' | 'create' | 'publish' | 'analytics' | 'assets' | 'settings';

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export interface Campaign {
  id: string;
  name: string;
  status: 'Live' | 'Draft' | 'Paused' | 'Processing';
  platforms: string[];
  spend: string;
  ctr: string;
  cpa: string;
  roas: string;
  lastActive: string;
}

export interface AdVariation {
  headline: string;
  body: string;
  cta: string;
}

export interface GeneratedAdContent {
  variations: AdVariation[];
}
