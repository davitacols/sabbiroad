"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Lock, Eye, Bell, Server, Globe, Clock, FileText, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Eye />,
      title: "Information We Collect",
      gradient: "from-blue-500/20 to-purple-500/20",
      content: [
        "Personal Information (name, email, billing details)",
        "Usage Data and Service Interactions",
        "Device and Browser Information",
        "Location Data (IP-based)",
        "Communication Records"
      ]
    },
    {
      icon: <Server />,
      title: "How We Use Your Information",
      gradient: "from-green-500/20 to-emerald-500/20",
      content: [
        "Service Delivery and Maintenance",
        "Experience Personalization",
        "Transaction Processing",
        "Usage Pattern Analysis",
        "Fraud Prevention"
      ]
    },
    {
      icon: <Globe />,
      title: "Information Sharing",
      gradient: "from-orange-500/20 to-red-500/20",
      content: [
        "Trusted Service Provider Partnerships",
        "Business Transfer Scenarios",
        "Legal Compliance Requirements",
        "Rights Protection Measures"
      ]
    },
    {
      icon: <Lock />,
      title: "Data Security",
      gradient: "from-pink-500/20 to-rose-500/20",
      content: [
        "Enterprise-grade Encryption Protocols",
        "Strict Access Control Systems",
        "Regular Security Audits",
        "Comprehensive Backup Procedures"
      ]
    },
    {
      icon: <Bell />,
      title: "Your Privacy Rights",
      gradient: "from-indigo-500/20 to-blue-500/20",
      content: [
        "Data Access and Control",
        "Information Correction Rights",
        "Deletion Request Options",
        "Processing Objection Rights"
      ]
    },
    {
      icon: <Clock />,
      title: "Data Retention",
      gradient: "from-violet-500/20 to-purple-500/20",
      content: [
        "Active Account Data Management",
        "Inactive Account Procedures",
        "Deletion Timeline Policies",
        "Legal Retention Requirements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Privacy
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                {" "}Policy
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
              At SABIROAD, protecting your privacy is our top priority. Learn how we collect, use, and safeguard your information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`fade-in-delay-${index}`}
              >
                <Card className="h-full p-8 bg-black/40 backdrop-blur border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-6`}>
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                  <div className="space-y-3">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="flex items-start text-gray-300">
                        <Check className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our dedicated privacy team is here to help you understand how we protect your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l">
                <Link href="/contact">Contact Privacy Team</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                <Link href="/faq">Privacy FAQs</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-8">
              Last updated: December 22, 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}