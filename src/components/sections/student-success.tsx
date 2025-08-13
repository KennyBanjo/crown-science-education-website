"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, TrendingUp, Trophy, GraduationCap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const successStories = [
  {
    name: "Emma Richardson",
    year: "Year 11",
    program: "Full Enrollment",
    beforeGrade: "C",
    afterGrade: "A*",
    subject: "Chemistry",
    story: "Emma joined Crown struggling with organic chemistry. Through personalised tutoring and dedicated support, she not only achieved an A* but also developed a passion for the subject.",
    university: "Accepted to Cambridge Natural Sciences",
    duration: "8 months",
  },
  {
    name: "Oliver James",
    year: "Year 13",
    program: "Full Enrollment",
    beforeGrade: "B",
    afterGrade: "A*",
    subject: "Physics",
    story: "Oliver needed help with advanced physics concepts for his university applications. Our targeted Oxbridge preparation helped him excel in both exams and interviews.",
    university: "Accepted to Oxford Physics",
    duration: "6 months",
  },
  {
    name: "Sophia Chen",
    year: "Year 10",
    program: "LMS Access",
    beforeGrade: "D",
    afterGrade: "A",
    subject: "Biology",
    story: "As a self-motivated learner, Sophia thrived with our LMS platform. The structured content and regular assessments helped her improve three grade levels.",
    achievement: "Top 5% in year group",
    duration: "1 year",
  },
  {
    name: "Marcus Thompson",
    year: "Year 12",
    program: "Full Enrollment",
    beforeGrade: "C",
    afterGrade: "A",
    subject: "Mathematics",
    story: "Marcus struggled with calculus until joining Crown. His tutor's patient approach and practical examples made complex concepts click.",
    achievement: "Gold in UK Maths Challenge",
    duration: "10 months",
  },
];

const statistics = [
  { value: "95%", label: "Grade Improvement Rate" },
  { value: "4.9/5", label: "Student Satisfaction" },
  { value: "87%", label: "Russell Group Success" },
  { value: "500+", label: "Success Stories" },
];

const testimonials = [
  {
    quote: "Crown Science Education transformed my son's academic journey. The personalised attention and expert teaching made all the difference.",
    author: "Sarah Williams",
    role: "Parent of Year 11 Student",
    rating: 5,
  },
  {
    quote: "The LMS platform is fantastic for independent study. I could learn at my own pace while still getting support when needed.",
    author: "Alex Kumar",
    role: "Year 12 Student",
    rating: 5,
  },
  {
    quote: "My daughter went from dreading science lessons to wanting to pursue medicine. The tutors here are truly exceptional.",
    author: "Michael Brown",
    role: "Parent of Year 10 Student",
    rating: 5,
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

const countUpVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

export function StudentSuccess() {
  const [selectedStory, setSelectedStory] = useState(0);

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Floating Background Elements */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-20 right-20 w-72 h-72 bg-primary-400/10 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/10 rounded-full mix-blend-multiply filter blur-3xl"
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
              Success Stories
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Real Students, Real Results
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our students consistently achieve remarkable improvements. Here are just a few 
            of the hundreds of success stories from Crown Science Education.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid gap-8 md:grid-cols-4"
        >
          {statistics.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={countUpVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100"
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Grade Transformation Stories
          </h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 bg-white/90 backdrop-blur-sm border shadow-lg hover:shadow-xl ${
                    selectedStory === index ? 'ring-2 ring-primary-500 border-primary-200 bg-primary-50/50' : 'hover:border-primary-200'
                  }`}
                  onClick={() => setSelectedStory(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs bg-secondary-100 text-secondary-700">
                        {story.program}
                      </Badge>
                      <span className="text-xs text-gray-500 font-medium">{story.duration}</span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-1">{story.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{story.year} • {story.subject}</p>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600">Grade:</span>
                        <span className="ml-2 text-lg font-semibold text-red-500">{story.beforeGrade}</span>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      </motion.div>
                      <div className="flex items-center">
                        <span className="text-lg font-semibold text-green-600">{story.afterGrade}</span>
                      </div>
                    </div>
                    
                    {story.university && (
                      <div className="flex items-center text-xs text-primary-600 mb-1">
                        <GraduationCap className="h-3 w-3 mr-1" />
                        <span className="font-medium">{story.university}</span>
                      </div>
                    )}
                    {story.achievement && (
                      <div className="flex items-center text-xs text-secondary-600">
                        <Trophy className="h-3 w-3 mr-1" />
                        <span className="font-medium">{story.achievement}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-6 p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 shadow-md"
          >
            <p className="text-gray-700 italic">
              &ldquo;{successStories[selectedStory].story}&rdquo;
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              — {successStories[selectedStory].name}
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            What Families Say About Crown
          </h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 rounded-2xl p-8 shadow-lg border border-primary-200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Success Story Starts Here
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their academic journey with 
              Crown Science Education. Whether you choose LMS Access or Full Enrollment, 
              we&apos;re committed to your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="bg-primary-500 hover:bg-primary-600 shadow-lg" asChild>
                  <Link href="/apply">
                    Start Your Journey
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
                <Button size="lg" variant="outline" className="border-primary-300 hover:bg-primary-50" asChild>
                  <Link href="/success-stories">
                    Read More Stories
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