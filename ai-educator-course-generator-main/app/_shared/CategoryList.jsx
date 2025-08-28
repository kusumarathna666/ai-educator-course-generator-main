
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiDeadEye } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { PiBooksFill } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { MdSportsHandball } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

export default [
    {
        id: 1,
        name: 'Programming',
        icon: FaCode,   // 👈 Notice: only function reference, no JSX here
        prompt: ''
    },
    {
        id: 2,
        name: 'Health',
        icon: MdOutlineHealthAndSafety,
        prompt: ''
    },
    {
        id: 3,
        name: 'Creative',
        icon: GiDeadEye,
        prompt: ''
    },
    {
        id: 4,
        name: 'Business',
        icon: MdOutlineBusinessCenter,
        prompt: ''
    },
    {
        id: 5,
        name: 'Engineering Technologies',
        icon: PiBooksFill,
        prompt: ''
    },
    {
        id: 6,
        name: 'Personal Development',
        icon: GiBrain,
        prompt: ''
    },
    {
        id: 7,
        name: 'Lifestyle & Fitness',
        icon: MdSportsHandball,
        prompt: ''
    },
    {
        id: 8,
        name: 'Design',
        icon: FaPaintBrush,
        prompt: ''
    },
    {
        id: 9,
        name: 'Education & Teaching',
        icon: MdOutlineSchool,
        prompt: ''
    },
  
];
