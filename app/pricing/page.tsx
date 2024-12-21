import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24 space-y-12">
        {/* Header with gradient text */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Choose your plan
          </h1>
          <p className="text-xl text-gray-400">
            Simple pricing for everyone
          </p>
        </div>
        
        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3 pt-8">
          {/* Basic Plan */}
          <Card className="relative bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:translate-y-[-4px]">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl text-white">Basic</CardTitle>
              <CardDescription className="text-gray-400">For individual users</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$9.99</span>
                <span className="text-gray-400">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {['100 image uploads per month', 'Basic building classification', 'Limited metadata access'].map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6 bg-gray-800 hover:bg-gray-700">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="relative bg-gray-900 border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:translate-y-[-4px]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-blue-500 hover:bg-blue-400 px-4 py-1">Most Popular</Badge>
            </div>
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl text-white">Pro</CardTitle>
              <CardDescription className="text-gray-400">For growing businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$29.99</span>
                <span className="text-gray-400">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  'Unlimited image uploads',
                  'Advanced building classification',
                  'Full metadata access',
                  'API access'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6 bg-blue-500 hover:bg-blue-600">Upgrade Now</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:translate-y-[-4px]">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
              <CardDescription className="text-gray-400">For large organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">Custom</span>
                <span className="text-gray-400"> pricing</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  'All Pro features',
                  'Custom integrations',
                  'Dedicated support',
                  'On-premise deployment options'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6 bg-gray-800 hover:bg-gray-700">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}