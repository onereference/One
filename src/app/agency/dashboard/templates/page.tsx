
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, PlusCircle } from "lucide-react";

export default function AgencyTemplatesPage() {
  // Mock data for templates
  const templates = [
    { id: "t1", name: "Standard Job Description Template", type: "Job Post", lastModified: "2024-07-15" },
    { id: "t2", name: "Rejection Email - Initial Screening", type: "Email", lastModified: "2024-07-10" },
    { id: "t3", name: "Interview Invitation - Round 1", type: "Email", lastModified: "2024-07-20" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Communication Templates</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Template
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-6 w-6 text-primary" />
            Manage Your Templates
          </CardTitle>
          <CardDescription>Create, edit, and use templates for job descriptions, emails, and more.</CardDescription>
        </CardHeader>
        <CardContent>
          {templates.length > 0 ? (
            <div className="space-y-4">
              {templates.map(template => (
                <Card key={template.id} className="p-4 flex justify-between items-center hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">Type: {template.type} | Last Modified: {template.lastModified}</p>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Delete</Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
             <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Templates Yet</h3>
                <p className="text-muted-foreground">
                  Create templates to streamline your communication and job posting process.
                </p>
                 <Button className="mt-4">
                    <PlusCircle className="mr-2 h-4 w-4" /> Create First Template
                </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

    