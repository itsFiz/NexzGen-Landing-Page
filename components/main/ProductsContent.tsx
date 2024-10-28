'use client';

import React, { useState } from 'react';
import { Search, Users, Target, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type ProductStatus = 'Active' | 'Beta' | 'Development' | 'Prototype' ;

interface DetailedFeature {
  title: string;
  description: string;
}

interface ProductOverview {
  mission: string;
  vision: string;
  impact: string;
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
  detailedFeatures: DetailedFeature[];
}

// Define products data
const products: Product[] = [
  {
    id: 1,
    title: "CareerRPG",
    description: "Gamified career development platform blending RPG elements with professional growth",
    image: "/careerrpg.png",
    status: "Beta",
    category: "EdTech",
    features: [
      "Personalized Learning",
      "Gamified Experience",
      "Mentorship Network"
    ],
    metrics: {
      users: "2.5k+",
      satisfaction: "94%",
      completion: "87%"
    },
    targetAudience: ["Students", "Young Professionals"],
    overview: {
      mission: "Transform career development through gamification",
      vision: "Empower individuals to find their ideal career path",
      impact: "Helped over 2,500 professionals advance their careers"
    },
    detailedFeatures: [
      {
        title: "Personalized Learning",
        description: "AI-driven customized career development tracks"
      },
      {
        title: "Gamified Experience",
        description: "Interactive progression system"
      }
    ]
  },
  {
    id: 2,
    title: "NexzGen Academy",
    description: "AI-powered e-learning platform with personalized course generation",
    image: "/academy.png",
    status: "Active",
    category: "EdTech",
    features: [
      "AI Course Generation",
      "Progress Tracking",
      "Community Features"
    ],
    metrics: {
      users: "1.8k+",
      satisfaction: "92%",
      completion: "85%"
    },
    targetAudience: ["Students", "Professionals", "Lifelong Learners"],
    overview: {
      mission: "Democratize education through AI",
      vision: "Make quality education accessible to everyone",
      impact: "Delivered over 10,000 hours of learning"
    },
    detailedFeatures: [
      {
        title: "AI Course Generation",
        description: "Automatically generated learning paths"
      },
      {
        title: "Progress Tracking",
        description: "Detailed analytics and monitoring"
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
      "Progress Analytics"
    ],
    metrics: {
      users: "500+",
      satisfaction: "96%",
      completion: "91%"
    },
    targetAudience: ["Medical Students", "Healthcare Professionals"],
    overview: {
      mission: "Revolutionize medical education through AR",
      vision: "Transform how medical professionals learn",
      impact: "Enhanced learning for 500+ students"
    },
    detailedFeatures: [
      {
        title: "3D AR Models",
        description: "High-fidelity anatomical models"
      },
      {
        title: "Interactive Quizzes",
        description: "Comprehensive assessments"
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
      "CRM Integration"
    ],
    metrics: {
      users: "N/A",
      satisfaction: "N/A",
      completion: "42%"
    },
    targetAudience: ["Service Centers", "Car Owners"],
    overview: {
      mission: "Streamline automotive service management",
      vision: "Create efficient car service ecosystem",
      impact: "Reduced wait times by 40%"
    },
    detailedFeatures: [
      {
        title: "Appointment Booking",
        description: "Real-time scheduling system"
      },
      {
        title: "Status Tracking",
        description: "Live service updates"
      }
    ]
  },
  {
    id: 5,
    title: "Blanjer",
    description: "Smart finance management SaaS for shared expenses",
    image: "/blanjer.png",
    status: "Development",
    category: "FinTech",
    features: [
      "Expense Sharing",
      "Automated Reports",
      "Payment Integration",
      "Real-time Notifications"
    ],
    metrics: {
      users: "N/A",
      satisfaction: "N/A",
      completion: "5%"
    },
    targetAudience: [
      "Families",
      "Friend Groups",
      "Shared Living Communities"
    ],
    overview: {
      mission: "Simplify collaborative expense management",
      vision: "Create transparency in shared finances",
      impact: "Pending launch metrics"
    },
    detailedFeatures: [
      {
        title: "Expense Sharing",
        description: "Smart bill splitting and expense tracking across multiple users"
      },
      {
        title: "Payment Integration",
        description: "Seamless integration with various payment platforms"
      },
      {
        title: "Automated Reports",
        description: "Real-time expense reports and payment notifications"
      }
    ]
  }
];

const ProductsContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('overview');
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900/50 to-black/50 text-white backdrop-blur-sm"
    >
      {/* Header with animation */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="pt-24 pb-12 text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          R&D Ventures
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Pioneering tomorrow&apos;s solutions through innovative research and development
        </p>
      </motion.div>

      {/* Search and Filters with animation */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {["all", "EdTech", "MedTech", "SaaS"].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md backdrop-blur-sm ${
                  selectedCategory === category
                    ? "bg-purple-500/80 text-white"
                    : "bg-gray-700/50 text-gray-200 hover:bg-gray-600/50"
                }`}
              >
                {category === "all" ? "All" : category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

       {/* Products Grid with animation */}
       <motion.div 
        className="max-w-7xl mx-auto px-4 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleProductSelect(product)}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-purple-500 transition-all cursor-pointer"
              >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  product.status === "Active" ? "bg-purple-500" : 
                  product.status === "Beta" ? "bg-gray-700" : "border border-gray-600"
                }`}>
                  {product.status}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-semibold border border-gray-600">
                  {product.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="px-2 py-1 rounded-full text-xs font-semibold bg-purple-500/20">
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

{/* Modal */}
<AnimatePresence>
  {selectedProduct && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={() => setSelectedProduct(null)}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-gray-800/90 backdrop-blur-md rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-3">{selectedProduct.title}</h2>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-gray-600/50 bg-gray-700/30">
                  {selectedProduct.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedProduct.status === "Active" ? "bg-purple-500/80" : 
                  selectedProduct.status === "Beta" ? "bg-gray-700/80" : "border border-gray-600/50 bg-gray-700/30"
                }`}>
                  {selectedProduct.status}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`https://${selectedProduct.title.toLowerCase()}.nexzgen.com`, '_blank')}
                className="px-4 py-2 bg-purple-500/80 hover:bg-purple-600/80 text-white rounded-lg flex items-center gap-2 transition-colors"
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
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </motion.button>
            </div>
          </div>

          {/* Tabs */}
          <div className="space-y-6">
            <div className="flex border-b border-gray-700/50">
              {['overview', 'features', 'metrics'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 -mb-px capitalize ${
                    activeTab === tab
                      ? 'border-b-2 border-purple-500 text-white font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="py-4">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    {['mission', 'vision', 'impact'].map((section) => (
                      <div key={section} className="space-y-2">
                        <h3 className="text-lg font-semibold capitalize">{section}</h3>
                        <p className="text-gray-300 leading-relaxed">
                          {selectedProduct.overview[section as keyof ProductOverview]}
                        </p>
                      </div>
                    ))}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Target Audience</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.targetAudience.map((audience, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-700/30 border border-gray-600/50"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'features' && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid gap-4"
                  >
                    {selectedProduct.detailedFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/50"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <Star className="w-4 h-4 text-purple-400" />
                          </div>
                          <h4 className="font-semibold">{feature.title}</h4>
                        </div>
                        <p className="text-gray-300 ml-11">{feature.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'metrics' && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-3 gap-6"
                  >
                    {[
                      { icon: Users, label: 'Users', value: selectedProduct.metrics.users },
                      { icon: Star, label: 'Satisfaction', value: selectedProduct.metrics.satisfaction },
                      { icon: Target, label: 'Completion', value: selectedProduct.metrics.completion }
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-6 bg-gray-700/30 rounded-lg border border-gray-600/50"
                      >
                        <metric.icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                        <p className="text-sm text-gray-400">{metric.label}</p>
                        <p className="text-2xl font-bold mt-1">{metric.value}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  );
};

export default ProductsContent;