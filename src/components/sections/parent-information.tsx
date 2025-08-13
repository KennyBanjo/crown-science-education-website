"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Shield, 
  Eye, 
  MessageSquare, 
  Calendar,
  FileText,
  Users,
  Heart,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

const parentFeatures = [
  {
    icon: Eye,
    title: "Parent Portal Access",
    description: "Real-time visibility into your child's progress, attendance, and assignments",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Easy messaging with tutors and regular updates on academic performance",
  },
  {
    icon: Calendar,
    title: "Scheduled Meetings",
    description: "Regular parent-teacher conferences to discuss progress and goals",
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description: "Weekly progress reports with actionable insights and recommendations",
  },
  {
    icon: Shield,
    title: "Safe Learning",
    description: "DBS-checked tutors and secure online environment for peace of mind",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Visual dashboards showing improvement trends and achievement milestones",
  },
];

const supportResources = [
  {
    title: "Home Learning Guide",
    description: "Tips and strategies to support your child's learning at home",
    icon: Heart,
  },
  {
    title: "Parent Workshops",
    description: "Monthly sessions on topics like exam preparation and study skills",
    icon: Users,
  },
  {
    title: "Resource Library",
    description: "Access to educational materials and supplementary resources",
    icon: FileText,
  },
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
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const floatVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export function ParentInformation() {
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
              For Parents
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Supporting Your Child&apos;s Success Together
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We believe parent involvement is crucial to student success. That&apos;s why we provide 
            comprehensive tools and support to keep you engaged in your child&apos;s education journey.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {parentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="h-10 w-10 rounded-lg bg-gradient-to-br from-secondary-100 to-secondary-200 shadow-md flex items-center justify-center mb-3"
                  >
                    <feature.icon className="h-5 w-5 text-secondary-600" />
                  </motion.div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-2xl p-8 shadow-lg border border-primary-100"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Parent Support Resources
          </h3>
          <motion.div 
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-3"
          >
            {supportResources.map((resource, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0"
                  >
                    <resource.icon className="h-6 w-6 text-primary-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What Parents Say
            </h3>
            <blockquote className="text-gray-700 italic mb-4">
              &ldquo;The parent portal gives me complete visibility into my son&apos;s progress. I love 
              receiving weekly updates and being able to communicate directly with his tutor.&rdquo;
            </blockquote>
            <p className="font-semibold text-gray-900">— Rachel Thompson</p>
            <p className="text-sm text-gray-600">Parent of Year 10 Student</p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Your Role in Success
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Monitor progress through the parent portal",
                "Attend scheduled parent-teacher meetings",
                "Encourage consistent study habits",
                "Celebrate achievements and milestones"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-secondary-600 mr-2">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Have questions about how Crown can help your child succeed?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" variant="outline" className="border-primary-300 hover:bg-primary-50 shadow-md" asChild>
                <Link href="/parents">
                  Parent Resources
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 shadow-lg" asChild>
                <Link href="/apply">
                  Enroll Your Child
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}