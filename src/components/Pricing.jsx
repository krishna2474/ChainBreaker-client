import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Organization plan
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly

  const plans = [
    {
      name: "Community",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      period: "",
      features: [
        "Up to 5 Groups",
        "Basic Fact Checking",
        "Community Support",
        "48hr Response Time",
      ],
      cta: "Get Started Free",
      icon: "",
    },
    {
      name: "Organization",
      monthlyPrice: "₹1,999",
      yearlyPrice: "₹19,999",
      period: billingCycle === "monthly" ? "/mo" : "/year",
      features: [
        "Unlimited Groups",
        "Priority Verification",
        "Admin Dashboard",
        "Real-time Alerts",
        "Multilingual Support",
      ],
      featured: true,
      cta: "Start Free Trial",
      icon: "",
      savings: "Save 17%",
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      period: "",
      features: [
        "White-label Solution",
        "API Access",
        "Custom AI Training",
        "Dedicated Support",
        "SLA Guarantee",
      ],
      cta: "Contact Sales",
      icon: "",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle subtitle="Pricing" title="Choose Your Plan" />

        {/* Billing Toggle */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                billingCycle === "yearly"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-4 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, i) => {
            const isSelected = selectedPlan === i;
            const price =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => setSelectedPlan(i)}
                className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 cursor-pointer transition-all duration-300 flex flex-col ${
                  isSelected
                    ? "border-2 border-blue-500 shadow-2xl shadow-blue-500/30"
                    : "border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
                } ${plan.featured ? "md:scale-105" : ""}`}
              >
                {/* Selected Indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Check className="text-white" size={18} />
                  </motion.div>
                )}

                {/* Featured Badge */}
                {plan.featured && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Plan Icon & Name */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{plan.icon}</span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-slate-900 dark:text-white">
                    {price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* Savings Badge for Yearly */}
                {billingCycle === "yearly" && plan.savings && (
                  <div className="mb-6 inline-flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    <Zap size={14} />
                    <span>{plan.savings}</span>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, f) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: f * 0.05 }}
                      className="flex items-start text-slate-600 dark:text-slate-300"
                    >
                      <Check
                        className="text-blue-500 mr-3 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button - Now at bottom */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={isSelected ? "primary" : "secondary"}
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(
                        plan.cta === "Contact Sales" ? "/contact" : "/contact"
                      );
                    }}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-slate-600 dark:text-slate-400"
        >
          <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 text-sm sm:text-base">
            <span className="flex items-center space-x-2">
              <Check className="text-green-500 flex-shrink-0" size={20} />
              <span>14-day money-back guarantee</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Cancel anytime</span>
            <span className="hidden sm:inline">•</span>
            <span>No credit card required</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
