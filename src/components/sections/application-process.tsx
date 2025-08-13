"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  FileText, 
  Calendar, 
  UserCheck, 
  BookOpen, 
  Target,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FileText,
    title: "1. Choose Your Program",
    description: "Select between LMS Access for self-paced learning or Full Enrollment for comprehensive support",
    duration: "2 minutes",
  },
  {
    icon: Calendar,
    title: "2. Complete Application",
    description: "Fill out our simple online form with student information and academic goals",
    duration: "10 minutes",
  },
  {
    icon: UserCheck,
    title: "3. Initial Consultation",
    description: "Optional family consultation to discuss needs and answer questions",
    duration: "30 minutes",
  },
  {
    icon: Target,
    title: "4. Academic Assessment",
    description: "Brief assessment to determine current level and create personalised plan",
    duration: "45 minutes",
  },
  {
    icon: BookOpen,
    title: "5. Tutor Matching",
    description: "For Full Enrollment: We match you with the perfect tutor for your needs",
    duration: "1-2 days",
  },
  {
    icon: CheckCircle,
    title: "6. Begin Learning",
    description: "Start your Crown journey with orientation and your first lessons",
    duration: "Immediate",
  },
];

const requirements = {
  lms: [
    "Basic computer or tablet with internet",
    "Commitment to self-paced learning",
    "Age 11-18 (Key Stage 3-5)",
    "English language proficiency",
  ],
  full: [
    "Everything required for LMS Access",
    "Availability for weekly sessions",
    "Dedicated study space at home",
    "Parent/guardian involvement",
  ],
};

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

export function ApplicationProcess() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Premium Gold Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-16 right-16 w-72 h-72 bg-secondary-400/20 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-16 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"
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
            <Badge variant="outline" className="mb-4 border-white/30 text-white bg-white/10 backdrop-blur-sm">
              How to Join
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl"
          >
            Simple Application Process
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-white/90 max-w-3xl mx-auto"
          >
            Getting started with Crown Science Education is easy. Our streamlined application 
            process ensures you can begin your learning journey quickly.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <motion.div 
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="h-12 w-12 rounded-full bg-gradient-to-br from-white to-white/90 shadow-lg flex items-center justify-center"
                      >
                        <step.icon className="h-6 w-6 text-primary-600" />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Clock className="h-3 w-3 mr-1" />
                        </motion.div>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-white to-white/50 -translate-y-1/2 z-0" />
                )}
              </motion.div>
            ))}
          </motion.div>
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
            className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              LMS Access Requirements
            </h3>
            <ul className="space-y-3">
              {requirements.lms.map((req, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{req}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full mt-6 shadow-md" variant="outline" asChild>
                <Link href="/programs/lms-access">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Full Enrollment Requirements
            </h3>
            <ul className="space-y-3">
              {requirements.full.map((req, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{req}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 shadow-lg" asChild>
                <Link href="/apply">
                  Apply Now
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-2xl border border-white/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Transform Your Academic Journey?
            </h3>
            <p className="text-white/90 mb-6">
              Join Crown Science Education today and take the first step towards academic excellence. 
              Our admissions team is ready to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl" asChild>
                  <Link href="/apply">
                    Start Application
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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/contact">
                    Book Consultation
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}