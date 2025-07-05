import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const existingUser = JSON.parse(localStorage.getItem('user'));
  
    if (isLogin) {
     
      if (existingUser && existingUser.email === formData.email && existingUser.password === formData.password) {
       
        alert('Login successful!');
        localStorage.setItem('user', JSON.stringify(existingUser)); // You can update or just use existing data
  
 
        window.location.href = '/';
      } else {
        alert('Invalid no account found. Please sign up.');
      }
    } else {
  
      if (!existingUser || existingUser.email !== formData.email) {
        const userData = {
          name: formData.name || 'Guest User',
          email: formData.email,
          password: formData.password,
          loginTime: new Date().toISOString()
        };
  
        localStorage.setItem('user', JSON.stringify(userData)); 
        alert('Registration successful!');
  
    
        setFormData({ name: '', email: '', password: '' });
        setIsLogin(true); 
      } else {
        alert('User already exists, please log in.');
      }
    }
  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-200 relative overflow-hidden px-4">
      {/* Floating Leaves */}
      {[{
        className: "top-20 left-10 text-green-300 opacity-30 text-6xl",
        y: [0, -15, 0],
        rotate: [0, 5, 0],
        delay: 0
      }, {
        className: "bottom-20 right-10 text-green-400 opacity-40 text-8xl",
        y: [0, 15, 0],
        rotate: [0, -5, 0],
        delay: 1
      }, {
        className: "top-1/3 right-1/4 text-emerald-200 opacity-20 text-7xl",
        scale: [1, 1.1, 1],
        rotate: [0, 10, 0],
        delay: 2
      }].map((leaf, i) => (
        <motion.div
          key={i}
          className={`absolute ${leaf.className}`}
          animate={{ y: leaf.y, rotate: leaf.rotate, scale: leaf.scale }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: leaf.delay
          }}
        >
          <FaLeaf />
        </motion.div>
      ))}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-white p-6 text-center relative">
            <FaLeaf className="absolute top-3 left-3 text-white/20 text-4xl" />
            <FaLeaf className="absolute bottom-3 right-3 text-white/20 text-4xl" />
            <h2 className="text-3xl font-bold text-green-600">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-green-600 mt-1">
              {isLogin ? 'Sign in to continue' : 'Join our plant-loving community'}
            </p>
          </div>

        
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-green-600">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="name"
                      required
                    />
                  </div>
                </motion.div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-green-600">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    placeholder="email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-green-600">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
                {isLogin && (
                  <div className="text-right mt-2">
                    <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-shadow shadow-md hover:shadow-lg flex items-center justify-center"
              >
                {isLogin ? 'Sign In' : 'Register'}
                <FaLeaf className="ml-2" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                {isLogin ? 'Need an account? ' : 'Already have an account? '}
                <span className="underline">
                  {isLogin ? 'Register' : 'Sign In'}
                </span>
              </button>
            </div>

           
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
