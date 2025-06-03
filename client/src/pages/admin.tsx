import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Users, MessageSquare, Calendar, Phone, Mail, MapPin, LogOut } from "lucide-react";
import { Link } from "wouter";
import { getQueryFn } from "@/lib/queryClient";
import type { ContactInquiry, ClientRegistration } from "@shared/schema";

export default function Admin() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [, setLocation] = useLocation();

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setLocation("/admin-login");
      return;
    }
  }, [setLocation]);

  const logout = () => {
    localStorage.removeItem("adminToken");
    setLocation("/admin-login");
  };

  // Fetch contact inquiries with auth token
  const { data: contactData, isLoading: contactLoading } = useQuery<{ success: boolean; inquiries: ContactInquiry[] }>({
    queryKey: ["/api/contact"],
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("/api/contact", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          setLocation("/admin-login");
        }
        throw new Error("Failed to fetch");
      }
      
      return response.json();
    },
  });

  // Fetch client registrations with auth token
  const { data: registrationData, isLoading: registrationLoading } = useQuery<{ success: boolean; registrations: ClientRegistration[] }>({
    queryKey: ["/api/registrations"],
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("/api/registrations", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          setLocation("/admin-login");
        }
        throw new Error("Failed to fetch");
      }
      
      return response.json();
    },
  });

  const contactInquiries: ContactInquiry[] = contactData?.inquiries || [];
  const clientRegistrations: ClientRegistration[] = registrationData?.registrations || [];

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInquiryTypeColor = (type: string) => {
    const colors = {
      general: "bg-blue-100 text-blue-800",
      services: "bg-green-100 text-green-800",
      registration: "bg-purple-100 text-purple-800",
      support: "bg-orange-100 text-orange-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  if (contactLoading || registrationLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue mx-auto mb-4"></div>
          <p className="text-medium-gray">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Website
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark-gray">Admin Dashboard</h1>
                <p className="text-sm text-medium-gray">Noah's Arc Care - Form Submissions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inquiries">Contact Inquiries ({contactInquiries.length})</TabsTrigger>
            <TabsTrigger value="registrations">Client Registrations ({clientRegistrations.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{contactInquiries.length}</div>
                  <p className="text-xs text-muted-foreground">Contact form submissions</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Client Registrations</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{clientRegistrations.length}</div>
                  <p className="text-xs text-muted-foreground">New client registrations</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{contactInquiries.length + clientRegistrations.length}</div>
                  <p className="text-xs text-muted-foreground">All form submissions</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Contact Inquiries</CardTitle>
                  <CardDescription>Latest 5 inquiries received</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInquiries.slice(0, 5).map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{inquiry.firstName} {inquiry.lastName}</p>
                        <p className="text-xs text-muted-foreground">{inquiry.email}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getInquiryTypeColor(inquiry.inquiryType)}>
                          {inquiry.inquiryType}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(inquiry.createdAt!)}
                        </p>
                      </div>
                    </div>
                  ))}
                  {contactInquiries.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">No inquiries yet</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Registrations</CardTitle>
                  <CardDescription>Latest 5 client registrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {clientRegistrations.slice(0, 5).map((registration) => (
                    <div key={registration.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          {registration.clientFirstName} {registration.clientLastName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(registration.createdAt!)}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Contact: {registration.contactFirstName} {registration.contactLastName} ({registration.relationship})
                      </p>
                    </div>
                  ))}
                  {clientRegistrations.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">No registrations yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="inquiries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Inquiries</CardTitle>
                <CardDescription>All contact form submissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInquiries.map((inquiry, index) => (
                  <div key={inquiry.id}>
                    {index > 0 && <Separator className="my-6" />}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">{inquiry.firstName} {inquiry.lastName}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Mail className="h-3 w-3" />
                              <span>{inquiry.email}</span>
                            </div>
                            {inquiry.phone && (
                              <div className="flex items-center space-x-1">
                                <Phone className="h-3 w-3" />
                                <span>{inquiry.phone}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <Badge className={getInquiryTypeColor(inquiry.inquiryType)}>
                            {inquiry.inquiryType}
                          </Badge>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(inquiry.createdAt!)}
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm leading-relaxed">{inquiry.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {contactInquiries.length === 0 && (
                  <div className="text-center py-12">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No contact inquiries yet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="registrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Registrations</CardTitle>
                <CardDescription>All client registration submissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {clientRegistrations.map((registration, index) => (
                  <div key={registration.id}>
                    {index > 0 && <Separator className="my-6" />}
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold">Client Information</h3>
                          <div className="space-y-2 text-sm">
                            <p><strong>Name:</strong> {registration.clientFirstName} {registration.clientLastName}</p>
                            <p><strong>Date of Birth:</strong> {registration.clientDob}</p>
                            {registration.clientGender && <p><strong>Gender:</strong> {registration.clientGender}</p>}
                            {registration.insuranceId && <p><strong>Insurance ID:</strong> {registration.insuranceId}</p>}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold">Contact Person</h3>
                          <div className="space-y-2 text-sm">
                            <p><strong>Name:</strong> {registration.contactFirstName} {registration.contactLastName}</p>
                            <p><strong>Relationship:</strong> {registration.relationship}</p>
                            <div className="flex items-center space-x-1">
                              <Mail className="h-3 w-3" />
                              <span>{registration.contactEmail}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone className="h-3 w-3" />
                              <span>{registration.contactPhone}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {registration.services && registration.services.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-semibold">Services Requested</h4>
                          <div className="flex flex-wrap gap-2">
                            {registration.services.map((service, i) => (
                              <Badge key={i} variant="outline">{service}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {registration.specialNeeds && (
                        <div className="space-y-2">
                          <h4 className="font-semibold">Special Needs</h4>
                          <p className="text-sm bg-gray-50 p-3 rounded">{registration.specialNeeds}</p>
                        </div>
                      )}

                      {registration.goals && (
                        <div className="space-y-2">
                          <h4 className="font-semibold">Goals</h4>
                          <p className="text-sm bg-gray-50 p-3 rounded">{registration.goals}</p>
                        </div>
                      )}

                      <div className="text-xs text-muted-foreground">
                        Submitted: {formatDate(registration.createdAt!)}
                      </div>
                    </div>
                  </div>
                ))}
                {clientRegistrations.length === 0 && (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No client registrations yet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}