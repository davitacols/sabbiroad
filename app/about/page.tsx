"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Building2, Target, Users, Sparkles, BarChart3, Globe, Rocket, Brain } from 'lucide-react';
import './styles.css';

export default function AboutPage() {
  const milestones = [
    { year: "2021", title: "Foundation", description: "SABIROAD was founded with a vision to transform building analysis." },
    { year: "2022", title: "AI Launch", description: "Released our first AI-powered building classification system." },
    { year: "2023", title: "Global Expansion", description: "Expanded operations to 20+ countries worldwide." },
    { year: "2024", title: "Advanced Analytics", description: "Introduced revolutionary 3D scanning capabilities." }
  ];

  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Innovation First",
      description: "Pushing the boundaries of AI technology in architectural analysis",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision",
      description: "Delivering accurate and reliable building classifications",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric",
      description: "Designing solutions with our users' needs in mind",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Making architectural analysis accessible worldwide",
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              About
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                {" "}SABIROAD
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
              Revolutionizing architectural analysis with cutting-edge AI technology and a passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-black/40 backdrop-blur border-white/5 hover:border-white/10 transition-all duration-300 fade-in">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                SABIROAD is dedicated to transforming how professionals interact with and understand the built environment. Through advanced AI technology, we're making architectural analysis more accessible, accurate, and efficient than ever before.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-300">AI-Powered Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-300">Architectural Expertise</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-300">Data-Driven Insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-300">Continuous Innovation</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center fade-in">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className={`fade-in-delay-${index}`}>
                <Card className="h-full p-8 bg-black/40 backdrop-blur border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center fade-in">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex gap-6 mb-8 fade-in-delay-${index}`}>
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-500">{milestone.year}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Experience the power of AI-driven building analysis with SABIROAD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}