"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Microscope, 
  FlaskConical, 
  Atom, 
  Calculator,
  BookOpen,
  Target,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
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

const subjects = [
  {
    icon: Microscope,
    name: "Biology",
    description: "From cells to ecosystems, master life sciences",
    topics: ["Cell Biology", "Genetics", "Ecology", "Human Biology", "Evolution"],
    levels: ["GCSE", "A-Level", "IB"],
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: FlaskConical,
    name: "Chemistry",
    description: "Understand matter and its transformations",
    topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Methods"],
    levels: ["GCSE", "A-Level", "IB"],
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Atom,
    name: "Physics",
    description: "Explore forces, energy, and the universe",
    topics: ["Mechanics", "Thermodynamics", "Waves", "Electricity", "Quantum Physics"],
    levels: ["GCSE", "A-Level", "IB"],
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Calculator,
    name: "Mathematics",
    description: "Essential maths for science excellence",
    topics: ["Algebra", "Calculus", "Statistics", "Trigonometry", "Applied Mathematics"],
    levels: ["GCSE", "A-Level", "Further Maths"],
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const examPrep = [
  {
    exam: "GCSE Sciences",
    description: "Comprehensive preparation for all science GCSEs",
    features: ["Past paper practice", "Exam techniques", "Topic revision", "Mock exams"],
  },
  {
    exam: "A-Level Sciences",
    description: "Advanced preparation for university entrance",
    features: ["In-depth content coverage", "Practical skills", "Essay writing", "University prep"],
  },
  {
    exam: "11+ & 13+ Science",
    description: "Entrance exam preparation for selective schools",
    features: ["Interview preparation", "Problem-solving", "Critical thinking", "Time management"],
  },
];

export function SubjectsOffered() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Background Elements */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-10 left-20 w-96 h-96 bg-secondary-300/20 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-20 w-80 h-80 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl"
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
            <Badge variant="outline" className="mb-4 border-white/30 bg-white/10 backdrop-blur-sm text-white">
              <Sparkles className="h-3 w-3 mr-1" />
              Our Curriculum
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Comprehensive Science Education
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-white/90 max-w-3xl mx-auto"
          >
            Our expert tutors cover all major science subjects from foundational concepts to advanced topics. 
            Every course is aligned with UK curriculum standards and exam specifications.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader>
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${subject.color} mb-4 shadow-lg`}
                  >
                    <subject.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-1">
                        {subject.topics.slice(0, 3).map((topic, topicIndex) => (
                          <motion.div
                            key={topicIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: topicIndex * 0.1 }}
                          >
                            <Badge variant="secondary" className="text-xs bg-gray-100">
                              {topic}
                            </Badge>
                          </motion.div>
                        ))}
                        {subject.topics.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{subject.topics.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Levels:</p>
                      <div className="flex flex-wrap gap-2">
                        {subject.levels.map((level, levelIndex) => (
                          <span key={levelIndex} className="text-xs text-gray-600">
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full mt-4 border-gray-200 hover:bg-gradient-to-r hover:${subject.color} hover:text-white hover:border-transparent transition-all duration-300`} 
                      asChild
                    >
                      <Link href={`/subjects/${subject.name.toLowerCase()}`}>
                        View Curriculum
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold text-white">
              Exam Preparation Programs
            </h3>
            <p className="mt-2 text-white/80">
              Focused preparation for key examinations with proven results
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {examPrep.map((exam, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/95 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{exam.exam}</h4>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Target className="h-5 w-5 text-primary-500" />
                  </motion.div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{exam.description}</p>
                <ul className="space-y-2">
                  {exam.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <TrendingUp className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-sm text-white/80 mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <BookOpen className="h-4 w-4" />
            <span>All subjects available in both LMS Access and Full Enrollment programs</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-50 shadow-xl" asChild>
                <Link href="/apply">
                  Apply for Full Program
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white/10 backdrop-blur-sm" asChild>
                <Link href="/subjects">
                  Explore All Subjects
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}