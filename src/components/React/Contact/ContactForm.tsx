import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  User,
  FileText,
  Loader2,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

interface Office {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

interface ContactPageProps {
  offices: Office[];
}

const ContactPage: React.FC<ContactPageProps> = ({ offices }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [result, setResult] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [activeOffice, setActiveOffice] = useState(0);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setResult({ type: null, message: "" });

    const formData = new FormData();
    formData.append("access_key", "f29834f2-fa0d-492c-b073-938846cd9383");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setResult({
          type: "success",
          message:
            "Thank you for reaching out! We'll get back to you within 24 hours.",
        });
        reset();
      } else {
        setResult({
          type: "error",
          message: "Something went wrong. Please try again or call us directly.",
        });
      }
    } catch {
      setResult({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-dracula-bg">
      {/* Hero Section */}
      <section className="relative bg-dracula-cyan overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dracula-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-dracula-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dracula-bg/10 backdrop-blur-sm rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-dracula-bg" />
              <span className="text-sm font-medium text-dracula-bg">
                We're Here to Help
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dracula-bg leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Get In Touch
            </h1>

            <p className="text-lg sm:text-xl text-dracula-bg/85 leading-relaxed max-w-2xl mx-auto">
              Have a legal question or need assistance? Our team is ready to
              help you navigate your legal challenges with expert guidance.
            </p>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F5F0E8"
            />
          </svg>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            {
              icon: Phone,
              label: "Call Us",
              value: "+92 300 9817389",
              href: "tel:+920309817389",
              color: "dracula-cyan",
            },
            {
              icon: Mail,
              label: "Email Us",
              value: "slclaw@gmail.com",
              href: "mailto:slclaw@gmail.com",
              color: "dracula-green",
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "+92 321 5134315",
              href: "https://wa.me/923215134315",
              color: "dracula-pink",
            },
            {
              icon: Clock,
              label: "Working Hours",
              value: "Mon-Sat: 9AM-9PM",
              href: null,
              color: "dracula-orange",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block bg-white rounded-xl p-5 border border-dracula-current-line hover:border-dracula-cyan hover:shadow-lg transition-all"
                >
                  <div
                    className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}`} />
                  </div>
                  <div className="text-xs text-dracula-comment uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="font-semibold text-dracula-foreground group-hover:text-dracula-cyan transition-colors">
                    {item.value}
                  </div>
                </a>
              ) : (
                <div className="bg-white rounded-xl p-5 border border-dracula-current-line">
                  <div
                    className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}`} />
                  </div>
                  <div className="text-xs text-dracula-comment uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="font-semibold text-dracula-foreground">
                    {item.value}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              Send a Message
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How Can We <span className="text-dracula-cyan">Help You?</span>
            </h2>

            <p className="text-dracula-comment mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
              For urgent matters, please call us directly.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dracula-foreground mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dracula-comment" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border-2 transition-colors ${
                        errors.name
                          ? "border-dracula-red focus:border-dracula-red"
                          : "border-dracula-current-line focus:border-dracula-cyan"
                      } focus:outline-none`}
                      {...register("name", { required: true })}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-dracula-red flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Name is required
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-dracula-foreground mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dracula-comment" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border-2 transition-colors ${
                        errors.email
                          ? "border-dracula-red focus:border-dracula-red"
                          : "border-dracula-current-line focus:border-dracula-cyan"
                      } focus:outline-none`}
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-dracula-red flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Valid email is required
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Subject row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dracula-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dracula-comment" />
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border-2 border-dracula-current-line focus:border-dracula-cyan focus:outline-none transition-colors"
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dracula-foreground mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dracula-comment" />
                    <select
                      className={`w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border-2 transition-colors appearance-none ${
                        errors.subject
                          ? "border-dracula-red focus:border-dracula-red"
                          : "border-dracula-current-line focus:border-dracula-cyan"
                      } focus:outline-none`}
                      {...register("subject", { required: true })}
                    >
                      <option value="">Select a subject</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Taxation">Taxation</option>
                      <option value="Property Dispute">Property Dispute</option>
                      <option value="Immigration">Immigration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-dracula-red flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Please select a subject
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-dracula-foreground mb-2">
                  Your Message *
                </label>
                <textarea
                  placeholder="Please describe your legal matter..."
                  rows={5}
                  className={`w-full px-4 py-3.5 bg-white rounded-xl border-2 transition-colors resize-none ${
                    errors.message
                      ? "border-dracula-red focus:border-dracula-red"
                      : "border-dracula-current-line focus:border-dracula-cyan"
                  } focus:outline-none`}
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-dracula-red flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    Message is required
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-dracula-cyan text-dracula-bg font-semibold py-4 px-8 rounded-xl hover:bg-dracula-orange transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Result message */}
              <AnimatePresence>
                {result.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl flex items-start gap-3 ${
                      result.type === "success"
                        ? "bg-dracula-green/10 text-dracula-green"
                        : "bg-dracula-red/10 text-dracula-red"
                    }`}
                  >
                    {result.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <p>{result.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right - Office Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              Visit Our Offices
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-dracula-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our <span className="text-dracula-cyan">Locations</span>
            </h2>

            {/* Office tabs */}
            <div className="flex gap-2 mb-6">
              {offices.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setActiveOffice(index)}
                  className={`flex-1 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                    activeOffice === index
                      ? "bg-dracula-cyan text-dracula-bg shadow-md"
                      : "bg-dracula-current-line text-dracula-foreground hover:bg-dracula-cyan/10"
                  }`}
                >
                  {office.name}
                </button>
              ))}
            </div>

            {/* Office details card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-dracula-current-line overflow-hidden shadow-sm mb-6"
              >
                <div className="p-6 space-y-4">
                  <h3
                    className="text-xl font-bold text-dracula-foreground"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {offices[activeOffice].name}
                  </h3>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-dracula-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-dracula-cyan" />
                    </div>
                    <div>
                      <div className="text-xs text-dracula-comment uppercase tracking-wider mb-1">
                        Address
                      </div>
                      <div className="text-dracula-foreground">
                        {offices[activeOffice].address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-dracula-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-dracula-green" />
                    </div>
                    <div>
                      <div className="text-xs text-dracula-comment uppercase tracking-wider mb-1">
                        Phone
                      </div>
                      <a
                        href={`tel:${offices[activeOffice].phone}`}
                        className="text-dracula-foreground hover:text-dracula-cyan transition-colors"
                      >
                        {offices[activeOffice].phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-dracula-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-dracula-pink" />
                    </div>
                    <div>
                      <div className="text-xs text-dracula-comment uppercase tracking-wider mb-1">
                        Office Hours
                      </div>
                      <div className="text-dracula-foreground font-medium">
                        {offices[activeOffice].hours}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-dracula-current-line shadow-sm">
              <iframe
                title="Office Location"
                className="w-full h-72"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2621789003247!2d73.0461689764773!3d33.59850127333117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94845cbcdbc7%3A0x937f5539de027943!2sFashion%20Hub!5e0!3m2!1sen!2s!4v1724187834820!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Get directions button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(offices[activeOffice].address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-dracula-current-line text-dracula-foreground font-semibold py-3 px-6 rounded-xl hover:bg-dracula-cyan hover:text-dracula-bg transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
