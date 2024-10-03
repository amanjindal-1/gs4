"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const ErrorDiv = ({ text }) => (
  <p className="text-red-500 text-sm mt-1">{text}</p>
);

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission logic here
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-9 rounded-lg shadow-lg w-full max-w-md"
        style={{ minWidth: "max-content" }}
      >
        <h2 className="text-2xl font-semibold text-[#C59363] mb-6">
          Get in Touch
        </h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="p-2.5 border rounded-md outline-none border-[rgba(125,120,119,0.4)] focus:ring-1 focus:ring-[#C59363b2] w-full md:w-[450px]"
          />
          {errors.name && <ErrorDiv text={errors.name.message} />}
        </div>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-2.5 border rounded-md outline-none border-[rgba(125,120,119,0.4)] focus:ring-1 focus:ring-[#C59363b2]"
          />
          {errors.email && <ErrorDiv text={errors.email.message} />}
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Phone no."
            {...register("phone")}
            className="w-full p-2.5 border rounded-md outline-none border-[rgba(125,120,119,0.4)] focus:ring-1 focus:ring-[#C59363b2]"
          />
          {errors.phone && <ErrorDiv text={errors.phone.message} />}
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <textarea
            placeholder="Message"
            {...register("message")}
            className="w-full p-2.5 border rounded-md outline-none border-[rgba(125,120,119,0.4)] focus:ring-1 focus:ring-[#C59363b2] resize-none"
            rows="4"
          />
          {errors.message && <ErrorDiv text={errors.message.message} />}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-[#C59363] text-white font-semibold rounded-md hover:bg-[#C59363b2] transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
