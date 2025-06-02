import { Badge } from "@/components/ui/badge";
import type { MyApplicationStatus } from "./my-application-card";

interface ApplicationStatusBadgeProps {
  status: MyApplicationStatus;
}

export function ApplicationStatusBadge({ status }: ApplicationStatusBadgeProps) {
  let variant: "default" | "secondary" | "destructive" | "outline" = "outline";
  let className = "";

  switch (status) {
    case "Applied":
      variant = "outline";
      className = "border-blue-500 text-blue-500";
      break;
    case "Under Review":
      variant = "secondary";
      className = "bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-700/30 dark:text-yellow-300 dark:border-yellow-700";
      break;
    case "Interview Scheduled":
      variant = "default";
      className = "bg-green-500 hover:bg-green-600 text-white border-green-600";
      break;
    case "Offer Extended":
        variant = "default";
        className = "bg-primary hover:bg-primary/90 text-primary-foreground";
        break;
    case "Rejected":
      variant = "destructive";
      break;
    case "Withdrawn":
        variant = "secondary";
        className = "bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-700/30 dark:text-gray-300 dark:border-gray-700";
        break;
    default:
      variant = "outline";
  }

  return (
    <Badge variant={variant} className={className}>
      {status}
    </Badge>
  );
}
