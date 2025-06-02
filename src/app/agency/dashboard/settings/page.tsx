
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SettingsIcon } from "lucide-react";

export default function AgencySettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Agency Settings</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <SettingsIcon className="mr-2 h-6 w-6 text-primary" />
            General Settings
          </CardTitle>
          <CardDescription>Manage your agency's general settings and preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-8 text-center border-2 border-dashed rounded-lg">
            <SettingsIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Settings Management Coming Soon</h3>
            <p className="text-muted-foreground">
              This section will allow you to configure various aspects of your agency account.
            </p>
          </div>
        </CardContent>
      </Card>
       <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure your notification preferences.</CardDescription>
        </CardHeader>
        <CardContent>
             <p className="text-muted-foreground">Notification settings will be available here.</p>
        </CardContent>
      </Card>
       <Card>
        <CardHeader>
          <CardTitle>Billing & Subscription</CardTitle>
          <CardDescription>Manage your subscription and billing details.</CardDescription>
        </CardHeader>
        <CardContent>
             <p className="text-muted-foreground">Billing information will be managed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

    