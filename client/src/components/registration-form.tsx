import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertClientRegistrationSchema } from "@shared/schema";

const registrationFormSchema = insertClientRegistrationSchema.extend({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  registrationConsent: z.boolean().refine(val => val === true, {
    message: "You must consent to registration"
  }),
  hipaaConsent: z.boolean().refine(val => val === true, {
    message: "You must acknowledge HIPAA practices"
  })
});

type RegistrationFormData = z.infer<typeof registrationFormSchema>;

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      clientFirstName: "",
      clientLastName: "",
      clientDob: "",
      clientGender: "",
      insuranceId: "",
      contactFirstName: "",
      contactLastName: "",
      relationship: "",
      contactEmail: "",
      contactPhone: "",
      services: [],
      specialNeeds: "",
      goals: "",
      registrationConsent: false,
      hipaaConsent: false,
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: RegistrationFormData) => {
      return await apiRequest("POST", "/api/register", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Registration submitted successfully!",
        description: "Thank you for registering. We will contact you within 24 hours to discuss next steps.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error submitting registration",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: RegistrationFormData) => {
    registrationMutation.mutate(data);
  };

  const serviceOptions = [
    { value: "supportive-living", label: "Supportive Living" },
    { value: "respite", label: "Respite Care" },
    { value: "transportation", label: "Community Transportation" },
    { value: "family-model", label: "Family Model" },
    { value: "personal-assistance", label: "Personal Assistance" },
    { value: "stabilization", label: "Stabilization & Transition" },
    { value: "day-facility", label: "Adult Habilitation Day Facility" },
    { value: "skills-training", label: "Independent Living Skills Training" },
    { value: "katie-beckett", label: "Katie Beckett Program" },
  ];

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-hope-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-dark-gray mb-4">Registration Received!</h3>
            <p className="text-medium-gray mb-6">
              Thank you for submitting your client registration. Our team will review your information 
              and contact you within 24 hours to discuss next steps and answer any questions you may have.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-hope-green text-hope-green hover:bg-hope-green hover:text-white"
            >
              Submit Another Registration
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Client Registration</h2>
          <p className="text-xl text-medium-gray">
            Ready to get started? Complete our registration form to begin your journey with Noah's Arc Care.
          </p>
        </div>
        
        <div className="bg-green-50 rounded-2xl shadow-lg p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Client Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-dark-gray border-b border-gray-200 pb-2">Client Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="clientFirstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Client First Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Client's first name" 
                            className="focus:ring-hope-green focus:border-hope-green"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="clientLastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Client Last Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Client's last name" 
                            className="focus:ring-hope-green focus:border-hope-green"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="clientDob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Date of Birth *</FormLabel>
                        <FormControl>
                          <Input 
                            type="date"
                            className="focus:ring-hope-green focus:border-hope-green"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="clientGender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Gender</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-hope-green focus:border-hope-green">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="insuranceId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Insurance ID</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Insurance identification" 
                            className="focus:ring-hope-green focus:border-hope-green"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-dark-gray border-b border-gray-200 pb-2">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactFirstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Contact Person First Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your first name" 
                            className="focus:ring-hope-green focus:border-hope-green"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactLastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Contact Person Last Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your last name" 
                            className="focus:ring-hope-green focus:border-hope-green"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="relationship"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-gray font-medium">Relationship to Client *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-hope-green focus:border-hope-green">
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="parent">Parent/Guardian</SelectItem>
                          <SelectItem value="family">Family Member</SelectItem>
                          <SelectItem value="self">Self</SelectItem>
                          <SelectItem value="advocate">Advocate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com" 
                            className="focus:ring-hope-green focus:border-hope-green"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-gray font-medium">Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="(555) 123-4567" 
                            className="focus:ring-hope-green focus:border-hope-green"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Services Needed */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-dark-gray border-b border-gray-200 pb-2">Services Needed</h3>
                
                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <div className="grid md:grid-cols-2 gap-4">
                        {serviceOptions.map((service) => (
                          <FormField
                            key={service.value}
                            control={form.control}
                            name="services"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={service.value}
                                  className="flex flex-row items-center space-x-3 space-y-0 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(service.value)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, service.value])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== service.value
                                              )
                                            )
                                      }}
                                      className="data-[state=checked]:bg-hope-green data-[state=checked]:border-hope-green"
                                    />
                                  </FormControl>
                                  <FormLabel className="text-dark-gray cursor-pointer">
                                    {service.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-dark-gray border-b border-gray-200 pb-2">Additional Information</h3>
                
                <FormField
                  control={form.control}
                  name="specialNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-gray font-medium">Special Needs or Considerations</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe any special needs, medical conditions, or specific support requirements..."
                          className="resize-none h-24 focus:ring-hope-green focus:border-hope-green"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-gray font-medium">Goals and Aspirations</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What are the client's goals and what would they like to achieve?"
                          className="resize-none h-20 focus:ring-hope-green focus:border-hope-green"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Consent and Agreement */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="registrationConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-hope-green data-[state=checked]:border-hope-green mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-medium-gray">
                          I consent to Noah's Arc Care processing this information to provide services and support. *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hipaaConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-hope-green data-[state=checked]:border-hope-green mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-medium-gray">
                          I acknowledge and agree to the HIPAA privacy practices and information sharing necessary for care coordination. *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <Button 
                type="submit" 
                disabled={registrationMutation.isPending}
                className="w-full bg-hope-green text-white hover:bg-green-700 py-4"
              >
                {registrationMutation.isPending ? "Submitting..." : "Submit Registration"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
