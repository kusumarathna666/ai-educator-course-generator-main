// "use client";
// import { motion } from "framer-motion";
// import { Mail } from "lucide-react";

// function AboutUs() {
//   const developers = [
//     {
//       name: "Bharath Rajashekar",
//       role: "Student, 4th Year, B.E",
//       dept: "Computer Science and Design",
//       college: "Dayananda Sagar Academy of Technology & Management",
//       location: "Bengaluru, India",
//       email: "bharath.rajashekar3@gmail.com",
//     },
//     {
//       name: "Shankar S",
//       role: "Student, 4th Year, B.E",
//       dept: "Computer Science and Design",
//       college: "Dayananda Sagar Academy of Technology & Management",
//       location: "Bengaluru, India",
//       email: "yuvanshankar0715@gmail.com",
//     },
//     {
//       name: "Tanush Reddy K",
//       role: "Student, 4th Year, B.E",
//       dept: "Computer Science and Design",
//       college: "Dayananda Sagar Academy of Technology & Management",
//       location: "Bengaluru, India",
//       email: "k.tanush2003@gmail.com",
//     },
//     {
//       name: "Kusuma H",
//       role: "Student, 4th Year, B.E",
//       dept: "Computer Science and Design",
//       college: "Dayananda Sagar Academy of Technology & Management",
//       location: "Bengaluru, India",
//       email: "kusumarathna666@gmail.com",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-br from-[#f1f5f9] to-white py-20 w-full">
//       <div className="max-w-[1400px] mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-6"
//         >
//           Meet the Developers
//         </motion.h2>
//         <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-base">
//           We're a team of creative engineers passionate about tech, innovation, and building impactful experiences.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {developers.map((dev, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//               className="group relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-md transition-all hover:shadow-xl hover:scale-105 duration-300 text-left max-w-xs mx-auto"
//             >
//               <div className="space-y-1">
//                 <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
//                   {dev.name}
//                 </h3>
//                 <p className="text-sm text-gray-600">{dev.role}</p>
//                 <p className="text-sm text-gray-600">{dev.dept}</p>
//                 <p className="text-sm text-gray-600">{dev.college}</p>
//                 <p className="text-xs text-gray-500">{dev.location}</p>
//               </div>
//               <div className="mt-3 flex items-center gap-2 text-xs text-indigo-600">
//                 <Mail className="w-4 h-4" />
//                 <a href={`mailto:${dev.email}`} className="hover:underline break-words">{dev.email}</a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;
