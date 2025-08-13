"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Award, BookOpen, Users, Quote } from "lucide-react";
import { motion } from "framer-motion";

const educators = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Head of Biology",
    qualification: "PhD in Molecular Biology, Cambridge",
    experience: "15+ years teaching experience",
    specialties: ["A-Level Biology", "GCSE Sciences", "Medical School Prep"],
    rating: 4.9,
    students: 200,
    image: "/tutors/sarah.jpg",
  },
  {
    name: "Prof. James Chen",
    role: "Senior Physics Tutor",
    qualification: "MSc Physics, Oxford",
    experience: "12+ years teaching experience",
    specialties: ["A-Level Physics", "Further Mathematics", "Oxbridge Prep"],
    rating: 4.8,
    students: 150,
    image: "/tutors/james.jpg",
  },
  {
    name: "Dr. Emily Roberts",
    role: "Chemistry Department Lead",
    qualification: "PhD in Organic Chemistry, Imperial",
    experience: "10+ years teaching experience",
    specialties: ["A-Level Chemistry", "IB Chemistry", "Research Projects"],
    rating: 5.0,
    students: 180,
    image: "/tutors/emily.jpg",
  },
  {
    name: "Michael Thompson",
    role: "Mathematics Specialist",
    qualification: "MEng, LSE",
    experience: "8+ years teaching experience",
    specialties: ["Further Maths", "Statistics", "Engineering Prep"],
    rating: 4.9,
    students: 120,
    image: "/tutors/michael.jpg",
  },
];

const teachingPhilosophy = [
  {
    icon: Users,
    title: "Personalised Approach",
    description: "Every student learns differently. We adapt our teaching methods to match each student's learning style.",
  },
  {
    icon: BookOpen,
    title: "Conceptual Understanding",
    description: "We focus on deep understanding rather than rote memorisation, building strong foundations.",
  },
  {
    icon: Award,
    title: "Excellence Standards",
    description: "Our tutors are selected from top universities and undergo continuous professional development.",
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

export function MeetEducators() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Premium Secondary Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 via-secondary-600 to-primary-500">
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
        className="absolute top-16 right-16 w-64 h-64 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl"
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
              Our Team
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl"
          >
            Learn from the Best Science Educators
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-white/90 max-w-3xl mx-auto"
          >
            Our tutors are carefully selected from top universities, bringing expertise, 
            passion, and proven teaching methods to help every student excel.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {educators.map((educator, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden bg-white/95 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-white/90 to-white/70 p-8">
                  <div className="flex items-center justify-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl font-bold text-white">
                        {educator.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </motion.div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900">{educator.name}</h3>
                  <p className="text-sm text-primary-600 mb-2 font-medium">{educator.role}</p>
                  <p className="text-xs text-gray-600 mb-3">{educator.qualification}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                      <span className="font-medium">{educator.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-secondary-600" />
                      <span>{educator.students}+ students</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-gray-700">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {educator.specialties.slice(0, 2).map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs bg-primary-100 text-primary-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-600">{educator.experience}</p>
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
            Our Teaching Philosophy
          </h3>
          <motion.div 
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-3"
          >
            {teachingPhilosophy.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mb-4 shadow-lg"
                >
                  <item.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
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
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Quote className="h-10 w-10 text-white/30 mx-auto mb-4" />
            </motion.div>
            <p className="text-lg italic mb-4">
              &ldquo;The quality of teaching at Crown Science Education is exceptional. My daughter&apos;s 
              confidence in sciences has transformed completely, and her grades have improved from 
              B&apos;s to A*&apos;s across all subjects.&rdquo;
            </p>
            <p className="font-semibold">— Parent of Year 11 Student</p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/90 mb-6">
            All our educators undergo rigorous selection and continuous training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl" asChild>
                <Link href="/tutors">
                  Meet All Tutors
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/apply">
                  Match Me with a Tutor
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}