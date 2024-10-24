'use client';
import React, {ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Users, Target, Rocket, Star } from 'lucide-react';

type ProductStatus = 'Active' | 'Beta' | 'Development' | 'Prototype';
type BadgeVariant = 'outline' | 'default' | 'secondary';

interface CommonProps {
  className?: string;
  children?: ReactNode;
}
const CardDescription: React.FC<CardProps> = ({ className = "", children, ...props }) => (
  <p className={`text-sm text-gray-400 ${className}`} {...props}>
    {children}
  </p>
);
interface CardProps extends CommonProps {
  [key: string]: any;
}

// Custom Card Components
const Card = ({ className = "", children, ...props }: CardProps) => (
  <div 
    className={`rounded-lg border border-gray-700 bg-gray-800/50 text-gray-100 shadow-sm transition-all ${className}`} 
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ className = "", children, ...props }: CardProps) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children, ...props }: CardProps) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ className = "", children, ...props }: CardProps) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// Custom Badge Component
interface BadgeProps extends CommonProps {
  variant?: 'default' | 'secondary' | 'outline';
  [key: string]: any;
}

const Badge: React.FC<BadgeProps> = ({ variant = "default", className = "", children }) => {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-purple-500 text-white",
    secondary: "bg-gray-700 text-gray-200",
    outline: "border border-gray-600 text-gray-200",
  };

  return (
    <span 
      className={`
        inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};


// Custom Button Component
interface ButtonProps extends CommonProps {
  variant?: 'default' | 'secondary' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  [key: string]: any;
}

const Button = ({ 
  variant = "default", 
  size = "default", 
  className = "", 
  children,
  ...props 
}: ButtonProps) => {
  const variants = {
    default: "bg-purple-500 text-white hover:bg-purple-600",
    secondary: "bg-gray-700 text-gray-200 hover:bg-gray-600",
    ghost: "hover:bg-gray-700 text-gray-200",
    outline: "border border-gray-600 text-gray-200 hover:bg-gray-700",
  } as const;

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
} | null;

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: ReactNode;
}

interface TabsListProps {
  className?: string;
  children: ReactNode;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}
// Corrected Tabs Components
// Create context with proper typing
const TabsContext = React.createContext<TabsContextType>(null);

// Tabs Provider component
const Tabs: React.FC<TabsProps> = ({ defaultValue, className = "", children }) => {
  const [activeTab, setActiveTab] = React.useState<string>(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`space-y-4 ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList: React.FC<TabsListProps> = ({ className = "", children }) => (
  <div 
    className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-700/50 p-1 text-gray-300 ${className}`}
  >
    {children}
  </div>
);

const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className = "" }) => {
  const context = React.useContext(TabsContext);
  if (!context) return null;
  
  const { activeTab, setActiveTab } = context;
  
  return (
    <button
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium 
        ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none 
        disabled:opacity-50
        ${activeTab === value ? 'bg-gray-800 text-white shadow-sm' : ''}
        ${className}
      `}
      onClick={() => setActiveTab(value)}
      type="button"
    >
      {children}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, className = "" }) => {
  const context = React.useContext(TabsContext);
  if (!context) return null;
  
  const { activeTab } = context;
  
  if (activeTab !== value) return null;

  return (
    <div 
      className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  );
};

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
};

// Constants


const METRICS_INFO = {
  users: {
    icon: Users,
    label: "Total Users",
    color: "text-purple-400"
  },
  satisfaction: {
    icon: Star,
    label: "Satisfaction Rate",
    color: "text-purple-400"
  },
  completion: {
    icon: Target,
    label: "Completion Rate",
    color: "text-purple-400"
  }
};

