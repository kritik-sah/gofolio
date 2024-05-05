"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Submit form data here (e.g., send data to server)
      console.log("Form submitted:", formData);
      // Clear form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-secondary text-sm mb-2" htmlFor="name">
          Name
        </label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="eg. Radhika"
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </div>
      <div className="mb-6">
        <label className="block text-secondary text-sm mb-2" htmlFor="email">
          Email
        </label>
        <Input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="eg. radhika@email.com"
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="mb-4">
        <label className="block text-secondary text-sm mb-2" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here."
        />
        {errors.message && (
          <span className="text-red-500">{errors.message}</span>
        )}
      </div>
      <div className="mb-6">
        <Button type="submit" className="w-full">
          Send
        </Button>
      </div>
    </form>
  );
}
