import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [result, setResult] = React.useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setResult("Sending....");

    const formData = new FormData();
    formData.append("access_key", "f29834f2-fa0d-492c-b073-938846cd9383");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (responseData.success) {
      setResult("Thank you for reaching out! We'll get back to you shortly.");
      reset();
    } else {
      console.log("Error", responseData);
      // setResult(responseData.message);
      setResult(
        "Oops! Something went wrong. Please try again later." +
          responseData.message
      );
    }
  };

  return (
    <div className="bg-dracula-bg min-h-screen text-dracula-foreground">
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
          Contact Us
        </h1>

        {/* Google Map */}
        <div className="w-full h-64 sm:h-96 mb-8">
          <iframe
            title="Google Map"
            className="w-full h-full rounded-lg"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2621789003247!2d73.0461689764773!3d33.59850127333117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94845cbcdbc7%3A0x937f5539de027943!2sFashion%20Hub!5e0!3m2!1sen!2s!4v1724187834820!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-dracula-current-line p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Name</label>
              <input
                className="mt-1 p-2 rounded-md bg-dracula-bg text-dracula-foreground"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-dracula-red mt-1">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-medium">Email</label>
              <input
                className="mt-1 p-2 rounded-md bg-dracula-bg text-dracula-foreground"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-dracula-red mt-1">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-medium">Message</label>
              <textarea
                className="mt-1 p-2 h-32 rounded-md bg-dracula-bg text-dracula-foreground resize-none"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className="text-dracula-red mt-1">
                  This field is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 bg-dracula-pink text-dracula-bg hover:bg-dracula-foreground hover:text-dracula-bg px-6 py-3 rounded-md text-lg font-medium"
            >
              Submit
            </button>

            {/* Display form submission result */}
            {result && <div className="mt-4 text-center">{result}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
