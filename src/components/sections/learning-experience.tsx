"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  Users, 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  Laptop,
  Target,
  Clock,
  Brain,
  FileCheck
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Personalised Learning Plans",
    description: "Custom-designed curriculum based on your strengths, weaknesses, and academic goals",
    highlight: "Tailored to You",
  },
  {
    icon: Users,
    title: "Small Group Sessions",
    description: "Maximum 6 students per group for collaborative learning while maintaining individual attention",
    highlight: "Interactive Learning",
  },
  {
    icon: Laptop,
    title: "Digital Learning Platform",
    description: "24/7 access to resources, assignments, and interactive content on any device",
    highlight: "Learn Anywhere",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Detailed analytics showing improvement areas and celebrating achievements",
    highlight: "Data-Driven",
  },
  {
    icon: MessageSquare,
    title: "Continuous Support",
    description: "Direct messaging with tutors, peer collaboration, and parent communication channels",
    highlight: "Always Connected",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Clear milestones and regular assessments to ensure you're on track for success",
    highlight: "Results Focused",
  },
];

const learningProcess = [
  {
    step: "1",
    title: "Initial Assessment",
    description: "We evaluate your current level and identify areas for improvement",
    icon: FileCheck,
  },
  {
    step: "2",
    title: "Custom Plan Creation",
    description: "Your personal learning plan is designed to address your specific needs",
    icon: Target,
  },
  {
    step: "3",
    title: "Active Learning",
    description: "Engage with interactive content, live sessions, and practical exercises",
    icon: Sparkles,
  },
  {
    step: "4",
    title: "Regular Review",
    description: "Weekly progress reviews and plan adjustments ensure optimal learning",
    icon: BarChart3,
  },
];

const scheduleOptions = [
  {
    type: "Weekday Evenings",
    times: "4:00 PM - 8:00 PM",
    ideal: "School students",
  },
  {
    type: "Weekend Mornings",
    times: "9:00 AM - 1:00 PM",
    ideal: "Intensive study",
  },
  {
    type: "Flexible Slots",
    times: "Custom scheduling",
    ideal: "Busy families",
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

export function LearningExperience() {
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
              Learning Experience
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl"
          >
            What Makes Crown Special
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-white/90 max-w-3xl mx-auto"
          >
            Our unique blend of personalised attention, cutting-edge technology, and proven 
            teaching methods creates an environment where every student thrives.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-0 bg-white/95 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="h-10 w-10 rounded-lg bg-gradient-to-br from-white to-white/90 shadow-lg flex items-center justify-center"
                    >
                      <feature.icon className="h-5 w-5 text-primary-600" />
                    </motion.div>
                    <Badge variant="secondary" className="text-xs bg-white/80 text-primary-700">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
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
          className="mt-16 bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <h3 className="text-2xl font-display font-semibold text-gray-900 mb-8 text-center">
            Your Learning Journey
          </h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-4"
          >
            {learningProcess.map((process, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                {index < learningProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 -z-10" />
                )}
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg"
                  >
                    {process.step}
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-600">{process.description}</p>
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
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" as const }}
                className="inline-block mr-2"
              >
                <Clock className="h-5 w-5 text-primary-600" />
              </motion.div>
              Flexible Scheduling
            </h3>
            <p className="text-gray-600 mb-6">
              We understand that every family has different schedules. That&apos;s why we offer 
              flexible timing options to fit your lifestyle.
            </p>
            <div className="space-y-4">
              {scheduleOptions.map((schedule, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-3 bg-white/80 rounded-lg hover:bg-white transition-colors duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
                  <div>
                    <p className="font-semibold text-gray-900">{schedule.type}</p>
                    <p className="text-sm text-gray-600">{schedule.times}</p>
                    <p className="text-xs text-gray-500">Ideal for: {schedule.ideal}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                <Calendar className="h-5 w-5 text-secondary-600" />
              </motion.div>
              Academic Calendar
            </h3>
            <p className="text-gray-600 mb-6">
              Our programs align with the UK academic calendar, ensuring seamless integration 
              with school schedules and exam periods.
            </p>
            <div className="space-y-3">
              {[
                { term: "Autumn Term", period: "September - December", bg: "bg-white" },
                { term: "Spring Term", period: "January - March", bg: "bg-white" },
                { term: "Summer Term", period: "April - July", bg: "bg-white" },
                { term: "Intensive Revision", period: "Holiday programs available", bg: "bg-primary-50 border-primary-200" }
              ].map((term, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 ${term.bg} rounded-lg border border-gray-100 transition-all duration-200`}
                >
                  <p className="font-semibold text-gray-900 text-sm">{term.term}</p>
                  <p className="text-xs text-gray-600">{term.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}