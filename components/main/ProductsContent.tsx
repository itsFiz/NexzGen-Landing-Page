'use client';

import React, { useState } from 'react';
import { Search, Users, Target, Star } from 'lucide-react';

// Types
type ProductStatus = 'Active' | 'Beta' | 'Development' | 'Prototype';

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
      users: "200+",
      satisfaction: "89%",
      completion: "82%"
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
  }
];

const ProductsContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState('overview'); // Add this line

  // Reset activeTab whenever modal is opened
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('overview'); // Reset to overview tab when opening modal
  };
  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <div className="pt-24 pb-12 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          R&D Ventures
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Pioneering tomorrow's solutions through innovative research and development
        </p>
      </div>

      {/* Search and Filters */}
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
            {["all", "EdTech", "MedTech", "SaaS"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category
                    ? "bg-purple-500 text-white"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`}
              >
                {category === "all" ? "All" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all cursor-pointer"
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
            </div>
          ))}
        </div>
      </div>

{/* Modal */}
{selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProduct.title}</h2>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold border border-gray-600">
                      {selectedProduct.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      selectedProduct.status === "Active" ? "bg-purple-500" : 
                      selectedProduct.status === "Beta" ? "bg-gray-700" : "border border-gray-600"
                    }`}>
                      {selectedProduct.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.open(`https://${selectedProduct.title.toLowerCase()}.nexzgen.com`, '_blank')}
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md flex items-center gap-2"
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
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 hover:bg-gray-700 rounded-md text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="space-y-6">
                <div className="flex border-b border-gray-700">
                  <button
                    className={`px-4 py-2 -mb-px ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-purple-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-2 -mb-px ${
                      activeTab === 'features'
                        ? 'border-b-2 border-purple-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveTab('features')}
                  >
                    Features
                  </button>
                  <button
                    className={`px-4 py-2 -mb-px ${
                      activeTab === 'metrics'
                        ? 'border-b-2 border-purple-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveTab('metrics')}
                  >
                    Metrics
                  </button>
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Mission</h3>
                        <p className="text-gray-300">{selectedProduct.overview.mission}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Vision</h3>
                        <p className="text-gray-300">{selectedProduct.overview.vision}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Impact</h3>
                        <p className="text-gray-300">{selectedProduct.overview.impact}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Target Audience</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.targetAudience.map((audience, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 rounded-full text-xs font-semibold border border-gray-600"
                            >
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <div className="grid gap-4">
                      {selectedProduct.detailedFeatures.map((feature, index) => (
                        <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                              <Star className="w-4 h-4 text-purple-400" />
                            </div>
                            <h4 className="font-semibold">{feature.title}</h4>
                          </div>
                          <p className="text-gray-300 ml-11">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'metrics' && (
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                        <Users className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                        <p className="text-sm text-gray-400">Users</p>
                        <p className="text-2xl font-bold">{selectedProduct.metrics.users}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                        <Star className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                        <p className="text-sm text-gray-400">Satisfaction</p>
                        <p className="text-2xl font-bold">{selectedProduct.metrics.satisfaction}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                        <Target className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                        <p className="text-sm text-gray-400">Completion</p>
                        <p className="text-2xl font-bold">{selectedProduct.metrics.completion}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsContent;