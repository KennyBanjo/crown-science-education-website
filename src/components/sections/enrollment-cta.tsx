"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
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

export function EnrollmentCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      {/* Floating Background Elements */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-300/10 rounded-full mix-blend-multiply filter blur-3xl"
      />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="h-12 w-12 text-white/80 mx-auto mb-6" />
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Start Your Journey to Academic Excellence
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg text-white/90 max-w-2xl mx-auto"
          >
            Join Crown Science Education today and give your child the advantage they deserve. 
            With expert tutors, proven methods, and personalised support, success is within reach.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-8 grid gap-4 sm:grid-cols-2 max-w-lg mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left border border-white/20 shadow-lg"
            >
              <h3 className="font-semibold text-white mb-1">LMS Access</h3>
              <p className="text-sm text-white/80 mb-2">Self-paced digital learning</p>
              <motion.p 
                className="text-2xl font-bold text-white"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                £29/month
              </motion.p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left border border-white/20 shadow-lg"
            >
              <h3 className="font-semibold text-white mb-1">Full Enrollment</h3>
              <p className="text-sm text-white/80 mb-2">Complete tutoring support</p>
              <motion.p 
                className="text-2xl font-bold text-white"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                £199/month
              </motion.p>
            </motion.div>
          </motion.div>
        
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 shadow-2xl"
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
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 backdrop-blur-sm"
                asChild
              >
                <Link href="/programs/lms-access">
                  Explore LMS Access
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex items-center justify-center space-x-6 text-sm text-white/80"
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" as const }}
              >
                <GraduationCap className="h-4 w-4 mr-2" />
              </motion.div>
              <span>500+ Success Stories</span>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              •
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>30-Day Guarantee</motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              •
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>Start Immediately</motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}