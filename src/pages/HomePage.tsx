import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Smartphone, 
  BarChart3, 
  Leaf, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Irrigation
              <span className="text-emerald-500 block">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your garden with intelligent watering systems. Monitor soil moisture, 
              control irrigation schedules, and optimize water usage with our advanced IoT platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/login"
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Login to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Irrigation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create the perfect growing environment for your plants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Remote Control",
                description: "Monitor and control your irrigation system from anywhere using our mobile-friendly interface."
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Smart Analytics",
                description: "Track water usage, soil moisture levels, and plant health with detailed analytics and reports."
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Automated Scheduling",
                description: "Set custom watering schedules based on weather conditions, soil moisture, and plant requirements."
              },
              {
                icon: <Droplets className="h-8 w-8" />,
                title: "Water Conservation",
                description: "Reduce water waste by up to 50% with precision irrigation and smart moisture sensors."
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Plant Health Monitoring",
                description: "Real-time monitoring of soil conditions, temperature, and humidity for optimal plant growth."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Weather Integration",
                description: "Automatic adjustment based on weather forecasts and rainfall predictions."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose AquaFlow?
              </h2>
              <div className="space-y-6">
                {[
                  "Save up to 50% on water bills with intelligent irrigation",
                  "Increase plant health and yield with optimal watering",
                  "Remote monitoring and control from anywhere",
                  "Weather-based automatic adjustments",
                  "Easy installation and setup process"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                  <Droplets className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Start Your Smart Garden Today
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of gardeners who have transformed their irrigation with AquaFlow
                </p>
                <Link
                  to="/register"
                  className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg inline-block"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AquaFlow</span>
            </div>
            <p className="text-gray-400 mb-4">
              Smart irrigation solutions for sustainable gardening
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 AquaFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;