// app/getstarted/page.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Send, ArrowLeft } from 'lucide-react';


// Rest of your GetStarted component
// Define types for form data
interface FormData {
  serviceType: string;
  projectDetails: {
    name: string;
    email: string;
    company: string;
    budget: string;
    timeline: string;
    description: string;
  };
  requirements: string[];
}

// Service options with detailed descriptions
const services = [
  {
    id: 'digital',
    name: 'Digital Transformation',
    icon: '🌐',
    description: 'Comprehensive digital solutions for online presence',
    options: [
      'Business Landing Page', //Framer
      'E-commerce Website', //Shopify
      'Business Process Automation', //OSPROV
      'Custom Web Application Development'
    ]
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: '📈',
    description: 'Comprehensive digital marketing solutions',
    options: [
      'Social Media Marketing',
      'Content Marketing',
      'SEO Optimization',
      'Digital Advertising'
    ]
  },
  {
    id: 'xr',
    name: 'Extended Reality & Immersive Technology',
    icon: '📱',
    description: 'Immersive XR experiences and applications',
    options: [
      'Educational AR App built using Vuforia & Unity',
      'AR Instagram Filter built using AR Meta Spark',
      'Product Visualization',
      'Custom AR Solution'
    ]
  },
  {
    id: 'creative',
    name: 'Creative Services & Production',
    icon: '🎨',
    description: '2D and 3D animation services',
    options: [
      'Character Animation',
      'Motion Graphics',
      'Explainer Videos',
      'Visual Effects'
    ]
  }
];

const budgetRanges = [
  'Less than RM5,000',
  'RM5,000 - RM10,000',
  'RM10,000 - RM50,000',
  'RM50,000+'
];

const timelines = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months'
];

export default function GetStarted() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    projectDetails: {
      name: '',
      email: '',
      company: '',
      budget: '',
      timeline: '',
      description: ''
    },
    requirements: []
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="min-h-screen pt-24 pb-16 ">
      <div className="max-w-4xl mx-auto px-4 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="py-5 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Let`&apos;`s Build Something Amazing
          </h1>
          <p className="mt-4 text-gray-400">
            Tell us about your project and we`&apos;`ll help bring your vision to life
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-1 bg-gray-800 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>Service Selection</span>
            <span>Project Details</span>
            <span>Review & Submit</span>
          </div>
        </div>

        {/* Form Steps */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id);
                      setFormData({ ...formData, serviceType: service.id });
                    }}
                    className={`p-6 rounded-xl border ${
                      selectedService === service.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-gray-800 hover:border-gray-700'
                    } text-left transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl mb-2 block">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </motion.button>
                ))}
              </div>

              {selectedService && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <label className="block text-white mb-2">Select Specific Service:</label>
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:border-purple-500 transition-colors"
                  >
                    <option value="">Select an option</option>
                    {services
                      .find(s => s.id === selectedService)
                      ?.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                </motion.div>
              )}

              <motion.button
                onClick={() => selectedOption && setStep(2)}
                disabled={!selectedOption}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  selectedOption
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90'
                    : 'bg-gray-800 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={selectedOption ? { scale: 1.02 } : {}}
                whileTap={selectedOption ? { scale: 0.98 } : {}}
              >
                Next Step
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:border-purple-500 transition-colors"
                    value={formData.projectDetails.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDetails: {
                          ...formData.projectDetails,
                          name: e.target.value
                        }
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:border-purple-500 transition-colors"
                    value={formData.projectDetails.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDetails: {
                          ...formData.projectDetails,
                          email: e.target.value
                        }
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Company (Optional)</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:border-purple-500 transition-colors"
                  value={formData.projectDetails.company}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectDetails: {
                        ...formData.projectDetails,
                        company: e.target.value
                      }
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Budget Range</label>
                  <select
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:border-purple-500 transition-colors"
                    value={formData.projectDetails.budget}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDetails: {
                          ...formData.projectDetails,
                          budget: e.target.value
                        }
                      })
                    }
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">Timeline</label>
                  <select
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:border-purple-500 transition-colors"
                    value={formData.projectDetails.timeline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDetails: {
                          ...formData.projectDetails,
                          timeline: e.target.value
                        }
                      })
                    }
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Project Description</label>
                <textarea
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:border-purple-500 transition-colors"
                  value={formData.projectDetails.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectDetails: {
                        ...formData.projectDetails,
                        description: e.target.value
                      }
                    })
                  }
                />
              </div>

              <div className="flex justify-between">
                <motion.button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-6 rounded-lg font-semibold border border-gray-800 text-white hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setStep(3)}
                  className="py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Review
                </motion.button>
              </div>
            </motion.form>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-gray-900 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Review Your Information</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400">Service Type</p>
                      <p className="text-white">{selectedOption}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Budget Range</p>
                      <p className="text-white">{formData.projectDetails.budget}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Timeline</p>
                      <p className="text-white">{formData.projectDetails.timeline}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Contact</p>
                      <p className="text-white">{formData.projectDetails.email}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-400">Project Description</p>
                    <p className="text-white">{formData.projectDetails.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
 <motion.button
   type="button"
   onClick={() => setStep(2)}
   className="py-3 px-6 rounded-lg font-semibold border border-gray-800 text-white hover:bg-gray-800 transition-colors"
   whileHover={{ scale: 1.02 }}
   whileTap={{ scale: 0.98 }}
 >
   <div className="flex items-center gap-2">
     <ArrowLeft className="w-4 h-4" />
     Back
   </div>
 </motion.button>
 
 <motion.button
   type="submit"
   onClick={handleSubmit}
   className="py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
   whileHover={{ scale: 1.02 }}
   whileTap={{ scale: 0.98 }}
 >
   <div className="flex items-center gap-2">
     Submit Request
     <Send className="w-4 h-4" />
   </div>
 </motion.button>
</div>

             <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
               <p className="text-gray-400 text-sm">
                 By submitting this form, you agree to be contacted about your project request. 
                 We typically respond within 24-48 business hours.
               </p>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </div>
   </main>
 );
}