"use client"

import { useState, useCallback, useMemo } from "react"
import { Linkedin, Twitter, Github, Mail, User, Filter, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FaLinkedin, FaTwitter, FaGithub, FaFemale } from "react-icons/fa"

// Team data with campus field - All categories in all campuses
const TEAM_DATA = [
  {
    title: "Regional Leadership",
    members: [
      {
        id: "rcd-1",
        name: "Dr. Anil Kumar",
        role: "Regional Contest Director (RCD)",
        bio: "Overall in charge of the regional site, ensures contest runs as per ICPC global standards",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/anil-kumar",
          email: "anil@amrita.edu"
        }
      },
      {
        id: "acd-1",
        name: "Prof. Meera Nair",
        role: "Associate Contest Director (ACD)",
        bio: "Head of Amrita Site, manages execution at the campus",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/meera-nair",
          email: "meera@amrita.edu"
        }
      },
      {
        id: "acd-2",
        name: "Dr. Rajesh Krishnan",
        role: "Campus Director - Chennai",
        bio: "Strategic leader overseeing Chennai campus operations and coordination",
        image: "/avatar.svg",
        campus: "chennai",
        socialLinks: {
          linkedin: "https://linkedin.com/in/rajesh-krishnan",
          email: "rajesh@amrita.edu"
        }
      },
      {
        id: "acd-3",
        name: "Prof. Sunita Reddy",
        role: "Campus Director - Bangalore",
        bio: "Executive leader managing Bangalore campus execution and partnerships",
        image: "/avatar.svg",
        campus: "bangalore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/sunita-reddy",
          email: "sunita@amrita.edu"
        }
      }
    ]
  },
  {
    title: "Technical Team",
    members: [
      {
        id: "tech-1",
        name: "Marcus Rodriguez",
        role: "Technical Coordinator",
        bio: "Full-stack architect with 8+ years in scalable systems",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/marcus-rodriguez",
          github: "https://github.com/marcus-rodriguez",
          email: "marcus@company.com"
        }
      },
      {
        id: "tech-2",
        name: "David Kim",
        role: "Head of Contest Environment",
        bio: "Cloud infrastructure specialist ensuring uniform technical environment across sites",
        image: "/avatar.svg",
        campus: "chennai",
        socialLinks: {
          linkedin: "https://linkedin.com/in/david-kim",
          github: "https://github.com/david-kim"
        }
      },
      {
        id: "tech-3",
        name: "Alex Morgan",
        role: "Lead - Technical Support",
        bio: "Automation expert focused on CI/CD and on-site technical assistance",
        image: "/avatar.svg",
        campus: "bangalore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/alex-morgan",
          github: "https://github.com/alex-morgan"
        }
      },
      {
        id: "tech-4",
        name: "Dr. Rajesh Patel",
        role: "Chief Judge / Problem Setter Jury Head",
        bio: "Leads the jury for problem setting & validation, ensures problem quality",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/rajesh-patel",
          email: "rajesh@amrita.edu"
        }
      },
      {
        id: "tech-5",
        name: "Vishnu Sharma",
        role: "Systems Administrator - Amritapuri",
        bio: "Manages server infrastructure and contest systems for Amritapuri campus",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/vishnu-sharma",
          github: "https://github.com/vishnu-sharma"
        }
      },
      {
        id: "tech-6",
        name: "Karthik Nair",
        role: "Network Administrator - Coimbatore",
        bio: "Oversees network security and connectivity for contest environment",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/karthik-nair",
          github: "https://github.com/karthik-nair"
        }
      },
      {
        id: "tech-7",
        name: "Anitha Menon",
        role: "Database Administrator - Chennai",
        bio: "Manages contest data integrity and backup systems",
        image: "/avatar.svg",
        campus: "chennai",
        socialLinks: {
          linkedin: "https://linkedin.com/in/anitha-menon",
          email: "anitha@amrita.edu"
        }
      },
      {
        id: "tech-8",
        name: "Ravi Kumar",
        role: "Technical Support Lead - Bangalore",
        bio: "Provides on-ground technical assistance during contest execution",
        image: "/avatar.svg",
        campus: "bangalore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/ravi-kumar",
          github: "https://github.com/ravi-kumar"
        }
      }
    ]
  },
  {
    title: "Operations & Events Team",
    members: [
      {
        id: "events-1",
        name: "Sarah Chen",
        role: "Head - Marketing & Operations",
        bio: "Strategic event planner leading marketing strategy and operational execution",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/sarah-chen",
          twitter: "https://twitter.com/sarah-chen",
          email: "sarah@company.com"
        }
      },
      {
        id: "events-2",
        name: "Emily Johnson",
        role: "Lead - Venue & Infrastructure",
        bio: "Operations specialist ensuring flawless venue preparation and execution",
        image: "/avatar.svg",
        campus: "bangalore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/emily-johnson",
          twitter: "https://twitter.com/emily-johnson"
        }
      },
      {
        id: "events-3",
        name: "Lisa Thompson",
        role: "Head - Collaborations & Sponsorship",
        bio: "Brand storyteller driving industry partnerships and sponsorship acquisition",
        image: "/avatar.svg",
        campus: "chennai",
        socialLinks: {
          linkedin: "https://linkedin.com/in/lisa-thompson",
          twitter: "https://twitter.com/lisa-thompson"
        }
      },
      {
        id: "events-4",
        name: "Pradeep Singh",
        role: "Operations Manager - Coimbatore",
        bio: "Coordinates daily operations and ensures smooth event execution",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/pradeep-singh",
          email: "pradeep@amrita.edu"
        }
      },
      {
        id: "events-5",
        name: "Deepika Rao",
        role: "Event Coordinator - Amritapuri",
        bio: "Manages local event planning and participant coordination",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/deepika-rao",
          twitter: "https://twitter.com/deepika-rao"
        }
      },
      {
        id: "events-6",
        name: "Amit Gupta",
        role: "Venue Manager - Chennai",
        bio: "Oversees venue setup, equipment, and facility management",
        image: "/avatar.svg",
        campus: "chennai",
        socialLinks: {
          linkedin: "https://linkedin.com/in/amit-gupta",
          email: "amit@amrita.edu"
        }
      },
      {
        id: "events-7",
        name: "Sneha Patel",
        role: "Sponsorship Coordinator - Bangalore",
        bio: "Develops corporate partnerships and manages sponsor relationships",
        image: "/avatar.svg",
        campus: "bangalore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/sneha-patel",
          twitter: "https://twitter.com/sneha-patel"
        }
      },
      {
        id: "events-8",
        name: "Rohit Verma",
        role: "Marketing Lead - Coimbatore",
        bio: "Drives marketing campaigns and social media outreach",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/rohit-verma",
          twitter: "https://twitter.com/rohit-verma"
        }
      }
    ]
  },
  {
    title: "Outreach & Communications",
    members: [
      {
        id: "outreach-1",
        name: "Priya Sharma",
        role: "Head - Outreach & Communication",
        bio: "Drives participant outreach and communication strategies across universities",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/priya-sharma",
          email: "priya@amrita.edu"
        }
      },
      {
        id: "outreach-2",
        name: "Arjun Mehta",
        role: "Lead - Media & Documentation",
        bio: "Handles official photography, videography and post-contest reports",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/arjun-mehta",
          twitter: "https://twitter.com/arjun-mehta"
        }
      },
      {
        id: "outreach-3",
        name: "Kavitha Krishnan",
        role: "Communications Manager - Chennai",
        bio: "Manages internal and external communications, press releases",
        image: "/avatar.svg",
        campus: "chennai",
        socialLinks: {
          linkedin: "https://linkedin.com/in/kavitha-krishnan",
          email: "kavitha@amrita.edu"
        }
      },
      {
        id: "outreach-4",
        name: "Rahul Joshi",
        role: "University Relations - Bangalore",
        bio: "Builds relationships with participating universities and colleges",
        image: "/avatar.svg",
        campus: "bangalore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/rahul-joshi",
          twitter: "https://twitter.com/rahul-joshi"
        }
      },
      {
        id: "outreach-5",
        name: "Meena Das",
        role: "Content Creator - Amritapuri",
        bio: "Creates engaging content for social media and promotional materials",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/meena-das",
          twitter: "https://twitter.com/meena-das"
        }
      },
      {
        id: "outreach-6",
        name: "Suresh Babu",
        role: "Public Relations - Coimbatore",
        bio: "Manages media relations and public communications",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/suresh-babu",
          email: "suresh@amrita.edu"
        }
      }
    ]
  },
  {
    title: "Hospitality & Logistics",
    members: [
      {
        id: "hosp-1",
        name: "Michael Zhang",
        role: "Lead - Food & Accommodation",
        bio: "Organizes meals and accommodation for participants, coaches, and jury",
        image: "/avatar.svg",
        campus: "bangalore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/michael-zhang",
          email: "michael@company.com"
        }
      },
      {
        id: "hosp-2",
        name: "Sofia Rodriguez",
        role: "Lead - Transportation",
        bio: "Coordinates all transportation logistics for participants and staff",
        image: "/avatar.svg",
        campus: "chennai",
        socialLinks: {
          linkedin: "https://linkedin.com/in/sofia-rodriguez",
          email: "sofia@company.com"
        }
      },
      {
        id: "hosp-3",
        name: "James Wilson",
        role: "Lead - Volunteer Management",
        bio: "Recruits, trains and manages volunteers for all campuses",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/james-wilson",
          email: "james@company.com"
        }
      },
      {
        id: "hosp-4",
        name: "Emma Davis",
        role: "Lead - Ceremonies & Cultural Events",
        bio: "Plans and executes opening/closing ceremonies and cultural programs",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/emma-davis",
          email: "emma@company.com"
        }
      },
      {
        id: "hosp-5",
        name: "Lakshmi Iyer",
        role: "Accommodation Manager - Amritapuri",
        bio: "Manages guest house bookings and participant accommodation",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/lakshmi-iyer",
          email: "lakshmi@amrita.edu"
        }
      },
      {
        id: "hosp-6",
        name: "Ganesh Kumar",
        role: "Food Service Manager - Coimbatore",
        bio: "Oversees catering services and dietary requirements",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/ganesh-kumar",
          email: "ganesh@amrita.edu"
        }
      },
      {
        id: "hosp-7",
        name: "Nisha Agarwal",
        role: "Transport Coordinator - Chennai",
        bio: "Manages shuttle services and airport transfers",
        image: "/avatar.svg",
        campus: "chennai",
        socialLinks: {
          linkedin: "https://linkedin.com/in/nisha-agarwal",
          email: "nisha@amrita.edu"
        }
      },
      {
        id: "hosp-8",
        name: "Kiran Reddy",
        role: "Volunteer Coordinator - Bangalore",
        bio: "Recruits and coordinates student volunteers for event support",
        image: "/avatar.svg",
        campus: "bangalore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/kiran-reddy",
          email: "kiran@amrita.edu"
        }
      },
      {
        id: "hosp-9",
        name: "Divya Menon",
        role: "Cultural Events Manager - Amritapuri",
        bio: "Organizes cultural programs and entertainment events",
        image: "/avatar.svg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/divya-menon",
          twitter: "https://twitter.com/divya-menon"
        }
      },
      {
        id: "hosp-10",
        name: "Arun Pillai",
        role: "Security Coordinator - Coimbatore",
        bio: "Ensures campus security and manages access control",
        image: "/avatar.svg",
        campus: "coimbatore",
        socialLinks: {
          linkedin: "https://linkedin.com/in/arun-pillai",
          email: "arun@amrita.edu"
        }
      }
    ]
  }
]

