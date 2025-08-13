"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  BookOpen, 
  Users, 
  Clock, 
  MessageSquare, 
  BarChart, 
  Award,
  CheckCircle,
  ArrowRight,
  Laptop,
  Calendar,
  Sparkles,
  Star
} from "lucide-react";

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
    transition: { duration: 0.5, ease: "easeOut" }
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
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const lmsFeatures = [
  "Access to all digital course materials",
  "Interactive assignments and quizzes", 
  "Self-paced learning environment",
  "Progress tracking dashboard",
  "Digital certificates upon completion",
  "Email support",
];

const fullFeatures = [
  "Everything in LMS Access PLUS:",
  "Personal science tutor assignment",
  "Weekly one-on-one tutoring sessions",
  "Customised learning plans",
  "Regular parent-teacher meetings",
  "Priority academic support",
  "Exam preparation assistance",
  "University application guidance",
];

export function ProgramsOverview() {
  const [activeTab, setActiveTab] = useState("comparison");

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Premium Gold Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30" />
      
      {/* Floating Background Elements */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-20 left-10 w-64 h-64 bg-primary-200/20 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200/20 rounded-full mix-blend-multiply filter blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-4 border-primary-500 text-primary-600 bg-white/80 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              Our Programs
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Choose Your Crown Science Education 
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"> Experience</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We offer two distinct pathways to science excellence. Select the program that best 
            fits your learning style, schedule, and academic goals.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="comparison">Compare Programs</TabsTrigger>
              <TabsTrigger value="journey">Your Journey</TabsTrigger>
            </TabsList>
            
            <TabsContent value="comparison" className="mt-8">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-8 lg:grid-cols-2"
              >
                {/* LMS Access Card */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative h-full bg-white/95 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-secondary-100 text-secondary-700">
                          Self-Paced
                        </Badge>
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Laptop className="h-6 w-6 text-secondary-600" />
                        </motion.div>
                      </div>
                      <CardTitle className="text-2xl">LMS Access</CardTitle>
                      <CardDescription className="text-base">
                        Perfect for self-motivated learners who prefer flexibility
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold bg-gradient-to-r from-secondary-600 to-secondary-500 bg-clip-text text-transparent">£29</span>
                        <span className="text-gray-600">/month per student</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {lmsFeatures.map((feature, index) => (
                          <motion.li 
                            key={index} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-8 space-y-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-secondary-500" />
                          Study at your own pace
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <BookOpen className="h-4 w-4 mr-2 text-secondary-500" />
                          Full curriculum access
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <BarChart className="h-4 w-4 mr-2 text-secondary-500" />
                          Track your progress
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="w-full mt-6 bg-secondary-500 hover:bg-secondary-600 text-white" asChild>
                          <Link href="/programs/lms-access">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Full Enrollment Card */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                  >
                    <Badge className="bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Recommended
                    </Badge>
                  </motion.div>
                  <Card className="relative h-full bg-gradient-to-br from-primary-50/50 to-white border-primary-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-primary-100 text-primary-700">
                          Comprehensive
                        </Badge>
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          <Users className="h-6 w-6 text-primary-600" />
                        </motion.div>
                      </div>
                      <CardTitle className="text-2xl">Full Enrollment</CardTitle>
                      <CardDescription className="text-base">
                        Complete support with personal tutoring and guidance
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">£199</span>
                        <span className="text-gray-600">/month per student</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {fullFeatures.map((feature, index) => (
                          <motion.li 
                            key={index} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex items-start ${index === 0 ? 'font-semibold text-primary-700' : ''}`}
                          >
                            <CheckCircle className={`h-5 w-5 ${index === 0 ? 'text-primary-500' : 'text-green-500'} mr-3 mt-0.5 flex-shrink-0`} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-8 space-y-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-primary-500" />
                          Personal tutor support
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                          Scheduled sessions
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MessageSquare className="h-4 w-4 mr-2 text-primary-500" />
                          Priority support
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="w-full mt-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg" asChild>
                          <Link href="/apply">
                            Apply Now
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.span>
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Which program is right for you?
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Laptop className="h-5 w-5 mr-2 text-secondary-500" />
                      Choose LMS Access if you:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Are self-motivated and disciplined</li>
                      <li>• Prefer flexible study schedules</li>
                      <li>• Want affordable access to quality content</li>
                      <li>• Learn well independently</li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary-500" />
                      Choose Full Enrollment if you:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Want personalised guidance</li>
                      <li>• Need help with specific topics</li>
                      <li>• Prefer structured learning</li>
                      <li>• Value regular feedback and support</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="journey" className="mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-primary-50/30 rounded-xl p-8 shadow-xl backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Your Learning Journey with 
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"> Crown</span>
                </h3>
                <div className="space-y-8">
                  {[
                    { num: "1", title: "Choose Your Program", desc: "Select between LMS Access for self-paced learning or Full Enrollment for comprehensive support." },
                    { num: "2", title: "Complete Application", desc: "Fill out our simple application form and schedule an optional consultation to discuss your goals." },
                    { num: "3", title: "Academic Assessment", desc: "Take our placement assessment to ensure we match you with the right level and resources." },
                    { num: "4", title: "Begin Learning", desc: "Start your Crown education journey with orientation, goal setting, and your first lessons." },
                    { num: "5", title: "Achieve Excellence", desc: "Progress through your curriculum, achieve your academic goals, and celebrate your success!" }
                  ].map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white font-semibold">{step.num}</span>
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{step.title}</h4>
                        <p className="text-gray-600 mt-1">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg" asChild>
                      <Link href="/apply">
                        Start Your Journey
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}