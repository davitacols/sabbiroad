"use client"

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Building, Camera, Upload, Search, Database, Globe, Star, GitBranch, Lock, Check, ArrowUpRight, Users, Sparkles, Building2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThreeScene } from "@/components/three-scene"
import { useTheme } from "next-themes"
import { motion, useScroll, useTransform } from "framer-motion"

export function HomePage() {
  const { theme } = useTheme()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="flex flex-col min-h-screen bg-black" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/70 via-black/50 to-black/80">
        <ThreeScene />
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
        >
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight leading-tight">
                  AI-Powered Building Analysis
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    {" "}for a Smarter Future
                  </span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  SABIROAD is transforming architectural analysis with cutting-edge AI technology, 
                  offering faster and more precise building classification than ever before.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l">
                    <Link href="/signup" className="flex items-center">
                      Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                    <Link href="/enterprise" className="flex items-center">Contact Sales →</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-white mb-4">How SABIROAD Works</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transform your building analysis workflow in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "Upload Building Images",
                description: "Simply upload your building photos or 3D scans through our intuitive interface."
              },
              {
                icon: Sparkles,
                title: "AI Analysis",
                description: "Our advanced AI processes the data, identifying architectural features and potential issues."
              },
              {
                icon: ArrowUpRight,
                title: "Get Detailed Reports",
                description: "Receive comprehensive analysis reports with actionable insights within seconds."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-r from-neutral-950 to-neutral-900 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-white mb-4">Innovative Building Analysis at Scale</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to analyze buildings, powered by artificial intelligence and scalable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[ 
              { icon: Globe, title: "Global Reach", description: "Analyze buildings from anywhere in the world with our cloud-based platform.", gradient: "from-blue-500/20 to-purple-500/20" },
              { icon: Lock, title: "Secure & Private", description: "Enterprise-grade security with end-to-end encryption and compliance features.", gradient: "from-green-500/20 to-emerald-500/20" },
              { icon: GitBranch, title: "Version Control", description: "Track building analysis history with built-in version control and collaboration tools.", gradient: "from-orange-500/20 to-red-500/20" },
              { icon: Users, title: "Team Collaboration", description: "Work seamlessly with your team using real-time collaboration features.", gradient: "from-pink-500/20 to-rose-500/20" },
              { icon: Database, title: "Data Integration", description: "Integrate with your existing tools and workflows through our robust API.", gradient: "from-indigo-500/20 to-blue-500/20" },
              { icon: Building2, title: "Custom Reports", description: "Generate detailed, customizable reports tailored to your needs.", gradient: "from-violet-500/20 to-purple-500/20" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Moved down */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join thousands of architects and engineers who trust SABIROAD for their building analysis needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[ 
              { number: "10M+", label: "Buildings Analyzed", description: "Across 50+ countries" },
              { number: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
              { number: "45K+", label: "Active Users", description: "From leading firms" },
              { number: "<5ms", label: "Response Time", description: "Lightning-fast analysis" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 rounded-lg"
              >
                <div className="text-4xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-medium text-gray-300 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-black relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-white mb-6">Experience AI-Powered Analysis</h2>
              <p className="text-lg text-gray-300 mb-8">
                Upload any building image for instant analysis and explore its architectural details with our cutting-edge AI technology.
              </p>
              <div className="space-y-4">
                {[ 
                  "Real-time classification and analysis",
                  "Advanced architectural style detection",
                  "Comprehensive material analysis",
                  "Structural integrity assessment",
                  "Environmental impact evaluation",
                  "Cost estimation and optimization"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-blue-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l">
                <Link href="/demo">Try Live Demo</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0">
                <ThreeScene />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Transform Your Building Analysis Today
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join the future of architectural analysis with SABIROAD's AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default HomePage;