// Campus filter options
const CAMPUS_OPTIONS = [
  { value: "all", label: "All Campuses" },
  { value: "amritapuri", label: "Amritapuri" },
  { value: "coimbatore", label: "Coimbatore" },
  { value: "chennai", label: "Chennai" },
  { value: "bangalore", label: "Bangalore" }
]

// Social icons mapping
const SOCIAL_ICONS = {
  linkedin: { icon: FaLinkedin, label: "LinkedIn" },
  twitter: { icon: FaTwitter, label: "Twitter" },
  github: { icon: FaGithub, label: "GitHub" },
  email: { icon: Mail, label: "Email" }
}

// Mobile Filter Dropdown Component
const MobileFilterDropdown = ({ selectedCampus, onCampusChange, isOpen, onToggle }) => {
  const selectedOption = CAMPUS_OPTIONS.find(option => option.value === selectedCampus)
  
  return (
    <div className="relative lg:hidden mb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-600" />
          <span className="font-medium text-black">{selectedOption?.label}</span>
        </div>
        <ChevronDown 
          size={18} 
          className={`text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10 bg-black bg-opacity-25" 
            onClick={onToggle}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
            {CAMPUS_OPTIONS.map((campus) => (
              <button
                key={campus.value}
                onClick={() => {
                  onCampusChange(campus.value)
                  onToggle()
                }}
                className={`w-full text-left px-4 py-3 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  selectedCampus === campus.value
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="option"
                aria-selected={selectedCampus === campus.value}
              >
                {campus.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Desktop Campus Filter Component
const DesktopCampusFilter = ({ selectedCampus, onCampusChange }) => (
  <aside className="hidden lg:block w-64 flex-shrink-0">
    <div className="sticky top-8">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={20} className="text-gray-600" />
          <h3 className="font-medium text-black">Filter by Campus</h3>
        </div>
        <div className="space-y-2">
          {CAMPUS_OPTIONS.map((campus) => (
            <button
              key={campus.value}
              onClick={() => onCampusChange(campus.value)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                selectedCampus === campus.value
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              {campus.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </aside>
)

// Member card component with uniform height
const MemberCard = ({ member, isHovered, onHover, animationDelay }) => {
  const [imageError, setImageError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleImageError = useCallback(() => setImageError(true), [])
  const handleImageLoad = useCallback(() => setImageError(false), [])

  const handleMouseEnter = useCallback(() => onHover(member.id), [member.id, onHover])
  const handleMouseLeave = useCallback(() => onHover(null), [onHover])
  const handleFocus = useCallback(() => onHover(member.id), [member.id, onHover])
  const handleBlur = useCallback(() => onHover(null), [onHover])

  // Trigger animation after component mounts
  useState(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay)
    return () => clearTimeout(timer)
  }, [animationDelay])

  return (
    <article
      className={`group h-full flex flex-col transition-all duration-500 ease-out rounded-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      aria-labelledby={`member-${member.id}-name`}
      aria-describedby={`member-${member.id}-bio`}
    >
      {/* Fixed height container for the entire card */}
      <div className="flex flex-col h-full">
        {/* Image section - responsive sizing */}
        <div className="relative mb-4 sm:mb-6 overflow-hidden flex-shrink-0">
          <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 relative">
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <User size={32} className="sm:hidden text-gray-400" />
                <User size={48} className="hidden sm:block text-gray-400" />
              </div>
            ) : (
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-focus:scale-105"
                loading="lazy"
                onError={handleImageError}
                onLoad={handleImageLoad}
                decoding="async"
              />
            )}
            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-10' : 'opacity-0'}`} />
          </div>
        </div>

        {/* Content section - responsive typography */}
        <div className="flex flex-col flex-grow space-y-2 sm:space-y-3">
          {/* Name and role - responsive sizing */}
          <div className="flex-shrink-0">
            <h3 
              id={`member-${member.id}-name`} 
              className="text-lg sm:text-xl font-medium text-black tracking-tight leading-tight"
            >
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light mt-1 leading-tight">
              {member.role}
            </p>
          </div>

          {/* Bio section - responsive and truncated */}
          <div className="flex-grow flex items-start">
            {member.bio ? (
              <p 
                id={`member-${member.id}-bio`} 
                className="text-xs sm:text-sm text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 line-clamp-2 sm:line-clamp-3"
              >
                {member.bio}
              </p>
            ) : (
              <div className="text-xs sm:text-sm text-gray-500 leading-relaxed opacity-0">
                &nbsp;
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

// Team Section Header - responsive typography
const TeamSectionHeader = ({ title, isVisible }) => (
  <header className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}>
    <Badge variant="outline" className="mb-3 sm:mb-4 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs sm:text-sm">
      {title.replace(' Team', '')}
    </Badge>
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-black tracking-tight">
      {title}
    </h2>
    <div className="w-12 sm:w-16 h-px bg-black mx-auto mt-6 sm:mt-8 opacity-30" aria-hidden="true" />
  </header>
)

// Main TeamSection Component
export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [selectedCampus, setSelectedCampus] = useState("all")
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  
  const handleMemberHover = useCallback(id => setHoveredMember(id), [])
  const handleCampusChange = useCallback(campus => setSelectedCampus(campus), [])
  const toggleMobileFilter = useCallback(() => setMobileFilterOpen(prev => !prev), [])
  
  // Filter team sections based on selected campus
  const filteredTeamSections = useMemo(() => {
    if (selectedCampus === "all") return TEAM_DATA

    return TEAM_DATA.map(section => ({
      ...section,
      members: section.members.filter(member => member.campus === selectedCampus)
    })).filter(section => section.members.length > 0)
  }, [selectedCampus])

  // Trigger section animations
  useState(() => {
    filteredTeamSections.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSections(prev => new Set(prev).add(index))
      }, index * 200)
    })
  }, [filteredTeamSections])

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white min-h-screen" aria-labelledby="team-section-title">
      <div className="max-w-7xl mx-auto">
        <div className="sr-only">
          <h1 id="team-section-title">Our Team</h1>
        </div>

        {/* Mobile Filter */}
        <MobileFilterDropdown
          selectedCampus={selectedCampus}
          onCampusChange={handleCampusChange}
          isOpen={mobileFilterOpen}
          onToggle={toggleMobileFilter}
        />

        <div className="flex gap-6 lg:gap-8">
          {/* Desktop Filter Sidebar */}
          <DesktopCampusFilter 
            selectedCampus={selectedCampus}
            onCampusChange={handleCampusChange}
          />

          {/* Main Content */}
          <main className="flex-1 w-full min-w-0">
            {filteredTeamSections.map((section, sectionIndex) => (
              <section
                key={`section-${sectionIndex}`}
                className={`${sectionIndex > 0 ? "mt-16 sm:mt-24 lg:mt-32" : ""} transition-all duration-700 ease-out transform ${
                  visibleSections.has(sectionIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                aria-labelledby={`section-${sectionIndex}-title`}
              >
                <TeamSectionHeader 
                  title={section.title} 
                  isVisible={visibleSections.has(sectionIndex)}
                />

                {/* Responsive Grid */}
                <div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12" 
                  role="list" 
                  aria-label={`${section.title} members`}
                >
                  {section.members.map((member, memberIndex) => (
                    <div key={member.id} className="h-full">
                      <MemberCard
                        member={member}
                        isHovered={hoveredMember === member.id}
                        onHover={handleMemberHover}
                        animationDelay={(sectionIndex * 200) + (memberIndex * 100) + 300}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </section>
  )
}
