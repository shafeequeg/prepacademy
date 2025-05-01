"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CreditCard,
  Lock,
  CheckCircle,
  Wallet,
  X,
  AlertCircle,
  Building,
} from "lucide-react";

interface CourseType {
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  duration: string;
}

interface FormDataType {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  upiId: string;
  walletNumber: string;
  country: string;
}

interface ErrorsType {
  [key: string]: string;
}

type PaymentMethodType = "card" | "upi" | "wallet" | "netbanking";

// Sample course data
const sampleCourse: CourseType = {
  title: "Advanced Web Development",
  price: "₹649",
  originalPrice: "₹2,999",
  discount: "₹2,350 (78% Off)",
  duration: "12 months",
};

export default function PaymentPage() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>("upi");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [course, setCourse] = useState<CourseType>(sampleCourse);
  const [formData, setFormData] = useState<FormDataType>({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    email: "basil@gmail.com",
    address: "",
    city: "",
    state: "Kerala",
    pincode: "",
    upiId: "",
    walletNumber: "",
    country: "India",
  });
  const [errors, setErrors] = useState<ErrorsType>({});

  // We would typically fetch course details based on UUID
  // useEffect(() => {
  //   console.log("User UUID:", params.uuid);
  //   // Here you would fetch course details using the UUID
  //   // setCourse(fetchedCourse);
  // }, [params.uuid]);
  // console.log(params.uuid);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(setCourse);

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ErrorsType = {};

    if (step === 1) {
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";

      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.pincode) newErrors.pincode = "Pincode is required";
      else if (!/^\d{6}$/.test(formData.pincode))
        newErrors.pincode = "Pincode must be 6 digits";
    } else if (step === 2 && paymentMethod === "card") {
      if (!formData.cardNumber)
        newErrors.cardNumber = "Card number is required";
      else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, "")))
        newErrors.cardNumber = "Card number must be 16 digits";

      if (!formData.cardHolder)
        newErrors.cardHolder = "Card holder name is required";

      if (!formData.expiryDate)
        newErrors.expiryDate = "Expiry date is required";
      else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate))
        newErrors.expiryDate = "Format must be MM/YY";

      if (!formData.cvv) newErrors.cvv = "CVV is required";
      else if (!/^\d{3,4}$/.test(formData.cvv))
        newErrors.cvv = "CVV must be 3 or 4 digits";
    } else if (step === 2 && paymentMethod === "upi") {
      if (!formData.upiId) newErrors.upiId = "UPI ID is required";
      else if (!formData.upiId.includes("@"))
        newErrors.upiId = "Invalid UPI ID format";
    } else if (step === 2 && paymentMethod === "wallet") {
      if (!formData.walletNumber)
        newErrors.walletNumber = "Mobile number is required";
      else if (!/^\d{10}$/.test(formData.walletNumber))
        newErrors.walletNumber = "Mobile number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (): void => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const handleBack = (): void => {
    setStep(step - 1);
  };

  const formatCardNumber = (value: string): string => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData({
      ...formData,
      cardNumber: formattedValue,
    });

    if (errors.cardNumber) {
      setErrors({
        ...errors,
        cardNumber: "",
      });
    }
  };

  const handlePayment = (): void => {
    if (validateForm()) {
      setIsProcessing(true);

      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3); // Move to success step
      }, 2000);
    }
  };

  const handleSuccess = (): void => {
    router.push("/my-courses");
  };

  return (
    <div className="min-h-screen bg-[#2B1615] text-orange-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-orange-900 bg-[#1F100F] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-orange-100">
            Secure Checkout
          </h1>
          <button
            onClick={() => router.back()}
            className="text-orange-400 hover:text-orange-300"
          >
            <X size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow container mx-auto py-6 px-4 md:px-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Payment Form */}
          <div className="lg:col-span-2">
            {step < 3 && (
              <div className="mb-6">
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 1
                        ? "bg-orange-500 text-white"
                        : "bg-orange-900 text-orange-400"
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step >= 2 ? "bg-orange-500" : "bg-orange-900"
                    }`}
                  ></div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 2
                        ? "bg-orange-500 text-white"
                        : "bg-orange-900 text-orange-400"
                    }`}
                  >
                    2
                  </div>
                  <div className="flex-1 h-1 mx-2 bg-orange-900"></div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-900 text-orange-400">
                    3
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-orange-400">
                  <div className="text-center">Account Details</div>
                  <div className="text-center">Payment Method</div>
                  <div className="text-center">Confirmation</div>
                </div>
              </div>
            )}

            {/* Step 1: Billing Info */}
            {step === 1 && (
              <div className="bg-[#3B211F] rounded-lg p-4 md:p-6 shadow-xl">
                <h2 className="text-xl font-semibold text-orange-200 mb-6">
                  Billing Information
                </h2>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <label className="text-orange-200">
                      1. Account details (user@gmail.com)
                    </label>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-orange-200 mt-6 mb-4">
                  2. Billing address & Payment method
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-orange-300 text-sm font-medium mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <select
                          name="country"
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              country: e.target.value,
                            })
                          }
                          className="w-full p-3 border border-orange-900 bg-[#2B1615] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-100"
                        >
                          <option value="India">India</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-orange-300 text-sm font-medium mb-2">
                        State / Union Territory
                      </label>
                      <div className="relative">
                        <select
                          name="state"
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }
                          className="w-full p-3 border border-orange-900 bg-[#2B1615] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-100"
                        >
                          <option value="Kerala">Kerala</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Maharashtra">Maharashtra</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-orange-400 mb-4">
                    Udemy is required by law to collect applicable transaction
                    taxes for purchases made in certain tax jurisdictions.
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-orange-200 mb-4">
                      Payment Method
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-[#341A18] border border-orange-900 rounded-md p-4 flex items-center relative">
                        <input
                          type="radio"
                          id="upi"
                          name="paymentMethod"
                          checked={paymentMethod === "upi"}
                          onChange={() => setPaymentMethod("upi")}
                          className="mr-3 text-orange-500 focus:ring-orange-500"
                        />
                        <div className="flex items-center">
                          <div className="bg-white p-1 rounded">
                            <span className="font-bold text-sm text-blue-700">
                              UPI
                            </span>
                          </div>
                          <label htmlFor="upi" className="ml-2 text-orange-200">
                            UPI
                          </label>
                        </div>
                      </div>

                      <div className="bg-[#341A18] border border-orange-900 rounded-md p-4 flex items-center">
                        <input
                          type="radio"
                          id="card"
                          name="paymentMethod"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                          className="mr-3 text-orange-500 focus:ring-orange-500"
                        />
                        <div className="flex items-center">
                          <CreditCard
                            className="text-orange-300 mr-2"
                            size={20}
                          />
                          <label htmlFor="card" className="text-orange-200">
                            Cards
                          </label>
                        </div>
                        <div className="ml-auto flex space-x-2">
                          <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                            <span className="text-xs font-bold text-blue-800">
                              VISA
                            </span>
                          </div>
                          <div className="w-8 h-5 bg-orange-500 rounded"></div>
                          <div className="w-8 h-5 bg-blue-500 rounded"></div>
                        </div>
                      </div>

                      <div className="bg-[#341A18] border border-orange-900 rounded-md p-4 flex items-center">
                        <input
                          type="radio"
                          id="netbanking"
                          name="paymentMethod"
                          checked={paymentMethod === "netbanking"}
                          onChange={() => setPaymentMethod("netbanking")}
                          className="mr-3 text-orange-500 focus:ring-orange-500"
                        />
                        <div className="flex items-center">
                          <Building
                            className="text-orange-300 mr-2"
                            size={20}
                          />
                          <label
                            htmlFor="netbanking"
                            className="text-orange-200"
                          >
                            Net Banking
                          </label>
                        </div>
                      </div>

                      <div className="bg-[#341A18] border border-orange-900 rounded-md p-4 flex items-center">
                        <input
                          type="radio"
                          id="wallet"
                          name="paymentMethod"
                          checked={paymentMethod === "wallet"}
                          onChange={() => setPaymentMethod("wallet")}
                          className="mr-3 text-orange-500 focus:ring-orange-500"
                        />
                        <div className="flex items-center">
                          <Wallet className="text-orange-300 mr-2" size={20} />
                          <label htmlFor="wallet" className="text-orange-200">
                            Mobile Wallets
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

           

            {step === 2 && (
              <div className="bg-[#3B211F] rounded-lg p-4 md:p-6 shadow-xl">
                <h2 className="text-xl font-semibold text-orange-200 mb-6">
                  {paymentMethod === "upi" && "UPI Payment"}
                  {paymentMethod === "card" && "Card Payment"}
                  {paymentMethod === "netbanking" && "Net Banking"}
                  {paymentMethod === "wallet" && "Mobile Wallet"}
                </h2>

                {paymentMethod === "upi" && (
                  <div className="space-y-6">
                    <div className="text-orange-200 mb-4">
                      <p>How would you like to use UPI?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-md flex justify-center">
                        QR code
                      </button>

                      <button className="bg-[#341A18] border border-orange-700 text-orange-200 hover:bg-[#3D201E] py-3 px-4 rounded-md flex justify-center">
                        Enter UPI ID
                      </button>
                    </div>

                    <div className="border-t border-orange-900 my-6 pt-6 text-center text-orange-300">
                      Complete your payment
                    </div>

                    <div className="text-center mb-6">
                      <p className="text-orange-200">
                        Click the &quot;Proceed&quot; button to generate a QR code for UPI
                        payment.
                      </p>
                    </div>
                  </div>
                )}

               
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-orange-300 text-sm font-medium mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleCardNumberChange}
                          className="w-full p-3 border border-orange-900 bg-[#2B1615] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-100 pr-10"
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <CreditCard className="text-orange-500" size={20} />
                        </div>
                      </div>
                      {errors.cardNumber && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.cardNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-orange-300 text-sm font-medium mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardHolder"
                        value={formData.cardHolder}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-orange-900 bg-[#2B1615] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-100"
                        placeholder="Name on card"
                      />
                      {errors.cardHolder && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.cardHolder}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-orange-300 text-sm font-medium mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full p-3 border border-orange-900 bg-[#2B1615] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-100"
                          maxLength={5}
                        />
                        {errors.expiryDate && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.expiryDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-orange-300 text-sm font-medium mb-2">
                          CVV
                        </label>
                        <input
                          type="password"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full p-3 border border-orange-900 bg-[#2B1615] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-100"
                          maxLength={4}
                        />
                        {errors.cvv && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.cvv}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

               
                {paymentMethod === "netbanking" && (
                  <div className="space-y-4">
                    <p className="text-orange-200 mb-4">Select your bank:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "State Bank of India",
                        "HDFC Bank",
                        "ICICI Bank",
                        "Axis Bank",
                      ].map((bank) => (
                        <div
                          key={bank}
                          className="bg-[#341A18] border border-orange-900 rounded-md p-3 cursor-pointer hover:bg-[#3D201E]"
                        >
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="bank"
                              className="mr-2 text-orange-500"
                            />
                            <span className="text-orange-200">{bank}</span>
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <label className="block text-orange-300 text-sm font-medium mb-2">
                        Or select from other banks
                      </label>
                      <select className="w-full p-3 border border-orange-900 bg-[#2B1615] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-100">
                        <option value="">-- Select Bank --</option>
                        <option>Bank of Baroda</option>
                        <option>Canara Bank</option>
                        <option>Punjab National Bank</option>
                        <option>Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  </div>
                )}

              
                {paymentMethod === "wallet" && (
                  <div className="space-y-4">
                    <p className="text-orange-200 mb-4">Select your wallet:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Paytm", "PhonePe", "Google Pay", "Amazon Pay"].map(
                        (wallet) => (
                          <div
                            key={wallet}
                            className="bg-[#341A18] border border-orange-900 rounded-md p-3 cursor-pointer hover:bg-[#3D201E]"
                          >
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="wallet"
                                className="mr-2 text-orange-500"
                              />
                              <span className="text-orange-200">{wallet}</span>
                            </label>
                          </div>
                        )
                      )}
                    </div>

                    <div>
                      <label className="block text-orange-300 text-sm font-medium mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        name="walletNumber"
                        value={formData.walletNumber}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-orange-900 bg-[#2B1615] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-100"
                        placeholder="10-digit mobile number"
                        maxLength={10}
                      />
                      {errors.walletNumber && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.walletNumber}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

          
            {step === 3 && (
              <div className="bg-[#3B211F] rounded-lg p-4 md:p-8 shadow-xl text-center">
                <div className="bg-green-800 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6">
                  <CheckCircle size={48} className="text-green-300" />
                </div>

                <h3 className="text-2xl font-bold text-green-300 mb-4">
                  Payment Successful!
                </h3>
                <p className="text-orange-200 mb-6">
                  Thank you for enrolling in our course. You will receive a
                  confirmation email shortly.
                </p>

                <div className="bg-[#341A18] p-4 md:p-6 rounded-md border border-orange-900 text-left max-w-md mx-auto">
                  <h4 className="font-medium text-orange-200 mb-3">
                    Order Details
                  </h4>
                  <div className="flex justify-between text-orange-300 mb-2">
                    <span>Course:</span>
                    <span className="font-medium text-orange-100">
                      {course.title}
                    </span>
                  </div>
                  <div className="flex justify-between text-orange-300 mb-2">
                    <span>Order ID:</span>
                    <span className="font-medium text-orange-100">
                      ORD{Math.floor(Math.random() * 1000000)}
                    </span>
                  </div>
                  <div className="flex justify-between text-orange-300 mb-2">
                    <span>Date:</span>
                    <span className="font-medium text-orange-100">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-orange-300 mb-2">
                    <span>Amount Paid:</span>
                    <span className="font-medium text-orange-100">
                      {course.price}
                    </span>
                  </div>
                  <div className="flex justify-between text-orange-300">
                    <span>Payment Method:</span>
                    <span className="font-medium text-orange-100 capitalize">
                      {paymentMethod}
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-orange-300">
                  Your course access will be activated within the next 15
                  minutes. Happy learning!
                </p>
              </div>
            )}

          
            {step < 3 && (
              <div className="mt-8 flex justify-between">
                <button
                  onClick={step === 1 ? () => router.back() : handleBack}
                  className="px-4 md:px-6 py-3 border border-orange-600 text-orange-400 hover:bg-[#341A18] rounded-md"
                >
                  {step === 1 ? "Cancel" : "Back"}
                </button>
                <button
                  onClick={step === 1 ? handleNext : handlePayment}
                  disabled={isProcessing}
                  className={`px-6 md:px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md flex items-center ${
                    isProcessing ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isProcessing ? (
                    <>Processing...</>
                  ) : step === 1 ? (
                    <>Continue</>
                  ) : (
                    <>
                      Proceed <Lock size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleSuccess}
                  className="px-6 md:px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
                >
                  Go to My Courses
                </button>
              </div>
            )}

            {/* Security Badge */}
            {step < 3 && (
              <div className="mt-6 py-3 flex justify-center items-center text-xs text-orange-400">
                <Lock size={14} className="mr-2" /> Secure payment processed
                using SSL encryption
              </div>
            )}
          </div>

          {/* Right Section: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#3B211F] rounded-lg p-4 md:p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-orange-200 mb-6">
                Order summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-orange-300">Original Price:</span>
                  <span className="text-orange-100">
                    {course.originalPrice}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-orange-300">Discounts:</span>
                  <span className="text-orange-100">
                    -{course.discount.split(" ")[0]}
                  </span>
                </div>

                <div className="border-t border-orange-900 pt-4 flex justify-between items-center font-medium">
                  <span className="text-orange-200">Total (1 course):</span>
                  <span className="text-orange-100 text-xl">
                    {course.price}
                  </span>
                </div>

                <div className="text-xs text-orange-400 mt-2">
                  By completing your purchase, you agree to these{" "}
                  <a href="#" className="text-orange-300 hover:underline">
                    Terms of Use
                  </a>
                  .
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#341A18] border border-orange-900 rounded-lg p-4">
              <h3 className="text-lg font-medium text-orange-200 mb-3">
                Course Information
              </h3>
              <h4 className="font-medium text-orange-100 mb-2">
                {course.title}
              </h4>
              <p className="text-orange-300 text-sm mb-4">
                Duration: {course.duration}
              </p>

              <div className="flex items-center text-xs text-orange-400">
                <AlertCircle size={14} className="mr-1" />
                <span>
                  This course access will be available for {course.duration}{" "}
                  from the date of purchase.
                </span>
              </div>
            </div>

            <div className="mt-6 bg-[#341A18] border border-orange-900 rounded-lg p-4">
              <h3 className="text-lg font-medium text-orange-200 mb-3">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-orange-300 text-sm">
                Not satisfied? Get a full refund within 30 days. Simple and
                straightforward!
              </p>
            </div>

            <div className="mt-6 bg-[#341A18] border border-orange-900 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-amber-500 text-lg font-bold mr-2">★</span>
                <h3 className="text-lg font-medium text-orange-200">
                  Tap into Success Now
                </h3>
              </div>
              <p className="text-orange-300 text-sm">
                Join 50+ people in your country who&apos;ve recently enrolled in this
                course within last 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
