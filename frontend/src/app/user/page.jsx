'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, MapPin, User, Bell, Smartphone, Key, Globe, ShoppingBag, Compass, BookOpen, Mail, Phone, Briefcase, Calendar, Edit, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const menuItems = [
    { icon: <MapPin className="w-5 h-5" />, label: 'My Address' },
    { icon: <User className="w-5 h-5" />, label: 'Account' },
    { icon: <Bell className="w-5 h-5" />, label: 'Notifications' },
    { icon: <Smartphone className="w-5 h-5" />, label: 'Devices' },
    { icon: <Key className="w-5 h-5" />, label: 'Passwords' },
    { icon: <Globe className="w-5 h-5" />, label: 'Language' },
  ]

  const skills = [
    { name: 'Photography', level: 80 },
    { name: 'Videography', level: 65 },
    { name: 'Photo Editing', level: 90 },
    { name: 'Social Media', level: 75 },
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
          <img 
        src="https://www.portotheme.com/wordpress/porto/shortcodes/wp-content/uploads/sites/32/2016/06/team-1.jpg" 
        alt="Profile" 
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
            <div className="absolute top-2 right-2 flex items-center space-x-2 bg-black bg-opacity-50 rounded-full p-1">
              <Moon className="w-4 h-4 text-white" />
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                aria-label="Toggle dark mode"
              />
              <Sun className="w-4 h-4 text-white" />
            </div>
            
          </div>
          <div className="pt-16 pb-8 px-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Miranda West</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Professional Photographer | Content Creator
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Work hard in silence. Let your success be the noise.
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <Badge variant="secondary">Photography</Badge>
              <Badge variant="secondary">Videography</Badge>
              <Badge variant="secondary">Social Media</Badge>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                I'm a passionate photographer and content creator with over 5 years of experience. 
                I specialize in landscape and portrait photography, and I love to capture the beauty of the world around us. 
                When I'm not behind the camera, you can find me editing photos or exploring new locations for my next shoot.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">miranda.west@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">Freelance Photographer</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">Joined January 2018</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="w-full" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Work</CardTitle>
            <CardDescription>A selection of my latest photography projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative aspect-square">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=Project ${item}`}
                    alt={`Project ${item}`}
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Plus className="w-4 h-4 mr-2" /> Add New Project
            </Button>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-around py-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <Button variant="ghost" className="flex flex-col items-center">
            <ShoppingBag className="w-6 h-6" />
            <span className="mt-1 text-xs">Shop</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <Compass className="w-6 h-6" />
            <span className="mt-1 text-xs">Explore</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <BookOpen className="w-6 h-6" />
            <span className="mt-1 text-xs">Brands</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <User className="w-6 h-6" />
            <span className="mt-1 text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  )
}