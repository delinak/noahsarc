import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertJobApplicationSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Send } from "lucide-react";
import { z } from "zod";

const jobApplicationFormSchema = insertJobApplicationSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
});

type JobApplicationFormData = z.infer<typeof jobApplicationFormSchema>;

export default function JobApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      availability: "",
      coverLetter: "",
      resumeFileName: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: JobApplicationFormData) => {
      const response = await fetch("/api/jobs/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit application");
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your interest in joining our team. We'll review your application and get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/job-applications"] });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: JobApplicationFormData) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-dark-gray mb-4">Application Submitted!</h3>
          <p className="text-medium-gray mb-6">
            Thank you for your interest in joining Noah's Arc Care. We've received your application and will review it carefully. 
            We'll contact you within 5-7 business days to discuss next steps.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-royal-purple text-royal-purple hover:bg-royal-purple hover:text-white"
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-dark-gray">Join Our Team</CardTitle>
        <CardDescription className="text-medium-gray">
          Ready to make a difference? Submit your application below and become part of our compassionate care team.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark-gray">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Position Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark-gray">Position Details</h3>
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position Applying For *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="direct-support-professional">Direct Support Professional</SelectItem>
                        <SelectItem value="personal-care-assistant">Personal Care Assistant</SelectItem>
                        <SelectItem value="community-navigator">Community Navigator</SelectItem>
                        <SelectItem value="transportation-specialist">Transportation Specialist</SelectItem>
                        <SelectItem value="other">Other (specify in cover letter)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Full-time, Part-time, Weekends, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Experience and Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark-gray">Experience & Background</h3>
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relevant Experience</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your relevant work experience, education, or volunteer activities..."
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to work with us?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your passion for helping others and why you'd be a great fit for our team..."
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resumeFileName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resume (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="If you have a resume file, please mention the filename here"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full bg-royal-purple text-white hover:bg-purple-700 py-3"
              >
                {mutation.isPending ? (
                  "Submitting Application..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-medium-gray text-center">
              By submitting this application, you agree to our review process. We'll contact qualified candidates within 5-7 business days.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}