"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Star, Users, Award, Sparkles, GraduationCap, TrendingUp, CheckCircle } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const floatVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export function HeroSection() {
  const trustIndicators = [
    { icon: Users, text: "Small Class Sizes", color: "text-blue-600" },
    { icon: Award, text: "Qualified Tutors", color: "text-green-600" },
    { icon: Star, text: "4.9/5 Parent Rating", color: "text-primary-600" }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Sophisticated Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59332' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Subtle Floating Background Elements */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-20 right-10 w-64 h-64 bg-primary-100/30 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-100/30 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 2 }}
        className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary-50/50 rounded-full mix-blend-multiply filter blur-3xl"
      />

      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60" />
      
      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Refined Success Badge with Gold Accent */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-3 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-primary-500 fill-current animate-pulse" />
                <span className="text-sm font-semibold text-primary-700">500+ Successful Students</span>
                <span className="text-primary-500/60">•</span>
                <span className="text-sm font-semibold text-primary-700">95% Grade Improvement</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Main Headline - Dark Text */}
          <motion.h1 
            variants={itemVariants}
            className="mx-auto max-w-4xl text-5xl font-display font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-4"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Excellence in
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"
            >
              Science Education
            </motion.span>
          </motion.h1>
          
          {/* Subtitle - Medium Gray */}
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-700 font-light mb-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Personalised for Your Success
            </motion.span>
          </motion.p>
          
          {/* Description - Light Gray */}
          <motion.p 
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
          >
            Join Crown Science Education and unlock your potential with our expert tutors 
            and cutting-edge learning platform. Choose between self-paced digital learning 
            or comprehensive tutoring support.
          </motion.p>
          
          {/* CTA Buttons - Gold Primary, White Secondary */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-base font-semibold group" 
                asChild
              >
                <Link href="/apply">
                  Apply for Full Program
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:border-primary-200 px-8 py-6 text-base font-semibold transition-all duration-300" 
                asChild
              >
                <Link href="/programs/lms-access">
                  <BookOpen className="mr-2 h-5 w-5 text-primary-500" />
                  Start with LMS Access
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators with Subtle Gold Accents */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2 + (0.1 * index), duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white shadow-lg rounded-2xl px-6 py-4 border border-gray-100 hover:border-primary-200 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Program Cards with Refined Styling */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
        >
          {/* LMS Access Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-100/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-secondary-200 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 bg-secondary-50 rounded-lg flex items-center justify-center"
                >
                  <Sparkles className="h-5 w-5 text-secondary-500" />
                </motion.div>
                <span className="bg-secondary-50 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                  LMS Access
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Digital Learning Platform
              </h3>
              <p className="text-gray-600 mb-4">
                Self-paced science courses with interactive content
              </p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-900">£29</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <ul className="space-y-2 text-sm">
                {["All digital materials", "Progress tracking", "Certificates"].map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + (0.1 * i) }}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Button 
                className="w-full mt-6 bg-secondary-500 hover:bg-secondary-600 text-white" 
                asChild
              >
                <Link href="/programs/lms-access">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Full Enrollment Card - Featured */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-primary-100 hover:border-primary-200 transition-all duration-300">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2"
              >
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Most Popular
                </span>
              </motion.div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" as const }}
                  className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center"
                >
                  <GraduationCap className="h-5 w-5 text-primary-500" />
                </motion.div>
                <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  Full Enrollment
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Complete Crown Experience
              </h3>
              <p className="text-gray-600 mb-4">
                Personal tutoring with full support
              </p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-900">£199</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <ul className="space-y-2 text-sm">
                {["Everything in LMS", "Weekly 1-on-1", "Parent meetings"].map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.1 + (0.1 * i) }}
                    className="flex items-center text-gray-700 font-medium"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Button 
                className="w-full mt-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg" 
                asChild
              >
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator with Gold Accent */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary-500/70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}