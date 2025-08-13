"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Check, X, Info, Users, Percent } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "LMS Access",
    price: "£29",
    period: "/month per student",
    description: "Self-paced digital learning platform",
    features: [
      "Full curriculum access",
      "Interactive assignments",
      "Progress tracking",
      "Digital certificates",
      "Email support",
      "Parent portal access",
    ],
    notIncluded: [
      "Personal tutor",
      "Live sessions",
      "1-on-1 support",
      "Exam coaching",
    ],
    cta: "Start Learning",
    ctaLink: "/programs/lms-access",
    popular: false,
  },
  {
    name: "Full Enrollment",
    price: "£199",
    period: "/month per student",
    description: "Complete educational experience with personal tutoring",
    features: [
      "Everything in LMS Access",
      "Dedicated personal tutor",
      "Weekly 1-on-1 sessions",
      "Small group classes",
      "Customised learning plan",
      "Parent-teacher meetings",
      "Priority support",
      "Exam preparation",
      "University guidance",
    ],
    notIncluded: [],
    cta: "Apply Now",
    ctaLink: "/apply",
    popular: true,
  },
];

const familyDiscounts = [
  { students: "2 students", discount: "10% off total" },
  { students: "3 students", discount: "15% off total" },
  { students: "4+ students", discount: "20% off total" },
];

const additionalServices = [
  { service: "Summer Intensive Program", price: "£499/course" },
  { service: "Exam Revision Bootcamp", price: "£299/week" },
  { service: "University Application Support", price: "£199/session" },
  { service: "Additional 1-on-1 Sessions", price: "£49/hour" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const floatVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function PricingEnrollment() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const annualDiscount = 0.15; // 15% discount for annual billing

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Floating Background Elements */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-20 right-20 w-72 h-72 bg-secondary-400/10 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-primary-400/10 rounded-full mix-blend-multiply filter blur-3xl"
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-4 border-primary-500 text-primary-600 bg-primary-50">
              Pricing & Enrollment
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Invest in Your Child's Future
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Transparent pricing with no hidden fees. Choose the program that fits your 
            family's needs and budget. All programs include a satisfaction guarantee.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-8 flex justify-center"
        >
          <div className="relative flex rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 p-1 shadow-md">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "relative rounded-md px-6 py-2 text-sm font-medium transition-all",
                billingPeriod === "monthly"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Monthly
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setBillingPeriod("annual")}
              className={cn(
                "relative rounded-md px-6 py-2 text-sm font-medium transition-all",
                billingPeriod === "annual"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs bg-green-100 text-green-700">
                Save 15%
              </Badge>
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className={cn(
                  "relative bg-white/90 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300",
                  plan.popular && "border-primary-500 ring-2 ring-primary-500/20 scale-105"
                )}
              >
                {plan.popular && (
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <Badge className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 shadow-lg">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <motion.span 
                      key={billingPeriod}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-primary-600"
                    >
                      {billingPeriod === "annual" 
                        ? `£${Math.floor(parseInt(plan.price.slice(1)) * (1 - annualDiscount))}`
                        : plan.price}
                    </motion.span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                    {billingPeriod === "annual" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-green-600 mt-1 font-medium"
                      >
                        Save £{Math.floor(parseInt(plan.price.slice(1)) * annualDiscount * 12)}/year
                      </motion.div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start opacity-50">
                        <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-500 line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full"
                  >
                    <Button
                      className={cn(
                        "w-full shadow-lg",
                        plan.popular 
                          ? "bg-primary-500 hover:bg-primary-600 text-white" 
                          : "bg-white hover:bg-gray-50 text-primary-600 border-primary-500"
                      )}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <Link href={plan.ctaLink}>
                        {plan.cta}
                      </Link>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-8 shadow-lg border border-secondary-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                <Users className="h-5 w-5 text-secondary-600" />
              </motion.div>
              Family Discounts
            </h3>
            <p className="text-gray-600 mb-6">
              Enrolling multiple children? We offer generous family discounts to make 
              quality education more accessible.
            </p>
            <div className="space-y-3">
              {familyDiscounts.map((discount, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="text-sm font-medium text-gray-900">{discount.students}</span>
                  <Badge variant="secondary" className="bg-secondary-100 text-secondary-700">{discount.discount}</Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg border border-primary-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mr-2"
              >
                <Percent className="h-5 w-5 text-primary-600" />
              </motion.div>
              Additional Services
            </h3>
            <p className="text-gray-600 mb-6">
              Enhance your learning experience with our supplementary programs and services.
            </p>
            <div className="space-y-3">
              {additionalServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="text-sm font-medium text-gray-900">{service.service}</span>
                  <span className="text-sm font-semibold text-primary-600">{service.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-start space-x-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Info className="h-5 w-5 text-primary-600 mt-0.5" />
            </motion.div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Our Guarantee</h4>
              <p className="text-sm text-gray-600">
                We're confident in our ability to help your child succeed. That's why we offer a 
                30-day money-back guarantee for new enrollments. If you're not completely satisfied 
                with our program in the first month, we'll refund your payment in full.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Have questions about pricing or need a custom solution?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" variant="outline" className="border-primary-300 hover:bg-primary-50 shadow-md" asChild>
                <Link href="/contact">
                  Contact Admissions
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 shadow-lg" asChild>
                <Link href="/apply">
                  Apply Today
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}