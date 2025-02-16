"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Activity,
  ChevronDown,
  Droplet,
  LineChart,
  Menu,
  Shield,
  Sparkles,
  Timer,
  X,
  GlassWaterIcon as WaterIcon,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function Page() {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const GenerateIotOutline = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post("/api/iot", {
        name: "Chiranth",
      });

      console.log("API response:", result.data.result.resp);
      router.push("/monitoring");
      toast.success("Your connection is established!");
    } catch (error) {
      console.error("Error generating recipe:", error);
      toast.error("Failed to connect. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-background/80">
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden"
        >
          <div className="container h-full flex flex-col">
            <div className="flex justify-between items-center h-16 border-b">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold"
              >
                <WaterIcon className="h-6 w-6 text-primary" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  HydroSmart
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col gap-4 py-8">
              <Link
                href="/sign-in"
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                Log in
              </Link>
              <Button className="mt-4" size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-20 w-full overflow-hidden">
        <div className="container relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-3xl"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Aqua Vision Tech{" "}
              </h1>

              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                A Smart Water Management{" "}
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your water infrastructure with our cutting-edge IoT
                real-time analytics, and intelligent conservation solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Comprehensive Water Management Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)]"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Water Management?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of organizations already saving water and money.
              </p>
              {/* <Link href="/monitoring">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg font-medium"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Get Started Now
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
                  </motion.div>
                </Button>
              </Link> */}
              <Link href="/monitoring">
                <Button
                  onClick={GenerateIotOutline}
                  disabled={isLoading}
                  size="lg"
                  variant="secondary"
                  className="text-lg font-medium"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    "Connect to IOT"
                  )}
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Real-time Monitoring",
    description:
      "Track water usage patterns and receive instant alerts with our advanced IoT sensors.",
    icon: <Activity className="w-6 h-6 text-primary" />,
  },

  {
    title: "Leak Detection",
    description:
      "Advanced algorithms to detect and prevent water leaks before they become costly.",
    icon: <Droplet className="w-6 h-6 text-primary" />,
  },
  {
    title: "Conservation Tools",
    description:
      "Implement water-saving strategies with our intelligent conservation recommendations.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },

  {
    title: "Rewards",
    description:
      "Earn points and rewards for water conservation efforts and sustainable practices.",
    icon: <Timer className="w-6 h-6 text-primary" />,
  },
];

// "use client";

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import TopicInput from './_components/TopicInput';
// import { v4 as uuidv4 } from "uuid";
// import axios from 'axios';
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from 'next/navigation';
// import { toast } from 'sonner';
// import { Loader2 } from 'lucide-react';

// const Create = () => {
//   const { user } = useUser();
//   const [formData, setFormData] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const recipeId = uuidv4();
//   const router = useRouter();
//   const createdBy = user?.fullName || "unknown";

//   const handleUserInput = (fieldName, fieldValue) => {
//     setFormData(prev => ({ ...prev, [fieldName]: fieldValue }));
//   };

//   useEffect(() => {
//     console.log("Updated formData:", formData);
//   }, [formData]);

//   const GenerateRecipeOutline = async () => {
//     setIsLoading(true);
//     try {
//       const result = await axios.post('/api/generate-recipe', {
//         recipeId: recipeId,
//         ...formData,
//         createdBy: createdBy,
//       });

//       console.log("API response:", result.data.result.resp);
//       router.push("/dashboard/view");
//       toast.success("Your recipe is ready!");
//     } catch (error) {
//       console.error("Error generating recipe:", error);
//       toast.error("Failed to generate recipe. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className='container mx-auto px-4 py-8'>
//       <Card className="w-full max-w-2xl mx-auto">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-center">Create Your Recipe</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <TopicInput
//             setIngridients={(value) => handleUserInput('ingridients', value)}
//             setCalories={(value) => handleUserInput('calories', value)}
//           />
//         </CardContent>
//         <CardFooter className="flex justify-center">
//           <Button
//             onClick={GenerateRecipeOutline}
//             disabled={isLoading}
//             className="w-full sm:w-auto"
//           >
//             {isLoading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Generating...
//               </>
//             ) : (
//               'Generate Recipe'
//             )}
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Create;
