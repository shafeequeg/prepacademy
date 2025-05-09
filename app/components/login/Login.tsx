import { useState } from 'react';
import { X, ArrowRight, UserCircle, Mail, Phone, Lock } from 'lucide-react';

interface LoginFormProps {
  closeModal: () => void;
  onSuccess: () => void;
  source: 'chatbot' | 'percentage-calculator';
}

const LoginModal: React.FC<LoginFormProps> = ({ closeModal, onSuccess, source }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    target_exam_year:'',
    gender:'',
    program_interest:'',
    password: '',
  });
  
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(source);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate login, then call onSuccess
    setTimeout(() => {
      onSuccess();
      closeModal();
    }, 1000);
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 h-40 md:h-auto md:w-1/2 flex items-center justify-center overflow-hidden">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" 
                 style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.3) 2%, transparent 0%)', backgroundSize: '100px 100px' }}>
            </div>
          </div>
          
          {/* Close button for mobile */}
          <div className="absolute top-3 right-3 md:hidden">
            <button
              onClick={closeModal}
              className="text-white hover:text-gray-200 transition-colors p-1 bg-orange-600 bg-opacity-30 rounded-full"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Illustration */}
          <div className="relative w-full h-full flex items-center justify-center p-6">
            <div className="w-full max-w-xs">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M389.6,219.6c-3.8-7.1-9-13.3-15.3-17.8c-28.8-20.3-65.4-33.2-105.4-35.6c-39.7-2.3-78.8,6.1-110.2,23.4
                c-8.9,4.9-16.2,10.9-21.5,18.1c-5.3,7.1-8.5,15.2-9.3,24.3c-0.5,5.1-0.2,10.1,0.6,15c1.7,11.6,6.5,21.9,13.3,30.9
                c13.5,17.8,34.7,30.3,59.8,36.8c25.1,6.4,53.7,7.1,82.3,1.7c29.2-5.5,56.7-16.8,78.6-32.6c11-7.9,20.1-17.1,26.6-27.2
                c3.3-5.1,5.9-10.5,7.8-16.1C399.7,240.5,400.4,229.2,389.6,219.6z" fill="#FFA500" opacity="0.2"/>
                <circle cx="250" cy="190" r="80" fill="#FFFFFF"/>
                <path d="M250,130c33.1,0,60,26.9,60,60s-26.9,60-60,60s-60-26.9-60-60S216.9,130,250,130z" 
                      fill="#FFB74D" stroke="#FFA000" strokeWidth="6"/>
                <path d="M330,270c-10,30-40,50-80,50s-70-20-80-50" 
                      stroke="#FFA000" strokeWidth="6" fill="none" strokeLinecap="round"/>
                <rect x="130" y="290" width="240" height="140" rx="20" fill="#FFFFFF" stroke="#FFA000" strokeWidth="6"/>
                <path d="M150,290h200v40H150V290z" fill="#FFB74D"/>
                <circle cx="250" cy="360" r="30" fill="#FFFFFF" stroke="#FFA000" strokeWidth="4"/>
                <path d="M235,360h30" stroke="#FFA000" strokeWidth="4" strokeLinecap="round"/>
                <path d="M250,345v30" stroke="#FFA000" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          {/* Brand name */}
          <div className="absolute bottom-6 w-full flex justify-center">
            <div className="bg-white px-6 py-2 rounded-full shadow-lg">
              <h2 className="text-xl font-bold text-orange-600">PrepAcademy</h2>
            </div>
          </div>
        </div>

        {/* Right Side - Form content */}
        <div className="p-6 md:w-1/2">
          {/* Desktop close button */}
          <div className="absolute top-3 right-3 hidden md:block">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Welcome Back!</h2>
          <p className="text-center text-gray-600 mb-6">Sign in to access your courses</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <UserCircle className={`${activeField === 'name' ? 'text-orange-500' : 'text-gray-400'} transition-colors`} size={18} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
                className={`pl-10 w-full p-3 border ${activeField === 'name' ? 'border-orange-500 ring-2 ring-orange-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all`}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className={`${activeField === 'email' ? 'text-orange-500' : 'text-gray-400'} transition-colors`} size={18} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
                className={`pl-10 w-full p-3 border ${activeField === 'email' ? 'border-orange-500 ring-2 ring-orange-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all`}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone className={`${activeField === 'phone' ? 'text-orange-500' : 'text-gray-400'} transition-colors`} size={18} />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                required
                className={`pl-10 w-full p-3 border ${activeField === 'phone' ? 'border-orange-500 ring-2 ring-orange-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all`}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className={`${activeField === 'password' ? 'text-orange-500' : 'text-gray-400'} transition-colors`} size={18} />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
                required
                className={`pl-10 w-full p-3 border ${activeField === 'password' ? 'border-orange-500 ring-2 ring-orange-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all`}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-orange-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center group transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Sign In</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-orange-600 hover:underline font-medium">
                Sign up
              </a>
            </p>
          </div>
        
          {/* Footer */}
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>By logging in, you agree to our Terms and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;