"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  ArrowUpRight,
  Send,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/AnimatedSection";
import { contactSchema, ContactFormInput } from "@/schemas/contact.schema";

const CONTACT_INFO = [
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    value: "rizkirifandi7@gmail.com",
    href: "mailto:rizkirifandi7@gmail.com",
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
    value: "linkedin.com/in/rizkirifani",
    href: "https://www.linkedin.com/in/rizkirifani/",
  },
  {
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
    value: "github.com/rizkirifandi7",
    href: "https://github.com/rizkirifandi7",
  },
  {
    icon: <Instagram className="h-4 w-4" />,
    label: "Instagram",
    value: "instagram.com/rizki.rifandii/",
    href: "https://www.instagram.com/rizki.rifandii/",
  },
] as const;

export function ContactSection() {
  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ContactFormInput) => {
    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Contact form submitted data:", data);
      toast.success(
        "Message sent successfully! I will get back to you soon.",
      );
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <AnimatedSection direction="up">
      <section
        id="contact"
        className="border rounded-lg p-4 md:p-6 scroll-mt-20 md:scroll-mt-24 bg-card"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Get in Touch
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-1">
          Let&apos;s Work Together
        </h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-lg">
          Open for freelance, full-time roles, or a casual tech chat. Drop me
          a message and I&apos;ll get back to you within 24 hours.
        </p>
        <Separator className="mb-6" />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 md:gap-8">
          {/* Left — Contact Info */}
          <div className="space-y-4">
            {CONTACT_INFO.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md border hover:bg-muted/40 transition-colors group"
              >
                <div className="p-2 border rounded-md bg-muted/30 group-hover:bg-muted/60 transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-xs text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium truncate">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Right — Contact Form */}
          <StaggerItem className="border rounded-lg p-5 bg-muted/10">
            <p className="text-sm font-semibold mb-4 text-left">
              Send a Message
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 text-left">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="grid gap-1">
                        <FormLabel className="text-xs font-medium text-muted-foreground">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Your name"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-[11px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="grid gap-1">
                        <FormLabel className="text-xs font-medium text-muted-foreground">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-[11px]" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="grid gap-1 text-left">
                      <FormLabel className="text-xs font-medium text-muted-foreground">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Project inquiry, collaboration…"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-[11px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-1 text-left">
                      <FormLabel className="text-xs font-medium text-muted-foreground">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell me about your project…"
                          className="resize-none"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-[11px]" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </StaggerItem>
        </StaggerContainer>
      </section>
    </AnimatedSection>
  );
}
