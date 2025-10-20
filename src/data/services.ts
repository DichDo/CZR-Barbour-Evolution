export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "AI-Powered Curation",
    description: "Leverage advanced machine learning algorithms to analyze, categorize, and curate art collections with unprecedented accuracy and insight.",
    icon: "🤖",
    features: ["Automated Classification", "Style Analysis", "Authenticity Verification", "Market Trend Prediction"]
  },
  {
    id: 2,
    title: "Digital Collection Management",
    description: "Comprehensive platform for managing global art portfolios with real-time tracking, valuation, and secure digital documentation.",
    icon: "🎨",
    features: ["Cloud-Based Storage", "Real-Time Inventory", "Provenance Tracking", "Multi-Currency Valuation"]
  },
  {
    id: 3,
    title: "Creative Technology Consultation",
    description: "Strategic guidance on integrating cutting-edge technology into art acquisition, exhibition, and preservation workflows.",
    icon: "💡",
    features: ["Digital Strategy", "Tech Integration", "Workflow Optimization", "Innovation Roadmaps"]
  },
  {
    id: 4,
    title: "Asset Authentication",
    description: "Blockchain-powered verification and certification system ensuring the authenticity and provenance of valuable art pieces.",
    icon: "🔐",
    features: ["Blockchain Certificates", "Forensic Analysis", "Expert Verification", "Digital Twins"]
  },
  {
    id: 5,
    title: "Global Logistics",
    description: "Worldwide art transportation and installation services with climate-controlled handling and comprehensive insurance coverage.",
    icon: "🌍",
    features: ["Climate Control", "White Glove Service", "Custom Crating", "Insurance Coordination"]
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description: "Advanced data visualization and reporting tools providing actionable insights into collection performance and market dynamics.",
    icon: "📊",
    features: ["Performance Metrics", "Market Intelligence", "Custom Reports", "Predictive Analytics"]
  }
];
