"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, 
  Camera, 
  Search, 
  Database, 
  Globe, 
  Users, 
  LineChart, 
  Shield, 
  Building2, 
  Layers,
  Cloud,
  Share2 
} from 'lucide-react';
import { motion } from "framer-motion";

export default function FeaturesPage() {
  const features = [
    {
      icon: Upload,
      title: "Smart Image Upload",
      description: "Upload images of buildings for instant classification and analysis using our advanced AI algorithms. Supports batch processing for multiple buildings."
    },
    {
      icon: Camera,
      title: "Real-time Camera Analysis",
      description: "Use your device's camera for real-time building identification and analysis. Perfect for on-site inspections and quick assessments."
    },
    {
      icon: Search,
      title: "AI-Powered Prediction",
      description: "Get accurate predictions on building types, architectural styles, and structural characteristics using our state-of-the-art machine learning models."
    },
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Access detailed information about identified buildings, including historical data, architectural specifications, and maintenance records."
    },
    {
      icon: Globe,
      title: "Global Architecture Library",
      description: "Explore our vast database of architectural styles from around the world, with detailed annotations and historical context."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team through shared projects, real-time notifications, and collaborative analysis tools."
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Generate detailed reports with insights on structural integrity, maintenance predictions, and cost estimations."
    },
    {
      icon: Shield,
      title: "Secure Data Handling",
      description: "Enterprise-grade security with end-to-end encryption ensuring your building data remains private and protected."
    },
    {
      icon: Building2,
      title: "3D Modeling Integration",
      description: "Import and analyze 3D building models with support for major CAD formats and BIM integration."
    },
    {
      icon: Layers,
      title: "Multi-Layer Analysis",
      description: "Examine different aspects of buildings including structural elements, materials, and environmental impact."
    },
    {
      icon: Cloud,
      title: "Cloud Processing",
      description: "Leverage cloud computing for fast processing of complex analyses and large datasets with unlimited scalability."
    },
    {
      icon: Share2,
      title: "Export & Integration",
      description: "Export analysis results in multiple formats and integrate with popular architecture and construction software."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              {" "}Building Analysis
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover how SABIROAD's cutting-edge features revolutionize architectural analysis and building classification
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 backdrop-blur border-white/5 hover:border-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-3">
                      <feature.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  {feature.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Building Analysis?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who trust SABIROAD for accurate, AI-powered building analysis.
            Experience these features and more with our platform.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:bg-gradient-to-l transition-all duration-300">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </div>
  );
}