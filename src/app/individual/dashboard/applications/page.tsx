"use client";

import { MyApplicationCard } from "@/components/application/my-application-card";
import { mockMyApplications } from "@/lib/mock-data";
import { FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MyApplicationsPage() {
  const activeApplications = mockMyApplications.filter(app => app.status !== "Rejected" && app.status !== "Withdrawn");
  const archivedApplications = mockMyApplications.filter(app => app.status === "Rejected" || app.status === "Withdrawn");
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">My Job Applications</h1>
        <p className="text-muted-foreground">Track the status of your applications.</p>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="active">Active ({activeApplications.length})</TabsTrigger>
          <TabsTrigger value="archived">Archived ({archivedApplications.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          {activeApplications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {activeApplications.map((app) => (
                <MyApplicationCard key={app.id} application={app} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-2 text-xl font-semibold">No Active Applications</h3>
              <p className="mt-1 text-muted-foreground">Apply for jobs to see them here.</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="archived">
          {archivedApplications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {archivedApplications.map((app) => (
                <MyApplicationCard key={app.id} application={app} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-2 text-xl font-semibold">No Archived Applications</h3>
              <p className="mt-1 text-muted-foreground">Rejected or withdrawn applications will appear here.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