const products = [
  {
    id: 1,
    title: "CareerRPG",
    description: "Gamified career development platform blending RPG elements with professional growth",
    image: "/careerrpg.png",
    status: "Beta",
    category: "EdTech",
    features: [
      "Personalized Learning Pathways",
      "Gamified Experience",
      "Mentorship Network",
      "Job Placement"
    ],
    metrics: {
      users: "2.5k+",
      satisfaction: "94%",
      completion: "87%"
    },
    targetAudience: [
      "Students",
      "Young Professionals",
      "Career Changers"
    ],
    overview: {
      mission: "Transform career development through gamification",
      vision: "Empower individuals to find their ideal career path",
      impact: "Helped over 2,500 professionals advance their careers"
    },
    detailedFeatures: [
      {
        title: "Personalized Learning Pathways",
        description: "AI-driven customized career development tracks"
      },
      {
        title: "Gamified Experience",
        description: "Experience points, achievements, and level progression"
      },
      {
        title: "Mentorship Network",
        description: "Connect with industry professionals and mentors"
      },
      {
        title: "Job Placement",
        description: "Direct connections to job opportunities and internships"
      }
    ]
  },
  {
    id: 2,
    title: "NexzGen Academy",
    description: "AI-powered e-learning platform with personalized course generation",
    image: "/na.png",
    status: "Active",
    category: "EdTech",
    features: [
      "AI Course Generation",
      "Progress Tracking",
      "Gamified Learning",
      "Community Features"
    ],
    metrics: {
      users: "1.8k+",
      satisfaction: "92%",
      completion: "85%"
    },
    targetAudience: [
      "Students",
      "Professionals",
      "Lifelong Learners"
    ],
    overview: {
      mission: "Democratize education through AI-powered learning",
      vision: "Make quality education accessible to everyone",
      impact: "Delivered over 10,000 hours of personalized learning"
    },
    detailedFeatures: [
      {
        title: "AI Course Generation",
        description: "Automatically generated personalized learning paths"
      },
      {
        title: "Progress Tracking",
        description: "Detailed analytics and learning progress monitoring"
      },
      {
        title: "Gamified Learning",
        description: "Interactive challenges and rewards system"
      },
      {
        title: "Community Features",
        description: "Collaborative learning environment and discussion forums"
      }
    ]
  },
  {
    id: 3,
    title: "ARespiratory",
    description: "Augmented reality platform for medical education",
    image: "/ar.png",
    status: "Development",
    category: "MedTech",
    features: [
      "3D AR Models",
      "Interactive Quizzes",
      "Multimedia Content",
      "Progress Analytics"
    ],
    metrics: {
      users: "500+",
      satisfaction: "96%",
      completion: "91%"
    },
    targetAudience: [
      "Medical Students",
      "Healthcare Professionals",
      "Educational Institutions"
    ],
    overview: {
      mission: "Revolutionize medical education through AR technology",
      vision: "Transform how medical professionals learn and practice",
      impact: "Enhanced learning outcomes for 500+ medical students"
    },
    detailedFeatures: [
      {
        title: "3D AR Models",
        description: "High-fidelity augmented reality anatomical models"
      },
      {
        title: "Interactive Quizzes",
        description: "Comprehensive assessment and learning validation"
      },
      {
        title: "Multimedia Content",
        description: "Rich educational resources and reference materials"
      },
      {
        title: "Progress Analytics",
        description: "Detailed tracking of learning outcomes and performance"
      }
    ]
  },
  {
    id: 4,
    title: "ServisLah",
    description: "Comprehensive car service appointment & status tracking system",
    image: "/sl.png",
    status: "Prototype",
    category: "SaaS",
    features: [
      "Appointment Booking",
      "Status Tracking",
      "CRM Integration",
      "Promotional Tools"
    ],
    metrics: {
      users: "200+",
      satisfaction: "89%",
      completion: "82%"
    },
    targetAudience: [
      "Service Centers",
      "Car Owners",
      "Fleet Managers"
    ],
    overview: {
      mission: "Streamline automotive service management",
      vision: "Create the most efficient car service ecosystem",
      impact: "Reduced service wait times by 40% for partners"
    },
    detailedFeatures: [
      {
        title: "Appointment Booking",
        description: "Seamless scheduling system with real-time availability"
      },
      {
        title: "Status Tracking",
        description: "Live updates on service progress and completion"
      },
      {
        title: "CRM Integration",
        description: "Comprehensive customer relationship management"
      },
      {
        title: "Promotional Tools",
        description: "Targeted marketing and customer engagement features"
      }
    ]
  }
];




// Define types for product data
interface DetailedFeature {
  title: string;
  description: string;
}

interface ProductOverview {
  mission: string;
  vision: string;
  impact: string;
}

interface ProductMetrics {
  users: string;
  satisfaction: string;
  completion: string;
}


interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  status: ProductStatus;
  category: string;
  features: string[];
  metrics: {
    users: string;
    satisfaction: string;
    completion: string;
  };
  targetAudience: string[];
  
  overview: ProductOverview;
  detailedFeatures: {
    title: string;
    description: string;
  }[];
}

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}





const PRODUCT_URLS: Record<string, string> = {
  'CareerRPG': 'https://careerrpg.nexzgen.com',
  'NexzGen Academy': 'https://academy.nexzgen.com',
  'ARespiratory': 'https://arespiratory.nexzgen.com',
  'ServisLah': 'https://servislah.nexzgen.com',
};

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;
  const STATUS_VARIANTS = {
    Active: "default",
    Beta: "secondary",
    Development: "outline",
    Prototype: "outline"
  } as const;
  const getStatusVariant = (status: ProductStatus): BadgeVariant => {
    return STATUS_VARIANTS[status];
  };

  const handleVisitWebsite = (): void => {
    const url = PRODUCT_URLS[product.title];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
              <div className="flex gap-2">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant={getStatusVariant(product.status)}>
          {product.status}
        </Badge>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleVisitWebsite}
                className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2"
              >
                Visit Website
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>
              <Button variant="ghost" onClick={onClose}>✕</Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="space-y-4">
                {product.overview && (
                  <>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Mission</h3>
                      <p className="text-gray-300">{product.overview.mission}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Vision</h3>
                      <p className="text-gray-300">{product.overview.vision}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Impact</h3>
                      <p className="text-gray-300">{product.overview.impact}</p>
                    </div>
                  </>
                )}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Target Audience</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.targetAudience.map((audience, index) => (
                      <Badge key={index} variant="outline">{audience}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <div className="grid gap-4">
                {product.detailedFeatures.map((feature, index) => (
                  <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Rocket className="w-4 h-4 text-purple-400" />
                      </div>
                      <h4 className="font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-gray-300 ml-11">{feature.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="metrics">
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(product.metrics).map(([key, value]) => {
                  const Icon = METRICS_INFO[key as keyof ProductMetrics]?.icon || Users;
                  return (
                    <div key={key} className="text-center p-4 bg-gray-700/30 rounded-lg">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                      <p className="text-sm text-gray-400">
                        {METRICS_INFO[key as keyof ProductMetrics]?.label || key}
                      </p>
                      <p className="text-2xl font-bold">{value}</p>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Component
const ProductsContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 pb-12 text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          R&D Ventures
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Pioneering tomorrow&apos;s solutions through innovative research and development
        </p>
      </motion.div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "secondary"}
              onClick={() => setSelectedCategory("all")}
              className="px-4 py-2"
            >
              All
            </Button>
            <Button
              variant={selectedCategory === "EdTech" ? "default" : "secondary"}
              onClick={() => setSelectedCategory("EdTech")}
              className="px-4 py-2"
            >
              EdTech
            </Button>
            <Button
              variant={selectedCategory === "MedTech" ? "default" : "secondary"}
              onClick={() => setSelectedCategory("MedTech")}
              className="px-4 py-2"
            >
              MedTech
            </Button>
            <Button

                variant={selectedCategory === "SaaS" ? "default" : "secondary"}
              onClick={() => setSelectedCategory("SaaS")}
              className="px-4 py-2"
            >
              SaaS
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
              onClick={() => setSelectedProduct(product)}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={
                      product.status === "Active" ? "default" :
                      product.status === "Beta" ? "secondary" :
                      "outline"
                    }>
                      {product.status}
                    </Badge>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-gray-400">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <Badge key={i} variant="secondary" className="bg-purple-500/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <Users className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                        <p className="text-sm text-gray-400">Users</p>
                        <p className="font-semibold">{product.metrics.users}</p>
                      </div>
                      <div className="text-center">
                        <Star className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                        <p className="text-sm text-gray-400">Satisfaction</p>
                        <p className="font-semibold">{product.metrics.satisfaction}</p>
                      </div>
                      <div className="text-center">
                        <Target className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                        <p className="text-sm text-gray-400">Completion</p>
                        <p className="font-semibold">{product.metrics.completion}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </main>
  );
}

export default ProductsContent