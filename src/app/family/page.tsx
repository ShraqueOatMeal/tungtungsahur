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
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Home, Shield, Users, MapPin } from "lucide-react";

export default function Family() {
  const [selectedHousehold, setSelectedHousehold] = useState("");
  const [selectedTaman, setSelectedTaman] = useState("");
  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: "Father", status: "" },
    { id: 2, name: "Mother", status: "" },
    { id: 3, name: "Self", status: "" },
    { id: 4, name: "Sibling", status: "" },
  ]);

  const households = [
    "House 1A",
    "House 1B",
    "House 2A",
    "House 2B",
    "House 3A",
    "House 3B",
    "Apartment 101",
    "Apartment 102",
    "Apartment 201",
    "Apartment 202",
  ];

  const tamans = [
    "Taman Melawati",
    "Taman Wangsa Maju",
    "Taman Setapak",
    "Taman Danau Desa",
    "Taman Tun Dr Ismail",
    "Taman Desa",
    "Taman OUG",
    "Taman Len Seng",
  ];

  const updateMemberStatus = (memberId, status) => {
    setFamilyMembers((prev) =>
      prev.map((member) =>
        member.id === memberId ? { ...member, status } : member,
      ),
    );
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "safe":
        return "✅";
      case "evacuation":
        return "🏠";
      default:
        return "";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "safe":
        return "bg-green-100 text-green-800 border-green-200";
      case "evacuation":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Flood Emergency Tracker
              </h1>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Users className="h-4 w-4 mr-2" />
                Family Track
              </Button>
              <Link href="/help-request">
                <Button variant="destructive">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Request Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Selection Section */}
        <Card className="border-2 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-blue-600" />
              <span>Household & Location Selection</span>
            </CardTitle>
            <CardDescription>
              Please select your household and neighborhood to track your family
              members
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Household Name/Number
                </label>
                <Select
                  value={selectedHousehold}
                  onValueChange={setSelectedHousehold}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your household" />
                  </SelectTrigger>
                  <SelectContent>
                    {households.map((household) => (
                      <SelectItem key={household} value={household}>
                        {household}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Taman (Neighborhood)
                </label>
                <Select value={selectedTaman} onValueChange={setSelectedTaman}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your taman" />
                  </SelectTrigger>
                  <SelectContent>
                    {tamans.map((taman) => (
                      <SelectItem key={taman} value={taman}>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{taman}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Family Members Status Section */}
        {selectedHousehold && selectedTaman && (
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-600" />
                <span>Family Member Status</span>
              </CardTitle>
              <CardDescription>
                Update the current status for each family member at{" "}
                {selectedHousehold}, {selectedTaman}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {familyMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {member.name}
                        </h3>
                        {member.status && (
                          <Badge
                            className={`mt-1 ${getStatusColor(member.status)}`}
                          >
                            {getStatusIcon(member.status)}{" "}
                            {member.status === "safe"
                              ? "Safe"
                              : member.status === "evacuation"
                                ? "At Evacuation Center"
                                : "Status Unknown"}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant={
                          member.status === "safe" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => updateMemberStatus(member.id, "safe")}
                        className={
                          member.status === "safe"
                            ? "bg-green-600 hover:bg-green-700"
                            : ""
                        }
                      >
                        ✅ Safe
                      </Button>
                      <Button
                        variant={
                          member.status === "evacuation" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          updateMemberStatus(member.id, "evacuation")
                        }
                        className={
                          member.status === "evacuation"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : ""
                        }
                      >
                        🏠 Evacuation Center
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Help Link */}
        {selectedHousehold && selectedTaman && (
          <Card className="border-2 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900">
                    Need Emergency Help?
                  </h3>
                  <p className="text-red-700">
                    If any family member needs immediate assistance
                  </p>
                </div>
                <Link href="/help-request">
                  <Button
                    size="lg"
                    variant="destructive"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Submit Help Request
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
