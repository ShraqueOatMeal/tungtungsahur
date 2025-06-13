"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  AlertTriangle,
  Users,
  MapPin,
  FileText,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export default function HelpRequest() {
  const [selectedMember, setSelectedMember] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const familyMembers = [
    "Father",
    "Mother",
    "Self",
    "Sibling",
    "Grandmother",
    "Grandfather",
    "Other",
  ];

  const commonLocations = [
    "At Home - Ground Floor",
    "At Home - Upper Floor",
    "At Home - Rooftop",
    "Nearby Surau/Mosque",
    "School Building",
    "Shopping Center",
    "Community Hall",
    "Stuck in Vehicle",
    "Other Location",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMember && location) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log("Help request submitted:", {
        selectedMember,
        location,
        notes,
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Navigation Header */}
        <nav className="bg-white shadow-lg border-b-4 border-green-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h1 className="text-2xl font-bold text-gray-900">
                  Help Request Submitted
                </h1>
              </div>
              <div className="flex space-x-2">
                <Link href="/">
                  <Button variant="outline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Family Track
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto p-6">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50 text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-green-900">
                Request Submitted Successfully!
              </CardTitle>
              <CardDescription className="text-green-700">
                Your help request has been received and forwarded to emergency
                response teams
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">
                  Request Details:
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Family Member:</span>{" "}
                    {selectedMember}
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> {location}
                  </div>
                  {notes && (
                    <div>
                      <span className="font-medium">Additional Notes:</span>{" "}
                      {notes}
                    </div>
                  )}
                </div>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Next Steps:</strong> Emergency teams have been
                  notified. Please stay in a safe location and keep your phone
                  accessible for updates.
                </AlertDescription>
              </Alert>

              <div className="flex space-x-3 pt-4">
                <Link href="/" className="flex-1">
                  <Button className="w-full" variant="outline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Return to Family Tracker
                  </Button>
                </Link>
                <Button
                  className="flex-1"
                  onClick={() => setIsSubmitted(false)}
                  variant="destructive"
                >
                  Submit Another Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Emergency Help Request
              </h1>
            </div>
            <div className="flex space-x-2">
              <Link href="/family">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Family Track
                </Button>
              </Link>
              <Button variant="destructive">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Request Help
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-2 border-red-200">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center space-x-2 text-red-900">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <span>Submit Help Request</span>
            </CardTitle>
            <CardDescription className="text-red-700">
              Fill out the form below to request emergency assistance for a
              family member
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Family Member Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Select Family Member *</span>
                </label>
                <Select
                  value={selectedMember}
                  onValueChange={setSelectedMember}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose family member who needs help" />
                  </SelectTrigger>
                  <SelectContent>
                    {familyMembers.map((member) => (
                      <SelectItem key={member} value={member}>
                        {member}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Rough Location *</span>
                </label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select or specify location" />
                  </SelectTrigger>
                  <SelectContent>
                    {commonLocations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {location === "Other Location" && (
                  <Input
                    placeholder="Please specify the exact location..."
                    className="mt-2"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                )}
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Additional Notes (Optional)</span>
                </label>
                <Textarea
                  placeholder="e.g., trapped upstairs, elderly person, medical condition, injuries, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                <p className="text-xs text-gray-500">
                  Provide any important details that can help emergency
                  responders assist more effectively
                </p>
              </div>

              {/* Emergency Alert */}
              <Alert className="border-amber-200 bg-amber-50">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Emergency Contact:</strong> For immediate
                  life-threatening emergencies, call 999 directly. This form is
                  for coordinating rescue operations and resource allocation.
                </AlertDescription>
              </Alert>

              {/* Submit Button */}
              <div className="flex space-x-3 pt-4">
                <Link href="/family" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  disabled={!selectedMember || !location}
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Submit Help Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
