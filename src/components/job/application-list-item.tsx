import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, MessageSquare, UserCheck, UserX } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Applicant {
  id: string;
  name: string;
  avatarUrl?: string;
  appliedDate: string;
  status: "New" | "Reviewed" | "Interviewing" | "Offer Extended" | "Hired" | "Rejected";
  resumeUrl?: string; // Link to resume
  // Potentially more fields: coverLetter, portfolioUrl, etc.
}

interface ApplicationListItemProps {
  applicant: Applicant;
  onStatusChange: (applicantId: string, newStatus: Applicant['status']) => void;
}

export function ApplicationListItem({ applicant, onStatusChange }: ApplicationListItemProps) {

  const getStatusBadgeVariant = (status: Applicant['status']) => {
    switch (status) {
      case "New": return "outline";
      case "Reviewed": return "secondary";
      case "Interviewing": return "default"; // Blue-ish by default for primary shadcn theme
      case "Offer Extended": return "default"; // Consider specific style for this
      case "Hired": return "default"; // Green
      case "Rejected": return "destructive";
      default: return "outline";
    }
  }
  
  const statusOptions: Applicant['status'][] = ["New", "Reviewed", "Interviewing", "Offer Extended", "Hired", "Rejected"];


  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={applicant.avatarUrl || `https://placehold.co/48x48.png?text=${applicant.name[0]}`} alt={applicant.name} data-ai-hint="person avatar"/>
          <AvatarFallback>{applicant.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{applicant.name}</h4>
          <p className="text-sm text-muted-foreground">Applied on {new Date(applicant.appliedDate).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant={getStatusBadgeVariant(applicant.status)}>{applicant.status}</Badge>
        {applicant.resumeUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={applicant.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        )}
        <Button variant="outline" size="sm">
          <Eye className="mr-2 h-4 w-4" /> View Profile
        </Button>
         <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">Change Status</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Set Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {statusOptions.map(statusOpt => (
                 <DropdownMenuItem key={statusOpt} onClick={() => onStatusChange(applicant.id, statusOpt)}>
                    {statusOpt === "Hired" && <UserCheck className="mr-2 h-4 w-4" />}
                    {statusOpt === "Rejected" && <UserX className="mr-2 h-4 w-4" />}
                    {statusOpt !== "Hired" && statusOpt !== "Rejected" && <MessageSquare className="mr-2 h-4 w-4" />} 
                    {statusOpt}
                </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
